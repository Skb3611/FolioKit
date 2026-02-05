# Contributing to FolioKit

Thank you for your interest in **contributing to FolioKit**! Your support is highly appreciated, and we look forward to your contributions. This guide will help you understand the project structure and provide detailed instructions for adding a new component to FolioKit.

## Introduction

This repository is a nextjs project.

- We use [pnpm](https://pnpm.io)  for development.


## Structure

This repository is structured as follows:

```
FolioKit
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
│   ├── animate
│   ├── backgrounds
│   ├── base
│   ├── buttons
│   ├── community
│   ├── headless
│   └── radix
└── index.mdx

```

 exemple:

```mdx
---
title: My Component
description: Description for the new component
author:
  name: your name
  url: https://link-to-your-profile.com
releaseDate: 2025-XX-XX
---

<ComponentPreview name="demo-my-component" />

## Installation

<ComponentInstallation name="my-component" />

## Usage

[Basic usage of the component]

## API Reference

### MyComponent

<TypeTable
  type={{
    myProps: {
      description: 'Description for my props',
      type: 'string',
      required: true,
    },
  }}
/>

## Credits

- Credits to [you](https://link-to-your-profile.com) for creating the component
```

## Ask for Help

If you need any assistance or have questions, please feel free to open a [GitHub issue](https://github.com/skb3611/FolioKit/issues/new). We are here to help!

Thank you again for your contribution to Animate UIFolioKit! We look forward to seeing your improvements and new components.
