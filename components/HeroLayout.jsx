"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ModeToggle from "./mode-toggle";

export default function HeroLayout({ title, logo, content, buttons }) {
  const videoRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // ✅ fullscreen tracking
  useEffect(() => {
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // ✅ video state sync
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    video.addEventListener("play", play);
    video.addEventListener("pause", pause);

    return () => {
      video.removeEventListener("play", play);
      video.removeEventListener("pause", pause);
    };
  }, []);

  return (
    <section className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/Hero-bg.png')" }}
    >
      {/* HEADER */}
      <header className="px-6 py-4">
        <nav className="flex justify-between items-center bg-[#51607d] p-4 rounded-full">
          <Link href="/">
            <img src="/Logos/Accuracore/accuraCore-logo.png" className="w-16" />
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </nav>
      </header>

      {/* CONTENT */}
      <div className="text-center px-6 pt-10">
        {logo && <img src={logo} className="h-20 mx-auto" />}
        <div className="text-blue-100 mt-4">{content}</div>
        <div className="mt-4">{buttons}</div>
      </div>

      {/* ✅ VIDEO */}
      <div className="w-[92%] mx-auto mt-10 relative">
        <video
          ref={videoRef}
          className="w-full rounded-[24px]"
          controls
          playsInline
          preload="metadata"
          onLoadedData={() => setIsReady(true)}
        >
          <source src="/Videos/accuracore-explainer.mp4" type="video/mp4" />
        </video>

        {/* overlay */}
        {!isPlaying && isReady && !isFullscreen && (
          <button
            onClick={() => videoRef.current.play()}
            className="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            ▶
          </button>
        )}
      </div>

      <div className="h-[120px]" />
    </section>
  );
}