import MainContent from "@/components/docs/main-content";
import SideContent from "@/components/docs/side-content";
import SideBar from "@/components/docs/sidebar";
import React from "react";

const page = async ({params}:{params:Promise<{slug:string[]}>}) => {
  const {slug} = await params
  return (
    <MainContent/>
  );
};

export default page;
