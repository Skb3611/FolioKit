// registry/demo/evade-button-sizes/index.tsx
"use client"
import { Button } from "@/registry/foliokit/catchme-button"

const EvadeButtonSizes = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 min-h-[200px]">
      <Button evade size="xs" variant="outline">
        Extra Small
      </Button>
      <Button evade size="sm" variant="outline">
        Small
      </Button>
      <Button evade size="default" variant="outline">
        Default
      </Button>
      <Button evade size="lg" variant="outline">
        Large
      </Button>
    </div>
  )
}

export default EvadeButtonSizes