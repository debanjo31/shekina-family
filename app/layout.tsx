import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Lora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SupabaseProvider } from "@/lib/supabase-provider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter" 
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
})

const lora = Lora({ 
  subsets: ["latin"],
  variable: "--font-lora"
})

export const metadata: Metadata = {
  title: "Shekina Family",
  description: "Transforming lives through the word of God",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable} font-sans`}>
        <SupabaseProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
