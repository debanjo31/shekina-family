"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ThumbsUp, Share2 } from "lucide-react"

export function LivePlayer() {
  const [isLive, setIsLive] = useState(true)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, name: "John D.", message: "Good morning everyone! Blessed to be joining from California." },
    { id: 2, name: "Sarah M.", message: "Amen! The worship today is so powerful." },
    { id: 3, name: "Michael T.", message: "Greetings from London. So glad to be part of this service." },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        name: "You",
        message: newMessage,
      },
    ])
    setNewMessage("")
  }

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        {isLive ? (
          <>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
              title="Live Stream"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full">LIVE</div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-white mb-4">Our live stream will begin soon.</p>
              <Button onClick={() => setIsLive(true)}>Watch Previous Service</Button>
            </div>
          </div>
        )}
      </div>

      {/* Engagement Section */}
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" className="gap-2">
          <ThumbsUp className="h-4 w-4" />
          Like
        </Button>
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
        <Button variant="outline" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Comment
        </Button>
      </div>

      {/* Chat and Notes */}
      <Card className="overflow-hidden">
        <Tabs defaultValue="chat">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="p-4">
            <div className="h-64 overflow-y-auto mb-4 space-y-3">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="bg-muted/50 p-2 rounded-lg">
                  <p className="font-semibold text-sm">{msg.name}</p>
                  <p className="text-sm">{msg.message}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <Button type="submit">Send</Button>
            </form>
          </TabsContent>

          <TabsContent value="notes" className="p-4">
            <textarea
              className="w-full h-64 p-3 border rounded-md"
              placeholder="Take notes during the service..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <Button>Save Notes</Button>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
