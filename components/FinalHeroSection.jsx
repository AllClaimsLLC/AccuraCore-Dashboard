"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { DesktopUpdatedHeader } from "@/components/DesktopUpdatedHeader";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";

export default function FinalHeroSection({
  logo,
  title,
  description,
  videoSrc = "/Videos/accuracore-explainer.mp4",
  thumbnail = "/Videos/video-thumbnail.png",
  onPrimaryClick,
  onSecondaryClick,
  height = "50rem",
  startTime = 0,
  mediaType = "video",
  mediaSrc,
  imageSrc = "",
  imageMaxHeight = "400px",
  mediaTranslateY = "24%",
  mobileSpacingHeight = "200px",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const videoRefElement = useRef(null);

  return (
    // <section
    //      className="relative bg-cover bg-center bg-no-repeat overflow-visible  sm:h-[45rem]"
    //      style={{ backgroundImage: "url('/Images/Hero-bg.png')" }}
    //    >
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-visible"
      style={{
        backgroundImage: "url('/Images/Hero-bg.png')",
      }}
    >
      <style jsx>{`
        @media (min-width: 640px) {
          .hero-height {
            min-height: ${height};
          }
        }
      `}</style>

      <div className="hero-height">
        {/* ================= HEADER ================= */}
        <DesktopUpdatedHeader />

        <header className="block md:hidden px-6 py-4 relative z-50">
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
              <Link href="/our-story">
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

        {/* ================= HERO CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-6 text-center pt-16">
          <div className="text-center mb-6">
            <div className="overflow-hidden">
              {logo ? (
                <div className="overflow-hidden flex justify-center">
                  <img
                    src={logo}
                    className="h-20 sm:h-25 md:h-25 lg:h-25 object-contain animate-wordUp"
                    style={{
                      transform: "translateY(110%)",
                      animationDelay: "0.1s",
                      animationFillMode: "forwards",
                    }}
                  />
                </div>
              ) : (
                <h1 className="text-3xl md:text-4xl text-white flex flex-wrap justify-center">
                  {title.split(" ").map((word, i) => (
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
                  ))}
                </h1>
              )}

              <p
                className="text-md text-blue-100 mt-6 mb-8 max-w-4xl mx-auto animate-fadeUp"
                style={{
                  opacity: 0,
                  animationDelay: "0.35s",
                  animationFillMode: "forwards",
                }}
              >
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                className="w-full sm:w-auto rounded-full text-sm flex items-center justify-center"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0061A4",
                  padding: "27px 15px",
                  border: "none",
                }}
                onClick={onPrimaryClick}
              >
                Get Started
                <img
                  src="/Icons/Vector2.png"
                  alt="Arrow Icon"
                  className="w-2 h-3 ml-2"
                />
              </Button>

              <Button
                className="w-full sm:w-auto text-white rounded-full text-sm flex items-center justify-center"
                style={{
                  backgroundColor: "#0061A4",
                  border: "2px solid #4485b2",
                  padding: "25px 15px",
                }}
                onClick={onSecondaryClick}
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
        </div>

        {/* ================= MEDIA PREVIEW (VIDEO / IMAGE) ================= */}
        <div
          className="absolute left-1/2 bottom-0 w-[90%] max-w-6xl rounded-[24px]"
          style={{
            transform: `translate(-50%, ${mediaTranslateY})`,
          }}
        >
          {/* ========== IMAGE MODE (Dashboard Preview) ========== */}
          {mediaType === "image" && (
            <div className="relative mx-auto">
              <div className="flex justify-center items-center p-2 lg:p-4">
                <img
                  src={imageSrc}
                  alt="Hero"
                  className="h-auto"
                  style={{ maxHeight: imageMaxHeight }}
                />
              </div>
            </div>
          )}

          {/* ========== VIDEO MODE ========== */}
          {mediaType === "video" && (
            <>
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                {!isPlaying && (
                  <img
                    src={thumbnail}
                    alt="Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                  />
                )}

                <video
                  ref={(videoRef) => (videoRefElement.current = videoRef)}
                  className="w-full max-h-[500px] rounded-[30px] object-cover"
                  controls={isPlaying}
                >
                  <source src={mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <button
                    onClick={() => {
                      const video = videoRefElement.current;
                      if (!video) return;

                      if (video.readyState >= 2) {
                        video.currentTime = startTime;
                        video.play();
                      } else {
                        video.onloadedmetadata = () => {
                          video.currentTime = startTime;
                          video.play();
                        };
                      }

                      setIsPlaying(true);
                    }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 cursor-pointer transition duration-300 hover:bg-black/40"
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
            </>
          )}
        </div>

        {/* SPACING FOR OVERFLOW VIDEO */}
        <div
  className="md:h-[250px]"
  style={{ height: mobileSpacingHeight }}
/>
      </div>

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
          animation: wordUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
          animation: fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
