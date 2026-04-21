"use client";

import Image from "next/image";

const points = [
  {
    title: "Revisit jobs",
    result: "fuel + labor",
  },
  {
    title: "Delayed approvals",
    result: "cash flow impact",
  },
  {
    title: "Rework",
    result: "admin overhead",
  },
  {
    title: "Disputes",
    result: "time drain",
  },
];

export default function UnstructuredDocumentationCostsMoney() {
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
      <div className="grid grid-cols-[auto_1fr_auto_2fr] items-center gap-5">
        
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
</div>

          {/* INFO BOX */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-[15px] shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform">
            
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src="/Icons/accuracam.png"
                alt="AccuraCam"
                width={80}
                height={80}
              />
            </div>

            {/* Text */}
            <p className="text-gray-600 dark:text-white text-sm">
              AccuraCam fixes the problem at the source. Most teams capture fast and fix later.
            </p>

            <p className="text-gray-600 dark:text-white text-sm">
              AccuraCam captures once and structures instantly.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full flex justify-center">
          <Image
            src="/Images/UnstructuredDocumentationCostsMoney-right.png"
            alt="preview"
            width={600}
            height={500}
            className="object-contain w-full max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}