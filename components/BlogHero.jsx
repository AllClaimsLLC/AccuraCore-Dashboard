"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";

export default function BlogHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="block md:hidden lg:hidden relative bg-cover bg-center bg-no-repeat overflow-visible"
      style={{ backgroundImage: "url('/Images/Hero-bg.png')" }}
    >
      {/* ================= HEADER ================= */}
      <header className="px-6 py-4 relative z-50">
        <nav
          className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border border-white/20 bg-[#51607d] dark:bg-slate-900"
          style={{ padding: "5px 30px" }}
        >
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/Logos/Accuracore/accuraCore-logo.png"
                alt="Logo"
                className="w-20 h-20 object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
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

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <div className="p-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center">
              <ModeToggle />
            </div>

            {/* Login */}
            <button
              className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center"
              style={{ color: "#0061A4", padding: "25px 15px" }}
            >
              Login
            </button>

            {/* Book Demo */}
            <button
              className="text-white rounded-full text-sm flex items-center"
              style={{
                backgroundColor: "#0061A4",
                padding: "25px 15px",
              }}
            >
              Book Demo
            </button>
          </div>
          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <div className="p-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center">
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

        {/* MOBILE MENU */}
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
          </div>
        )}
      </header>

      {/* ================= BLOG FLOATING CARD ================= */}
      <div className="absolute left-1/2 top-[180px] w-[90%] max-w-5xl -translate-x-1/2">
        <div className="overflow-hidden rounded-[24px] shadow-2xl bg-white grid grid-cols-1">
          {/* LEFT IMAGE */}
          <div className="w-full h-full">
            <img
              src="/Images/blog-left.png"
              alt="Blog"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-5 flex flex-col justify-center text-left bg-white">
            {/* CHIP */}
            <div className="mb-2">
              <span
                className="text-white text-[10px] px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: "#FA8C3D" }}
              >
                Blog
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[20px] sm:text-md lg:text-md font-normal mb-2 leading-snug">
              <span className="text-[#1161A5]">AccuraCore:</span> A
                    Comprehensive Guide to Managing Your Business with Precision
            </h2>

            {/* TEXT */}
            <p className="text-gray-500 text-[12px] mb-2 leading-tight">
               In today’s fast-paced business world, staying organized and
                    efficient is essential. AccuraCore empowers businesses with
                    a unified platform that streamlines workflows, team
                    management, work orders, and financial insights all within
                    one intuitive dashboard.
            </p>

            {/* DATE */}
            <p className="text-[10px] text-black mb-3">March 11, 2025</p>

            {/* BUTTON */}
            <Button
                    className="w-full text-white rounded-full text-sm flex items-center"
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

      {/* SPACING FOR FLOATING CARD */}
      <div className="h-[400px]"></div>
    </section>
  );
}
