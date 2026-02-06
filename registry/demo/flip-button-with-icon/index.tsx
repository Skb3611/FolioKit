import { FlipButton } from "@/registry/foliokit/flip-button"
import { ArrowRight } from "lucide-react"

const FlipButtonWithIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <FlipButton
        flipContent={
          <span className="flex items-center gap-2">
            Go <ArrowRight size={16} />
          </span>
        }
      >
        <span className="flex items-center gap-2">
          Start <ArrowRight size={16} />
        </span>
      </FlipButton>
    </div>
  )
}

export default FlipButtonWithIcon
