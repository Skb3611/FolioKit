import React from "react";
import { CodeXml } from "lucide-react";
import { size } from "zod/v4";

type IconProps = {
  size?: "sm" | "md";

  text?: boolean;
};

const Logo = ({ size = "sm", text = true }: IconProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={` ${size == "sm" ? "rounded-md p-1" : "rounded-lg p-2"} bg-foreground text-background`}
      >
        <CodeXml className={`size-${size === "sm" ? "5" : "10"}`} />
      </div>
      {text && <span className={`${size!=="sm"?"text-lg sm:text-xl":"text-base"}`}>FolioKit</span>}
    </div>
  );
};

export default Logo;
