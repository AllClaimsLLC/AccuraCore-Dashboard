"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import ControlledBeforeItLeavesTheField from "@/components/ControlledBeforeItLeavesTheField";
import InaccurateMeasurementsCostMargin from "@/components/InaccurateMeasurementsCostMargin";
import DisconnectedMeasurementTools from "@/components/DisconnectedMeasurementTools";
import GetStartedModal from "@/components/GetStartedModal";
import HeroLayout from "@/components/HeroLayout";
import BlogHero from "@/components/BlogHero";
import { WhatHowAccuracoreBlog } from "@/components/WhatHowAccuracoreBlog";
import BestPracticesForTransformativeWorkflows from "@/components/BestPracticesForTransformativeWorkflows";
import WhyModernBusinessesAreTurningToAllInOnePlatforms from "@/components/WhyModernBusinessesAreTurningToAllInOnePlatforms";

const content = (
  <p className="text-blue-100">
    Roof Calculations inside AccuraCore generate precise, job-linked
    measurements — eliminating manual estimating errors, supplement disputes,
    and costly miscalculations.
  </p>
);

const buttons = (onGetStarted) => (
  <>
    <Button
      className="rounded-full text-sm flex items-center"
      style={{
        backgroundColor: "#fff",
        color: "#0061A4",
        padding: "27px 15px",
      }}
      onClick={onGetStarted}
    >
      Get Started
      <img src="/Icons/Vector2.png" alt="Arrow Icon" className="w-2 h-3 ml-2" />
    </Button>

    <Button
      className="text-white rounded-full text-sm flex items-center"
      style={{
        backgroundColor: "#0061A4",
        border: "2px solid #4485b2",
        padding: "25px 15px",
      }}
      onClick={() => (window.location.href = "/book-a-demo")}
    >
      Book Demo
      <img src="/Icons/Vector.png" alt="Arrow Icon" className="w-2 h-3 ml-2" />
    </Button>
  </>
);

export default function RoofCalculationsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const videoRefElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="hidden md:block lg:block bg-cover bg-center bg-no-repeat h-[47rem] lg:h-[30rem]"
        style={{
          backgroundImage: "url('/Images/Hero-bg.png')",
        }}
      >
        {/* Header */}
        <header className="px-6 py-4 relative">
          <nav
            className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border border-white/20 bg-[#51607d] dark:bg-slate-900"
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
              <Link href="/calculator#sound-familiar">
                <span className="text-white hover:text-blue-200 text-sm">
                  Why
                </span>
              </Link>
              <Link href="/calculator#what-you-will-discover">
                <span className="text-white hover:text-blue-200 text-sm">
                  How It Works
                </span>
              </Link>
              <Link href="/#faq-section">
                <span className="text-white hover:text-blue-200 text-sm">
                  FAQs
                </span>
              </Link>
              <Link href="/book-a-demo">
                <span className="text-white hover:text-blue-200 text-sm">
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <div
                className="
  p-2 rounded-full 
  bg-slate-900 dark:bg-white 
  text-white dark:text-slate-900
  flex items-center justify-center
"
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
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <div
                className="
  p-2 rounded-full 
  bg-slate-900 dark:bg-white 
  text-white dark:text-slate-900
  flex items-center justify-center
"
              >
                <ModeToggle />
              </div>

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-white w-8 h-8" />
                ) : (
                  <Menu className="text-white w-8 h-8" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-[#51607d] px-6 py-4 space-y-4 rounded-lg mt-2 z-50 shadow-lg w-[95%] m-auto">
              <div className="flex flex-col space-y-4 text-white text-sm text-center">
                <Link href="/calculator#sound-familiar">
                  <span>Why</span>
                </Link>
                <Link href="/calculator#what-you-will-discover">
                  <span>How It Works</span>
                </Link>
                <Link href="/#faq-section">
                  <span>FAQs</span>
                </Link>
                <Link href="/book-a-demo">
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Mobile Action Buttons */}
              {/* <div className="flex flex-col space-y-3 mt-4">
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
                    className="w-3 h-4 ml-2"
                  />
                </Button>
              </div> */}
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="w-[90%] mx-auto">
              <div className="overflow-hidden rounded-[30px] shadow-2xl bg-white grid grid-cols-1 md:grid-cols-2">
                {/* LEFT IMAGE */}
                <div className="w-full h-full">
                  <img
                    src="/Images/blog-left.png"
                    alt="Blog"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="p-8 md:p-12 flex flex-col justify-center text-left bg-white">
                  {/* CHIP */}
                  <div className="mb-4">
                    <span
                      className="text-white text-xs font-medium px-4 py-2 rounded-full inline-block"
                      style={{ backgroundColor: "#FA8C3D" }}
                    >
                      Blog
                    </span>
                  </div>

                  {/* HEADING (not bold) */}
                  <h2 className="text-2xl md:text-3xl font-normal mb-4">
                    <span className="text-[#1161A5]">AccuraCore:</span> A
                    Comprehensive Guide to Managing Your Business with Precision
                  </h2>

                  {/* TEXT (lighter gray) */}
                  <p className="text-gray-500 text-[14px] mb-6">
                    In today’s fast-paced business world, staying organized and
                    efficient is essential. AccuraCore empowers businesses with
                    a unified platform that streamlines workflows, team
                    management, work orders, and financial insights all within
                    one intuitive dashboard.
                  </p>

                  {/* DATE */}
                  <p className="text-sm text-black mb-6">March 11, 2025</p>

                  {/* BUTTON  */}
                  <Button
                    className="w-[50%] text-white rounded-full text-sm flex items-center"
                    style={{
                      backgroundColor: "#0061A4",
                      padding: "25px 20px",
                    }}
                    onClick={() => (window.location.href = "/")}
                  >
                    Go to Accuracore
                    <img
                      src="/Icons/Vector.png"
                      alt="Arrow Icon"
                      className="w-2 h-3 ml-2"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <BlogHero buttons={buttons(() => setIsOpen(true))} />

      <WhatHowAccuracoreBlog />
      <BestPracticesForTransformativeWorkflows />
      <WhyModernBusinessesAreTurningToAllInOnePlatforms />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
