import React from "react";
import Logo from "./logo";
import AnimatedBadge from "./badge";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { AvatarCircles } from "../ui/avatar-circles";
import Link from "next/link";
import Image from "next/image";
import ImageSection from "./images-section";
import StackSection from "./stack-section";

const Hero = () => {
  return (
    <section className="py-20 space-y-5 ">
      {/* <AnimatedBadge>Introducing FolioKit </AnimatedBadge> */}
      <div className="flex flex-col justify-center w-full items-center gap-1">
        <Logo size="md" text={false} />
        {/* <span className="text-3xl font-semibold">FolioKit</span> */}
      </div>
      <div className="space-y-3 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Foundation for Your Next Project
        </h1>
        <h2 className="text-sm md:text-xl md:font-medium text-center max-w-[90%] md:max-w-1/2 mx-auto">
          {" "}
          Free and open-source animated components and effects built with React,
          Typescript, Tailwind CSS, and Motion.
        </h2>
        <div className="flex gap-2 mt-5">
          <Link href={"/docs"}>
            <Button className="mt-3" size={"lg"}>
              Explore Components <ChevronRight />
            </Button>
          </Link>
          <Button className="mt-3" size={"lg"} variant={"outline"} disabled>
            Templates (Coming Soon)
          </Button>
        </div>
       <StackSection/>
      </div>
      <ImageSection/>
    </section>
  );
};

export default Hero;

