import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import { exec } from "child_process"
import { promisify } from "util"
import fs from "fs"
import path from "path"
import os from "os"

const execPromise = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const supabase = createServerComponentClient({ cookies })
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is admin
    const { data: userData } = await supabase.from("users").select("role").eq("id", session.user.id).single()

    if (userData?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Get the audio URL from the request
    const { audioUrl, sermonId } = await request.json()

    if (!audioUrl || !sermonId) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Download the file
    const response = await fetch(audioUrl)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Create temporary files
    const tempDir = os.tmpdir()
    const inputPath = path.join(tempDir, `input-${Date.now()}.mp3`)
    const outputPath = path.join(tempDir, `output-${Date.now()}.mp3`)

    // Write the input file
    fs.writeFileSync(inputPath, buffer)

    // Transcode the file using ffmpeg (assuming ffmpeg is installed on the server)
    try {
      await execPromise(`ffmpeg -i ${inputPath} -codec:a libmp3lame -b:a 96k ${outputPath}`)
    } catch (error) {
      console.error("Transcoding error:", error)
      return NextResponse.json({ error: "Failed to transcode audio" }, { status: 500 })
    }

    // Read the transcoded file
    const transcodedBuffer = fs.readFileSync(outputPath)

    // Upload the transcoded file to Supabase Storage
    const fileName = `transcoded-${Date.now()}.mp3`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("sermons")
      .upload(fileName, transcodedBuffer)

    if (uploadError) {
      throw uploadError
    }

    // Get the public URL
    const { data: publicUrlData } = await supabase.storage.from("sermons").getPublicUrl(fileName)

    const transcodedUrl = publicUrlData.publicUrl

    // Update the sermon record with the transcoded URL
    const { error: updateError } = await supabase
      .from("sermons")
      .update({ audio_url: transcodedUrl })
      .eq("id", sermonId)

    if (updateError) {
      throw updateError
    }

    // Clean up temporary files
    fs.unlinkSync(inputPath)
    fs.unlinkSync(outputPath)

    return NextResponse.json({
      success: true,
      transcodedUrl,
    })
  } catch (error: any) {
    console.error("Error in transcode API:", error)
    return NextResponse.json({ error: error.message || "An error occurred during transcoding" }, { status: 500 })
  }
}
