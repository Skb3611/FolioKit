# Contributing to FolioKit

Thank you for your interest in **contributing to FolioKit**! Your support is highly appreciated, and we look forward to your contributions. This guide will help you understand the project structure and provide detailed instructions for adding a new component to FolioKit.

## Introduction

This repository is a nextjs project.

- We use [pnpm](https://pnpm.io)  for development.


## Structure

This repository is structured as follows:

```
FolioKit
├── __registry__ (shadcn/ui registry auto generated)
├── app (Nextjs App)
├── components (FolioKit Components)
├── config
├── content (docs)
├── hooks
├── lib
├── public
├── registry (shadcn/ui registry)
│   ├── demo (component examples)
│   └── foliokit (component source code)
├── scripts
├── .gitignore
├── CONRTIBUTION.md
├── README.md
├── components.json
├── package.json
└── tsconfig.json
```

## Getting Started

### Fork and Clone the Repository

#### 1. Fork the Repository

Click [here](https://github.com/skb3611/FolioKit/fork) to fork the repository.

#### 2. Clone your Fork to Your Local Machine

```bash
  git clone https://github.com/<YOUR_USERNAME>/FolioKit.git
```

#### 3. Navigate to the Project Directory

```bash
cd FolioKit
```

#### 4. Create a New Branch for Your Changes

```bash
git checkout -b my-branch
```

#### 5. Install Dependencies

```bash
pnpm i
```

#### 6. Run the Project

```bash
pnpm dev
```

## Components

We use the shadcn/ui registry system for developing components. You can find the source code for the components under `registry`.

Each component is in a folder organized as follows:

```
foliokit
└── my-component
    ├── index.tsx (the component code)
    └── registry-item.json (information for the shadcn registry)
```

### Registry Item

The registry-item.json file is required to make the component available in the registry.

This is what it should look like:

```json title="registry/foliokit/my-component/registry-item.json"
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-component",
  "type": "registry:ui",
  "title": "My Component",
  "description": "My Component Description",
  "dependencies": [...],
  "registryDependencies": [...],
  "devDependencies": [...],
  "files": [
    {
      "path": "registry/foliokit/my-component/index.tsx",
      "type": "registry:ui",
      "target": "components/foliokit/my-component/index.tsx"
    }
  ]
}
```

[Click here](https://ui.shadcn.com/docs/registry/registry-item-json) to see the `registry-item.json` documentation.

### Demo

A demo is required to make your component visible in the FolioKit documentation.

The demo is structured as a component, but is located in the demo folder.

```
demo
└── my-component-demo
    ├── index.tsx (the demo component code)
    └── registry-item.json (information for the shadcn registry)
```


### Documentation

The documentation is located in the `content` folder and follows a structure similar to the registry folder.

```
content
├── components
│   ├── your-component.mdx
└── index.mdx

```

 ### Docs Format:

#### Visit [Example_File](/example.md)

```mdx
---
title: Component Name
date: 2026-02-05
description: A flexible, reusable button component with multiple variants and states
author: johndev
---

<ComponentPreview name="my-component-demo" />

## Installation

<ShadcnTabs defaultValue="cli">

<ShadcnTabsList variant="line">
  <ShadcnTabsTrigger value="cli">CLI</ShadcnTabsTrigger>
  <ShadcnTabsTrigger value="manual">Manual</ShadcnTabsTrigger>
</ShadcnTabsList>

<ShadcnTabsContent value="cli">

<CodeBlockCommand
  __npm__="npx shadcn@latest add my-component"
  __pnpm__="pnpm shadcn@latest add my-component"
  __yarn__="yarn shadcn@latest add my-component"
  __bun__="bunx shadcn@latest add my-component"
/>

</ShadcnTabsContent>

<ShadcnTabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="my-component" />

.
.
(write necessary steps )
.
.

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</ShadcnTabsContent>

</ShadcnTabs>

## Usage

```tsx import { MyComponent } from "@/components/ui/my-component" ```


```tsx 
export default function App() {
  return <Button>Click me</Button>
} ``` 


## Examples

### Default Button

<ComponentPreview name="my-component-demo" />

### Button Variants

<ComponentPreview name="button-variants" />

### Button Sizes

<ComponentPreview name="my-component-sizes" />

### Button with Icon

<ComponentPreview name="my-component-with-icon" />

## Props

<TypeTable
  type={{
    variant: {
      description: "The visual style variant of the button",
      type: '"default" | "secondary" | "outline" | "ghost"',
      default: '"default"',
    },
  }}
/>

## API Reference

<Link href="https://react.dev/reference/react-dom/components/my-component">
  React MyComponent API Reference
</Link>

### Credits

- Credits to [johndev](https://github.com/johndev) for creating the component
```

#### 7. Final Step (Build the Registry)

```bash
pnpm run registry:build
```

#### 8. Build & Start

```bash
pnpm run build
pnpm run start
```
### **Note: Build the project , verify the changes , then raise a PR**

## Ask for Help

If you need any assistance or have questions, please feel free to open a [GitHub issue](https://github.com/skb3611/FolioKit/issues/new). We are here to help!
#### OR
contact us on X [SKB](https://x.com/SKB3611) & [Omkar](https://x.com/Omkar_dhumal07)

Thank you again for your contribution to FolioKit! We look forward to seeing your improvements and new components.
