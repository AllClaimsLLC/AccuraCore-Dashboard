"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "./mode-toggle";

export default function HeroLayout({
  title,
  logo,
  content,
  buttons,
}) {
  const videoRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ✅ REAL fullscreen tracking (correct)
  useEffect(() => {
    const onChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // ✅ Sync real video state (important fix)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <section
      className="block md:hidden lg:hidden relative bg-cover bg-center bg-no-repeat overflow-visible"
      style={{ backgroundImage: "url('/Images/Hero-bg.png')" }}
    >
      {/* ================= HEADER ================= */}
      <header className="px-6 py-4 relative z-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border border-white/20 bg-[#51607d] dark:bg-slate-900">

          <Link href="/">
            <img
              src="/Logos/Accuracore/accuraCore-logo.png"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>

          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="text-white w-8 h-8" />
              ) : (
                <Menu className="text-white w-8 h-8" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 text-center pt-10">
        <div className="space-y-5">

          <div className="flex justify-center">
            {logo ? (
              <img src={logo} className="h-20 object-contain" />
            ) : (
              <h1 className="text-3xl text-white">{title}</h1>
            )}
          </div>

          <div className="text-blue-100">{content}</div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons}
          </div>
        </div>
      </div>

      {/* ================= VIDEO ================= */}
      <div className="absolute left-1/2 bottom-0 w-[90%] max-w-5xl -translate-x-1/2 translate-y-1/2">
        <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-black">

          <video
            ref={videoRef}
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
            controls
            playsInline
            disablePictureInPicture
          >
            <source src="/Videos/accuracore-explainer.mp4" type="video/mp4" />
          </video>

          {/* ✅ FIXED overlay logic (no fullscreen flicker) */}
          {!isPlaying && !isFullscreen && (
            <button
              onClick={async () => {
                try {
                  await videoRef.current.play();
                } catch (e) {
                  console.log(e);
                }
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/30"
            >
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                ▶
              </div>
            </button>
          )}
        </div>
      </div>

      <div className="h-[150px] md:h-[250px]"></div>
    </section>
  );
}