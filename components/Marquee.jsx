"use client";

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
    <>
      <div className="relative overflow-hidden border-y border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.015] py-[18px]  mt-45 md:mt-54">
        <div className="flex w-max animate-marquee gap-[60px]">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-[14px] uppercase tracking-[0.06em] text-[13px] leading-none font-[400] text-black/70 dark:text-white/70 whitespace-nowrap"
            >
              {item}

              <span className="text-[#0062a5] text-[12px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}