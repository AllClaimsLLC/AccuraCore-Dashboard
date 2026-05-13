"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  Zap,
  Crown,
  Star,
  ShieldCheck,
  Users,
  Camera,
} from "lucide-react";

const plans = [
  {
    tier: "pro",
    name: "Pro",
    title: "MyAccuraCore Pro",
    base: 99,
    addon: 150,
    users: "10 users",
    label: "Up to",
    perUser: "$30",
    icon: FileText,
    features: [
      "Up to 10 users included",
      "Core AccuraCore platform",
      "Jobs, Contacts, Financials, Work Orders",
      "Email support",
    ],
    button: "Get Started",
  },
  {
    tier: "plus",
    name: "Plus",
    title: "MyAccuraCore Plus",
    base: 199,
    addon: 250,
    users: "11 – 25 users",
    label: "For",
    perUser: "$25",
    icon: Zap,
    features: [
      "11 – 25 users covered",
      "Everything in Pro",
      "Tasks, Workflows, Dashboards",
      "Priority email support",
    ],
    button: "Get Started",
  },
  {
    tier: "gold",
    name: "Gold",
    title: "MyAccuraCore Gold",
    base: 299,
    addon: 350,
    users: "26 – 50 users",
    label: "For",
    perUser: "$20",
    icon: Crown,
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
    tier: "platinum",
    name: "Platinum",
    title: "MyAccuraCore Platinum",
    base: 499,
    addon: 500,
    users: "51 – 99 users",
    label: "For",
    perUser: "$15",
    icon: Star,
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
    addon: 750,
    users: "100+ users",
    label: "For",
    perUser: "$15",
    icon: ShieldCheck,
    features: [
      "100+ users supported",
      "Everything in Platinum",
      "White-glove migration",
      "SLA + 24/7 support",
      "Enterprise security & SSO",
    ],
    button: "Talk to Sales",
  },
];

