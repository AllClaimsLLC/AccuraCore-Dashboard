"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import SoundFamiliar from "@/components/SoundFamiliar";
import WhatYouWillDiscover from "@/components/WhatYouWillDiscover";
import TechMessCostChecker from "@/components/TechMessCostChecker";

export default function Calculator() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const [popupOpen, setPopupOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPopupOpen(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload prevent
    const formData = new FormData(e.target);

    // Formspree POST
    await fetch("https://formspree.io/f/xkobwzne", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    // Show thank you message
    setSubmitted(true);

    // Auto close popup after 2 seconds
    setTimeout(() => {
      setPopupOpen(false);
    }, 2000);
  };

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
        className="bg-cover bg-center bg-no-repeat h-[85rem] lg:h-[50rem]"
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
                    <Link href="/blog">
                      <span className="block text-white text-sm p-3 rounded-[15px] hover:bg-white hover:text-black border-white/20">
                        Blog
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
            <div className="md:hidden absolute left-0 right-0 top-full bg-[#51607d] px-6 py-4 rounded-[15px] mt-2 w-[95%] m-auto z-50 space-y-4 text-center">
              {/* About */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 text-white"
                >
                  About
                  {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>

                {aboutOpen && (
                  <div className="mt-2 w-full bg-[#51607d] dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                    <Link href="/blog">
                      <p className="text-white text-sm p-3 border-white/20 hover:bg-white hover:text-black">
                        Blog
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex items-center gap-1 text-white"
                >
                  Features
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>

                {featuresOpen && (
                  <div className="mt-2 w-full bg-[#51607d] dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                    <Link href="/accuracam">
                      <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                        AccuraCam
                      </p>
                    </Link>

                    <Link href="/accuracore-claims">
                      <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                        AccuraCore Claims
                      </p>
                    </Link>

                    <Link href="/my-accuracore">
                      <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                        My AccuraCore
                      </p>
                    </Link>

                    <Link href="/roof-calculations">
                      <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                        Roof Calculations
                      </p>
                    </Link>

                    <Link href="/weather-reports">
                      <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                        Weather Reports
                      </p>
                    </Link>

                    <Link href="/workflow-automation">
                      <p className="text-white text-sm p-3 hover:bg-white hover:text-black">
                        Workflow Automation
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <Link href="/pricing-page">
                <p className="text-white text-sm mb-4">Pricing</p>
              </Link>
              <Link href="/#faq-section">
                <p className="text-white text-sm mb-4">FAQs</p>
              </Link>
              <p className="text-white text-sm mb-4">Contact Us</p>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* 2 Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT COLUMN */}
              <div>
                <h1 className="text-4xl md:text-[40px] text-white mb-6 leading-tight font-[400]">
                  Your Disconnected <br />
                  Apps Are <span className="text-[#FA8C3D]">Costing You</span>
                  <br className="hidden lg:block" /> More Than You Know
                </h1>

                <p className="text-md text-blue-100 mb-8 leading-relaxed max-w-xl">
                  Most field service companies lose $20,000–$300,000+ per month
                  to app-switching chaos and communication breakdowns. Find your
                  exact number in 60 seconds.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="rounded-full text-sm flex items-center justify-center"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#0061A4",
                      padding: "25px 18px",
                    }}
                    onClick={() => handleScroll("tech-mess-section")}
                  >
                    Check My Tech-Mess Cost
                    <img
                      src="/Icons/Vector2.png"
                      alt="Arrow Icon"
                      className="w-2 h-3 ml-2"
                    />
                  </Button>
                  <Button
                    className="text-white rounded-full text-sm flex items-center justify-center"
                    style={{
                      backgroundColor: "#0061A4",
                      border: "2px solid #4485b2",
                      padding: "25px 18px",
                    }}
                    onClick={() => handleScroll("what-you-will-discover")}
                  >
                    See how it works
                    <img
                      src="/Icons/Vector.png"
                      alt="Arrow Icon"
                      className="w-2 h-3 ml-2"
                    />
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-6 flex-wrap">
                  {/* <span className="text-sm text-blue-200 w-full sm:w-auto">
                    Follow us:
                  </span> */}

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/accura_core/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <img
                      src="/Icons/Instagram.svg"
                      alt="Instagram"
                      className="w-5 h-5"
                    />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/p/AccuraCore-61579000254667/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <img
                      src="/Icons/Facebook.svg"
                      alt="Facebook"
                      className="w-5 h-5"
                    />
                  </a>

                  {/* WhatsApp (commented) */}
                  {/*
  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
    <img src="/Icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
  </div>
  */}
                </div>
              </div>

              {/* RIGHT COLUMN (IMAGE) */}
              <div className="flex justify-center md:justify-end">
                <img
                  src="/Images/calculator-hero-right.png"
                  alt="Calculator hero right"
                  className="w-full max-w-md object-contain"
                />
              </div>
            </div>

            {/* STATS CONTAINER */}
            <div className="relative mt-25 lg:mt-36 bg-white rounded-2xl shadow-xl px-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                {/* Stat 1 */}
                <div className="py-4 md:border-r md:border-gray-200 md:border-b-0 border-b border-gray-200 col-span-1">
                  <h3 className="text-xl font-semibold text-black">$257K+</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Avg. Monthly Revenue Lost
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="py-4 md:border-r md:border-gray-200 md:border-b-0 border-b border-gray-200 col-span-1">
                  <h3 className="text-xl font-semibold text-black">82 hrs</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Avg. Time Lost Per Month
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="py-4 md:border-r md:border-gray-200 col-span-1">
                  <h3 className="text-xl font-semibold text-black">82 hrs</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Avg. Disconnected Apps
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="py-4 col-span-1">
                  <h3 className="text-xl font-semibold text-black">60s</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    To Get Your Number
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div id="sound-familiar">
        <SoundFamiliar />
      </div>
      <div id="what-you-will-discover">
        <WhatYouWillDiscover />
      </div>
      <div id="tech-mess-section">
        <TechMessCostChecker />
      </div>

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-xl w-[90%] max-w-[500px] relative">
            {/* Close Button */}
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-sm font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-xl mb-6 text-gray-900 dark:text-white text-center">
                  See What Your Tech Mess Is Costing You
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                      Your Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                      Company Name
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-xl text-gray-900 dark:text-white">
                  Thank you for submitting!
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
