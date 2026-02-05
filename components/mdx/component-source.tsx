import fs from "node:fs/promises";
import path from "node:path";
import * as React from "react";

import { getRegistryItem } from "@/lib/registry";
import { CodeCollapsibleWrapper } from "@/components/mdx/code-collapsible-wrapper";
import { getIconForLanguageExtension } from "@/components/mdx/icons";
import { cn } from "@/lib/utils";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

export async function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
}: React.ComponentProps<"div"> & {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
}) {
  if (!name && !src) return null;

  let code: string | undefined;

  if (name) {
    const item = await getRegistryItem(name);
    code = item?.files?.[0]?.content;
  }

  if (src) {
    code = await fs.readFile(path.join(process.cwd(), src), "utf-8");
  }

  if (!code) return null;

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  if (!collapsible) return <DynamicCodeBlock lang={lang} code={code} />;

  return (
    <CodeCollapsibleWrapper className={cn(className, "relative")}>
      <DynamicCodeBlock
        lang={lang}
        codeblock={{
          allowCopy: true,
          title,
          "data-line-numbers": true,
          "data-line-numbers-start": 1,
          icon: getIconForLanguageExtension(lang),
        }}
        code={code}
      />
    </CodeCollapsibleWrapper>
  );
}
