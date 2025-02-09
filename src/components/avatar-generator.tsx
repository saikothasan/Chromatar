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

  const baseUrl = "https://chromatar.pages.dev"
  const avatarUrl = `${baseUrl}/api/avatar?text=${text}&gradient=${selectedGradient}&size=${size}`

  const gradients = {
    "1": "bg-gradient-to-br from-[#00DC82] to-[#36E4DA]",
    "2": "bg-gradient-to-br from-[#0074E4] to-[#4699F8]",
    "3": "bg-gradient-to-br from-[#FF4B4B] to-[#FF7C7C]",
    "4": "bg-gradient-to-br from-[#7C3AED] to-[#A78BFA]",
    "5": "bg-gradient-to-br from-[#F59E0B] to-[#FCD34D]",
    "6": "bg-gradient-to-br from-[#EC4899] to-[#F472B6]",
  }

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
    <div className="grid gap-8 md:grid-cols-[1fr,400px]">
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
            {Object.entries(gradients).map(([key, gradient]) => (
              <button
                key={key}
                onClick={() => setSelectedGradient(key)}
                className={`h-16 rounded-lg overflow-hidden transition-all flex items-center justify-center text-white font-semibold ${gradient} ${
                  selectedGradient === key ? "ring-2 ring-black ring-offset-2" : "hover:scale-105"
                }`}
              >
                {text}
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
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
          <div
            className={`w-full h-full ${gradients[selectedGradient]} flex items-center justify-center text-white text-8xl font-semibold`}
          >
            {text}
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={copyUrl} variant="outline" className="flex-1">
            <Copy className="w-4 h-4 mr-2" />
            Copy URL
          </Button>
          <Button onClick={downloadAvatar} variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}

