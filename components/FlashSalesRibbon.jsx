"use client";

import { useEffect, useState } from "react";

export default function FlashSaleRibbon() {
  const [slotsLeft, setSlotsLeft] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => {
        if (prev > 12) return prev - 1;
        return prev; 
      });
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#FA8C3D] via-[#0061A4] to-[#FA8C3D] text-white">
      
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center text-xs sm:text-sm font-medium tracking-wide">
        
        {/* Main message */}
        <span className="flex items-center gap-2">
          LIMITED OFFER: First 90 Days FREE
        </span>

        {/* Separator */}
        <span className="hidden sm:inline opacity-70">|</span>

        {/* Urgency text */}
        <span className="flex items-center gap-2">
          Only{" "}
          <span className="font-bold text-white text-sm sm:text-base animate-pulse">
            {slotsLeft}
          </span>{" "}
          contractors to sign up.
        </span>

        {/* CTA hint */}
        {/* <span className="hidden md:inline opacity-90">
        - Act fast before spots fill up
        </span> */}
      </div>
    </div>
  );
}