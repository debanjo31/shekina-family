"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Loader2 } from "lucide-react"

export default function NewSermon() {
  const [title, setTitle] = useState("")
  const [preacher, setPreacher] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [scriptureReference, setScriptureReference] = useState("")
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Upload audio file
      let audioUrl = null
      let audioDuration = null

      if (audioFile) {
        // Create a unique file path
        const audioFileName = `${Date.now()}-${audioFile.name}`
        const { data: audioData, error: audioError } = await supabase.storage
          .from("sermons")
          .upload(audioFileName, audioFile)

        if (audioError) {
          throw audioError
        }

        // Get public URL
        const { data: audioUrlData } = await supabase.storage.from("sermons").getPublicUrl(audioFileName)

        audioUrl = audioUrlData.publicUrl

        // Get audio duration (this would typically be done with a media processing library)
        // For now, we'll just set a placeholder value
        audioDuration = 0
      }

      // Upload thumbnail
      let thumbnailUrl = null

      if (thumbnailFile) {
        const thumbnailFileName = `${Date.now()}-${thumbnailFile.name}`
        const { data: thumbnailData, error: thumbnailError } = await supabase.storage
          .from("sermon-thumbnails")
          .upload(thumbnailFileName, thumbnailFile)

        if (thumbnailError) {
          throw thumbnailError
        }

        // Get public URL
        const { data: thumbnailUrlData } = await supabase.storage
          .from("sermon-thumbnails")
          .getPublicUrl(thumbnailFileName)

        thumbnailUrl = thumbnailUrlData.publicUrl
      }

      // Insert sermon data
      const { data, error } = await supabase.from("sermons").insert({
        title,
        preacher,
        date,
        description,
        scripture_reference: scriptureReference,
        audio_url: audioUrl,
        audio_duration: audioDuration,
        thumbnail_url: thumbnailUrl,
      })

      if (error) {
        throw error
      }

      toast({
        title: "Sermon added",
        description: "The sermon has been added successfully.",
      })

      router.push("/admin/sermons")
      router.refresh()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while adding the sermon.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Sermon</h1>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Sermon Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preacher">Preacher</Label>
              <Input id="preacher" value={preacher} onChange={(e) => setPreacher(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="scripture">Scripture Reference</Label>
              <Input
                id="scripture"
                value={scriptureReference}
                onChange={(e) => setScriptureReference(e.target.value)}
                placeholder="e.g., John 3:16"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="audio">Audio File (MP3)</Label>
              <Input
                id="audio"
                type="file"
                accept="audio/mp3,audio/mpeg"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setAudioFile(e.target.files[0])
                  }
                }}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail Image</Label>
              <Input
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setThumbnailFile(e.target.files[0])
                  }
                }}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Sermon"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
