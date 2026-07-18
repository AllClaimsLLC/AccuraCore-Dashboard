"use client";

import { useEffect, useRef, useState } from "react";
import {
  Workflow,
  Camera,
  MessageSquare,
  ShieldCheck,
  RefreshCw,
  LifeBuoy,
  Home,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const CARDS = [
  {
    Icon: Workflow,
    tone: "blue",
    title: "A CRM That Fits How You Actually Work",
    desc: "A CRM shaped around your workflow.",
    badge: null,
    href: "/my-accuracore",
    image: "/Images/new-simplifying-1.png",
    feathover: true,
  },
  {
    Icon: Camera,
    tone: "orange",
    title: "Snap. Speak. Upload. Done.",
    desc: "Snap and voice-tag photos straight to the job.",
    badge: "AccuraCam",
    href: "/accuracam",
    image: "/Images/new-simplifying-2.png",
    feathover: true,
  },
  {
    Icon: MessageSquare,
    tone: "blue",
    title: "Talk Directly to Your Customers",
    desc: "Two-way customer messaging in one place.",
    badge: "MyAccuraCore",
    href: "/my-accuracore",
    image: "/Images/new-simplifying-3.png",
    feathover: true,
    delay: 0.06,
  },
  {
    Icon: ShieldCheck,
    tone: "orange",
    title: "Get More Insurance Claims Paid",
    desc: "Auto-generate claim reports adjusters approve.",
    badge: "Claims",
    href: "/claims",
    image: "/Images/new-simplifying-4.png",
    feathover: true,
    delay: 0.12,
  },
  {
    Icon: RefreshCw,
    tone: "blue",
    title: "We Move Your Data In, Free",
    desc: "We migrate all your data in, free.",
    badge: null,
    href: null,
    feathover: true,
    image: "/Images/new-simplifying-5.png",
  },
  {
    Icon: LifeBuoy,
    tone: "orange",
    title: "Onboarding & Support That Has Your Back",
    desc: "Fast, real-human onboarding and support.",
    badge: null,
    href: null,
    feathover: true,
    image: "/Images/new-simplifying-6.png",
    delay: 0.06,
  },
  {
    Icon: Home,
    tone: "blue",
    title: "Roof Calculations",
    desc: "Instant roof measurements and material estimates.",
    badge: null,
    href: "/workflow-automation",
    feathover: false,
  },
];

/* ------------------------------ scroll reveal ----------------------------- */
function Reveal({ delay = 0, className = "", style = {}, children }) {
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
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16,0.8,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,0.8,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function FeatureGlyph({ Icon, tone }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxWidth: 220,
        maxHeight: 150,
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.45)",
        boxShadow: "0 22px 50px rgba(6,32,58,0.42)",
        background:
          tone === "orange"
            ? "var(--ac-gradient-flame)"
            : "var(--ac-gradient-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon size={46} color="#fff" strokeWidth={1.6} />
    </div>
  );
}

function Card({ c }) {
  return (
    <Reveal
      delay={c.delay || 0}
      className="ac-lift ac-storycard"
      style={{
        background: "#fff",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: 30,
        boxShadow: "var(--shadow-sm)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          width: 56,
          height: 56,
          borderRadius: "var(--radius-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          background:
            c.tone === "orange"
              ? "var(--ac-orange-500)"
              : "var(--color-primary)",
          marginBottom: 18,
          transition: "transform 0.3s cubic-bezier(0.16,0.9,0.3,1)",
        }}
      >
        <c.Icon size={26} strokeWidth={2} />
      </span>

      {c.feathover && (
        <div className="ac-feathover">
          <div
          className="font-bold"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image src={c.image} alt={c.title} fill className="object-contain" />
          </div>
        </div>
      )}

      {c.badge ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 16,
            marginBottom: 10,
          }}
        >
          <h3
          className="font-bold"
            style={{
              flex: 1,
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: 20,
              lineHeight: 1.25,
              color: "var(--text-strong)",
            }}
          >
            {c.title}
          </h3>
          <span
            style={{
              flexShrink: 0,
              whiteSpace: "nowrap",
              background: "var(--ac-info-bg)",
              color: "var(--ac-info)",
              borderRadius: "999px",
              padding: "5px 12px",
              fontSize: 11.5,
              fontWeight: 700,
            }}
          >
            {c.badge}
          </span>
        </div>
      ) : (
        <h3
        className="font-bold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            color: "var(--text-strong)",
            marginBottom: 8,
          }}
        >
          {c.title}
        </h3>
      )}

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15.5,
          lineHeight: 1.6,
          color: "var(--text-body)",
        }}
      >
        {c.desc}
      </p>

      {c.href && (
        <a
          href={c.href}
          className="ac-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: 14,
            fontFamily: "var(--font-ui)",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--color-primary)",
            textDecoration: "none",
          }}
        >
          Learn more
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      )}
    </Reveal>
  );
}

