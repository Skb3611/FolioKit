"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/foliokit/accordion";

export default function AccordionCustom() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem
          value="item-1"
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-xl px-6 border-2 border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-blue-300">
            Premium Features
          </AccordionTrigger>
          <AccordionContent className="text-blue-800 dark:text-blue-200">
            Unlock advanced features including priority support, custom
            integrations, and enhanced security options.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl px-6 border-2 border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-purple-900 dark:text-purple-100 hover:text-purple-700 dark:hover:text-purple-300">
            Analytics Dashboard
          </AccordionTrigger>
          <AccordionContent className="text-purple-800 dark:text-purple-200">
            Get detailed insights with our comprehensive analytics dashboard
            featuring real-time data and custom reports.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl px-6 border-2 border-green-200 dark:border-green-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-green-900 dark:text-green-100 hover:text-green-700 dark:hover:text-green-300">
            Team Collaboration
          </AccordionTrigger>
          <AccordionContent className="text-green-800 dark:text-green-200">
            Work together seamlessly with shared workspaces, real-time
            collaboration, and team management tools.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-xl px-6 border-2 border-orange-200 dark:border-orange-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-orange-900 dark:text-orange-100 hover:text-orange-700 dark:hover:text-orange-300">
            Security & Compliance
          </AccordionTrigger>
          <AccordionContent className="text-orange-800 dark:text-orange-200">
            Enterprise-grade security with SOC 2 compliance, encryption at rest
            and in transit, and advanced access controls.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
