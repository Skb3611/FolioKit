---
title: Button Component
date: 2026-02-05
description: A flexible, reusable button component with multiple variants and states
author: johndev
---

<ComponentPreview name="button" />

## Installation

<ShadcnTabs defaultValue="cli">

<ShadcnTabsList variant="line">
  <ShadcnTabsTrigger value="cli">CLI</ShadcnTabsTrigger>
  <ShadcnTabsTrigger value="manual">Manual</ShadcnTabsTrigger>
</ShadcnTabsList>

<ShadcnTabsContent value="cli">

<CodeBlockCommand
  __npm__="npx shadcn@latest add button"
  __pnpm__="pnpm shadcn@latest add button"
  __yarn__="yarn shadcn@latest add button"
  __bun__="bunx shadcn@latest add button"
/>

</ShadcnTabsContent>

<ShadcnTabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="button" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</ShadcnTabsContent>

</ShadcnTabs>

## Usage

```tsx showLineNumbers
import { Button } from "@/components/ui/button"
```

```tsx showLineNumbers
export default function App() {
  return <Button>Click me</Button>
}
```

## Examples

### Default Button

<ComponentPreview name="button-demo" />

### Button Variants

<ComponentPreview name="button-variants" />

### Button Sizes

<ComponentPreview name="button-sizes" />

### Button with Icon

<ComponentPreview name="button-with-icon" />

## Props

<TypeTable
  type={{
    variant: {
      description: "The visual style variant of the button",
      type: '"default" | "secondary" | "outline" | "ghost"',
      default: '"default"',
    },
    size: {
      description: "The size of the button",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
    },
    disabled: {
      description: "Whether the button is disabled",
      type: "boolean",
      default: "false",
    },
    onClick: {
      description: "Callback function when button is clicked",
      type: "(event: React.MouseEvent) => void",
      default: "undefined",
    },
  }}
/>

## API Reference

<Link href="https://react.dev/reference/react-dom/components/button">
  React Button API Reference
</Link>

### Credits

- Credits to [johndev](https://github.com/johndev) for creating the component