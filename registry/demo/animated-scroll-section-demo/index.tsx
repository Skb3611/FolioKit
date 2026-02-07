import React from "react";
import AnimatedScrollSection from "@/registry/foliokit/animated-scroll-section";

const AnimatedScrollSectionDemo = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-start">
      <h1 className="text-5xl font-bold text-center text-white">
        Animated Scroll Section
      </h1>
      <AnimatedScrollSection videoSrc="https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/notion-theme/preview/vid.mp4" />
    </div>
  );
};

export default AnimatedScrollSectionDemo;
