"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  User,
  ArrowRight,
  TrendingUp,
  CheckSquare,
  ArrowDown,
  Menu,
  X,
  Camera,
  LayoutGrid,
  ShieldCheck,
  RefreshCw,
  Home,
  Cloud,
  Check,
  FileCheck2,
  Users,
  Briefcase,
  ClipboardCheck,
  Search,
  LayoutDashboard,
} from "lucide-react";
import TourSection from "@/components/TourSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import StorySection from "@/components/StorySection";
import HowItWorksSection from "@/components/Howitworkssection";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/Faqsection";
import LiveDemoSection from "@/components/LivedemoSection";
import NewFooter from "@/components/NewFooter";
import Image from "next/image";
import Link from "next/link";

const SOLUTIONS = [
  {
    title: "AccuraCam",
    desc: "Snap & voice-tag photos straight to the job.",
    icon: Camera,
    tone: "orange",
  },
  {
    title: "MyAccuraCore",
    desc: "Run your whole operation from one system.",
    icon: LayoutGrid,
    tone: "blue",
  },
  {
    title: "AccuraCore Claims",
    desc: "Submission-grade claims, structured at the source.",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    title: "Workflow Automation",
    desc: "Stage-based control so no step gets skipped.",
    icon: RefreshCw,
    tone: "orange",
  },
  {
    title: "Roof Calculations",
    desc: "Instant roof measurements & material estimates.",
    icon: Home,
    tone: "blue",
  },
  {
    title: "Weather Reports",
    desc: "Verified, date-stamped storm data per job.",
    icon: Cloud,
    tone: "orange",
  },
];

const CUE_MESSAGES = [
  "Only 25 spots left this month.",
  "Setup in minutes - data migrated free.",
  "Join 3,000+ contractors already on AccuraCore.",
];

const MARQUEE_ITEMS = [
  "Smart Dashboard",
  "Boards",
  "Contact Profiles",
  "Calendar",
  "Estimates",
  "Invoices",
  "Voice Tagging",
];

export default function NewAccuraCorePage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#f6f7f9]">
      <TopBarAndHeader />
      <Hero />
      <Marquee />
      <DeviceShowcase />
      <TourSection />
      <CapabilitiesSection />
      <StorySection />
      <HowItWorksSection />
      <VideoSection />
      <StatsSection />
      <CTASection />
      <FaqSection />
      <LiveDemoSection />
      <NewFooter />
      <GlobalTokens />
    </div>
  );
}

/* TOP BAR + HEADER */
function TopBarAndHeader() {
  const [cueIndex, setCueIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setCueIndex((i) => (i + 1) % CUE_MESSAGES.length),
      3200,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 96);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative z-20" style={{ background: "var(--ac-blue-50)" }}>
      {/* ---------------------------------------------------------------- */}
      {/* TOP ANNOUNCEMENT BAR                                             */}
      {/* ---------------------------------------------------------------- */}
      <div
        className="relative flex items-center justify-center gap-2 overflow-hidden px-4 py-2.5 text-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,42,74,0.82), rgba(17,97,165,0.66) 55%, rgba(9,42,74,0.82))",
          backdropFilter: "blur(18px) saturate(150%)",
          borderBottom: "1px solid rgba(255,255,255,0.14)",
          color: "#fff",
          fontSize: "13.5px",
        }}
      >
        <span className="ac-barsheen pointer-events-none absolute bottom-0 left-0 top-0 w-[30%]" />
        <span
          className="ac-barpulse h-[6px] w-[6px] shrink-0 rounded-full"
          style={{ background: "var(--ac-orange-500)" }}
        />
        <span className="font-semibold text-white">
          First 90 Days <span className="font-extrabold">FREE</span>
        </span>
        <span className="opacity-40">·</span>
        <span className="relative inline-flex items-center justify-center text-center font-medium">
          <span key={cueIndex} className="ac-cueflip inline-block">
            {CUE_MESSAGES[cueIndex]}
          </span>
        </span>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* FIXED FLOATING (COMPACT) HEADER — slides in once scrolled        */}
      {/* ---------------------------------------------------------------- */}
      <div
        className="fixed left-0 right-0 top-4 z-[60] hidden justify-center px-6 md:flex"
        style={{
          pointerEvents: scrolled ? "auto" : "none",
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "translateY(0)" : "translateY(-160%)",
          transition:
            "transform 0.42s cubic-bezier(0.16,0.9,0.3,1), opacity 0.3s",
        }}
      >
        <div
          className="flex w-full max-w-[960px] items-center gap-3.5 rounded-[18px] py-2 pl-[22px] pr-2"
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow:
              "rgba(15,23,41,0.14) 0 12px 34px, rgba(255,255,255,0.6) 0 1px 0 inset",
          }}
        >
          <Logo height={32} />
          <nav className="ml-2 flex items-center gap-[22px]">
            <SolutionsMenu fontSize="14.5px" />
            {["Our Story", "Pricing", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="ac-navlink"
                style={{
                  fontSize: "14.5px",
                  fontWeight: 500,
                  color: "var(--text-body)",
                }}
              >
                {l}
              </a>
            ))}
          </nav>
