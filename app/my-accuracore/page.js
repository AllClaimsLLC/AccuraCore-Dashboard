"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";
import BuiltForStructuredExecution from "@/components/BuiltForStructuredExecution";
import UnstructuredDocumentationCostsMoney from "@/components/UnstructuredDocumentationCostsMoney";
import WeStructureProof from "@/components/WeStructureProof";
import StructuredBeforeItLeavesTheField from "@/components/StructuredBeforeItLeavesTheField";
import ClaimDelaysDisruptCashFlow from "@/components/ClaimDelaysDisruptCashFlow";
import WeStructureTheWorkflow from "@/components/WeStructureTheWorkflow";
import Link from "next/link";
import ControlTheEntireWorkflow from "@/components/ControlTheEntireWorkflow";
import OperationalChaosCostsMargin from "@/components/OperationalChaosCostsMargin";
import JustAnotherCRM from "@/components/JustAnotherCRM";

export default function MyAccuraCorePage() {
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
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/Hero-bg.png')",
          height: "45rem",
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
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-4xl text-white mb-6 leading-tight">
                My AccuraCore
              </h1>
              <p className="text-md text-blue-100  max-w-3xl mx-auto leading-relaxed">
                MyAccuraCore centralizes jobs, documentation, teams, and claims
                in one structured system.
              </p>
              <p className="text-md text-blue-100  max-w-3xl mx-auto leading-relaxed">
                This is where field capture, office review, and claim workflows
                connect.{" "}
              </p>
              <p className="text-md text-[#FA8C3D] mb-8 max-w-3xl mx-auto leading-relaxed">
                One system, Full visibility, Controlled execution.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "27px 15px",
                    border: "none",
                  }}
                >
                  Get Started
                  <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
                <Button
                  className="text-white rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#0061A4",
                    border: "2px solid #4485b2",
                    padding: "25px 15px",
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  Book Demo
                  <img
                    src="/Icons/Vector.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative w-[90%] mx-auto">
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                <video
                  ref={(videoRef) => (videoRefElement.current = videoRef)}
                  className="w-full max-h-[500px] rounded-[30px] object-cover"
                  poster="/Images/Hero-image2.png" // thumbnail
                  controls={isPlaying} // show controls only when playing
                >
                  <source src="/Videos/DashboardDemo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <button
                    onClick={() => {
                      videoRefElement.current.play();
                      setIsPlaying(true);
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition duration-300 hover:bg-black/40"
                  >
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-6.518-3.758A1 1 0 007 8.304v7.392a1 1 0 001.234.97l6.518-1.9a1 1 0 00.748-.97v-1.864a1 1 0 00-.748-.97z"
                        />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <ControlTheEntireWorkflow />
      <OperationalChaosCostsMargin />
      <JustAnotherCRM />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-xl w-[90%] max-w-[600px] max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-md lg:text-md text-center text-gray-900 mb-2 dark:text-white">
              Registration Form
            </h3>
            <p className="text-gray-500 text-sm mb-6 text-center dark:text-gray-400">
              Please fill out this form with the required information
            </p>

            <form
              action="https://formspree.io/f/xkobwzne"
              method="POST"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Software of Interest */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Software of Interest
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCore"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700 dark:text-gray-300"
                      style={{ fontSize: "13px" }}
                    >
                      AccuraCore
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="ClaimCore"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700 dark:text-gray-300"
                      style={{ fontSize: "13px" }}
                    >
                      ClaimCore
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCam"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700 dark:text-gray-300"
                      style={{ fontSize: "13px" }}
                    >
                      AccuraCam
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-md"
                style={{
                  backgroundColor: "#0061A4",
                  padding: "10px 15px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
