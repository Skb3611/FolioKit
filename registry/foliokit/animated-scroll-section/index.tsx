"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Safari } from "@/components/ui/safari";
import { useIsMobile } from "@/hooks/use-mobile";
type AnimatedScrollSectionProps = {
  imgSrc?: string;
  videoSrc?: string;
  browserMode?: "default" | "simple";
  url?: string;
  scaleRange?: [number, number];
  rotateXRange?: [number, number];
  translateYRange?: [number, number];
};
const AnimatedScrollSection = ({
  imgSrc,
  videoSrc,
  browserMode = "simple",
  url,
  scaleRange,
  rotateXRange,
  translateYRange,
}: AnimatedScrollSectionProps) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleValues = scaleRange ?? (isMobile ? [0.8, 1] : [0.7, 1.035]);

  const rotateXValues = rotateXRange ?? (isMobile ? [20, 0] : [12, 0]);

  const translateYValues = translateYRange ?? (isMobile ? [0, 100] : [0, 200]);

  const rotateX = useTransform(scrollYProgress, [0, 0.5], rotateXValues);

  const scale = useTransform(scrollYProgress, [0, 0.2], scaleValues);

  const translateY = useTransform(scrollYProgress, [0, 0.7], translateYValues);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(5px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      ref={ref}
      className="[perspective:500px] [transform-style:preserve-3d] w-[80%] -mt-28"
    >
      <motion.div
        style={{
          rotateX,
          scale,
          translateY,
        }}
        className="relative md:rounded-xl  z-20 "
      >
        {imgSrc ? (
          <Safari
            url={url}
            mode={browserMode}
            imageSrc={imgSrc}
            className="size-full rounded-b-sm md:rounded-b-xl max-w-full md:max-w-6xl"
          />
        ) : (
          <Safari
            url={url}
            mode={browserMode}
            videoSrc={videoSrc}
            className="size-full rounded-b-sm md:rounded-b-xl max-w-full md:max-w-6xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedScrollSection;
