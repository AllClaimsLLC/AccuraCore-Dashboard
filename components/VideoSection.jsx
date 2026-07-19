'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const POSTER_SRC = '/Videos/video-thumbnail.png';
const VIDEO_SRC = '/Videos/accuracore-explainer.mp4';



export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
const containerRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"],
});

const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="ac-sec ac-vidsec" style={{ maxWidth: 'var(--container-max, 1200px)', margin: '0 auto', padding: '96px 40px' }}>
      <div className="text-left md:text-center mb-[40px]">
        <span className="ac-eyebrow">See it in motion</span>
        <h2 className='font-bold' style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(27px,5vw,42px)', marginTop: 12, color: 'var(--text-strong)' }}>
          Watch AccuraCore <span className="ac-text-gradient">In Action</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 600, margin: '14px auto 0' }}>
          A two-minute walkthrough of the dashboard your whole crew runs the business on.
        </p>
      </div>
{/* Video Player */}

<motion.div
  ref={containerRef}
  style={{
    scale,
    position: "relative",
    width: "100%",
    maxWidth: "1040px",
    margin: "0 auto",
    aspectRatio: "16 / 9",
    overflow: "hidden",
    borderRadius: "30px",
    background: "#0b1626",
    boxShadow: "var(--shadow-xl,0 30px 70px rgba(15,23,41,.28))",
  }}
  className="ac-glow ac-vidframe"
>
  {/* Thumbnail */}
  {!isPlaying && (
    <img
      src={POSTER_SRC}
      alt="Video Thumbnail"
      className="absolute inset-0 w-[full] h-full object-cover z-10"
    />
  )}

  {/* Video */}
  <video
    ref={videoRef}
    className="w-full h-full object-cover rounded-[30px]"
    controls={isPlaying}
    playsInline
  >
    <source src={VIDEO_SRC} type="video/mp4" />
  </video>

  {/* Overlay + Play Button */}
  {!isPlaying && (
    <div
      onClick={handlePlay}
      className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 hover:bg-black/40 transition duration-300 cursor-pointer"
    >
      <button
        type="button"
        aria-label="Play Video"
        style={{
          position: "relative",
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "var(--ac-orange-500)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 14px 40px rgba(250,140,61,.45)",
        }}
      >
        {/* Pulse Ring 1 */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,.7)",
            animation: "ac-ping 2.5s ease-out infinite",
          }}
        />

        {/* Pulse Ring 2 */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(250,140,61,.65)",
            animation: "ac-ping 2.5s ease-out 1.25s infinite",
          }}
        />

        {/* Play Icon */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#fff"
          style={{ marginLeft: 4, position: "relative", zIndex: 2 }}
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  )}
</motion.div>

      <style jsx>{`
        @keyframes ac-vidglow {
          0%,
          100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }
        @keyframes ac-vidsheen {
          0% {
            transform: translateX(-120%);
          }
          50%,
          100% {
            transform: translateX(340%);
          }
        }
        @keyframes ac-ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }
        @keyframes ac-eq {
          0%,
          100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }
        @keyframes ac-pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.35;
          }
        }

        .ac-eqbar {
          width: 3px;
          border-radius: 2px;
          background: var(--ac-orange-400);
          transform-origin: bottom;
        }

        .ac-vidframe {
          transition: transform 0.5s cubic-bezier(0.16, 0.9, 0.3, 1), box-shadow 0.5s ease;
        }
        .ac-vidframe:hover {
          transform: translateY(-6px) scale(1.012);
        }
        .ac-vidplay {
          transition: transform 0.35s cubic-bezier(0.16, 0.9, 0.3, 1);
        }
        .ac-vidframe:hover .ac-vidplay {
          transform: scale(1.12);
        }

        .ac-glow {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.38s ease, filter 0.38s ease;
        }
        .ac-glow:hover {
          box-shadow: 0 30px 74px rgba(17, 97, 165, 0.36);
          filter: brightness(1.02);
        }

        .ac-text-gradient {
          background: var(--ac-gradient-flame);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .ac-eyebrow {
          font-family: var(--font-ui);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-primary);
        }

        /* ---- Tablet ---- */
        @media (max-width: 1024px) {
          .ac-vidsec {
            padding: 72px 32px !important;
          }
        }

        /* ---- Mobile ---- */
        @media (max-width: 640px) {
          .ac-vidsec {
            padding: 56px 20px !important;
          }
          .ac-vidplay {
            padding: 22px 26px !important;
            gap: 14px !important;
            border-radius: 18px !important;
          }
        }

        /* ---- Ultra-wide / bigger-than-desktop screens ---- */
        @media (min-width: 1600px) {
          .ac-vidsec {
            padding: 128px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}