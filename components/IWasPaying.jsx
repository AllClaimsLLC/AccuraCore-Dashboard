"use client";
import { useState } from "react";
import useFadeIn from "@/lib/useFadeIn";
import Image from "next/image";

export default function IWasPaying() {
  useFadeIn();
  return (
    <>
      <section className="w-full flex justify-center bg-[#fbf6f0] py-16 md:py-24 px-4 overflow-hidden">
        <div className="w-full md:max-w-[90%]">
          {/* QUOTE BLOCK */}
          <div className="fade-up relative flex justify-center items-center text-center px-4 md:px-10 mt-10">
            {/* Top Left Quote */}
            <img
              src="/Images/inverted-comma-top-left.png"
              alt="Quote Top"
              className="
          absolute
          left-0 md:left-50
          top-5
          w-10 md:w-20
          object-contain
          pointer-events-none
          select-none
        "
            />

            {/* Quote Text */}
            <div className="max-w-5xl mx-auto relative z-10 py-10 md:py-16">
              <h2
                className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.15]
            tracking-[-0.02em]
            text-[34px]
            md:text-[58px]
          "
              >
                I was paying more every <br className="hidden lg:block" />
                month and getting <span className="text-[#FA8C3D]">
                  less
                </span>{" "}
                <br className="hidden lg:block" />
                <span className="text-[#FA8C3D]">value</span> out of it. So I
                built <br className="hidden lg:block" />
                something better.
              </h2>

              <p className="mt-8 text-sm sm:text-base font-[500] tracking-[0.25em] text-[#0061A4] uppercase">
                The Founder
              </p>
            </div>

            {/* Bottom Right Quote */}
            <img
              src="/Images/inverted-comma-bottom-right.png"
              alt="Quote Bottom"
              className="
          absolute
          right-0 md:right-70
          bottom-20
          w-10 md:w-20
          object-contain
          pointer-events-none
          select-none
        "
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="fade-up mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="w-full">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[80px_1fr] md:gap-6">
                {/* Number */}
                <div>
                  <span
                    className="
            text-[#1d1d1d]
            text-[65px]
            leading-none
            block
          "
                  >
                    01
                  </span>
                </div>

                {/* Heading + Paragraphs */}
                <div>
                  <h3
                    className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[30px]
          "
                  >
                    Twenty Five Years On Roofs, In Trucks, And On The Phone With
                    Insurance.
                  </h3>

                  <p
                    className="
            mt-8
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    For 25 plus years I ran a roofing and exteriors company. I
                    know exactly what it feels like to juggle jobs, chase
                    insurance claims, manage a crew, and try to keep customers
                    happy all at the same time.
                  </p>

                  <p
                    className="
            mt-4
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    I lived the late nights and the early mornings. The
                    clipboard in one hand and the phone in the other. The crew
                    lead asking where the materials are while a homeowner texts
                    asking when you will be back.
                  </p>

                  <p
                    className="
            mt-4
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    <span className="text-[#FA8C3D]">
                      That is the rhythm of contracting.
                    </span>{" "}
                    Beautiful in its own way. Brutal in another.
                  </p>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-start gap-4">
                  <span
                    className="
            text-[#1d1d1d]
           text-[35px]
            leading-none
            shrink-0
          "
                  >
                    01
                  </span>

                  <h3
                    className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[20px]
          "
                  >
                    Twenty Five Years On Roofs, In Trucks, And On The Phone With
                    Insurance.
                  </h3>
                </div>

                <p
                  className="
          mt-6
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  For 25 plus years I ran a roofing and exteriors company. I
                  know exactly what it feels like to juggle jobs, chase
                  insurance claims, manage a crew, and try to keep customers
                  happy all at the same time.
                </p>

                <p
                  className="
          mt-4
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  I lived the late nights and the early mornings. The clipboard
                  in one hand and the phone in the other. The crew lead asking
                  where the materials are while a homeowner texts asking when
                  you will be back.
                </p>

                <p
                  className="
          mt-4
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  <span className="text-[#FA8C3D]">
                    That is the rhythm of contracting.
                  </span>{" "}
                  Beautiful in its own way. Brutal in another.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full flex justify-center lg:justify-end">
             <Image
  src="/Images/twenty-five-years.png"
  alt="Twenty Five Years"
  width={2744}
  height={2176}
  sizes="(max-width: 1024px) 100vw, 600px"
  className="w-full max-w-[600px] aspect-[2744/2176] h-auto object-contain rounded-[20px]"
  quality={100}
  priority
/>
            </div>
          </div>
        </div>
      </section>

      {/* 02 */}
      <section className="w-full flex justify-center bg-[#fce6d9] pb-16 md:pb-24 px-4 overflow-hidden">
        <div className="w-full md:max-w-[90%]">
          {/* CONTENT SECTION */}
          <div className="fade-up mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="w-full">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[80px_1fr] md:gap-6">
                {/* Number */}
                <div>
                  <span
                    className="
            text-[#1d1d1d]
            text-[65px]
            leading-none
            block
          "
                  >
                    02
                  </span>
                </div>

                {/* Heading + Paragraphs */}
                <div>
                  <h3
                    className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[30px]
          "
                  >
                    Five systems. Five Logins. Five Places For Things To Fall
                    Through.
                  </h3>

                  <p
                    className="
            mt-8
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    I was using five different systems to run my business. Five
                    logins. Five subscriptions. Five places where things could
                    fall through the cracks.
                  </p>

                  <p
                    className="
            mt-4
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    I called it Tech Mess. Paying more every month and getting
                    less value out of it.
                  </p>

                  <p
                    className="
            mt-4
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    You know the feeling. A photo lives over here. The estimate
                    over there. The invoice in a third place. The customer text
                    in a fourth. Somewhere in the gap between them, something
                    quietly slips and you find out about it a week too late.
                  </p>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-start gap-4">
                  <span
                    className="
            text-[#1d1d1d]
           text-[35px]
            leading-none
            shrink-0
          "
                  >
                    02
                  </span>

                  <h3
                    className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[20px]
          "
                  >
                    Five systems. Five Logins. Five Places For Things To Fall
                    Through.
                  </h3>
                </div>

                <p
                  className="
          mt-6
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  I was using five different systems to run my business. Five
                  logins. Five subscriptions. Five places where things could
                  fall through the cracks.
                </p>

                <p
                  className="
          mt-4
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  I called it Tech Mess. Paying more every month and getting
                  less value out of it.
                </p>

                <p
                  className="
          mt-4
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  You know the feeling. A photo lives over here. The estimate
                  over there. The invoice in a third place. The customer text in
                  a fourth. Somewhere in the gap between them, something quietly
                  slips and you find out about it a week too late.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full flex justify-center lg:justify-end bg-white rounded-[20px] p-2">
             <Image
  src="/Images/five-systems.png"
  alt="Five Systems"
  width={2744}
  height={2176}
  sizes="(max-width: 1024px) 100vw, 600px"
  className="
    w-full
    max-w-[600px]
    h-[475px]
    object-contain
    rounded-[20px]
  "
  quality={100}
  priority
/>
            </div>
          </div>
        </div>
      </section>

      {/* 03 */}
      <section className="w-full flex justify-center bg-[linear-gradient(to_bottom_right,_#f9efed,_#eaf7fd)] pb-16 md:pb-24 px-4 overflow-hidden">
        <div className="w-full md:max-w-[90%]">
          {/* CONTENT SECTION */}
          <div className="fade-up mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="w-full">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[80px_1fr] md:gap-6">
                {/* Number */}
                <div>
                  <span
                    className="
            text-[#1d1d1d]
            text-[65px]
            leading-none
            block
          "
                  >
                    03
                  </span>
                </div>

                {/* Heading + Paragraphs */}
                <div>
                  <h3
                    className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[30px]
          "
                  >
                    So I built something better.
                  </h3>

                  <p
                    className="
            mt-8
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    AccuraCore is an all in one operating system, built by a
                    contractor, for contractors like you.
                  </p>

                  <p
                    className="
            mt-4
            text-[#4a4a4a]
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    It is more than a CRM. It is the system that runs your
                    business and gives you your time back.
                  </p>

                  <p
                    className="
            mt-4
            text-black
            leading-[1.9]
            text-[15px]
            max-w-3xl
          "
                  >
                    Every screen, every button, every workflow was shaped by a
                    question I had asked myself a thousand times on a jobsite.{" "}
                    <span className="text-[#FA8C3D]">
                      What would make this easier right now?
                    </span>
                  </p>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-start gap-4">
                  <span
                    className="
            text-[#1d1d1d]
           text-[35px]
            leading-none
            shrink-0
          "
                  >
                    03
                  </span>

                  <h3
                    className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[20px]
          "
                  >
                    So I built something better.
                  </h3>
                </div>

                <p
                  className="
          mt-6
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  AccuraCore is an all in one operating system, built by a
                  contractor, for contractors like you.
                </p>

                <p
                  className="
          mt-4
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  It is more than a CRM. It is the system that runs your
                  business and gives you your time back.
                </p>

                <p
                  className="
          mt-4
          text-[#4a4a4a]
          leading-[1.9]
          text-[14px]
        "
                >
                  Every screen, every button, every workflow was shaped by a
                  question I had asked myself a thousand times on a jobsite.
                  What would make this easier right now?
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full flex justify-center lg:justify-end">

<Image
  src="/Images/built-something.png"
  alt="Built Something"
  width={2744}
  height={2176}
  sizes="(max-width: 1024px) 100vw, 600px"
  className="
    w-full
    max-w-[600px]
    h-auto
    object-contain
    rounded-[20px]
  "
  quality={100}
  priority
/>
            </div>
          </div>
          {/* Bottom Section - How It Works */}
          <div className="fade-up">
            <div className="space-y-12 mt-10">
              {/* First Row - Heading */}
              <div className="text-left" style={{ marginTop: "5rem" }}>
                 <h3
                    className="
            text-[#1d1d1d]
            font-[400]
            leading-[1.2]
            text-[25px] md:text-[30px]
          "
                  >
                  One platform, built the way you actually work.
                </h3>
              </div>

              {/* Second Row - 3 Columns */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Walk the site, capture it all.",
                    desc: "Snap photos and videos with the integrated camera. Tag them with your voice. Watch everything flow into a single clean report.",
                    icon: "/Icons/camera.png",
                  },
                  {
                    title: "MyAccuraCore for customers.",
                    desc: "The add on that lets you talk directly with your customers. They love it. My crew loves it. And I love finally having everything in one place.",
                    icon: "/Icons/chat.png",
                  },
                  {
                    title: "Your time, returned.",
                    desc: "AccuraCore gave me time back to focus on growing my company. I think you will love it as much as I do.",
                    icon: "/Icons/clock.png",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="w-10 h-10 rounded-[10px] bg-[#0061A5] flex items-center justify-center">
                      <img src={item.icon} alt={item.title} />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 ">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
