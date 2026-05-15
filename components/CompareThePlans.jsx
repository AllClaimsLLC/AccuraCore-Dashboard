"use client";

import useFadeIn from "@/lib/useFadeIn";
import Image from "next/image";
import { Check, X, Star } from "lucide-react";

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
  useFadeIn();

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-14 lg:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/UnstructuredDocumentationCostsMoney-bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      <div className="fade-up mx-auto max-w-[95%] px-4">
        {/* HEADING */}
        <div className="mb-12 text-center">
          <h3
            className="
            text-white
            font-[400]
            leading-[1.2]
            text-[25px] md:text-[30px]
          "
          >
            Compare The Plans
          </h3>
        </div>

        {/* TABLE WRAPPER */}
        <div className="overflow-x-auto pb-2">
          {/* MAIN CONTAINER */}
          <div className="min-w-[1100px] rounded-[30px] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            {/* INNER CONTAINER */}
            <div className="rounded-[24px] bg-[#f4f7f7] p-2">
             {/* HEADER */}
<div className="mb-2 flex h-[70px] w-full overflow-hidden rounded-t-[24px] bg-[#0061A4] text-white">

  {/* FEATURE */}
  <div className="flex-[1.1] flex items-center px-5 text-sm font-[500] uppercase tracking-[0.08em]">
    Feature
  </div>

  {/* PRO */}
  <div className="flex flex-1 items-center justify-center text-sm font-[500] uppercase tracking-[0.08em]">
    Pro
  </div>

  {/* PLUS */}
  <div className="flex flex-1 items-center justify-center text-sm font-[500] uppercase tracking-[0.08em]">
    Plus
  </div>

  {/* GOLD */}
  <div className="flex flex-1 items-center justify-center gap-2 text-sm font-[500] uppercase tracking-[0.08em]">
    <Star className="h-4 w-4 fill-current text-white" />
    Gold
  </div>

  {/* PLATINUM */}
  <div className="flex flex-1 items-center justify-center text-sm font-[500] uppercase tracking-[0.08em]">
    Platinum
  </div>

  {/* TITANIUM */}
  <div className="flex flex-1 items-center justify-center text-sm font-[500] uppercase tracking-[0.08em]">
    Titanium
  </div>

</div>

              {/* ROWS */}
              <div className="flex flex-col gap-2">
                {features.map((feature, rowIndex) => (
                  <div
                    key={feature}
                    className="grid gap-2"
                    style={{
                      gridTemplateColumns: "1.4fr repeat(5, 1fr)",
                    }}
                  >
                    {/* FEATURE COLUMN */}
                    <div className="flex min-h-[64px] items-center rounded-[10px] bg-white px-5 text-[15px] font-medium text-black">
                      {feature}
                    </div>

                    {/* PLAN COLUMNS */}
                    {plans.map((plan) => {
                      const value = plan.values[rowIndex];

                      return (
                        <div
                          key={plan.name + rowIndex}
                          className={`flex min-h-[64px] items-center justify-center rounded-[10px] text-[15px] font-[500] ${
                            plan.highlight ? "bg-[#dfecf4]" : "bg-white"
                          }`}
                        >
                          {typeof value === "boolean" ? (
  value ? (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0eae4a]">
      <Check className="h-4 w-4 text-white" strokeWidth={3} />
    </div>
  ) : (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fe0000]">
      <X className="h-4 w-4 text-white" strokeWidth={3} />
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
      </div>
    </section>
  );
}
