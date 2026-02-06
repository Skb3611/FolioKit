import Logo from "@/components/home/logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo size="sm"/>,
    },

    githubUrl: "https://github.com/skb3611/foliokit",
    themeSwitch: {
      component: <div className="w-full flex justify-end">
      <AnimatedThemeToggler />
      </div>,
      mode: "light-dark",
    },
  };
}
