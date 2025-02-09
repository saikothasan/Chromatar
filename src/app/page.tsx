import { AvatarGenerator } from "@/components/avatar-generator"
import { Toaster } from "@/components/ui/toaster"

export default function Page() {
  return (
    <main className="min-h-screen py-10">
      <AvatarGenerator />
      <Toaster />
    </main>
  )
}

