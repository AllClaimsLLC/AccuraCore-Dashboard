"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function PagesHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  // To prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="px-6 py-4 relative">
                   <nav
            className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border bg-white dark:bg-slate-900"
            style={{ padding: "5px 30px" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img
                  src="/Logos/Accuracore/AC2025.png"
                  alt="AccuraCore Logo"
                  className="w-20 h-20 object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
                      {/* About */}
                      <div
                        className="relative"
                        onMouseEnter={() => {
                          setAboutOpen(true);
                          setFeaturesOpen(false);
                        }}
                        onMouseLeave={() => {
                          setAboutOpen(false);
                        }}
                      >
                        <button className="text-black dark:text-white text-sm flex items-center gap-1">
                          About
                          {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        </button>
            
                        {aboutOpen && (
                          <div className="text-center absolute left-1/2 -translate-x-1/2 top-full pt-12 w-44 z-50">
                            <div className="bg-white dark:bg-slate-900 rounded-[15px] border border-white/10 overflow-hidden">
                              <Link href="/blog">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 border-b border-white/20">
                                  Blog
                                </span>
                              </Link>
            
                              <Link href="/#faq-section">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500">
                                  FAQs
                                </span>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
            
                      {/* Features */}
                      <div className="relative" onMouseEnter={() => {
                            setFeaturesOpen(true);
                            setAboutOpen(false);
                          }}
                          onMouseLeave={() => {
                            setFeaturesOpen(false);
                          }}>
                        <button
                          
                          className="text-black dark:text-white  text-sm flex items-center gap-1"
                        >
                          Features
                          {featuresOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        </button>
            
                        {featuresOpen && (
                          <div className="text-center absolute left-1/2 -translate-x-1/2 top-full pt-12 w-56 z-50">
                            <div className="bg-white dark:bg-slate-900 rounded-[15px] border border-white/10 overflow-hidden">
                              <Link href="/accuracam">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                                  AccuraCam
                                </span>
                              </Link>
            
                              <Link href="/accuracore-claims">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                                  AccuraCore Claims
                                </span>
                              </Link>
            
                              <Link href="/my-accuracore">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                                  My AccuraCore
                                </span>
                              </Link>
            
                              <Link href="/roof-calculations">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                                  Roof Calculations
                                </span>
                              </Link>
            
                              <Link href="/weather-reports">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                                  Weather Reports
                                </span>
                              </Link>
            
                              <Link href="/workflow-automation">
                                <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text">
                                  Workflow Automation
                                </span>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
            
                      {/* Remaining links */}
                      <Link href="/">
                        <span className="text-black dark:text-white  text-sm">
                          Our Story
                        </span>
                      </Link>
                      <Link href="/pricing-page">
                        <span className="text-black dark:text-white  text-sm">
                          Pricing
                        </span>
                      </Link>
            
                      {/* <Link href="/#faq-section">
                        <span className="text-black dark:text-white  text-sm">FAQs</span>
                      </Link> */}
            
                      <Link href="/book-a-demo">
                        <span className="text-black dark:text-white  text-sm">
                          Contact Us
                        </span>
                      </Link>
                    </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <div
                className="  p-2 rounded-full   bg-slate-900 dark:bg-white   text-white dark:text-slate-900 flex items-center justify-center"
              >
                <ModeToggle />
              </div>

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
                onClick={() => (window.location.href = "/book-a-demo")}
              >
                Book Demo
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-2 h-3 ml-2"
                />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <div
                className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-slate-900 flex items-center justify-center"
              >
                <ModeToggle />
              </div>

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-black dark:text-white w-8 h-8" />
                ) : (
                  <Menu className="text-black dark:text-white w-8 h-8" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-black px-6 py-4 rounded-[15px] mt-2 w-[95%] m-auto z-50 space-y-4 text-center">
              {/* About */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 text-black dark:text-white"
                >
                  About
                  {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>

                {aboutOpen && (
                <div className="mt-2 w-full bg-white dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                  <Link href="/blog">
                    <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 rounded-t-[15px] hover:bg-gray-500 hover:text">
                      Blog
                    </p>
                  </Link>
                  <Link href="/#faq-section">
                    <p className="text-black dark:text-white text-sm p-3 rounded-b-[15px] hover:bg-gray-500 hover:text">
                      FAQs
                    </p>
              </Link>
                </div>
              )}
              </div>

              {/* Features */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex items-center gap-1 text-black dark:text-white"
                >
                  Features
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>

                {featuresOpen && (
                  <div className="mt-2 w-full bg-white dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                    <Link href="/accuracam">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        AccuraCam
                      </p>
                    </Link>

                    <Link href="/accuracore-claims">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        AccuraCore Claims
                      </p>
                    </Link>

                    <Link href="/my-accuracore">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        My AccuraCore
                      </p>
                    </Link>

                    <Link href="/roof-calculations">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        Roof Calculations
                      </p>
                    </Link>

                    <Link href="/weather-reports">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        Weather Reports
                      </p>
                    </Link>

                    <Link href="/workflow-automation">
                      <p className="text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text">
                        Workflow Automation
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <Link href="/">
                <p className="text-black dark:text-white text-sm mb-4">Our Story</p>
              </Link>
              <Link href="/pricing-page">
                <p className="text-black dark:text-white text-sm mb-4">Pricing</p>
              </Link>
              {/* <Link href="/#faq-section">
                <p className="text-black dark:text-white text-sm mb-4">FAQs</p>
              </Link> */}
              <Link href="/book-a-demo">
                <p className="text-black dark:text-white text-sm mb-4">Contact Us</p>
              </Link>
            </div>
          )}
    </header>
  );
}
