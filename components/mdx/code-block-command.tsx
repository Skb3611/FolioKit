"use client";

import * as React from "react";
import { CheckIcon, ClipboardIcon, TerminalIcon } from "lucide-react";

import { useConfig } from "@/hooks/use-config";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "fumadocs-ui/components/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CopyButton,
  copyToClipboardWithMeta,
} from "@/components/mdx/copy-button";

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<"pre"> & {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
}) {
  const tabs = React.useMemo(() => {
    return {
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    };
  }, [__npm__, __pnpm__, __yarn__, __bun__]);

  return (
    <div className="overflow-x-auto">
      <Tabs defaultValue={"npm"}>
        <div className="flex items-center justify-between gap-2 px-3 relative">
          <div className="flex items-center gap-2 ">
            <div className="bg-foreground flex size-4 items-center justify-center rounded-[1px] opacity-70">
              <TerminalIcon className="text-code size-3" />
            </div>
            <TabsList>
              {Object.entries(tabs).map(([key]) => {
                return (
                  <TabsTrigger key={key} value={key}>
                    {key}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </div>

        <div className="no-scrollbar overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsContent
                key={key}
                value={key}
                className="mt-0 px-4 py-3.5 flex items-center justify-between"
              >
                <pre>{value}</pre>
                <CopyButton value={value || ""} />
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
}
