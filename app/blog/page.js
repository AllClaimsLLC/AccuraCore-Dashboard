"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import GetStartedModal from "@/components/GetStartedModal";
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
  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

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
            <div className="hidden md:flex items-center space-x-8 relative">
              {/* About */}
              <div className="relative">
                <button
                  onClick={() => {
                    setAboutOpen(!aboutOpen);
                    setFeaturesOpen(false);
                  }}
                  className="text-white hover:text-blue-200 text-sm flex items-center gap-1"
                >
                  About
                  {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>

                {aboutOpen && (
                  <div className="text-center absolute left-1/2 -translate-x-1/2 mt-[45px] w-44 bg-[#51607d] dark:bg-slate-900 rounded-[15px] z-50 border border-white/10">
                    <Link href="#">
                      <span className="block text-white text-sm p-3 rounded-t-md hover:bg-white hover:text-black border-b border-white/20">
                        Page 1
                      </span>
                    </Link>

                    <Link href="#">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        Page 2
                      </span>
                    </Link>

                    <Link href="#">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        Page 3
                      </span>
                    </Link>

                    <Link href="#">
                      <span className="block text-white text-sm p-3 rounded-b-md hover:bg-white hover:text-black">
                        Page 4
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="relative">
                <button
                  onClick={() => {
                    setFeaturesOpen(!featuresOpen);
                    setAboutOpen(false);
                  }}
                  className="text-white hover:text-blue-200 text-sm flex items-center gap-1"
                >
                  Features
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>

                {featuresOpen && (
                  <div className="text-center absolute left-1/2 -translate-x-1/2 mt-[45px] w-56 bg-[#51607d] dark:bg-slate-900 rounded-[15px] z-50 border border-white/10 overflow-hidden">
                    <Link href="/accuracam">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        AccuraCam
                      </span>
                    </Link>

                    <Link href="/accuracore-claims">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        AccuraCore Claims
                      </span>
                    </Link>

                    <Link href="/my-accuracore">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        My AccuraCore
                      </span>
                    </Link>

                    <Link href="/roof-calculations">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        Roof Calculations
                      </span>
                    </Link>

                    <Link href="/weather-reports">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        Weather Reports
                      </span>
                    </Link>

                    <Link href="/workflow-automation">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black">
                        Workflow Automation
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Remaining links */}
              <Link href="/pricing-page">
                <span className="text-white hover:text-blue-200 text-sm">
                  Pricing
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
          </nav>
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
                  <h2 className="text-black text-2xl md:text-3xl font-normal mb-4">
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
      <WhyModernBusinessesAreTurningToAllInOnePlatforms setIsOpen={setIsOpen} />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
