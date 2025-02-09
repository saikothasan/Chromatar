"use client"

import { useState } from "react"
import { Copy, Download } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const SIZES = [
  { value: "64", label: "64px" },
  { value: "128", label: "128px" },
  { value: "256", label: "256px" },
  { value: "400", label: "400px" },
]

export function AvatarGenerator() {
  const [text, setText] = useState("V0")
  const [selectedGradient, setSelectedGradient] = useState("1")
  const [size, setSize] = useState("400")
  const { toast } = useToast()

  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000"

  const avatarUrl = `${baseUrl}/api/avatar?text=${text}&gradient=${selectedGradient}&size=${size}`

  const copyUrl = async () => {
    await navigator.clipboard.writeText(avatarUrl)
    toast({
      description: "Avatar URL copied to clipboard",
    })
  }

  const downloadAvatar = async () => {
    const response = await fetch(avatarUrl)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `avatar-${text.toLowerCase()}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Avatar Generator</h1>
        <p className="text-muted-foreground">Generate beautiful, minimal avatars for your projects.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr,300px]">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="text">Text (1-2 characters)</Label>
            <Input
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 2).toUpperCase())}
              placeholder="Enter 1-2 letters"
              maxLength={2}
            />
          </div>

          <div className="space-y-2">
            <Label>Style</Label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((gradient) => (
                <button
                  key={gradient}
                  onClick={() => setSelectedGradient(gradient.toString())}
                  className={`h-20 rounded-lg overflow-hidden transition-all ${
                    selectedGradient === gradient.toString() ? "ring-2 ring-primary ring-offset-2" : "hover:scale-105"
                  }`}
                >
                  <img
                    src={`/api/avatar?text=${text}&gradient=${gradient}&size=128`}
                    alt={`Gradient ${gradient}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="size">Size</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {SIZES.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-muted">
            <img src={avatarUrl || "/placeholder.svg"} alt="Generated avatar" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button onClick={copyUrl} variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copy URL
            </Button>
            <Button onClick={downloadAvatar} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

