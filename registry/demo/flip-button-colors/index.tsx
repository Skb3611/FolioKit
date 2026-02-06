import { FlipButton } from "@/registry/foliokit/flip-button"

const FlipButtonColors = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <FlipButton
        background="#000000"
        flipBackground="#ffffff"
        flipTextColor="#000000"
        flipContent="Light"
      >
        Dark
      </FlipButton>

      <FlipButton
        background="#2563eb"
        flipBackground="#1e40af"
        flipTextColor="#ffffff"
        FlipColor="#60a5fa"
        flipContent="Blue"
      >
        Primary
      </FlipButton>

      <FlipButton
        background="#16a34a"
        flipBackground="#14532d"
        flipTextColor="#ffffff"
        FlipColor="#4ade80"
        flipContent="Go"
      >
        Success
      </FlipButton>
    </div>
  )
}

export default FlipButtonColors
