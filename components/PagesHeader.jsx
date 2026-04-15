"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import Link from "next/link";

export default function PagesHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="px-6 py-4">
      <nav
        className={`flex items-center justify-between max-w-7xl mx-auto rounded-full px-8 py-4 border ${
          theme === "dark" ? "border-white/20 bg-gray-900" : " bg-white"
        }`}
        style={{ padding: "5px 30px" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
         <Link href="/">
  <img
    src="/Logos/Accuracore/accuraCore-logo.png"
    alt="AccuraCore Logo"
    className="w-20 h-20 object-contain cursor-pointer"
  />
</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: "Why", id: "why-section" },
            { label: "How It Works", id: "how-section" },
            { label: "FAQs", id: "faq-section" },
            { label: "Contact Us", id: "contact-section" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-sm ${
                theme === "dark" ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
             <div className="
  p-2 rounded-full 
  bg-slate-900 dark:bg-white 
  text-white dark:text-slate-900
  flex items-center justify-center
">
  <ModeToggle />
</div>
          <Button
            className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center shadow-md"
            style={{ color: "#0061A4", padding: "25px 15px" }}
          >
            <img
              src="/Icons/Vector.svg"
              alt="Login Icon"
              className="w-4 h-4 mr-2"
            />
            Login
          </Button>

          <Button
            className="text-white rounded-full text-sm flex items-center"
            style={{
              backgroundColor: "#0061A4",
              padding: "25px 15px",
            }}
            onClick={() => setIsOpen(true)}
          >
            Book Demo
            <img
              src="/Icons/Vector.png"
              alt="Arrow Icon"
              className="w-3 h-4 ml-2"
            />
          </Button>
        </div>

        {/* Mobile Hamburger */}
<div className="md:hidden flex items-center gap-3">
                       <div className="
            p-2 rounded-full 
            bg-slate-900 dark:bg-white 
            text-white dark:text-slate-900
            flex items-center justify-center
          ">
            <ModeToggle />
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-black w-8 h-8" />
            ) : (
              <Menu className="text-black w-8 h-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#51607d] px-6 py-4 space-y-4 rounded-lg mt-2">
          <div className="flex flex-col space-y-4 text-white text-sm text-center">
            <span onClick={() => handleScroll("why-section")}>Why</span>
            <span onClick={() => handleScroll("how-section")}>
              How It Works
            </span>
            <span onClick={() => handleScroll("faq-section")}>FAQs</span>
            <span onClick={() => handleScroll("contact-section")}>
              Contact Us
            </span>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col space-y-3 mt-4">
            <Button
              className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center"
              style={{ color: "#0061A4", padding: "25px 15px" }}
            >
              <img
                src="/Icons/Vector.svg"
                alt="Login Icon"
                className="w-4 h-4 mr-2"
              />
              Login
            </Button>

            <Button
              className="text-white rounded-full text-sm flex items-center"
              style={{
                backgroundColor: "#0061A4",
                padding: "25px 15px",
              }}
              onClick={() => setIsOpen(true)}
            >
              Book Demo
              <img
                src="/Icons/Vector.png"
                alt="Arrow Icon"
                className="w-3 h-4 ml-2"
              />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
