"use client";

import { useEffect, useState } from "react";

export default function FlashSaleRibbon() {
  const [slotsLeft, setSlotsLeft] = useState(25);

useEffect(() => {
  const interval = setInterval(() => {
    setSlotsLeft((prev) => {
      if (prev > 0) return prev - 1;
      return 0;
    });
  }, 60000);

  return () => clearInterval(interval);
}, []);

  return (
<div className="bg-[#ff7a1a] p-1 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">

  {/* Flash Badge */}
  <div className="bg-white text-[#ff7a1a] font-bold uppercase text-[10px] sm:text-xs px-3 py-1 rounded-full tracking-wider shadow-md animate-pulse">
    Flash Sale
  </div>

  {/* Main Content */}
  <h2 className="text-white font-extrabold text-sm sm:text-md leading-tight tracking-wide">

    LIMITED OFFER:
    
    <span className="mx-2 text-black bg-white px-2 py-1 rounded-md inline-block">
      First 90 Days FREE
    </span>

    — Only for the next

    <span className="mx-2 inline-flex items-center gap-2 bg-black/20 border border-white/20 px-3 py-1 rounded-full align-middle">

      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </span>

      <span className="text-white font-extrabold text-base sm:text-lg">
        {slotsLeft}
      </span>
    </span>

    contractors to sign up.

  </h2>
</div>
  );
}