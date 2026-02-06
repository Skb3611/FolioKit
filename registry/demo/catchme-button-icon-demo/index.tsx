// registry/demo/evade-button-with-icon/index.tsx
"use client"
import { Button } from "@/registry/foliokit/catchme-button"
import { Heart, Star, Zap, Rocket } from "lucide-react"

const EvadeButtonWithIcon = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 min-h-[200px]">
      <Button evade variant="default">
        <Heart />
        Like
      </Button>
      <Button evade variant="secondary">
        <Star />
        Favorite
      </Button>
      <Button evade variant="outline">
        <Zap />
        Quick Action
      </Button>
      <Button evade variant="destructive">
        <Rocket />
        Launch
      </Button>
      <Button evade size="icon" variant="outline">
        <Heart />
      </Button>
      <Button evade size="icon-lg" variant="default">
        <Star />
      </Button>
    </div>
  )
}

export default EvadeButtonWithIcon