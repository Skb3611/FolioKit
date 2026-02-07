"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/foliokit/accordion";

export default function AccordionMultiple() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Installation</AccordionTrigger>
          <AccordionContent>
            Install the package using your preferred package manager. Run npm
            install, pnpm install, or yarn install in your project directory.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Configuration</AccordionTrigger>
          <AccordionContent>
            Configure your project by adding the necessary settings to your
            configuration file. This includes setting up paths, plugins, and
            environment variables.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Usage</AccordionTrigger>
          <AccordionContent>
            Import the components you need and use them in your application. The
            components are fully typed and come with comprehensive
            documentation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Troubleshooting</AccordionTrigger>
          <AccordionContent>
            If you encounter any issues, check the documentation or raise an
            issue on GitHub. Common problems include incorrect import paths and
            missing dependencies.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
