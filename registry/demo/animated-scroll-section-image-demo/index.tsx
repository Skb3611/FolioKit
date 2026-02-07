import React from "react";
import AnimatedScrollSection from "@/registry/foliokit/animated-scroll-section";

const AnimatedScrollSectionDemo = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-start">
      <h1 className="text-5xl font-bold text-center text-white">
        Animated Scroll Section with Image
      </h1>
      <AnimatedScrollSection imgSrc="https://gitfolio.in/assets/og.png" />
    </div>
  );
};

export default AnimatedScrollSectionDemo;
