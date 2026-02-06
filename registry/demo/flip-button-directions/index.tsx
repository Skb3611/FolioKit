import { FlipButton } from "@/registry/foliokit/flip-button"

const FlipButtonDirections = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <FlipButton flipFrom="top" flipContent="Top">
        Top
      </FlipButton>

      <FlipButton flipFrom="bottom" flipContent="Bottom">
        Bottom
      </FlipButton>

      <FlipButton flipFrom="left" flipContent="Left">
        Left
      </FlipButton>

      <FlipButton flipFrom="right" flipContent="Right">
        Right
      </FlipButton>
    </div>
  )
}

export default FlipButtonDirections
