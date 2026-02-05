import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import * as CodeBlockComponents from "fumadocs-ui/components/codeblock";
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Callout } from "@/components/mdx/callout";
import { CodeBlockCommand } from "@/components/mdx/code-block-command";
import { CodeCollapsibleWrapper } from "@/components/mdx/code-collapsible-wrapper";
import { CodeTabs } from "@/components/mdx/code-tabs";
import { ComponentPreview } from "@/components/mdx/component-preview";
import { ComponentSource } from "@/components/mdx/component-source";
import { ComponentsList } from "@/components/mdx/component-list";
import { CopyButton } from "@/components/mdx/copy-button";
import { getIconForLanguageExtension } from "@/components/mdx/icons";
import { TechStack } from "@/components/mdx/tech-stack";
import { TemplateOpen } from "@/components/mdx/template-open";
import { TemplatePreview } from "@/components/mdx/template-preview";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as StepsComponents from "fumadocs-ui/components/steps";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock.core";

export const mdxComponents = {
  ...TabsComponents,
  ...StepsComponents,
  TypeTable,
  DynamicCodeBlock,
  ShadcnTabs: Tabs,
  ShadcnTabsList: TabsList,
  ShadcnTabsTrigger: TabsTrigger,
  ShadcnTabsContent: TabsContent,
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p className={cn("leading-relaxed not-first:mt-6", className)} {...props} />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn(
        "bg-muted/50 mt-6 rounded-r-md border-l-2 py-4 pr-4 pl-6 italic",
        className,
      )}
      {...props}
    />
  ),
  iframe: ({ className, ...props }: React.ComponentProps<"iframe">) => (
    <iframe className={cn("mt-6 w-full rounded-md", className)} {...props} />
  ),
  hr: ({ className, ...props }: React.ComponentProps<"hr">) => (
    <div
      className={cn("my-4 flex items-center justify-center md:my-8", className)}
    >
      <hr
        className="via-border mx-4 h-px w-full border-0 bg-linear-to-r from-transparent to-transparent"
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: React.ComponentProps<"thead">) => (
    <thead className={cn("bg-muted border-b", className)} {...props} />
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr
      className={cn(
        "hover:bg-muted/50 m-0 border-b transition-colors last:border-b-0",
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "min-w-[120px] px-4 py-3 text-left font-semibold [[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "min-w-[120px] px-4 py-3 text-left [[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  figure: ({ className, ...props }: React.ComponentProps<"figure">) => {
    return <figure className={cn(className)} {...props} />;
  },
  figcaption: ({
    className,
    children,
    ...props
  }: React.ComponentProps<"figcaption">) => {
    const iconExtension =
      "data-language" in props && typeof props["data-language"] === "string"
        ? getIconForLanguageExtension(props["data-language"])
        : null;

    return (
      <figcaption
        className={cn(
          "text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70",
          className,
        )}
        {...props}
      >
        {iconExtension}
        {children}
      </figcaption>
    );
  },
  code: ({
    className,
    __raw__,
    __src__,
    __npm__,
    __yarn__,
    __pnpm__,
    __bun__,
    ...props
  }: React.ComponentProps<"code"> & {
    __raw__?: string;
    __src__?: string;
    __npm__?: string;
    __yarn__?: string;
    __pnpm__?: string;
    __bun__?: string;
  }) => {
    // Inline Code.
    if (typeof props.children === "string") {
      return (
        <code
          className={cn(
            "bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] wrap-break-word outline-none",
            className,
          )}
          {...props}
        />
      );
    }

    // npm command.
    const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__;
    if (isNpmCommand) {
      return (
        <CodeBlockCommand
          __npm__={__npm__}
          __yarn__={__yarn__}
          __pnpm__={__pnpm__}
          __bun__={__bun__}
        />
      );
    }

    // Default codeblock.
    return (
      <>
        {__raw__ && <CopyButton value={__raw__} src={__src__} />}
        <code {...props} />
      </>
    );
  },
  Image: ({
    src,
    className,
    width,
    height,
    alt,
    ...props
  }: React.ComponentProps<"img">) => (
    <Image
      className={cn("mt-6 rounded-md border", className)}
      src={(src as string) || ""}
      width={Number(width)}
      height={Number(height)}
      alt={alt || ""}
      {...props}
    />
  ),
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertTitle,
  AlertDescription,
  CodeTabs,
  ComponentPreview,
  ComponentSource,
  CodeCollapsibleWrapper,
  ComponentsList,
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "bg-surface text-surface-foreground hover:bg-surface/80 flex w-full flex-col items-center rounded-xl p-6 transition-colors sm:p-10",
        className,
      )}
      {...props}
    />
  ),
  TemplateOpen,
  TemplatePreview,
  TechStack,
  ...defaultMdxComponents,
  ...CodeBlockComponents,
  CodeBlockCommand,
};
