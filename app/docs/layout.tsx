import SideBar from "@/components/docs/sidebar";
import React from "react";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[0.5fr_2fr] max-w-6xl mx-auto min-h-screen border-border/50 border-x px-4 py-5">
      <SideBar />
      {children}
    </div>
  );
};

export default DocsLayout;
