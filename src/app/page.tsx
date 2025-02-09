import type { Metadata } from "next"
import { AvatarGenerator } from "@/components/avatar-generator"

export const metadata: Metadata = {
  title: "Avatar Generator",
  description: "Generate beautiful, minimal avatars for your projects.",
  metadataBase: new URL("https://chromatar.pages.dev"),
}

export default function Page() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-2xl font-semibold text-center">Avatar Generator</h1>
        <p className="text-center text-gray-600 mt-2 mb-8">Generate beautiful, minimal avatars for your projects.</p>
        <AvatarGenerator />
      </div>
    </main>
  )
}

