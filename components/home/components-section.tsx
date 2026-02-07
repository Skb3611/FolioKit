"use client";
import { source } from "@/lib/source";
import React, { useEffect, useState } from "react";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { Button } from "../ui/button";
import  Link  from "next/link";

const ComponentSection = () => {
  const items = source.getPages();
  useEffect(() => {
    setComponents(
      items.filter(
        (item) => item.slugs.length > 1 && item.slugs.includes("components"),
      ),
    );
  }, []);
  const [components, setComponents] = useState<(typeof items)[0][]>([]);
  return (
    <div >
      <h1 className="text-5xl font-semibold text-center mb-3">
        {components.length} UI Components
      </h1>
      <AnimatedShinyText className="block text-center text-lg max-w-xl ">
        Browse our collection of UI components. Each component is fully
        documented with installation instructions and usage examples.
      </AnimatedShinyText>
      <div className="grid grid-cols-3 gap-5  place-items-center my-20 max-w-4xl mx-auto ">
        {components.map((item) => (
          <Link key={item.slugs[1]} href={item.url} className="w-full">
            <Button variant={"ghost"} className=" w-full " size={"lg"}>
              <h2>{item.data.title}</h2>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentSection;