<Link
  href="/book-a-demo"
  className="ac-cta ml-auto inline-flex items-center gap-[7px] rounded-[12px] px-[18px] py-[10px] text-[14px] font-semibold text-white"
  style={{
    background: "var(--color-primary)",
    boxShadow: "var(--shadow-brand)",
  }}
>
    Book Demo
      <ArrowRight
    size={16}
    className="transition-transform duration-200 group-hover:translate-x-1"
  />
    </Link>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* IN-FLOW GLASS HEADER                                             */}
      {/* ---------------------------------------------------------------- */}
      <header
        className="sticky top-0 z-30 mx-3 flex h-[64px] items-center gap-5 rounded-[18px] px-4 sm:mx-6 sm:gap-7 md:relative md:mx-6 md:mt-3.5 md:h-[76px] md:gap-9 md:px-8 lg:mx-6"
        style={{
          background: "rgba(255,255,255,0.62)",
          backdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow:
            "rgba(15,23,41,0.1) 0 8px 30px, rgba(255,255,255,0.7) 0 1px 0 inset",
        }}
      >
        <Logo height={36} className="md:hidden" />
        <Logo height={46} className="hidden md:flex" />

        <nav
          className="hidden flex-1 items-center gap-7 lg:flex"
          style={{ gap: "28px" }}
        >
          <SolutionsMenu fontSize="15px" />
          {["Our Story", "Pricing", "Contact Us"].map((l) => (
            <a
              key={l}
              href="#"
              className="ac-navlink"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "var(--text-body)",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <a
            href="#"
            className="ac-loginlink inline-flex items-center gap-[7px] text-[15px] font-semibold"
            style={{ color: "var(--text-strong)" }}
          >
            <User size={18} style={{ color: "var(--color-primary)" }} />
            Login
          </a>
<Link
  href="/book-a-demo"
  className="ac-cta inline-flex items-center gap-2 rounded-[12px] px-5 py-[11px] text-[15px] font-semibold text-white"
  style={{
    background: "var(--color-primary)",
    boxShadow: "var(--shadow-brand)",
  }}
>
    Book Demo
      <ArrowRight
    size={16}
    className="transition-transform duration-200 group-hover:translate-x-1"
  />
    </Link>
        </div>

        <button
          className="ml-auto flex items-center justify-center rounded-lg p-2 lg:hidden"
          style={{ color: "var(--text-body)" }}
          onClick={() => setMobileNavOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile panel */}
        <div
          className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border transition-all duration-300 lg:hidden"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border-subtle)",
            boxShadow: "0 20px 40px rgba(15,23,41,0.14)",
            maxHeight: mobileNavOpen ? "28rem" : 0,
            opacity: mobileNavOpen ? 1 : 0,
            pointerEvents: mobileNavOpen ? "auto" : "none",
          }}
        >
          <div className="flex flex-col gap-1 p-3">
            {["Solutions", "Our Story", "Pricing", "Contact Us"].map((l) => (
              <a
                key={l}
                href="#"
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors"
                style={{ color: "var(--text-body)" }}
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-[15px] font-medium"
              style={{ color: "var(--text-body)" }}
            >
              <User size={17} /> Login
            </a>
           <Link
  href="/book-a-demo"
  className="ac-cta mt-1 flex items-center justify-center gap-2 rounded-[12px] px-5 py-3 text-[15px] font-semibold text-white"
  style={{ background: "var(--color-primary)" }}
>
    Book Demo
      <ArrowRight
    size={16}
    className="transition-transform duration-200 group-hover:translate-x-1"
  />
    </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

function Logo({ height = 40, className = "" }) {
  return (
    <a href="#" className={`flex shrink-0 items-center ${className}`}>
      <Image
        src="/Logos/Accuracore/AccuraCore.svg"
        alt="AccuraCore"
        width={220}
        height={height}
        style={{
          height: `${height}px`,
          width: "auto",
        }}
        priority
      />
    </a>
  );
}

function SolutionsMenu({ fontSize = "15px" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={`ac-sol relative ${open ? "open" : ""}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="ac-navlink ac-soltrig inline-flex items-center gap-[5px]"
        style={{ fontSize, fontWeight: 500, color: "var(--text-body)" }}
      >
        Solutions
        <ChevronDown size={15} />
      </button>

      <div
        className="ac-solmenu"
style={{
  opacity: open ? 1 : 0,
  pointerEvents: open ? "auto" : "none",
  transform: `translateY(${open ? 0 : -8}px)`,
}}
      >
        <span className="ac-solhead">Solutions</span>
        <div className="ac-solgrid">
          {SOLUTIONS.map(({ title, desc, icon: Icon, tone }) => (
            <a key={title} href="#" className="ac-megaitem">
              <span
                className="ac-megaicon"
                style={{
                  background:
                    tone === "orange"
                      ? "var(--ac-orange-500)"
                      : "var(--color-primary)",
                }}
              >
                <Icon size={18} color="#fff" />
              </span>
              <span className="ac-megatxt">
                <b>{title}</b>
                <small>{desc}</small>
              </span>
            </a>
          ))}
        </div>
        <div className="ac-solfoot">
          <span>One operating system for your whole business.</span>
          <a href="#">
            See pricing <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/*
   HERO */
function Hero() {
  return (
    <section
      className="ac-sec relative overflow-hidden"
      style={{ background: "var(--surface-hero)" }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] pt-10 sm:pt-14 lg:pt-16">
        <div className="animate-float-slow absolute left-0 top-0 hidden w-48 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl md:block">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
              <TrendingUp size={17} className="text-emerald-600" />
            </span>
            <div>
              <p className="text-[11px] font-medium text-slate-400">
                Active Jobs
              </p>
              <p className="text-base font-bold text-slate-800">1,284</p>
            </div>
          </div>
        </div>

        <div className="animate-float-slower absolute right-0 top-0 hidden w-52 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl md:block">
          <div className="flex items-center gap-2.5">
            <CircularProgress value={91} />
            <div>
              <p className="text-[11px] font-medium text-slate-400">
                Invoices Paid
              </p>
              <p className="text-base font-bold text-slate-800">$48.2M</p>
            </div>
          </div>
        </div>

        <div className="animate-float pointer-events-auto absolute left-[8%] top-[62%] hidden w-52 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1 md:flex">
          <div className="flex -space-x-2">
            <span className="h-6 w-6 rounded-full border-2 border-white bg-blue-500" />
            <span className="h-6 w-6 rounded-full border-2 border-white bg-orange-400" />
            <span className="h-6 w-6 rounded-full border-2 border-white bg-emerald-500" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700">Crew online</p>
            <p className="flex items-center gap-1 text-[11px] font-medium text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />8
              active now
            </p>
          </div>
        </div>

        <div className="animate-float-slow pointer-events-auto absolute right-[8%] top-[62%] hidden w-56 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1 md:flex">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100">
            <CheckSquare size={16} className="text-orange-500" />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-700">
              Estimate approved
            </p>
            <p className="text-[11px] font-medium text-slate-400">
              Naperville · Robert K.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4rem]">
            Built by a Contractor,
            <br />
            for{" "}
<span className="ac-gradanim">
  Contractors
</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-base md:text-lg">
            AccuraCore brings everything you need into one dashboard - manage
            your crew, track jobs, handle estimates and invoices, and stay in
            control of every project.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
           <Link
  href="/calculator"
  className="ac-cta group flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-slate-800 shadow-sm hover:border-slate-300 hover:shadow-md sm:w-auto"
>
  Check My Tech-Mess Cost
  <ArrowRight
    size={16}
    className="transition-transform duration-200 group-hover:translate-x-1"
  />
</Link>
<Link
  href="/book-a-demo"
  className="ac-cta group flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[15px] font-semibold text-white shadow-md sm:w-auto"
  style={{
    background: "var(--color-primary)",
    boxShadow: "var(--shadow-brand)",
  }}
>
  Book Demo
  <ArrowRight
    size={16}
    className="transition-transform duration-200 group-hover:translate-x-1"
  />
</Link>
          </div>
        </div>

        {/* Mobile-only stacked notification row */}
        <div className="mt-8 flex flex-col items-center gap-3 md:hidden">
          <div className="flex w-full max-w-xs items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-lg shadow-slate-900/5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <TrendingUp size={15} className="text-emerald-600" />
              </span>
              <div>
                <p className="text-[10px] font-medium text-slate-400">
                  Active Jobs
                </p>
                <p className="text-sm font-bold text-slate-800">1,284</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <CircularProgress value={91} small />
              <div>
                <p className="text-[10px] font-medium text-slate-400">
                  Invoices Paid
                </p>
                <p className="text-sm font-bold text-slate-800">$48.2M</p>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-xs items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-lg shadow-slate-900/5">
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full border-2 border-white bg-blue-500" />
              <span className="h-6 w-6 rounded-full border-2 border-white bg-orange-400" />
              <span className="h-6 w-6 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-700">
                Crew online
              </p>
              <p className="flex items-center gap-1 text-[11px] font-medium text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />8
                active now
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-xs items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-lg shadow-slate-900/5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100">
              <CheckSquare size={16} className="text-orange-500" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-700">
                Estimate approved
              </p>
              <p className="text-[11px] font-medium text-slate-400">
                Naperville · Robert K.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-[11px] font-semibold tracking-[0.2em]">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function CircularProgress({ value = 0, small = false }) {
  const size = small ? 30 : 36;
  const radius = small ? 12 : 15;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const center = size / 2;

  return (
    <span
      className="relative flex shrink-0 items-center justify-center"
      style={{ height: size, width: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#E5EEF5"
          strokeWidth="3"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span
        className={`absolute font-bold ${small ? "text-[8px]" : "text-[9px]"}`}
        style={{ color: "var(--color-primary)" }}
      >
        {value}%
      </span>
    </span>
  );
}

/*
   MARQUEE */
function Marquee() {
  return (
    <div
      className="ac-marquee-wrap overflow-hidden whitespace-nowrap"
      style={{
        background:
          "linear-gradient(90deg, rgba(17,97,165,0.13), rgba(17,97,165,0.06))",
        backdropFilter: "blur(14px) saturate(140%)",
        borderTop: "1px solid rgba(255,255,255,0.55)",
        borderBottom: "1px solid rgba(17,97,165,0.12)",
        padding: "15px 0",
      }}
    >
      <div
        className="ac-marquee inline-flex"
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center"
            style={{
              gap: "26px",
              padding: "0 26px",
              color: "var(--color-primary)",
              fontWeight: 700,
              fontSize: "19px",
              letterSpacing: "-0.01em",
            }}
          >
            {item}

            <span
              style={{
                color: "var(--ac-orange-500)",
                fontSize: "16px",
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function DeviceShowcase() {
  return (
<section
  className="relative overflow-hidden"
//   style={{ background: "var(--surface-page)" }}
>
      <div
        className="ac-sec relative z-[2] mx-auto max-w-[1180px]"
        style={{ perspective: "1900px" }}
      >
        {/* ambient glow */}
        <div
          className="ac-glowpulse pointer-events-none absolute left-1/2 top-[4%] z-0 h-[92%] w-[80%] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(rgba(17,97,165,0.34), rgba(250,140,61,0.16) 52%, transparent 72%)",
            filter: "blur(64px)",
          }}
        />

        {/* Floating notification chips */}
        <div
          className="ac-hfloat ac-anim-float2"
          style={{ left: "2.5%", top: "10%" }}
        >
          <span
            className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px]"
            style={{
              background: "var(--ac-success-bg)",
              color: "var(--ac-success)",
            }}
          >
            <Check size={17} strokeWidth={2.4} />
          </span>
          <div>
            <div
              className="text-[12.5px] font-bold"
              style={{ color: "var(--text-strong)" }}
            >
              Invoice #INV-204 paid
            </div>
            <div
              className="text-[11px]"
              style={{ color: "var(--ac-gray-500)" }}
            >
              $12,400 · 2m ago
            </div>
          </div>
        </div>

        <div
          className="ac-hfloat ac-anim-float3"
          style={{ left: "1%", bottom: "40%" }}
        >
          <span
            className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px]"
            style={{
              background: "var(--ac-orange-50)",
              color: "var(--ac-orange-600)",
            }}
          >
            <Camera size={17} />
          </span>
          <div>
            <div
              className="text-[12.5px] font-bold"
              style={{ color: "var(--text-strong)" }}
            >
              Job photo tagged
            </div>
            <div
              className="text-[11px]"
              style={{ color: "var(--ac-gray-500)" }}
            >
              Ridge cap · voice note
            </div>
          </div>
        </div>

        <div
          className="ac-hfloat ac-anim-float2-delay"
          style={{ right: "3%", top: "18%" }}
        >
          <span
            className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px]"
            style={{
              background: "var(--ac-blue-50)",
              color: "var(--color-primary)",
            }}
          >
            <FileCheck2 size={17} />
          </span>
          <div>
            <div
              className="text-[12.5px] font-bold"
              style={{ color: "var(--text-strong)" }}
            >
              Estimate approved
            </div>
            <div
              className="text-[11px]"
              style={{ color: "var(--ac-gray-500)" }}
            >
              Naperville · Robert K.
            </div>
          </div>
        </div>

        {/* Laptop mockup */}
        <div className="ac-anim-float relative z-[1]">
          <LaptopTilt>
            {/* contact shadow */}
            <div
              className="pointer-events-none absolute -bottom-10 left-[4%] right-[4%] z-0 h-[52px] rounded-full"
              style={{
                background:
                  "radial-gradient(rgba(13,21,34,0.26), transparent 68%)",
                filter: "blur(26px)",
              }}
            />

            <div
              className="ac-lap-rotate relative z-[1]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* screen shell */}
              <div
                className="rounded-t-[17px] rounded-b-[7px] p-[13px] pb-[15px]"
                style={{
                  background:
                    "linear-gradient(158deg, rgb(49,53,61), rgb(20,23,28))",
                  boxShadow:
                    "rgba(13,21,34,0.44) 0 44px 100px, rgba(255,255,255,0.09) 0 1px 0 inset, rgba(0,0,0,0.4) 0 0 0 1px inset",
                }}
              >
                <div
                  className="ac-devframe relative w-[700px] max-w-[78vw] overflow-hidden rounded-[6px]"
                  style={{
                    aspectRatio: "1800 / 1157",
                    background: "rgb(11,18,32)",
                    boxShadow: "rgba(255,255,255,0.06) 0 0 0 1px inset",
                  }}
                >
                  <span
                    className="absolute left-1/2 top-[6px] z-[5] h-[6px] w-[6px] -translate-x-1/2 rounded-full"
                    style={{
                      background: "rgb(10,13,18)",
                      boxShadow: "rgba(120,150,190,0.5) 0 0 2px inset",
                    }}
                  />

                 {/* Default Dashboard */}
<div className="absolute inset-0">
  <Image
    src="/Images/inside-laptop-dashboard1.png"
    alt="Dashboard"
    fill
    priority
    className="object-cover select-none"
    draggable={false}
  />
</div>

{/* Hover Dashboard */}
<div className="ac-devshot absolute inset-0">
  <Image
    src="/Images/inside-laptop-dashboard2.png"
    alt="Dashboard Preview"
    fill
    className="object-cover select-none"
    draggable={false}
  />
</div>

                  <span
                    className="ac-hovhint absolute bottom-3 right-3 z-[6] rounded-full px-3 py-[5px] text-[11px] font-bold text-white"
                    style={{
                      background: "rgba(9,42,74,0.5)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    Hover to preview Jobs
                  </span>
                  <div className="ac-sheen pointer-events-none absolute inset-0 z-[5]" />
                </div>
              </div>

              {/* laptop base / hinge */}
              <div
                className="relative left-1/2 h-[14px] -translate-x-1/2 rounded-[1px_1px_12px_12px]"
                style={{
                  width: "calc(100% + 40px)",
                  background:
                    "linear-gradient(rgb(215,219,225) 0%, rgb(174,180,189) 45%, rgb(127,134,143) 100%)",
                  borderRadius: "1px 1px 12px 12px",
                  boxShadow: "rgba(13,21,34,0.24) 0 16px 26px",
                }}
              >
                <div
                  className="absolute left-1/2 top-0 h-[8px] w-[150px] -translate-x-1/2 rounded-b-[11px]"
                  style={{
                    background:
                      "linear-gradient(rgba(13,21,34,0.28), rgba(13,21,34,0.03))",
                  }}
                />
              </div>
            </div>

            {/* phone mockup — kept for markup parity, hidden via .ac-herophone (display:none) */}
            <div
              className="ac-herophone ac-anim-phone-rotate absolute -left-[118px] bottom-[-56px] z-[4] h-[370px] w-[176px] rounded-[34px] p-[7px]"
              style={{
                background: "linear-gradient(rgb(22,31,48), rgb(13,21,34))",
                boxShadow: "rgba(13,21,34,0.5) 0 40px 74px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="ac-devframe relative flex h-full w-full flex-col overflow-hidden rounded-[28px]"
                style={{ background: "#fff" }}
              >

                {/* Hover Image */}
<div className="ac-devshot absolute inset-0 z-[5]">
  <Image
    src="/Images/inside-phone1.png"
    alt="Phone Preview"
    fill
    className="object-cover"
    draggable={false}
  />
</div>
                <div
                  className="absolute left-1/2 top-[9px] z-[6] h-[15px] w-[52px] -translate-x-1/2 rounded-full"
                  style={{ background: "rgb(13,21,34)" }}
                />
                <div
                  className="flex items-center justify-between px-[14px] pb-[3px] pt-[9px] text-[9px] font-bold"
                  style={{ color: "var(--text-strong)" }}
                >
                  <span>9:41</span>
                  <span className="inline-flex items-center gap-[3px]">
                    <span
                      className="inline-flex h-[8px] w-[15px] items-center rounded-[2px] border p-[1px]"
                      style={{ borderColor: "var(--text-strong)" }}
                    >
                      <span
                        className="h-full flex-1 rounded-[1px]"
                        style={{ background: "var(--text-strong)" }}
                      />
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-between px-[14px] pb-[10px] pt-[8px]">
                  <div>
                    <div
                      className="text-[8px]"
                      style={{ color: "var(--ac-gray-500)" }}
                    >
                      Good morning
                    </div>
                    <div
                      className="text-[15px] font-extrabold"
                      style={{ color: "var(--text-strong)" }}
                    >
                      Dashboard
                    </div>
                  </div>
                  <span
                    className="h-[30px] w-[30px] rounded-full"
                    style={{ background: "var(--ac-gradient-blue)" }}
                  />
                </div>
                <div className="flex-1 overflow-hidden px-3">
                  <div className="mb-[11px] flex gap-2">
                    <div
                      className="flex-1 rounded-xl px-[11px] py-[10px] text-white"
                      style={{ background: "var(--ac-gradient-blue)" }}
                    >
                      <div className="text-[17px] font-extrabold">2.6M</div>
                      <div className="text-[7.5px] opacity-85">Total Jobs</div>
                    </div>
                    <div
                      className="flex-1 rounded-xl px-[11px] py-[10px]"
                      style={{ background: "var(--ac-orange-50)" }}
                    >
                      <div
                        className="text-[17px] font-extrabold"
                        style={{ color: "var(--ac-orange-600)" }}
                      >
                        91%
                      </div>
                      <div
                        className="text-[7.5px]"
                        style={{ color: "var(--ac-gray-600)" }}
                      >
                        Invoice Paid
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 grid grid-cols-3 gap-2">
                    {[
                      { label: "Contacts", Icon: Users },
                      { label: "Jobs", Icon: Briefcase },
                      { label: "Tasks", Icon: ClipboardCheck },
                    ].map(({ label, Icon }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-[5px] rounded-[11px] border px-1 py-[9px]"
                        style={{
                          background: "#fbfcfd",
                          borderColor: "var(--border-subtle)",
                        }}
                      >
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full"
                          style={{
                            background: "var(--ac-blue-50)",
                            color: "var(--color-primary)",
                          }}
                        >
                          <Icon size={12} />
                        </span>
                        <span
                          className="text-[7.5px] font-semibold"
                          style={{ color: "var(--text-strong)" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mb-[7px] text-[11px] font-bold"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Recent Contacts
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-[11px] border bg-white p-2"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <span
                      className="h-7 w-7 shrink-0 rounded-full"
                      style={{ background: "var(--ac-gradient-blue)" }}
                    />
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-[9px] font-bold"
                        style={{ color: "var(--text-strong)" }}
                      >
                        Sarah Williams
                      </div>
                      <div
                        className="truncate text-[7px]"
                        style={{ color: "var(--ac-gray-500)" }}
                      >
                        89 West 192nd St, San Antonio
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between border-t px-[14px] py-[9px]"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--ac-gray-400)",
                  }}
                >
                  <Home size={14} style={{ color: "var(--color-primary)" }} />
                  <LayoutDashboard size={14} />
                  <Search size={14} />
                  <User size={14} />
                </div>
                <span
                  className="ac-hovhint absolute bottom-[56px] left-1/2 z-[6] -translate-x-1/2 whitespace-nowrap rounded-full px-[9px] py-[3px] text-[8px] font-bold text-white"
                  style={{ background: "rgba(9,42,74,0.55)" }}
                >
                  Hover →
                </span>
              </div>
            </div>
          </LaptopTilt>
        </div>
      </div>
    </section>
  );
}

function LaptopTilt({ children }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -9, y: px * 13 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative mx-auto w-fit"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {children}
    </div>
  );
}

function GlobalTokens() {
  return (
    <style jsx global>{`
      :root {
        /* ---- Brand: Blue (primary) ---- */
        --ac-blue-50: #eaf2fb;
        --ac-blue-100: #d3e3f5;
        --ac-blue-200: #a7c6eb;
        --ac-blue-300: #6ea3dc;
        --ac-blue-400: #3a80ca;
        --ac-blue-500: #1161a5;
        --ac-blue-600: #0d5390;
        --ac-blue-700: #0b4474;
        --ac-blue-800: #093658;
        --ac-blue-900: #06243b;

        /* ---- Brand: Orange (accent) ---- */
        --ac-orange-50: #fef1e7;
        --ac-orange-100: #fde0cb;
        --ac-orange-200: #fbc197;
        --ac-orange-300: #fba868;
        --ac-orange-400: #fa9a4f;
        --ac-orange-500: #fa8c3d;
        --ac-orange-600: #e9751f;
        --ac-orange-700: #c25d18;
        --ac-orange-800: #ad4d32;
        --ac-orange-900: #7d3415;

        /* ---- Neutrals (cool gray) ---- */
        --ac-white: #ffffff;
        --ac-gray-25: #fafbfc;
        --ac-gray-50: #f5f6f8;
        --ac-gray-100: #eef0f3;
        --ac-gray-150: #e8eaed;
        --ac-gray-200: #dce0e6;
        --ac-gray-300: #c2c8d1;
        --ac-gray-400: #9aa2af;
        --ac-gray-500: #7a828e;
        --ac-gray-600: #5b626d;
        --ac-gray-700: #3f454e;
        --ac-gray-800: #262b33;
        --ac-gray-900: #0f1729;

        /* ---- Semantic status ---- */
        --ac-success-bg: #e7f6ee;
        --ac-success: #1e9e57;
        --ac-success-700: #137a41;
        --ac-danger-bg: #fdeaed;
        --ac-danger: #ef4e63;
        --ac-danger-700: #c8324a;
        --ac-warning-bg: #fef1e7;
        --ac-warning: #f59423;
        --ac-info-bg: #e7f0fa;
        --ac-info: #1161a5;

        --ac-gradient-flame: linear-gradient(135deg, #ad4d32 0%, #fa8c3d 100%);
        --ac-gradient-blue: linear-gradient(135deg, #1161a5 0%, #0b4474 100%);

        --color-primary: var(--ac-blue-500);
        --color-primary-hover: var(--ac-blue-600);
        --color-primary-active: var(--ac-blue-700);
        --color-accent: var(--ac-orange-500);
        --color-accent-hover: var(--ac-orange-600);

        --text-strong: var(--ac-gray-900);
        --text-body: var(--ac-gray-700);
        --text-muted: var(--ac-gray-500);
        --text-on-brand: var(--ac-white);
        --text-link: var(--ac-blue-500);

        --surface-page: var(--ac-gray-50);
        --surface-card: var(--ac-white);
        --surface-sunken: var(--ac-gray-100);
        --surface-brand: var(--ac-blue-500);
        --surface-sidebar: var(--ac-blue-500);
        /* Shared light background — same gradient the Hero uses. Applied to
           every light/white section below (never the footer). */
        --surface-hero: linear-gradient(
          160deg,
          var(--ac-blue-50) 0%,
          #f4f7fb 45%,
          var(--ac-orange-50) 100%
        );

        --border-subtle: var(--ac-gray-150);
        --border-default: var(--ac-gray-200);
        --border-strong: var(--ac-gray-300);
        --border-focus: var(--ac-blue-400);

        --focus-ring: 0 0 0 3px rgba(17, 97, 165, 0.28);

        /* ---- Supplemental tokens needed by header/topbar ---- */
        --font-ui: "Inter", system-ui, -apple-system, sans-serif;
        --radius-lg: 20px;
        --radius-md: 12px;
        --shadow-brand: 0 10px 26px rgba(17, 97, 165, 0.32);
      }

      /* -------------------- shared section spacing (all breakpoints) -------------------- */
      /* Single source of truth for outer section padding. Top and bottom are
         always equal to each other at every breakpoint; only this scale changes
         between mobile / tablet / desktop / ultra-wide. */
      .ac-sec {
        padding: 96px 40px;
      }
      @media (max-width: 1024px) {
        .ac-sec {
          padding: 72px 32px;
        }
      }
      @media (max-width: 640px) {
        .ac-sec {
          padding: 56px 20px;
        }
      }
      @media (min-width: 1600px) {
        .ac-sec {
          padding: 128px 40px;
        }
      }

      /* -------------------- top bar shimmer + pulse -------------------- */
      .ac-barsheen {
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.22),
          transparent
        );
        animation: ac-barsheen 6s ease-in-out infinite;
      }
      @keyframes ac-barsheen {
        0% {
          transform: translateX(-120%);
        }
        100% {
          transform: translateX(420%);
        }
      }
      .ac-barpulse {
        box-shadow: rgba(250, 140, 61, 0.8) 0 0 8px 1px;
        animation: ac-barpulse 2s ease-in-out infinite;
      }
      @keyframes ac-barpulse {
        0%,
        100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.45);
          opacity: 0.55;
        }
      }
      .ac-cueflip {
        display: inline-block;
        animation: ac-cuefade 0.5s cubic-bezier(0.16, 0.9, 0.3, 1);
      }
      @keyframes ac-cuefade {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }

      /* -------------------- nav links -------------------- */
      .ac-navlink {
        position: relative;
        cursor: pointer;
        transition: color 0.2s ease;
        text-decoration: none;
      }
      .ac-navlink::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 2px;
        width: 0;
        background: var(--color-primary);
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .ac-navlink:hover {
        color: var(--color-primary) !important;
      }
      .ac-navlink:hover::after {
        width: 100%;
      }
      .ac-sol.open > .ac-soltrig {
        color: var(--color-primary) !important;
      }
      .ac-sol.open > .ac-soltrig::after {
        width: 100%;
      }
      .ac-soltrig svg {
        transition: transform 0.2s ease;
      }
      .ac-sol.open .ac-soltrig svg {
        transform: rotate(180deg);
      }

      /* -------------------- mega menu -------------------- */
.ac-solmenu {
  position: absolute;
  top: calc(100% + 16px);

  left: 0;
  transform: translateY(-8px);

  width: 640px;
  max-width: min(640px, calc(100vw - 48px));

  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: 18px;
  box-shadow: rgba(15, 23, 41, 0.16) 0 24px 48px;
  padding: 22px 24px;
  z-index: 999;
}
      .ac-solhead {
        display: block;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-bottom: 16px;
      }
      .ac-solgrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px 26px;
      }
      .ac-megaitem {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 6px;
        border-radius: 12px;
        text-decoration: none;
        transition: background 0.2s ease;
      }
      .ac-megaitem:hover {
        background: var(--ac-gray-50);
      }
      .ac-megaicon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        flex: 0 0 auto;
        transition: transform 0.2s ease;
      }
      .ac-megaitem:hover .ac-megaicon {
        transform: scale(1.08);
      }
      .ac-megatxt b {
        display: block;
        font-size: 13.5px;
        font-weight: 700;
        color: var(--text-strong);
      }
      .ac-megatxt small {
        display: block;
        margin-top: 2px;
        font-size: 12.5px;
        line-height: 1.4;
        color: var(--text-muted);
      }
      .ac-solfoot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-top: 18px;
        padding-top: 16px;
        border-top: 1px solid var(--border-subtle);
        font-size: 12.5px;
        color: var(--text-muted);
      }
      .ac-solfoot a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--color-primary);
        font-weight: 600;
        text-decoration: none;
      }
      .ac-solfoot a:hover {
        text-decoration: underline;
      }

      /* -------------------- buttons -------------------- */