export default function Pricing() {
  const [addonEnabled, setAddonEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* TOGGLE */}
        <div
          className={`flex flex-col items-center gap-4 transition-all duration-1000 ease-out ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
            + Optional add-on
          </div>

          <button
            onClick={() => setAddonEnabled(!addonEnabled)}
            className={`group relative inline-flex items-center gap-4 rounded-full border px-[22px] py-[14px] pl-[18px] transition-all duration-300 ${
              addonEnabled
                ? "border-blue-600 bg-gradient-to-br from-white to-[#f3f6ff] shadow-[0_0_0_4px_rgba(42,78,255,.08),0_10px_30px_-10px_rgba(42,78,255,.25)]"
                : "border-slate-200 bg-white shadow-[0_10px_30px_-15px_rgba(15,23,42,.15)]"
            }`}
          >
            <span
              className={`grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-blue-600 to-cyan-400 text-white transition-all duration-500 ${
                addonEnabled ? "-rotate-6 scale-110" : ""
              }`}
            >
              <Camera className="h-[18px] w-[18px]" />
            </span>

            <span className="flex flex-col text-left">
              <span className="text-[14.5px] font-bold tracking-[-0.01em] text-slate-900">
                Add MyAccuraCore
              </span>
              <span className="text-[12.5px] text-slate-500">
                Mobile capture · field crew app
              </span>
            </span>

            <span
              className={`relative h-7 w-12 rounded-full transition-all duration-300 ${
                addonEnabled ? "bg-blue-600" : "bg-slate-200"
              }`}
            >
              <span
                className={`absolute top-[3px] left-[3px] h-[22px] w-[22px] rounded-full bg-white shadow-md transition-all duration-300 ${
                  addonEnabled ? "translate-x-5" : ""
                }`}
              />
            </span>

            <span
              className={`rounded-md bg-emerald-50 px-[10px] py-[5px] font-mono text-[11px] font-semibold text-emerald-600 transition-all duration-300 ${
                addonEnabled
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            >
              + ADD-ON
            </span>
          </button>
        </div>

        {/* PRICING GRID */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = addonEnabled
              ? plan.base + plan.addon
              : plan.base;

            return (
              <article
                key={plan.tier}
                className={`group relative flex flex-col overflow-hidden rounded-[22px] border p-6 pt-[30px] transition-all duration-500 ease-out ${
                  mounted
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-10 scale-95 opacity-0"
                } ${
                  plan.tier === "gold"
                    ? "translate-y-0 border-yellow-600/30 bg-gradient-to-b from-[#fffdf5] to-white shadow-[0_25px_60px_-15px_rgba(212,160,23,.35)] hover:-translate-y-5 hover:scale-[1.02]"
                    : "border-slate-200 bg-white shadow-[0_10px_30px_-15px_rgba(15,23,42,.15)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,.22)]"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* SHIMMER */}
                <span className="pointer-events-none absolute inset-y-0 left-[-30%] z-[1] w-[60%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[280%]" />

                {/* ACCENT */}
                <span
                  className={`absolute left-0 top-0 h-1 w-full origin-left scale-x-100 ${
                    plan.tier === "pro"
                      ? "bg-gradient-to-r from-slate-500 to-slate-400"
                      : plan.tier === "plus"
                      ? "bg-gradient-to-r from-blue-600 to-blue-400"
                      : plan.tier === "gold"
                      ? "bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"
                      : plan.tier === "platinum"
                      ? "bg-gradient-to-r from-slate-600 to-slate-400"
                      : "bg-gradient-to-r from-slate-900 to-slate-700"
                  }`}
                />

                {/* GOLD BORDER */}
                {plan.tier === "gold" && (
                  <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-yellow-400/40" />
                )}

                {/* POPULAR */}
                {plan.popular && (
                  <>
                    <div className="absolute left-1/2 top-[-14px] z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300 px-4 py-[7px] text-[11px] font-bold uppercase tracking-[0.08em] text-[#3a2906] shadow-[0_8px_20px_-4px_rgba(212,160,23,.55)] animate-[pulse_2.4s_ease-in-out_infinite]">
                      <Crown className="h-3 w-3 fill-current" />
                      Most Popular
                    </div>

                    <span className="absolute right-[18%] top-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-300 blur-[1px]" />
                    <span className="absolute bottom-[30%] left-[15%] h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-300 blur-[1px]" />
                    <span className="absolute left-[25%] top-[40%] h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-300 blur-[1px]" />
                    <span className="absolute bottom-[18%] right-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-300 blur-[1px]" />
                  </>
                )}

                {/* ICON */}
                <div
                  className={`relative mb-4 grid h-12 w-12 place-items-center rounded-[14px] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                    plan.tier === "pro"
                      ? "bg-slate-500/10 text-slate-500"
                      : plan.tier === "plus"
                      ? "bg-blue-600/10 text-blue-600"
                      : plan.tier === "gold"
                      ? "bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-700 shadow-[0_6px_20px_-6px_rgba(212,160,23,.4)]"
                      : plan.tier === "platinum"
                      ? "bg-slate-600/10 text-slate-600"
                      : "bg-slate-900/10 text-slate-900"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
                  {plan.name}
                </div>

                <h3 className="mt-2 text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-slate-900">
                  {plan.title}
                </h3>

                {/* USERS */}
                <div
                  className={`mt-4 flex items-center gap-2 rounded-[10px] border p-[10px_12px] ${
                    plan.tier === "gold"
                      ? "border-yellow-500/20 bg-yellow-100/40"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <span className="grid h-6 w-6 place-items-center rounded-md text-slate-500">
                    <Users className="h-[14px] w-[14px]" />
                  </span>

                  <span className="font-mono text-[11px] tracking-[0.05em] text-slate-400">
                    {plan.label}
                  </span>

                  <span className="ml-auto text-[13px] font-bold text-slate-900">
                    {plan.users}
                  </span>
                </div>

                {/* PRICE */}
                <div className="relative mt-6">
                  <span
                    className={`absolute right-0 top-0 inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.05em] text-blue-600 transition-all duration-300 ${
                      addonEnabled
                        ? "translate-x-0 scale-100 opacity-100"
                        : "translate-x-2 scale-90 opacity-0"
                    }`}
                  >
                    + MyAccuraCore
                  </span>

                  <div
                    className={`inline-flex items-end gap-1 text-[46px] font-extrabold leading-none tracking-[-0.035em] ${
                      plan.tier === "gold"
                        ? "bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-300 bg-clip-text text-transparent"
                        : "text-slate-900"
                    }`}
                  >
                    <span>$</span>
                    <span>{price}</span>
                    <span className="ml-1 text-sm font-medium text-slate-500">
                      /mo
                    </span>
                  </div>

                  <div className="mt-1.5 text-[12.5px] text-slate-500">
                    +{" "}
                    <span className="font-semibold text-slate-900">
                      {plan.perUser}
                    </span>{" "}
                    per additional user
                  </div>
                </div>

                {/* FEATURES */}
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.4] text-slate-500"
                    >
                      <span
                        className={`mt-[2px] grid h-[18px] w-[18px] flex-shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:scale-110 ${
                          plan.tier === "gold"
                            ? "bg-yellow-100"
                            : "bg-emerald-50"
                        }`}
                      >
                        <Check
                          className={`h-[10px] w-[10px] ${
                            plan.tier === "gold"
                              ? "text-yellow-700"
                              : "text-emerald-600"
                          }`}
                          strokeWidth={3.5}
                        />
                      </span>

                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-[18px] py-[14px] text-sm font-semibold tracking-[-0.005em] transition-all duration-300 ${
                    plan.tier === "pro"
                      ? "border border-slate-300 bg-white text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                      : plan.tier === "plus"
                      ? "border border-blue-600 bg-white text-blue-600 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,.45)]"
                      : plan.tier === "gold"
                      ? "bg-gradient-to-br from-yellow-500 to-yellow-300 text-[#3a2906] shadow-[0_8px_20px_-6px_rgba(212,160,23,.5)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(212,160,23,.7)]"
                      : plan.tier === "platinum"
                      ? "bg-gradient-to-br from-slate-600 to-slate-500 text-white hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(71,85,105,.55)]"
                      : "bg-gradient-to-br from-slate-900 to-slate-700 text-white hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(15,23,42,.55)]"
                  }`}
                >
                  {plan.button}
                  <ArrowRight className="h-[14px] w-[14px] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}