"use client";

import Image from "next/image";

export default function AccuraCard({ title, bullets = [], image, alt }) {
  return (
    <div className="bg-[#0061A5] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4 shadow-lg">

      {/* Heading */}
      <h3 className="text-white text-base sm:text-lg leading-snug">
        {title}
      </h3>

      {/* Separator */}
      <div className="w-full h-[1px] bg-white/30" />

      {/* Bullets */}
      <div className="flex flex-col gap-2">
        {bullets.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 bg-white rounded-full mt-2 shrink-0" />
            <span className="text-white/90 text-sm leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="mt-2">
        <Image
          src={image}
          alt={alt || "card image"}
          width={400}
          height={250}
          className="rounded-[14px] object-cover w-full border border-white/20"
        />
      </div>
    </div>
  );
}