export default function StorySection() {
  return (
    <section
      id="story"
      className="ac-sec ac-storysec"
      style={{
        maxWidth: "var(--container-max, 1200px)",
        margin: "0 auto",
        padding: "96px 40px",
      }}
    >
      <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
        <span className="ac-eyebrow">Everything in one place</span>
        <h2
        className="font-bold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(27px,5vw,42px)",
            marginTop: 12,
            color: "var(--text-strong)",
          }}
        >
          Simplify Your Business{" "}
          <span className="ac-text-gradient">With Precision</span>
        </h2>
      </Reveal>

      <div
        className="ac-g3 ac-storygrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 24,
        }}
      >
        {CARDS.map((c) => (
          <Card key={c.title} c={c} />
        ))}

        {/* CTA tile */}
        <Reveal
          delay={0.12}
          className="ac-lift"
          style={{
            background: "var(--ac-gradient-flame)",
            borderRadius: "var(--radius-lg)",
            padding: "32px 34px",
            boxShadow: "var(--shadow-md, 0 12px 30px rgba(0,0,0,.16))",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
          className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            See it on your own jobs.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 18,
            }}
          >
            Book a 20-minute demo and we&apos;ll build your first workflow live.
          </p>
          <a
            href="#"
            className="ac-cta"
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "var(--ac-orange-700)",
              fontFamily: "var(--font-ui)",
              fontWeight: 700,
              fontSize: 15,
              padding: "12px 20px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
            }}
          >
            Book Demo
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>

      <style jsx>{`
        .ac-storysec :global(.ac-lift) {
          transition:
            transform 0.24s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.32s ease;
        }
        .ac-storysec :global(.ac-lift:hover) {
          transform: translateY(-5px);
          box-shadow: 0 22px 48px rgba(17, 97, 165, 0.2);
        }
        .ac-storysec :global(.ac-lift > span:first-child) {
          transition: transform 0.3s cubic-bezier(0.16, 0.9, 0.3, 1);
        }
        .ac-storysec :global(.ac-lift:hover > span:first-child) {
          transform: scale(1.09) rotate(-3deg);
        }
        .ac-storysec :global(.ac-cta) {
          transition:
            transform 0.16s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.22s,
            background 0.2s,
            color 0.2s,
            border-color 0.2s,
            filter 0.2s;
          will-change: transform;
        }
        .ac-storysec :global(.ac-cta:hover) {
          transform: translateY(-2px);
          filter: brightness(1.04);
        }
        .ac-storysec :global(.ac-cta:active) {
          transform: translateY(0);
        }
        .ac-storysec :global(.ac-feathover) {
          position: absolute;
          inset: 0;
          z-index: 3;
          opacity: 0;
          transform: scale(1.04);
          transition:
            opacity 0.4s ease,
            transform 0.5s cubic-bezier(0.16, 0.9, 0.3, 1);
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: linear-gradient(
            150deg,
            rgba(17, 97, 165, 0.42),
            rgba(9, 42, 74, 0.5)
          );
          backdrop-filter: blur(7px) saturate(130%);
          -webkit-backdrop-filter: blur(7px) saturate(130%);
        }
        .ac-storysec :global(.ac-storycard:hover .ac-feathover) {
          opacity: 1;
          transform: scale(1);
        }
        .ac-eyebrow {
          font-family: var(--font-ui);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-primary);
        }
        .ac-text-gradient {
          background: var(--ac-gradient-flame);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* ---- Tablet ---- */
        @media (max-width: 1024px) {
          .ac-storysec {
            padding: 72px 32px !important;
          }
          .ac-storygrid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* ---- Mobile ---- */
        @media (max-width: 640px) {
          .ac-storysec {
            padding: 56px 20px !important;
          }
          .ac-storygrid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        /* ---- Ultra-wide / bigger-than-desktop screens ---- */
        @media (min-width: 1600px) {
          .ac-storysec {
            padding: 128px 40px !important;
            max-width: 1360px !important;
          }
        }
      `}</style>
    </section>
  );
}
