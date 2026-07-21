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
import FaqSection from "@/components/FaqSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import NewFooter from "@/components/NewFooter";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = {
  "Our Story": "/our-story",
  Pricing: "/pricing",
  Contact: "/book-a-demo",
  "Contact Us": "/book-a-demo",
};

const SOLUTIONS = [
  {
    title: "AccuraCam",
    desc: "Snap & voice-tag photos straight to the job.",
    icon: Camera,
    tone: "orange",
    href: "/accuracam",
  },
  {
    title: "MyAccuraCore",
    desc: "Run your whole operation from one system.",
    icon: LayoutGrid,
    tone: "blue",
    href: "/my-accuracore",
  },
  {
    title: "AccuraCore Claims",
    desc: "Submission-grade claims, structured at the source.",
    icon: ShieldCheck,
    tone: "blue",
    href: "/accuracore-claims",
  },
  {
    title: "Workflow Automation",
    desc: "Stage-based control so no step gets skipped.",
    icon: RefreshCw,
    tone: "orange",
    href: "/workflow-automation",
  },
  {
    title: "Roof Calculations",
    desc: "Instant roof measurements & material estimates.",
    icon: Home,
    tone: "blue",
    href: "/roof-calculations",
  },
  {
    title: "Weather Reports",
    desc: "Verified, date-stamped storm data per job.",
    icon: Cloud,
    tone: "orange",
    href: "/weather-reports",
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

export default function HomePage() {
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
      {/* <GlobalTokens /> */}
    </div>
  );
}

/* TOP BAR + HEADER */
function TopBarAndHeader() {
  const [cueIndex, setCueIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

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
      {/* Top Bar */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-2.5 text-center md:flex-row md:gap-2"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,42,74,0.82), rgba(17,97,165,0.66) 55%, rgba(9,42,74,0.82))",
          backdropFilter: "blur(18px) saturate(150%)",
          borderBottom: "1px solid rgba(255,255,255,0.14)",
          color: "#fff",
        }}
      >
        <span className="ac-barsheen pointer-events-none absolute bottom-0 left-0 top-0 w-[30%]" />

        {/* Desktop Indicator */}
        <span
          className="ac-barpulse hidden sm:block h-[6px] w-[6px] shrink-0 rounded-full"
          style={{ background: "var(--ac-orange-500)" }}
        />

        {/* Heading */}
        <span className="text-[13.5px] font-semibold text-white">
          First 90 Days <span className="font-extrabold">FREE</span>
        </span>

        {/* Divider (Desktop only) */}
        <span className="hidden opacity-40 md:block">·</span>

        {/* Animated Text */}
        <span className="relative mt-0.5 inline-flex items-center justify-center text-center text-[13.5px] font-medium md:mt-0">
          <span key={cueIndex} className="ac-cueflip inline-block">
            {CUE_MESSAGES[cueIndex]}
          </span>
        </span>
      </div>

      {/* HEADER */}
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
                href={NAV_LINKS[l]}
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

      {/* IN-FLOW GLASS HEADER */}
      <header
        className="mt-4 sticky top-0 z-30 mx-3 flex h-[64px] items-center gap-5 rounded-[18px] px-4 sm:mx-6 sm:gap-7 md:relative md:mx-6 md:mt-3.5 md:h-[76px] md:gap-9 md:px-8 lg:mx-6"
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
              href={NAV_LINKS[l]}
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
            href="https://app.accuracore.com"
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
          className="absolute left-0 right-0 top-full mt-2 grid overflow-hidden rounded-2xl border transition-[grid-template-rows,opacity] duration-300 lg:hidden"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border-subtle)",
            boxShadow: "0 20px 40px rgba(15,23,41,0.14)",
            gridTemplateRows: mobileNavOpen ? "1fr" : "0fr",
            opacity: mobileNavOpen ? 1 : 0,
            pointerEvents: mobileNavOpen ? "auto" : "none",
          }}
        >
          <div
            className="min-h-0 overflow-y-auto"
            style={{ maxHeight: "calc(-140px + 114dvh)" }}
          >
            <div className="flex flex-col gap-1 p-3">
              {/* Solutions — collapsible, same icon/bg treatment as desktop mega menu */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors"
                  style={{
                    color: mobileSolutionsOpen
                      ? "var(--color-primary)"
                      : "var(--text-body)",
                  }}
                >
                  Solutions
                  <ChevronDown
                    size={16}
                    style={{
                      transition: "transform 0.2s ease",
                      transform: mobileSolutionsOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </button>

                <div
                  className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: mobileSolutionsOpen ? "1fr" : "0fr",
                    opacity: mobileSolutionsOpen ? 1 : 0,
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="mt-1 flex flex-col gap-0.5 rounded-xl p-2"
                      style={{ background: "var(--ac-gray-50)" }}
                    >
                      {SOLUTIONS.map(
                        ({ title, desc, icon: Icon, tone, href }) => (
                          <a key={title} href={href} className="ac-megaitem">
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
                        ),
                      )}

                      {["Our Story", "Pricing", "Contact Us"].map((l) => (
                        <a
                          key={l}
                          href={NAV_LINKS[l]}
                          className="rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors"
                          style={{ color: "var(--text-body)" }}
                        >
                          {l}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {["Our Story", "Pricing", "Contact Us"].map((l) => (
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
                href="https://app.accuracore.com"
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
          {SOLUTIONS.map(({ title, desc, icon: Icon, tone, href }) => (
            <a key={title} href={href} className="ac-megaitem">
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
          <a href="/pricing">
            See pricing <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* HERO */
function Hero() {
  return (
    <section
      className="ac-sec relative overflow-hidden"
      style={{ background: "var(--surface-hero)" }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] pt-10 sm:pt-14 lg:pt-16">
        {/* DESKTOP floating cards */}
        <div
          className="animate-float-slow absolute left-0 top-0 hidden w-40 rounded-2xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] p-3.5  transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl md:block"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f6ee]">
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

        <div
          className="animate-float-slower absolute right-0 top-0 hidden w-52 rounded-2xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] p-3.5  transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl md:block"
        >
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

        <div
          className="animate-float pointer-events-auto absolute left-[8%] top-[75%] hidden w-52 items-center gap-3 rounded-2xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] px-4 py-2.5  transition-transform duration-300 hover:-translate-y-1 md:flex"
        >
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

        <div
          className="animate-float-slow pointer-events-auto absolute right-[8%] top-[75%] hidden w-56 items-center gap-3 rounded-2xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] px-4 py-2.5  transition-transform duration-300 hover:-translate-y-1 md:flex"
        >
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

        {/* ---------- Heading wrapper: relative + mobile-only floating cards ---------- */}
        <div className="relative mx-auto max-w-3xl pb-16 pt-16 text-center sm:pb-0 sm:pt-0 md:pb-0 md:pt-0">
          {/* MOBILE-ONLY */}
          <div
            className="ac-anim-float2 pointer-events-none absolute -top-2 left-0 flex w-[124px] items-center gap-2 rounded-xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] p-2  md:hidden"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7f6ee]">
              <TrendingUp size={13} className="text-emerald-600" />
            </span>
            <div className="min-w-0 text-left">
              <p className="truncate text-[9px] font-medium text-slate-400">
                Active Jobs
              </p>
              <p className="text-[12px] font-bold text-slate-800">1,284</p>
            </div>
          </div>

          <div
            className="ac-anim-float3 pointer-events-none absolute -top-2 right-0 flex w-[124px] items-center gap-2 rounded-xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] p-2  md:hidden"
          >
            <CircularProgress value={91} small />
            <div className="min-w-0 text-left">
              <p className="truncate text-[9px] font-medium text-slate-400">
                Invoices Paid
              </p>
              <p className="text-[12px] font-bold text-slate-800">$48.2M</p>
            </div>
          </div>

          <div
            className="ac-anim-float pointer-events-none absolute -bottom-2 left-0 flex w-[124px] items-center gap-2 rounded-xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] p-2  md:hidden"
          >
            <div className="flex shrink-0 -space-x-1.5">
              <span className="h-5 w-5 rounded-full border-2 border-white bg-blue-500" />
              <span className="h-5 w-5 rounded-full border-2 border-white bg-orange-400" />
              <span className="h-5 w-5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div className="min-w-0 text-left">
              <p className="truncate text-[9px] font-semibold text-slate-700">
                Crew online
              </p>
              <p className="flex items-center gap-1 text-[9px] font-medium text-emerald-500">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                8 active
              </p>
            </div>
          </div>

          <div
            className="ac-anim-float2-delay pointer-events-none absolute -bottom-2 right-0 flex w-[124px] items-center gap-2 rounded-xl
border border-white/75
bg-[linear-gradient(150deg,rgba(255,255,255,0.72),rgba(255,255,255,0.40))]
backdrop-blur-[16px]
backdrop-saturate-[140%]
shadow-[0_20px_46px_rgba(17,97,165,0.16),inset_0_1px_0_rgba(255,255,255,0.7)] p-2  md:hidden"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-100">
              <CheckSquare size={13} className="text-orange-500" />
            </span>
            <div className="min-w-0 text-left">
              <p className="truncate text-[9px] font-semibold text-slate-700">
                Estimate OK
              </p>
              <p className="truncate text-[9px] font-medium text-slate-400">
                Naperville
              </p>
            </div>
          </div>

          <h1 className="text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4rem]">
            Built by a Contractor,
            <br />
            for <span className="ac-gradanim">Contractors</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-base md:text-lg">
            AccuraCore brings everything you need into one dashboard - manage
            your crew, track jobs, handle estimates and invoices, and stay in
            control of every project.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/calculator"
              className="ac-cta-c group flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-slate-800 shadow-sm sm:w-auto"
            >
              Check My Tech-Mess Cost
              <ArrowRight
                size={16}
                className="transition-all duration-200 group-hover:translate-x-1"
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
  const size = small ? 36 : 44;
  const radius = small ? 15 : 18;
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
          strokeWidth="5"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <span
        className={`absolute font-bold ${
          small ? "text-[10px]" : "text-[12px]"
        }`}
        style={{ color: "var(--color-primary)" }}
      >
        {value}%
      </span>
    </span>
  );
}

/* MARQUEE */
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
      <div className="ac-marquee inline-flex">
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

// Section 2 Devices Showcase
function DeviceShowcase() {
  return (
    <section
      className="relative "
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
          style={{ right: "3%", bottom: "18%" }}
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
                  className="ac-devframe relative w-[700px] max-w-[72vw] overflow-hidden rounded-[6px] md:max-w-[78vw]"
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
                  <div
                    className="absolute inset-0"
                    style={{ transform: "translateZ(0)" }}
                  >
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
                className="ac-lap-hinge relative left-1/2 h-[14px] -translate-x-1/2 rounded-[1px_1px_12px_12px]"
                style={{
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

            {/* phone mockup */}
            <div
              className="ac-herophone ac-anim-phone-rotate absolute -left-[118px] bottom-[-56px] z-[4] hidden h-[370px] w-[176px] rounded-[34px] p-[7px] md:block"
              style={{
                background: "linear-gradient(rgb(22,31,48), rgb(13,21,34))",
                boxShadow: "rgba(13,21,34,0.5) 0 40px 74px",
                transformStyle: "preserve-3d",
                transform: "rotate(-8deg)",
                transformOrigin: "bottom center",
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
  const rafId = useRef(null);
  const canHoverRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => (canHoverRef.current = mq.matches);
    apply();
    mq.addEventListener
      ? mq.addEventListener("change", apply)
      : mq.addListener(apply);
    return () =>
      mq.removeEventListener
        ? mq.removeEventListener("change", apply)
        : mq.removeListener(apply);
  }, []);

  const handleMove = (e) => {
    if (!canHoverRef.current) return; // touch devices: no tilt, no flicker
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: py * -9, y: px * 13 });
    });
  };

  const reset = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setTilt({ x: 0, y: 0 });
  };

  useEffect(
    () => () => rafId.current && cancelAnimationFrame(rafId.current),
    [],
  );

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
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