.ac-cta {
  text-decoration: none;
  transition:
    transform 0.16s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.22s,
    background 0.2s,
    color 0.2s,
    border-color 0.2s,
    filter 0.2s;
  will-change: transform;
}

.ac-cta:hover {
  transform: translateY(-2px);
  filter: brightness(1.04);
}

.ac-cta:active {
  transform: translateY(0);
}
      .ac-loginlink {
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .ac-loginlink:hover {
        color: var(--color-primary) !important;
      }

      /* -------------------- hero float / marquee -------------------- */
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-8px);
        }
      }
      @keyframes float-slow {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      @keyframes float-slower {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-6px);
        }
      }
      
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      .animate-float-slow {
        animation: float-slow 5.5s ease-in-out infinite;
      }
      .animate-float-slower {
        animation: float-slower 6.5s ease-in-out infinite;
      }
      @keyframes ac-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.ac-marquee {
  animation: ac-marquee 30s linear infinite;
}

.ac-marquee-wrap:hover .ac-marquee {
  animation-play-state: paused;
}

    .ac-gradanim {
  display: inline-block;

  background-image: linear-gradient(
    90deg,
    var(--ac-orange-500) 0%,
    var(--color-primary) 50%,
    var(--ac-orange-500) 100%
  );

  background-size: 200% 100%;
  background-position: 0% 50%;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  animation: ac-gradmove 4.5s linear infinite;
}

