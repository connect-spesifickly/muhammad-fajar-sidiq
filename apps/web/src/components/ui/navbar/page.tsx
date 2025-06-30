"use client";
import { Button } from "@/components/shadcn-ui/button";
import * as React from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full px-10 py-4 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} md:px-32`}
    >
      <div className="flex items-center gap-10 text-black">
        {/* name  */}
        <div className="flex items-center gap-6">
          <a href="/" className="text-3xl font-bold">
            mfs.
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm font-bold md:gap-10">
        <Button
          onClick={() => scrollToSection("contact")}
          className="text-white transition-all bg-black border-black hover:text-black hover:bg-white border-[1px]"
        >
          Talk<div className="hidden md:flex ml-[-4px]">with me</div>
        </Button>
        <Button
          onClick={() => scrollToSection("projects")}
          className="text-black transition-all bg-white border-black hover:text-white hover:bg-black border-[1px]"
        >
          See my work
        </Button>
      </div>
    </div>
  );
}
