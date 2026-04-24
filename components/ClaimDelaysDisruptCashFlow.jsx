"use client";

import useFadeIn from "@/lib/useFadeIn";
import Image from "next/image";

const points = [
  {
    title: "Incomplete submissions",
    result: "delayed approvals",
  },
  {
    title: "Clarification requests",
    result: "extended review timelines",
  },
  {
    title: "Supplement loops",
    result: "admin labor cost",
  },
  {
    title: "Disputes",
    result: "revenue risk",
  },
];

export default function ClaimDelaysDisruptCashFlow() {
  useFadeIn();
  return (
    <section className="relative w-full py-16 lg:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/UnstructuredDocumentationCostsMoney-bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>
 <div className="fade-up">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-3xl text-white">
            Unstructured <br className="hidden lg:block" />
            Documentation Costs Money.
          </h1>

          {/* Points */}
          <div className="flex flex-col">
            {points.map((item, idx) => (
              <div key={idx}>
                {/* Separator */}
                <div className="border-t border-gray-500 my-4" />

                {/* Row */}
                <div className="grid grid-cols-[auto_2fr_auto_3fr] items-center gap-5">
                  {/* Bullet */}
                  <div className="w-1 h-1 bg-white rounded-full" />

                  {/* Title (fixed column feel) */}
                  <span className="text-sm text-white">
                    {item.title}
                  </span>

                  {/* Arrow */}
                  <Image
                    src="/Images/arrow.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />

                  {/* Result */}
                  <span className="text-sm text-white">
                    {item.result}
                  </span>
                </div>
              </div>
            ))}

            {/* Last separator */}
            <div className="border-t border-gray-500 my-4" />

            <p className="text-white dark:text-white text-sm">
              Every documentation gap extends payment timeline.
            </p>
          </div>

          {/* INFO BOX */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-[15px] shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform">
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src="/Icons/accuracore-claims.png"
                alt="accuracore-claims"
                width={60}
                height={60}
              />
            </div>

            {/* Text */}
            <p className="text-gray-600 dark:text-white text-sm">
              AccuraCore Claims reduces submission friction at the source.
            </p>

            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="text-gray-600 dark:text-white text-sm">
                That’s cash flow protection.
              </p>
              <p className="text-gray-600 dark:text-white text-sm">
                That’s operational leverage.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full flex justify-center">
          <Image
            src="/Images/ClaimDelaysDisruptCashFlow-right.png"
            alt="preview"
            width={600}
            height={500}
            className="object-contain w-full max-w-md lg:max-w-full"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
