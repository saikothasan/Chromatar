import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get("text") || "V0"
  const gradient = searchParams.get("gradient") || "1"
  const size = searchParams.get("size") || "400"

  const gradients = {
    "1": "linear-gradient(135deg, #00DC82 0%, #36E4DA 100%)",
    "2": "linear-gradient(135deg, #0074E4 0%, #4699F8 100%)",
    "3": "linear-gradient(135deg, #FF4B4B 0%, #FF7C7C 100%)",
    "4": "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
    "5": "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
    "6": "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        background: gradients[gradient as keyof typeof gradients],
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        fontSize: Number.parseInt(size) * 0.2,
        fontWeight: 600,
        color: "white",
        fontFamily: "Inter",
      }}
    >
      {text}
    </div>,
    {
      width: Number.parseInt(size),
      height: Number.parseInt(size),
    },
  )
}