@keyframes ac-gradmove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

      /* -------------------- device showcase -------------------- */
      .ac-hfloat {
        position: absolute;
        z-index: 3;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 1px solid var(--border-subtle);
        border-radius: 14px;
        box-shadow: 0 14px 34px rgba(17, 97, 165, 0.16);
        padding: 11px 14px;
        display: flex;
        align-items: center;
        gap: 11px;
        pointer-events: none;
      }
      @media (max-width: 1080px) {
        .ac-hfloat {
          display: none !important;
        }
      }

      .ac-devshot {
        opacity: 0;
        transition: opacity 0.55s cubic-bezier(0.16, 0.9, 0.3, 1);
        pointer-events: none;
        z-index: 4;
      }
      .ac-devframe:hover .ac-devshot {
        opacity: 1;
      }
      .ac-devframe .ac-hovhint {
        opacity: 1;
        transition: opacity 0.4s ease;
      }
      .ac-devframe:hover .ac-hovhint {
        opacity: 0;
      }
      .ac-sheen {
        background: linear-gradient(
          115deg,
          transparent 30%,
          rgba(255, 255, 255, 0.14) 48%,
          transparent 62%
        );
        background-size: 220% 220%;
        animation: ac-sheen-sweep 5s ease-in-out infinite;
      }
      @keyframes ac-sheen-sweep {
        0% {
          background-position: 120% -20%;
        }
        50% {
          background-position: -20% 120%;
        }
        100% {
          background-position: 120% -20%;
        }
      }

      @keyframes ac-glowpulse {
        0%,
        100% {
          opacity: 0.55;
          transform: translateX(-50%) scale(1);
        }
        50% {
          opacity: 0.85;
          transform: translateX(-50%) scale(1.06);
        }
      }
      .ac-glowpulse {
        animation: ac-glowpulse 7s ease-in-out infinite;
      }

      @keyframes ac-float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-14px);
        }
      }
      @keyframes ac-float2 {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      @keyframes ac-float3 {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-12px);
        }
      }
      @keyframes ac-lap-sway {
        0%,
        100% {
          transform: rotateZ(0deg);
        }
        50% {
          transform: rotateZ(0.6deg);
        }
      }
      @keyframes ac-phone-sway {
        0%,
        100% {
          transform: rotateZ(0deg);
        }
        50% {
          transform: rotateZ(-1.2deg);
        }
      }
      .ac-anim-float {
        animation: ac-float 7s ease-in-out infinite;
      }
      .ac-anim-float2 {
        animation: ac-float2 6.5s ease-in-out infinite;
      }
      .ac-anim-float3 {
        animation: ac-float3 7.5s ease-in-out infinite;
      }
      .ac-anim-float2-delay {
        animation: ac-float2 8s ease-in-out 0.6s infinite;
      }
      .ac-lap-rotate {
        animation: ac-lap-sway 16s ease-in-out infinite;
      }
      .ac-anim-phone-rotate {
        animation: ac-phone-sway 13s ease-in-out infinite;
      }
    `}</style>
  );
}
