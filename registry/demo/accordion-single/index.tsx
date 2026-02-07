"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/foliokit/accordion";

export default function AccordionSingle() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces. It lets
            you create reusable components and manage state efficiently.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What is Next.js?</AccordionTrigger>
          <AccordionContent>
            Next.js is a React framework that enables functionality such as
            server-side rendering and static site generation for building modern
            web applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What is TypeScript?</AccordionTrigger>
          <AccordionContent>
            TypeScript is a strongly typed programming language that builds on
            JavaScript, giving you better tooling at any scale.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
