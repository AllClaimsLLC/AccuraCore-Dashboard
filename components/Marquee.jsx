"use client";

import { motion } from "framer-motion";

const items = [
  "Work Orders",
  "Smart Dashboard",
  "Boards",
  "Contact Profiles",
  "Calendar",
  "Estimates",
  "Invoices",
  "Voice Tagging",
  "Smart Dispatch",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.015] py-[18px]">
      
      <motion.div
        className="flex w-max gap-[60px]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[14px] uppercase tracking-[0.06em] text-[13px] leading-none font-[400] text-black/70 dark:text-white/70 whitespace-nowrap"
          >
            {item}
            <span className="text-[#0062a5] text-[12px]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}