import React from "react";
import registry from "@/registry.json";
import { Button } from "../ui/button";
const components = registry.items.filter(
  (item) => item.type === "registry:component",
);

const sidebarItems = components.map((c) => ({
  title: c.title,
  href: `/docs/components/${c.name}`,
}));

const SideBar = () => {
  console.log(sidebarItems);
  return (
    <div className="flex flex-col items-start gap-2 border-r border-border/50 w-full min-h-screen">
      {sidebarItems.map((item) => (
        <Button key={item.href} variant={"ghost"} size={"xs"}>
          <a href={item.href} className="text-sm ">
            {item.title}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SideBar;
