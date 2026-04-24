"use client";

import useFadeIn from "@/lib/useFadeIn";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Hours lost switching apps",
    desc: "Every app-switch per job adds up to dozens of hours monthly — time that could be on new jobs.",
  },
  {
    number: "02",
    title: "Communication time wasted",
    desc: "Cross-platform messaging, duplicated updates, and re-explaining — all quantified in real hours.",
  },
  {
    number: "03",
    title: "Your total time cost in dollars",
    desc: "We multiply your real hourly rate against every lost hour to give you a number you can act on.",
  },
  {
    number: "04",
    title: "Total monthly drag",
    desc: "Time cost plus the ongoing software subscriptions you're paying for a fragmented stack.",
  },
  {
    number: "05",
    title: "Potential jobs you're missing",
    desc: "Freed time translates directly into jobs you could take — calculated from your own numbers.",
  },
  {
    number: "06",
    title: "Monthly revenue left on the table",
    desc: "The number that shocks most people. Real revenue you're giving up every single month.",
  },
];

export default function WhatYouWillDiscover() {
  useFadeIn();
  return (
    <section
      className="px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/Hero-bg.png')" }}
    >
       <div className="fade-up">

      <div className="max-w-7xl mx-auto space-y-4">

        {/* Pill Heading */}
        <div className="inline-block bg-[#FA8C3D] text-white px-4 py-2 rounded-full text-sm font-[400]">
          What You'll Discover
        </div>

        {/* Top Heading & Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <h2 className="text-4xl font-[400] text-white">
            Answer 6 questions. See the full picture.
          </h2>
          <p className="text-gray-200 max-w-md text-[14px]">
            The Tech-Mess Cost Checker gives you a precise, data-driven breakdown of every dollar your current setup is costing you.
          </p>
        </div>

        {/* Steps / Boxes */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-[15px] shadow-lg flex flex-col gap-4 transition-transform transform hover:scale-105"
            >
              {/* Number Box */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#0061A4] text-white font-semibold rounded-[10px] text-sm">
                {step.number}
              </div>

              {/* Heading */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}