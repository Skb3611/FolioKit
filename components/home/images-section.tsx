import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <div className="relative min-h-screen w-full perspective-distant translate-x-10">
      <div className="absolute -bottom-35 -left-50 w-screen h-[400px] mx-auto z-20 mask-t-from-[40%] bg-background"></div>
      <div className="absolute perspective-1000 rotate-x-10 rotate-y-20 -rotate-z-12 translate-y-20">
        <Image
          className="rounded-lg aspect-video border mask-r-from-[90%] mask-b-from-[50%]"
          src="/images/intro.png"
          alt="scroll"
          width={1000}
          height={800}
        />
      </div>
      <div className="absolute perspective-1000 rotate-x-10 rotate-y-20 -rotate-z-12 translate-y-35  translate-x-70">
        <Image
          className="rounded-lg aspect-video border border-neutral-500 mask-r-from-[70%] mask-b-from-[65%] scale-[0.99]"
          src="/images/globe.png"
          alt="scroll"
          width={1000}
          height={800}
        />
      </div>
    </div>
  );
};

export default ImageSection;
