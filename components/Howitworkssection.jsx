"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Workflow,
  LayoutDashboard,
  Users,
  Briefcase,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";

/* -------------------------------------------------------------------------
   HowItWorksSection  —  "From Setup To Execution"
   3-step process on the dark blue field. Each card scroll-reveals, and its
   screenshot panel "wipes" open left-to-right with a glowing orange scan
   line sweeping across it the moment the card enters view.

   Place directly below <StorySection />:

     <StorySection />
     <HowItWorksSection />
     <GlobalTokens />

   NOTE: the source pointed each `.ac-uiwipe` at a local blob: screenshot
   that can't be exported. Each panel below renders a lightweight mock
   product screen in that exact spot instead, using the same wipe/scan
   mechanics — swap <MockScreen step={1|2|3} /> for a real
   <img src="/steps/xxx.png" /> once you have exportable screenshots.
------------------------------------------------------------------------- */

const STEPS = [
  {
    num: "01",
    title: "Create Your Company",
    desc: "Create your workspace and invite your crew.",
    delay: 0,
    step: 1,
  },
  {
    num: "02",
    title: "Build Custom Workflows",
    desc: "Adapt the platform to your process, not the other way around - no templates needed.",
    delay: 0.1,
    step: 2,
  },
  {
    num: "03",
    title: "All-in-One Control Panel",
    desc: "Jobs, finances & crew in one place.",
    delay: 0.2,
    step: 3,
  },
];

function MockScreen({ step }) {
  return (
    <Image
      src={`/Images/howitworks${step}.png`}
      alt={`How it works ${step}`}
      fill
      className="object-contain"
      sizes="(max-width:768px) 100vw, 33vw"
      priority={step === 1}
    />
  );
}

function StepCard({ s }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="ac-lift ac-stepcard"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "var(--radius-xl, 20px)",
        padding: 32,
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16,0.8,0.3,1) ${s.delay}s, transform 0.8s cubic-bezier(0.16,0.8,0.3,1) ${s.delay}s`,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 44,
          fontWeight: 800,
          color: "var(--ac-orange-500)",
          lineHeight: 1,
        }}
      >
        {s.num}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          color: "#fff",
          margin: "18px 0 10px",
        }}
      >
        {s.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {s.desc}
      </p>

      <div
        className={`ac-uiwipe${inView ? " ac-wipe-in" : ""}`}
        style={{
          marginTop: 22,
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          aspectRatio: "16 / 10",
          background: "#0b1626",
          padding: 10,
          boxShadow: "0 18px 40px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        <div
          className="ac-uiwipe-inner"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <MockScreen step={s.step} />
        </div>{" "}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      className="ac-sec ac-howsec"
      style={{
        background: "var(--ac-blue-900)",
        padding: "96px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          right: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(250,140,61,0.14), transparent 70%)",
          animation: "ac-blob 18s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--container-max, 1200px)",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ac-orange-400)",
            }}
          >
            How it works
          </span>
          <h2
              className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px,4.6vw,40px)",
              color: "#fff",
              marginTop: 12,
            }}
          >
            From Setup To Execution
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 680,
              margin: "14px auto 0",
            }}
          >
            See how AccuraCore contractor management software simplifies
            operations, streamlines workflows, and puts you in control.
          </p>
        </div>

        <div
          className="ac-g3 ac-howgrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 26,
          }}
        >
          {STEPS.map((s) => (
            <StepCard key={s.num} s={s} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ac-blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-24px, 18px) scale(1.08);
          }
          66% {
            transform: translate(18px, -16px) scale(0.95);
          }
        }
        @keyframes ac-scan {
          0% {
            left: 10px;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            left: calc(100% - 13px);
            opacity: 0;
          }
        }

        .ac-howsec :global(.ac-uiwipe) {
          position: relative;
        }
        .ac-howsec :global(.ac-uiwipe-inner) {
          clip-path: inset(0 100% 0 0);
          transform: scale(1.08);
          filter: saturate(0.55) brightness(0.85);
          transition:
            clip-path 1.15s cubic-bezier(0.16, 0.9, 0.3, 1) 0.2s,
            transform 1.3s cubic-bezier(0.16, 0.9, 0.3, 1) 0.2s,
            filter 1.3s ease 0.2s;
        }
        .ac-howsec :global(.ac-uiwipe.ac-wipe-in .ac-uiwipe-inner) {
          clip-path: inset(0 0 0 0);
          transform: scale(1);
          filter: none;
        }
        .ac-howsec :global(.ac-uiwipe::after) {
          content: "";
          position: absolute;
          top: 10px;
          bottom: 10px;
          width: 3px;
          left: 10px;
          background: linear-gradient(
            180deg,
            transparent,
            var(--ac-orange-400),
            transparent
          );
          box-shadow: 0 0 18px 4px rgba(250, 140, 61, 0.75);
          opacity: 0;
          pointer-events: none;
          z-index: 3;
          border-radius: 3px;
        }
        .ac-howsec :global(.ac-uiwipe.ac-wipe-in::after) {
          animation: ac-scan 1.35s cubic-bezier(0.16, 0.9, 0.3, 1) 0.2s;
        }

        .ac-howsec :global(.ac-lift) {
          transition:
            transform 0.24s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.32s ease;
        }
        .ac-howsec :global(.ac-lift:hover) {
          transform: translateY(-5px);
          box-shadow: 0 22px 48px rgba(17, 97, 165, 0.2);
        }

        /* ---- Tablet ---- */
        @media (max-width: 1024px) {
          .ac-howsec {
            padding: 72px 32px !important;
          }
          .ac-howgrid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* ---- Mobile ---- */
        @media (max-width: 640px) {
          .ac-howsec {
            padding: 56px 20px !important;
          }
          .ac-howgrid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }

        /* ---- Ultra-wide / bigger-than-desktop screens ---- */
        @media (min-width: 1600px) {
          .ac-howsec {
            padding: 128px 40px !important;
          }
          .ac-howsec > div {
            max-width: 1360px !important;
          }
        }
      `}</style>
    </section>
  );
}
