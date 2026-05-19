"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  Zap,
  Crown,
  PartyPopper,
  Star,
  ShieldCheck,
  Users,
  Camera,
} from "lucide-react";
import { Button } from "./ui/button";
import useFadeIn from "@/lib/useFadeIn";
import JobsContactsIcon from "@/public/Icons/PricingPage/Jobs & Contacts.svg";
import EstimatesInvoicingIcon from "@/public/Icons/PricingPage/Estimates & Invoicing.svg";
import LiveDashboardsIcon from "@/public/Icons/PricingPage/Live Dashboards.svg";
import ClaimsModuleIcon from "@/public/Icons/PricingPage/Claims Module.svg";
import Image from "next/image";

const plans = [
  {
    tier: "pro",
    name: "Pro",
    title: "MyAccuraCore Pro",
    base: 99,
    addon: 249,
    users: "Up to 10 users",
    label: "Up to",
    perUser: "$30",
    icon: "/Icons/PricingPage/MyAccuraCore Pro.svg",
    features: [
      "Up to 10 users included",
      "Core AccuraCore platform",
      "Jobs, Contacts, Financials, Work Orders",
      "Email support",
    ],
    button: "Get Started",
  },

    {
    tier: "gold",
    name: "Gold",
    title: "MyAccuraCore Gold",
    base: 299,
    addon: 649,
    users: "26 – 50 users",
    label: "For",
    perUser: "$20",
    icon: "/Icons/PricingPage/MyAccuraCore Gold.svg",
    popular: true,
    features: [
      "26 – 50 users covered",
      "Everything in Plus",
      "Advanced analytics & reporting",
      "Phone + chat support",
      "Custom onboarding session",
    ],
    button: "Get Started",
  },

  {
    tier: "plus",
    name: "Plus",
    title: "MyAccuraCore Plus",
    base: 199,
    addon: 449,
    users: "11 – 25 users",
    label: "For",
    perUser: "$25",
    icon: "/Icons/PricingPage/MyAccuraCore Plus.svg",
    features: [
      "11 – 25 users covered",
      "Everything in Pro",
      "Tasks, Workflows, Dashboards",
      "Priority email support",
    ],
    button: "Get Started",
  },



  {
    tier: "platinum",
    name: "Platinum",
    title: "MyAccuraCore Platinum",
    base: 499,
    addon: 999,
    users: "51 – 99 users",
    label: "For",
    perUser: "$15",
    icon: "/Icons/PricingPage/MyAccuraCore Platinum.svg",
    features: [
      "51 – 99 users covered",
      "Everything in Gold",
      "Dedicated account manager",
      "API access + integrations",
      "Custom workflows",
    ],
    button: "Get Started",
  },

  {
    tier: "titanium",
    name: "Titanium",
    title: "MyAccuraCore Titanium",
    base: 799,
    addon: 1549,
    users: "100+ users",
    label: "For",
    perUser: "$15",
    icon: "/Icons/PricingPage/MyAccuraCore Titanium.svg",
    features: [
      "100+ users supported",
      "Everything in Platinum",
      "White-glove migration",
      "SLA + 24/7 support",
      "Enterprise security & SSO",
    ],
    button: "Get Started",
  },
];
export default function Pricing({ addonEnabled, setIsOpen }) {
  useFadeIn();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const orderedPlans = [
    plans.find((p) => p.tier === "pro"),
    plans.find((p) => p.tier === "gold"),
    plans.find((p) => p.tier === "plus"),
    plans.find((p) => p.tier === "platinum"),
    plans.find((p) => p.tier === "titanium"),
  ];

  const formatFeature = (text) => {
    const regex = /(\d+\s*[-–+]?\s*\d*\susers)/g;

    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="font-semibold text-black">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  };

  return (
    <section className="relative bg-[#fbf0ec] pt-5 pb-20 sm:py-20 z-20">
      <div className="mx-auto max-w-7xl px-5 relative">
        {/* PRICING GRID */}
        <div className="flex flex-wrap justify-center gap-6 relative z-30 sm:mt-[-20%]">
          {orderedPlans.map((plan, index) => {
            const Icon = plan.icon;
            const price = addonEnabled ? plan.addon : plan.base;

            return (
              <article
                key={plan.tier}
                className={`w-full max-w-sm relative flex flex-col rounded-[22px] bg-white p-6 pt-[30px] transition-all duration-500 ease-out ${
                  plan.tier === "gold"
                    ? "shadow-[inset_12px_0_18px_rgba(250,140,61,0.10),inset_-12px_0_18px_rgba(250,140,61,0.10)]"
                    : ""
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* SHIMMER */}
                {/* <span className="pointer-events-none absolute inset-y-0 left-[-30%] z-[0] w-[60%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[280%]" /> */}

                {/* GOLD BORDER */}
                {plan.tier === "gold" && (
                  <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-[#FA8C3D]" />
                )}

                {/* POPULAR */}
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 z-[999] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-[#FF4D4D] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_25px_rgba(255,77,77,0.45)]">
                    <Crown className="h-3.5 w-3.5 fill-current text-white" />
                    Most Popular
                  </div>
                )}

                {/* ICON */}
                <div className="relative mb-4 grid h-12 w-12 place-items-center rounded-[14px] bg-[#f5f7f4] text-black shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                 <Image
  src={plan.icon}
  alt={plan.name}
  width={24}
  height={24}
/>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FA8C3D]">
                  {plan.name}
                </div>

                <h3 className="mt-2 text-[22px] font-[500] leading-[1.15] tracking-[-0.02em] text-black">
                  {plan.title}
                </h3>

                {/* USERS */}
                <div className="mt-4 flex items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-50 p-[10px_12px]">
                  <span className="grid h-6 w-6 place-items-center rounded-md text-slate-500">
                    <Users className="h-[14px] w-[14px]" />
                  </span>

                  <span className="text-[11px] tracking-[0.05em] text-slate-400">
                    {plan.label}
                  </span>

                  <span className="ml-auto text-[13px] text-slate-900">
                    {plan.users}
                  </span>
                </div>

                {/* PRICE */}
                <div className="relative mt-6">
                  <span
                    className={`absolute right-0 top-0 inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold tracking-[0.05em] text-blue-600 transition-all duration-300 ${
                      addonEnabled
                        ? "translate-x-0 scale-100 opacity-100"
                        : "translate-x-2 scale-90 opacity-0"
                    }`}
                  >
                    + MyAccuraCore
                  </span>

                  <div className="mt-6 flex items-end justify-between">
                    {/* PRICE LEFT */}
                    <div className="flex items-end gap-1 text-[46px] font-extrabold leading-none tracking-[-0.035em] text-black">
                      <span>$</span>
                      <span>{price}</span>
                      <span className="ml-1 text-[25px] font-medium text-black">
                        /mo
                      </span>
                    </div>

                    {/* PER USER RIGHT */}
                    <div className="text-right text-[12.5px] text-slate-500">
                      +{" "}
                      <span className="text-black font-medium">
                        {plan.perUser}
                      </span>
                      <br />
                      per user
                    </div>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="mt-6 rounded-[15px] bg-[#f6f6f6] p-4">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[13.5px] leading-[1.4] text-slate-500"
                      >
                        <span className="grid h-[22px] w-[22px] flex-shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:scale-110">
  <Image
    src="/Icons/PricingPage/Tick.svg"
    alt="Tick"
    width={22}
    height={22}
  />
</span>

                        <span className="text-sm text-gray-600">
                          {formatFeature(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  className="mt-6 w-full rounded-full border-2 border-gray-300 text-md transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: "#0261a3",
                    color: "white",
                    padding: "27px 15px",
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  {plan.button}

                  <img
                    src="/Icons/arrow-right.png"
                    alt="Arrow Icon"
                    className="ml-2 h-3 w-2"
                  />
                </Button>
              </article>
            );
          })}
        </div>
      </div>

      <div className="fade-up mx-auto w-[90%]">
        <div className="space-y-12 mt-10">
          {/* First Row - Heading */}
          <div className="text-left" style={{ marginTop: "5rem" }}>
            <h3
              className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[25px] md:text-[30px]
          "
            >
              Every Plan Includes{" "}
              <span className="text-[#FA8C3D]">The Full AccuraCore Suite</span>
            </h3>

            <p className="text-md text-gray-700 mb-8 leading-relaxed mt-4 animate-fadeUp">
              Pick the plan that fits your crew today. Upgrade anytime as you
              grow.
            </p>
          </div>

          {/* Second Row - 3 Columns */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
  {
    title: "Jobs & Contacts",
    desc: "One source of truth for every client, vendor, crew member, and job.",
    icon: JobsContactsIcon,
  },
  {
    title: "Estimates & Invoicing",
    desc: "Audit-ready financials with built-in approvals and payment links.",
    icon: EstimatesInvoicingIcon,
  },
  {
    title: "Live Dashboards",
    desc: "Real-time KPIs, anomaly alerts, and forecasting on one screen.",
    icon: LiveDashboardsIcon,
  },
  {
    title: "Claims Module",
    desc: "Inspection-to-payout pipeline with photo evidence trails.",
    icon: ClaimsModuleIcon,
  },
].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#0061A5] flex items-center justify-center">
                  <Image
  src={item.icon}
  alt={item.title}
  width={25}
  height={25}
/>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
