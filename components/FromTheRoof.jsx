"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import useFadeIn from "@/lib/useFadeIn";
import Link from "next/link";
import Image from "next/image";

const timeline = [
  {
    left: "Year 1",
    right: {
      title: "Day one on the roof",
      desc: "Started a roofing and exteriors company. Learned the trade with my hands before I ever touched a keyboard.",
    },
    side: "right",
  },
  {
    left: "A decade in",
    right: {
      title: "The tools pile up",
      desc: "One system for CRM. Another for estimates. Another for photos. The Tech Mess officially had a name slowing every team down daily.",
    },
    side: "left",
  },
  {
    left: "Year 22",
    right: {
      title: "The breaking point",
      desc: "Five logins, five subscriptions, five places to lose track. Paying more every month. Getting less in return.",
    },
    side: "right",
  },
  {
    left: "Today",
    right: {
      title: "AccuraCore is live",
      desc: "An all in one operating system built by a contractor, for contractors like you. The system I always wished I had.",
    },
    side: "left",
    highlight: "#FA8C3D",
  },
];

export default function FromTheRoof() {
  useFadeIn();
  const ref = useRef(null);

  // scroll animation (mobile + desktop)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section
        ref={ref}
        className="w-full  px-4 py-20 overflow-hidden dark:bg-[#fbf6f0]
      bg-[radial-gradient(circle_at_top_left,#f6f6ec,transparent_55%),radial-gradient(circle_at_top_right,#f6f6ec,transparent_55%),radial-gradient(circle_at_bottom_left,#eef7fc,transparent_60%),radial-gradient(circle_at_bottom_right,#fbeee8,transparent_60%)]
    "
      >
        <div className="w-full m-auto max-w-[1200px]">
          {/* HEADING */}
          <h3 className="text-left sm:text-center text-[25px] md:text-[30px] font-[400] mb-16 text-[#1d1d1d]">
            From the roof to the platform.
          </h3>

          {/* TIMELINE */}
          <div className="relative">
            {/* DESKTOP CENTER LINE */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2" />
            <motion.div
              style={{ height }}
              className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-[#FA8C3D] -translate-x-1/2 origin-top"
            />

            {/* MOBILE LINE */}
            <div className="md:hidden absolute left-3 top-0 bottom-0 w-[2px] bg-gray-300" />
            <motion.div
              style={{ height }}
              className="md:hidden absolute left-3 top-0 w-[2px] bg-[#FA8C3D] origin-top"
            />

            <div className="flex flex-col gap-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* DOT */}
                  <div className="hidden sm:block absolute left-1/2 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                    <div className="relative w-4 h-4">
                      <span className="absolute inset-0 rounded-full bg-[#FA8C3D]" />
                      <span className="absolute inset-0 rounded-full border border-[#FA8C3D] animate-ping opacity-60" />
                    </div>
                  </div>

                  {/* DESKTOP */}
                  <div className="hidden md:grid grid-cols-2 items-center gap-10">
                    {/* LEFT */}
                    {item.side === "left" ? (
                      <div className="flex justify-end pr-10">
                        <TimelineBox item={item.right} />
                      </div>
                    ) : (
                      <div className="flex justify-end pr-10 text-[18px] md:text-[20px] font-medium text-[#1d1d1d]">
                        {item.left}
                      </div>
                    )}

                    {/* RIGHT */}
                    {item.side === "right" ? (
                      <div className="pl-10">
                        <TimelineBox item={item.right} />
                      </div>
                    ) : (
                      <div className="pl-10 text-[18px] md:text-[20px]">
                        <span
                          className={
                            item.left === "Today"
                              ? "text-[#FA8C3D] font-medium"
                              : "text-[#1d1d1d] font-medium"
                          }
                        >
                          {item.left}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* MOBILE */}
                  <div className="sm:hidden pl-10">
                    {/* DOT ALIGN HELP */}
                    <div className="absolute left-[5px] top-2 w-4 h-4">
                      <span className="absolute inset-0 rounded-full bg-[#FA8C3D]" />
                      <span className="absolute inset-0 rounded-full border border-[#FA8C3D] animate-ping opacity-60" />
                    </div>

                    {/* YEAR */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={
                        item.left === "Today"
                          ? "text-[#FA8C3D] font-medium ml-2"
                          : "text-[#1d1d1d] font-medium ml-2"
                      }
                    >
                      {item.left}
                    </motion.div>

                    {/* BOX */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="ml-2 mt-2"
                    >
                      <TimelineBox item={item.right} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="fade-up">
          <div className="w-full sm:max-w-[90%] mx-auto bg-white rounded-[20px] mt-30 mb-10 sm:mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
                I think you will
                <br className="hidden sm:block" /> love it
                <span className="text-[#FA8C3D]"> as much as I do.</span>
              </h2>

              <p
                className="
            text-gray-500
            leading-[1.9] 
            max-w-3xl
          "
              >
                AccuraCore gave me time back to focus on growing my company.
                Come see what it can do for yours.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Link
                  href="/calculator"
                  className="w-full sm:w-auto md:w-auto lg:w-auto "
                >
                  <Button
                    className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center justify-center"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#0061A4",
                      padding: "25px 18px",
                    }}
                  >
                    Check My Tech-Mess Cost
                    <img
                      src="/Icons/right-arrow-blue.svg"
                      alt="Arrow Icon"
                      className="w-2 h-3 ml-2"
                    />
                  </Button>
                </Link>
                <Button
                  className="w-full sm:w-auto text-white rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#0061A4",
                    border: "2px solid #4485b2",
                    padding: "25px 15px",
                  }}
                  onClick={() => (window.location.href = "/book-a-demo")}
                >
                  Book Demo
                  <img
                    src="/Icons/right-arrow-white.svg"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <Image
  src="/Images/Ithink.png"
  alt="I think"
  width={1200}
  height={800}
  sizes="(max-width: 768px) 90vw, 90vw"
  className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] max-w-md md:max-w-full object-contain"
  quality={100}
  priority
/>
            </div>
          </div>
        </div>

      </section>
        <div className="w-full bg-white py-8 px-6 flex items-center justify-center">
  <h2 className="text-center text-[#1d1d1d] font-[400] text-2xl md:text-3xl leading-tight">
    Built By A Contractor, For Contractors{" "}
    <span className="text-[#FA8C3D]">Just Like You.</span>
  </h2>
</div>
    </>
  );
}

/* BOX */
function TimelineBox({ item }) {
  return (
    <div className="bg-white rounded-[15px] p-5 max-w-[480px] shadow-sm">
      <h3 className="text-[18px] md:text-[20px] font-medium text-[#1d1d1d]">
        {item.title}
      </h3>

      <p className="mt-2 text-sm md:text-[15px] text-[#555] leading-[1.7]">
        {item.desc}
      </p>
    </div>
  );
}
