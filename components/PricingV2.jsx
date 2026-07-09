"use client";

import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import useFadeIn from "@/lib/useFadeIn";

const plans = [
  {
    name: "Pro",
    usersLabel: "UP TO 10 USERS",
    price: 99,
    features: [
      "1 user included",
      "Up to 10 users",
      "$25 / additional user, up to 10",
    ],
    addonPrice: 150,
  },
  {
    name: "Plus",
    usersLabel: "11 – 25 USERS",
    price: 199,
    features: [
      "1 user included",
      "11 to 25 users",
      "$25 / additional user, up to 25",
    ],
    addonPrice: 250,
  },
  {
    name: "Gold",
    usersLabel: "26 – 50 USERS",
    price: 299,
    features: [
      "1 user included",
      "26 to 50 users",
      "$20 / additional user, up to 50",
    ],
    addonPrice: 350,
  },
  {
    name: "Platinum",
    usersLabel: "51 – 99 USERS",
    price: 499,
    features: [
      "1 user included",
      "51 to 99 users",
      "$15 / additional user, up to 99",
    ],
    addonPrice: 500,
  },
  {
    name: "Titanium",
    usersLabel: "100+ USERS",
    price: 799,
    features: [
      "1 user included",
      "100+ users",
      "$15 / additional user, unlimited",
    ],
    addonPrice: 750,
  },
];

export default function PricingV2({ setIsOpen, isDiscounted }) {
  useFadeIn();

  return (
    <section id="pricing-cards" className="relative bg-[#faefe9] pb-20 sm:pt-8 sm:pb-20">
      <div className="fade-up mx-auto max-w-7xl px-5">
        {/* HEADING */}
        <div className="sm:text-center mb-12 sm:mb-16">
          <h2 className="text-[#1d1d1d] font-[400] leading-[1.2] text-[24px] sm:text-[30px]">
            Find Your Plan
          </h2>
          <p className="text-[13px] sm:text-[15px] text-[#111113] mt-3">
            1 user included with every plan. Add more as your team grows.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-6">
{plans.map((plan) => {
  const discountedPrice = Math.round(plan.price / 2);

  return (
    <article
      key={plan.name}
      className="w-full max-w-sm flex flex-col rounded-[20px] bg-white p-7 sm:p-8"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[24px] sm:text-[26px] font-[500] text-black leading-none">
            {plan.name}
          </h3>
          <div className="mt-2 text-[11px] font-[500] uppercase tracking-[0.06em] text-[#FA8C3D]">
            {plan.usersLabel}
          </div>
        </div>

        {/* PRICE BLOCK — grid-stacked, layout size never changes */}
        <div className="grid">
          {/* Original price — occupies same grid cell */}
          <div
            className={`col-start-1 row-start-1 flex items-start gap-1 text-black transition-all duration-400 ease-out ${
              isDiscounted
                ? "opacity-0 scale-90 -translate-y-1"
                : "opacity-100 scale-100 translate-y-0"
            }`}
            style={{ transformOrigin: "top right" }}
          >
            <sup className="text-[25px] font-bold mt-4">$</sup>
            <span className="text-[40px] sm:text-[44px] font-extrabold leading-none tracking-[-0.02em]">
              {plan.price}
            </span>
            <span className="text-[18px] font-medium text-gray-500 self-end mb-1">
              /mo
            </span>
          </div>

          {/* Discounted price — same grid cell, cross-fades in */}
          <div
            className={`col-start-1 row-start-1 flex items-start gap-1 transition-all duration-400 delay-100 ease-out ${
              isDiscounted
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-1 pointer-events-none"
            }`}
            style={{ transformOrigin: "top right" }}
          >
            <sup className="text-[25px] font-bold mt-4 text-[#FA8C3D]">$</sup>
            <span className="text-[40px] sm:text-[44px] font-extrabold leading-none tracking-[-0.02em] text-[#FA8C3D]">
              {discountedPrice}
            </span>
            <span className="text-[18px] font-medium text-gray-500 self-end mb-1">
              /mo
            </span>
          </div>
        </div>
      </div>

      {/* Baaki sab same — separator, features, addon box, CTA */}
      <div className="border-t border-gray-200 mt-5 mb-5" />

      <ul className="flex flex-col gap-3 mb-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-[14px] text-gray-600">
            <Image src="/Icons/PricingPage/Tick.svg" alt="Tick" width={22} height={22} />
            {feature}
          </li>
        ))}
      </ul>

      <div
        className="rounded-[14px] bg-[#F6F6F6] p-4 flex items-start gap-3 mb-6 border"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderImage:
            "linear-gradient(90.76deg, #FFFFFF 0.13%, #FA8C3D 22.33%, #0061A4 51.87%, #FFFFFF 99.9%) 1",
        }}
      >
        <Image src="/Icons/PricingPage/pricing-star.svg" alt="" width={15} height={15} className="mt-0.5 flex-shrink-0" />
        <p className="text-[13.5px] text-gray-600 leading-snug">
          Add <span className="text-[#FA8C3D]">MyAccuraCore</span> customer communication for just{" "}
          <span className="text-[#FA8C3D]">${plan.addonPrice}</span>
        </p>
      </div>

      <Button
        className="w-full rounded-full text-sm flex items-center justify-center"
        style={{ backgroundColor: "#0061A4", color: "white", padding: "26px 15px" }}
        onClick={() => setIsOpen(true)}
      >
        Get Started
        <img src="/Icons/right-arrow-white.svg" alt="Arrow Icon" className="w-2 h-3 ml-2" />
      </Button>
    </article>
  );
})}
        </div>
      </div>
    </section>
  );
}
