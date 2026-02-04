import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { HelloWorld } from "@/registry/foliokit/hello-world";
// This page displays items from the custom registry.
import Landing from "@/components/home/landing";
import Footer from "@/components/home/footer";
import Navbar from "@/components/home/navbar";
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
