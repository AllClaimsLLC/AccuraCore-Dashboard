"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import WhatMakesAccurascoreDifferent from "@/components/WhatMakesAccurascoreDifferent";
import { Camera, Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";

import GetStartedModal from "@/components/GetStartedModal";
import { PricingAndPlans } from "@/components/PricingAndPlans";
import Pricing from "@/components/Pricing";
import CompareThePlans from "@/components/CompareThePlans";
import PricingFaqs from "@/components/PricingFaqs";
import FlashSaleRibbon from "@/components/FlashSalesRibbon";

export default function PricingPage() {
  const [addonEnabled, setAddonEnabled] = useState(false);
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
        className="relative z-10 bg-cover bg-center bg-no-repeat min-h-[55vh] sm:min-h-[100vh] flex flex-col sm:pb-[220px]"
        style={{ backgroundImage: "url('/Images/Hero-bg.png')" }}
      >
        <FlashSaleRibbon />
        {/* Header */}
        <header className="px-6 py-4 relative">
          <nav
            className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border bg-white dark:bg-slate-900"
            style={{ padding: "5px 30px" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img
                  src="/Logos/Accuracore/AccuraCore.svg"
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
              <div
                className="relative"
                onMouseEnter={() => {
                  setFeaturesOpen(true);
                  setAboutOpen(false);
                }}
                onMouseLeave={() => {
                  setFeaturesOpen(false);
                }}
              >
                <button className="text-black dark:text-white  text-sm flex items-center gap-1">
                  Features
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
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
              <Link href="/our-story">
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
              <div className="  p-2 rounded-full   bg-slate-900 dark:bg-white   text-white dark:text-slate-900 flex items-center justify-center">
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
                src="/Icons/right-arrow-white.svg"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <div className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-slate-900 flex items-center justify-center">
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
              <Link href="/our-story">
                <p className="text-black dark:text-white text-sm mb-4">
                  Our Story
                </p>
              </Link>
              <Link href="/pricing-page">
                <p className="text-black dark:text-white text-sm mb-4">
                  Pricing
                </p>
              </Link>
              {/* <Link href="/#faq-section">
                <p className="text-black dark:text-white text-sm mb-4">FAQs</p>
              </Link> */}
              <Link href="/book-a-demo">
                <p className="text-black dark:text-white text-sm mb-4">
                  Contact Us
                </p>
              </Link>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="px-6 pt-16 pb-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 lg:mb-16">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-4xl text-white leading-tight flex flex-wrap justify-center">
                  {["Pricing", "That", "Scales", "With", "You"].map(
                    (word, i) => (
                      <span
                        key={i}
                        className="inline-block overflow-hidden align-bottom pr-[0.18em]"
                      >
                        <span
                          className="inline-block animate-wordUp"
                          style={{
                            transform: "translateY(110%)",
                            animationDelay: `${0.15 + i * 0.06}s`,
                            animationFillMode: "forwards",
                          }}
                        >
                          {word}
                        </span>
                      </span>
                    ),
                  )}
                </h1>

                <p
                  className="text-md text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed mt-4 animate-fadeUp"
                  style={{
                    opacity: 0,
                    animationDelay: "0.35s",
                    animationFillMode: "forwards",
                  }}
                >
                  Pick the plan that fits your crew today. Upgrade anytime as
                  you grow.
                </p>

                {/* ================= ADD-ON TOGGLE ================= */}
                <p
                  className="text-md text-[#FA8C3D] mb-2 max-w-3xl mx-auto leading-relaxed mt-4 animate-fadeUp"
                  style={{
                    opacity: 0,
                    animationDelay: "0.35s",
                    animationFillMode: "forwards",
                  }}
                >
                  OPTIONAL ADD ON
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setAddonEnabled(!addonEnabled)}
                    className="flex items-center gap-4 rounded-[15px] border border-gray-400 bg-[#32456d] px-2 py-2 sm:px-5 sm:py-5"
                  >
                    {/* ICON */}
                    <span className="grid h-9 w-9 place-items-center rounded-[8px] bg-white">
                      <Camera className="h-5 w-5 text-black" />
                    </span>

                    {/* TEXT */}
                    <span className="text-left w-[70%]">
                      <span className="block text-md font-[500] text-white">
                        Add My AccuraCore
                      </span>
                      <span className="block text-sm text-gray-400">
                        Where Your Customers and Crew Stay Connected
                      </span>
                    </span>

                    {/* SWITCH */}
                    <span
                      className={`relative h-6 w-11 rounded-full transition ${
                        addonEnabled ? "bg-[#0061A4]" : "bg-gray-500"
                      }`}
                    >
                      <span
                        className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white transition ${
                          addonEnabled ? "translate-x-5" : ""
                        }`}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <style jsx>{`
          @keyframes wordUp {
            from {
              transform: translateY(110%);
            }
            to {
              transform: translateY(0);
            }
          }

          .animate-wordUp {
            animation: wordUp 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}</style>
      </div>
      <Pricing addonEnabled={addonEnabled} setIsOpen={setIsOpen} />
      <CompareThePlans />
      <PricingFaqs setIsOpen={setIsOpen} />

      {/* <PricingAndPlans setIsOpen={setIsOpen} /> */}

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
