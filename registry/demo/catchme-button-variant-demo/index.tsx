// registry/demo/evade-button-variants/index.tsx
"use client"
import { Button } from "@/registry/foliokit/catchme-button"

const EvadeButtonVariants = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 min-h-[200px]">
      <Button evade variant="default">
        Default
      </Button>
      <Button evade variant="destructive">
        Destructive
      </Button>
      <Button evade variant="outline">
        Outline
      </Button>
      <Button evade variant="secondary">
        Secondary
      </Button>
      <Button evade variant="ghost">
        Ghost
      </Button>
      <Button evade variant="link">
        Link
      </Button>
    </div>
  )
}

export default EvadeButtonVariants