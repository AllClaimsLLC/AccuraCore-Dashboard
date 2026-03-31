"use client";

import { useState } from "react";

export default function SoundFamiliar() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: "/Icons/CAS.png",
      title: "Constant app-switching",
      desc: "CRM, Camera App, Claims App, Scheduling — your team lives in 4+ tools per job",
    },
    {
      icon: "/Icons/RCL.png",
      title: "Repeated communication loops",
      desc: "The same job discussed across 3 platforms with no single source of truth",
    },
    {
      icon: "/Icons/TR.png",
      title: "Time you can never recover",
      desc: "Hours burned every month that could have been new billable jobs",
    },
    {
      icon: "/Icons/RM.png",
      title: "Revenue you don't know you're missing",
      desc: "You can't grow what you can't measure — until now",
    },
  ];

  return (
    <section className="px-6 py-16 bg-[#f4f0ed] dark:bg-slate-950">
      <div className="mt-36 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - Image + headings */}
          <div className="space-y-4">
            {/* Pill heading */}
            <div className="inline-block bg-[#FA8C3D] text-white px-4 py-2 rounded-full text-sm font-[400]">
              The Problem
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl font-[400] text-gray-900 dark:text-white">
              Sound familiar?
            </h2>

            {/* Small text */}
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg leading-relaxed">
              Every time your team switches between apps, answers the same
              question twice, or manually copies data — your business is
              bleeding money. Silently. Every single month.
            </p>

            {/* Image */}
            <img
              src="/Images/soundfamiliar.png"
              alt="Team working"
              className="rounded-2xl w-full h-auto object-cover mt-4"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedFeature(feature.title)}
                className={`
                  group flex items-start space-x-4 py-6 px-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 bg-white dark:bg-slate-900 hover:shadow-[0_8px_25px_rgba(0,97,165,0.3)]
                  ${
                    selectedFeature === feature.title
                      ? "border-2 border-[#0061a5]"
                      : "border border-transparent"
                  }
                `}
              >
<div
        className="
          flex items-center justify-center
          bg-[#0061a5] rounded-lg

          min-w-[42px] min-h-[42px]
          sm:min-w-[48px] sm:min-h-[48px]

          p-2 sm:p-3
          flex-shrink-0
        "
      >
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[13px] mt-2.5">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
