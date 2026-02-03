import React from "react";
import Logo from "./logo";
import GithubButton from "./github-button";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
const Navbar = () => {
  return (
    <header className="  py-4 fixed w-full top-0 left-0 px-4 xl:px-0 bg-background/80 backdrop-blur-xl z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center ">
        <Logo />
        <div className="flex gap-2 justify-center items-center">
          <GithubButton />
          <Divider />
          <AnimatedThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

export const Divider = () => {
  return <div className="w-px h-5 bg-border"></div>;
};
