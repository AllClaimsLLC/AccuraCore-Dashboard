"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ModeToggle from "./mode-toggle";

export default function HeroLayout({ title, content, buttons, onGetStarted, }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
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

      {/* ================= HERO CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 text-center pt-10">
        <div className="max-w-3xl mx-auto space-y-5">
          <h1 className="text-3xl md:text-4xl text-white">{title}</h1>

          <div className="space-y-3 text-blue-100">{content}</div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {buttons}
          </div>
        </div>
      </div>

      {/* ================= VIDEO ================= */}
      <div className="absolute left-1/2 bottom-0 w-[90%] max-w-5xl -translate-x-1/2 translate-y-1/2 rounded-[24px]">
        <div className="rounded-[24px] overflow-hidden shadow-2xl bg-black">
          <video
            ref={videoRef}
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
            controls={isPlaying}
            poster="/Images/video.png"
          >
            <source src="/Videos/DashboardDemo.mp4" type="video/mp4" />
          </video>

          {!isPlaying && (
            <button
              onClick={() => {
                videoRef.current.play();
                setIsPlaying(true);
              }}
              className="rounded-[24px] absolute inset-0 flex items-center justify-center bg-black/30"
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

      {/* SPACING FOR OVERFLOW VIDEO */}
      <div className="h-[200px] md:h-[250px]"></div>
    </section>
  );
}
