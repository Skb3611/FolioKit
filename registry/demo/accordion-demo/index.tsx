"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/foliokit/accordion"

export default function AccordionDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and is built on Radix UI's 
            Accordion primitive for full accessibility support.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that you can customize with Tailwind CSS 
            classes or your own custom CSS.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It features smooth animations powered by Motion, including an interactive 
            chevron that rotates on hover and when opened.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}