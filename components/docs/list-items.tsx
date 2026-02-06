"use client";
import { source } from "@/lib/source";
import { Link } from "fumadocs-core/framework";
import { getPageTreeRoots } from "fumadocs-core/page-tree";
import { Card, Cards } from "fumadocs-ui/components/card";
import React, { useEffect, useState } from "react";
// Add more types in future eg blocks |sections
type ItemType = "components";
const ListItems = ({ type = "components" }: { type: ItemType }) => {
  const pages = source.getPages();

  const [items, setItems] = useState<typeof pages>();
  useEffect(() => {
    switch (type) {
      case "components":
        const items = pages.filter(
          (page) => page.slugs.length > 1 && page.slugs.includes("components"),
        );
        setItems(items);
    }
  }, [type]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items?.map((page) => {
        return (
          <Link key={page.absolutePath} title={page.data.title} href={page.url}>
            {" "}
            {page.data.title}
          </Link>
        );
      })}
    </div>
  );
};

export default ListItems;
