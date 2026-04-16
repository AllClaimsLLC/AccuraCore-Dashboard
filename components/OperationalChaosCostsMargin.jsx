"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OperationalChaosCostsMargin({ setIsOpen }) {
  return (
    <section className="relative w-full py-16 px-6">
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
            Operational Chaos Costs<br />Margin.
          </h1>

          {/* FIRST BULLET POINTS */}
          <div className="flex flex-col gap-2">
            {[
              "Lost time coordinating between teams",
              "Missed follow-ups and stalled approvals",
              "Incomplete job files at submission",
              "Rework caused by workflow gaps",
              "Revenue delayed by operational friction",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] bg-gray-400 rounded-full mt-2" />
                <p className="text-gray-400 text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* SECOND SECTION HEADING */}
          <h2 className="text-lg md:text-xl text-[#F6BE71] mt-2">
            My AccuraCore reduces
          </h2>

          {/* SECOND BULLET POINTS */}
          <div className="flex flex-col gap-2">
            {[
              "Structured workflows from start to submission",
              "Clear job ownership and accountability",
              "Real-time status visibility",
              "Built-in documentation controls",
              "Consistent execution across every job",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] bg-[#F6BE71] rounded-full mt-2" />
                <p className="text-white text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Button
              className="rounded-full text-sm flex items-center"
              style={{
                backgroundColor: "#ffffff",
                color: "#0061A4",
                padding: "27px 15px",
                border: "none",
              }}
            >
              Get Started
              <img
                src="/Icons/Vector2.png"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
            </Button>

            <Button
              className="text-white rounded-full text-sm flex items-center"
              style={{
                backgroundColor: "#0061A4",
                border: "2px solid #4485b2",
                padding: "25px 15px",
              }}
              onClick={() => setIsOpen(true)}
            >
              Book Demo
              <img
                src="/Icons/Vector.png"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full flex justify-center">
          <Image
            src="/Images/OperationalChaosCostsMargin.png"
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