import React from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};
const AnimatedBadge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 w-fit px-2 relative mx-auto flex justify-center items-center py-[0.5px]",
        className,
      )}
    >
      <BorderBeam duration={4} size={30} />
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-0.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-xs">
        {children}
      </AnimatedShinyText>
    </div>
  );
};

export default AnimatedBadge;
