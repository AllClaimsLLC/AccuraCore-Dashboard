"use client";
import { useState } from "react";
import useFadeIn from "@/lib/useFadeIn";
import Image from "next/image";
import { Star } from "lucide-react";

const features = [
  "User capacity",
  "Per-additional-user",
  "Core platform",
  "Advanced analytics",
  "Phone + chat support",
  "Dedicated account manager",
  "API access + integrations",
  "SSO + enterprise security",
  "24/7 SLA support",
];

const plans = [
  {
    name: "PRO",
    values: ["10", "$30", false, false, false, false, false, false, false],
    highlight: false,
  },
  {
    name: "PLUS",
    values: ["25", "$25", false, false, false, false, false, false, false],
    highlight: false,
  },
  {
    name: "GOLD",
    values: ["50", "$20", true, true, true, false, false, false, false],
    highlight: true,
  },
  {
    name: "PLATINUM",
    values: ["99", "$15", true, true, true, true, true, false, false],
    highlight: false,
  },
  {
    name: "TITANIUM",
    values: ["100+", "$15", true, true, true, true, true, true, true],
    highlight: false,
  },
];

export default function CompareThePlans() {
  const [openIndex, setOpenIndex] = useState(null);
  useFadeIn();

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-10 lg:px-6 md:pt-16 md:pb-14">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/UnstructuredDocumentationCostsMoney-bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      <div className="fade-up mx-auto max-w-[95%] px-3 md:px-4">
        {/* HEADING */}
        <div className="mb-8 text-center md:mb-12">
          <h3
            className="
            text-white
            font-[400]
            leading-[1.2]
            text-[22px] md:text-[30px]
          "
          >
            Compare The Plans
          </h3>
        </div>

        {/* TABLE WRAPPER */}
        <div className="hidden md:block overflow-x-auto pb-2">
          {/* MAIN CONTAINER */}
          <div className="min-w-[950px] rounded-[22px] bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:min-w-[1100px] md:rounded-[30px] md:p-5">
            {/* INNER CONTAINER */}
            <div className="rounded-[18px] bg-[#f4f7f7] p-1.5 md:rounded-[24px] md:p-2">
              {/* HEADER */}
              <div className="mb-1.5 flex h-[56px] w-full overflow-hidden rounded-t-[18px] bg-[#0061A4] text-white md:mb-2 md:h-[70px] md:rounded-t-[24px]">
                {/* FEATURE */}
                <div className="flex flex-[1.1] items-center px-3 text-[11px] font-[500] uppercase tracking-[0.05em] md:px-5 md:text-sm md:tracking-[0.08em]">
                  Feature
                </div>

                {/* PRO */}
                <div className="flex flex-1 items-center justify-center text-[11px] font-[500] uppercase tracking-[0.05em] md:text-sm md:tracking-[0.08em]">
                  Pro
                </div>

                {/* PLUS */}
                <div className="flex flex-1 items-center justify-center text-[11px] font-[500] uppercase tracking-[0.05em] md:text-sm md:tracking-[0.08em]">
                  Plus
                </div>

                {/* GOLD */}
                <div className="flex flex-1 items-center justify-center gap-1 text-[11px] font-[500] uppercase tracking-[0.05em] md:gap-2 md:text-sm md:tracking-[0.08em]">
                  <Star className="h-3 w-3 fill-current text-white md:h-4 md:w-4" />
                  Gold
                </div>

                {/* PLATINUM */}
                <div className="flex flex-1 items-center justify-center text-[11px] font-[500] uppercase tracking-[0.05em] md:text-sm md:tracking-[0.08em]">
                  Platinum
                </div>

                {/* TITANIUM */}
                <div className="flex flex-1 items-center justify-center text-[11px] font-[500] uppercase tracking-[0.05em] md:text-sm md:tracking-[0.08em]">
                  Titanium
                </div>
              </div>

              {/* ROWS */}
              <div className="flex flex-col gap-1.5 md:gap-2">
                {features.map((feature, rowIndex) => (
                  <div
                    key={feature}
                    className="grid gap-1.5 md:gap-2"
                    style={{
                      gridTemplateColumns: "1.4fr repeat(5, 1fr)",
                    }}
                  >
                    {/* FEATURE COLUMN */}
                    <div className="flex min-h-[52px] items-center rounded-[8px] bg-white px-3 text-[12px] font-medium leading-[1.3] text-black md:min-h-[64px] md:rounded-[10px] md:px-5 md:text-[15px]">
                      {feature}
                    </div>

                    {/* PLAN COLUMNS */}
                    {plans.map((plan) => {
                      const value = plan.values[rowIndex];

                      return (
                        <div
                          key={plan.name + rowIndex}
                          className={`flex min-h-[52px] items-center justify-center rounded-[8px] text-[12px] font-[500] md:min-h-[64px] md:rounded-[10px] md:text-[15px] ${
                            plan.highlight ? "bg-[#dfecf4]" : "bg-white"
                          }`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <div className="flex items-center justify-center">
                                <Image
                                  src="/Icons/PricingPage/Tick.svg"
                                  alt="Check"
                                  width={20}
                                  height={20}
                                  className="md:h-[25px] md:w-[25px]"
                                />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <Image
                                  src="/Icons/PricingPage/Cross.svg"
                                  alt="Cross"
                                  width={20}
                                  height={20}
                                  className="md:h-[25px] md:w-[25px]"
                                />
                              </div>
                            )
                          ) : (
                            <span className="text-black">{value}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-white rounded-[18px] p-2">
            <div className="rounded-[18px] bg-[#f6f6f6] p-1">
              {/* TOP HEADER */}
              <div className="flex h-[52px] w-full items-center rounded-[14px] bg-[#0061A4] px-2 text-white">
                {/* PRO (narrow) */}
                <div className="flex-[0.8] flex items-center justify-center text-[11px] font-[500] uppercase">
                  Pro
                </div>

                {/* PLUS (narrow) */}
                <div className="flex-[0.9] flex items-center justify-center text-[11px] font-[500] uppercase">
                  Plus
                </div>

                {/* GOLD (slightly wider + icon) */}
                <div className="flex-[1.1] flex items-center justify-center gap-1 text-[11px] font-[500] uppercase">
                  <Star className="h-3 w-3 fill-current text-white" />
                  Gold
                </div>

                {/* PLATINUM */}
                <div className="flex-[1.2] flex items-center justify-center text-[11px] font-[500] uppercase">
                  Platinum
                </div>

                {/* TITANIUM (widest feel) */}
                <div className="flex-[1.3] flex items-center justify-center text-[11px] font-[500] uppercase">
                  Titanium
                </div>
              </div>

              {/* FEATURES TITLE BAR */}
              <div className="mt-2 flex h-[52px] items-center justify-center rounded-[10px] bg-[#0061A4] text-white px-3 text-[12px] font-[500] uppercase">
                Feature
              </div>

              {/* MOBILE FEATURE STACK */}
              <div className="mt-2 flex flex-col gap-4">
                {features.map((feature, rowIndex) => {
                  const isOpen = openIndex === rowIndex;

                  return (
                    <div key={feature}>
                      {/* FEATURE ROW (UNCHANGED UI + ARROW ADDED) */}
                      <div className="bg-white rounded-[10px] px-6 py-4 flex items-center justify-between">
                        <span className="text-[12px] font-medium">
                          {feature}
                        </span>

                        {/* ARROW BUTTON */}
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : rowIndex)}
                          className="transition-transform duration-300"
                        >
                          <Image
                            src={
                              isOpen
                                ? "/Icons/up-arrow.svg"
                                : "/Icons/down-arrow.svg"
                            }
                            alt="toggle"
                            width={12}
                            height={12}
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>
                      </div>

                      {/* VALUES ROW (SAME UI, JUST COLLAPSIBLE) */}
                      <div
                        className={`grid grid-cols-5 gap-1 mt-1 transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen
                            ? "max-h-[120px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {plans.map((plan) => {
                          const value = plan.values[rowIndex];

                          return (
                            <div
                              key={plan.name}
                              className="flex items-center justify-center rounded-[10px] min-h-[45px] text-[12px] font-[500] bg-white"
                            >
                              {typeof value === "boolean" ? (
                                value ? (
                                  <Image
                                    src="/Icons/PricingPage/Tick.svg"
                                    alt="ok"
                                    width={16}
                                    height={16}
                                  />
                                ) : (
                                  <Image
                                    src="/Icons/PricingPage/Cross.svg"
                                    alt="no"
                                    width={16}
                                    height={16}
                                  />
                                )
                              ) : (
                                value
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
