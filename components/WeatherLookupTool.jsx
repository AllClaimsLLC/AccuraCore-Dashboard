"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import AccuraCard from "./AccuraCard";

export default function WeatherLookupTool({ isOpen, setIsOpen }) {
  return (
        <section
      className="lg:px-6 py-16"
      style={{
  backgroundImage: "url('/Images/bgforlastsection.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
    >
      {/* Section 1 */}
      <div className="max-w-[90%] mt-0 sm:mt-20 md:mt-20 lg:mt-20 mb-0 sm:mb-20 md:mb-20 lg:mb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 items-center">
        {/* LEFT COL*/}
        <div className="flex flex-col gap-6 lg:w-[72%]">
          {/* Heading */}
          <h1 className="text-3xl text-black">
            Why this isn’t just a weather lookup tool.
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Most weather tools rely on manual effort and disconnected workflows,
            while <span className="text-[#FA8C3D]">AccuraCore</span> provides
            automated, job-linked, and claim-aligned weather intelligence for
            faster, more reliable documentation and stronger claim support.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "27px 15px",
                    border: "none",
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  Get Started
                  <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
                <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto text-white rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#0061A4",
                    border: "2px solid #4485b2",
                    padding: "25px 15px",
                  }}
                  onClick={() => (window.location.href = "/book-a-demo")}
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

        {/* RIGHT COL */}
        <div className="bg-[#ede8e5] rounded-[20px] p-6">
          {/* White Box */}
          <div className="bg-white rounded-[20px] p-4">
            {/* Inner Gray Box */}
            <div className="bg-[#f7f7f7] rounded-[20px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* LEFT SIDE - MOST WEATHER TOOLS */}
              <div className="flex flex-col gap-2">
                <div className="bg-white rounded-[12px] overflow-hidden text-center">
                  <div className="bg-[#FA8C3D] text-white py-2 text-sm">
                    Most Weather Tools
                  </div>
                  <div className="px-3 py-3 text-black text-sm text-left">
                    Provide general storm maps
                  </div>
                </div>

                {[
                  "Require manual downloads",
                  "Work separately from job/claim systems",
                  "Require manual documentation updates",
                  "Increase research and admin effort",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white text-black rounded-[12px] px-3 py-3 text-left text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE - MY ACCURACORE */}
              <div className="flex flex-col gap-2">
                <div className="bg-white rounded-[12px] overflow-hidden text-center">
                  <div className="bg-[#0061A4] text-white py-2 text-sm">
                    MyAccuraCore
                  </div>
                  <div className="px-3 py-3 text-black text-sm text-left">
                    Link directly to job records
                  </div>
                </div>
                {[
                  "Pull verified weather data automatically",
                  "Sync with claims, scope, and photos",
                  "Instant report generation",
                  "Improve claim defensibility",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white text-black rounded-[12px] px-3 py-3 text-left text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-[90%] mx-auto pt-10 mb-30">
        <div className="bg-[#0061A4] rounded-[15px] px-8 py-8 flex flex-col items-center text-center gap-4 md:flex-row md:items-center md:text-left">
          {/* Logo */}
          <Image
            src="/Logos/Accuracore/accuracore.png"
            alt="Accuracore"
            width={120}
            height={120}
            className="object-contain"
          />

          {/* Text */}
          <h2 className="text-white text-lg md:text-xl tracking-[0.2em] md:tracking-[4.5em]">
            ACCURACORE
          </h2>
        </div>

        {/* 3 cols */}
       <div className="pt-10 mb-15 flex flex-col gap-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

    <AccuraCard
      title={
        <>
          Strengthens Claim Defensibility <br className="hidden lg:block" /> Which Results In:
        </>
      }
      bullets={[
        "Stronger damage validation",
        "Reduced carrier pushback",
        "Cleaner review experience",
      ]}
      image="/Images/SCD.png"
      alt="Claim Defensibility"
    />

    <AccuraCard
      title={
        <>
          Eliminates Manual Documentation <br className="hidden lg:block" /> Confusion Which Results In:
        </>
      }
      bullets={[
        "No external downloads",
        "No file mismatches",
        "Faster submission preparation",
      ]}
      image="/Images/EMD.png"
      alt="Manual Documentation"
    />

    <AccuraCard
      title={
        <>
          Supports Timeline Accuracy <br className="hidden lg:block" /> Which Results In:
        </>
      }
      bullets={[
        "Clear cause correlation",
        "Reduced ambiguity",
        "Stronger submission credibility",
      ]}
      image="/Images/STA.png"
      alt="Timeline Accuracy"
    />

  </div>
</div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "27px 15px",
                    border: "none",
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  Get Started
                  <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
                <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto text-white rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#0061A4",
                    border: "2px solid #4485b2",
                    padding: "25px 15px",
                  }}
                  onClick={() => (window.location.href = "/book-a-demo")}
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

      {/* Section 3 */}
      <div className="max-w-[90%] mt-20 mb-20 mx-auto flex flex-col gap-10">
        {/* TOP HEADING */}
        <h1 className="text-3xl text-black">
          Stop searching for <br className="hidden lg:block" />
          storm data outside your workflow.
        </h1>

        {/* 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT COL */}
          <div className="bg-[#f2f1ef] rounded-[20px] p-6 flex flex-col gap-4">
            <h3 className="text-black font-semibold">
              The Problem With Disconnected Tools
            </h3>

            <div className="flex flex-col gap-3 text-sm md:text-base text-gray-700">
              {[
                "Measurements live outside your workflow",
                "Manual re-entry into claim systems",
                "Scope and measurements fall out of sync",
                "Errors discovered too late",
                "Delays caused by avoidable mismatches",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COL */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#F6BE71] rounded-[20px] p-6 flex flex-col gap-4">
              <h3 className="text-black font-semibold">
                What AccuraCore Changes
              </h3>

              <div className="flex flex-col gap-3">
                {[
                  "Measurements connect directly to job records",
                  "Scope and calculations stay aligned",
                  "No manual duplication",
                  "No cross-tool confusion",
                  "One structured system from capture to submission",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Image
                      src="/Icons/checkmark-icon.png"
                      alt="check"
                      width={18}
                      height={18}
                    />
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="max-w-[90%] mx-auto bg-white rounded-[20px] mt-30 mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-[#FA8C3D]">
            Get Accurate Roof &
            <br className="hidden lg:block" /> Weather
            <span className="text-black"> Intelligence </span>
            <br className="hidden lg:block" /> <span className="text-black">Power Your Claims</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center border-2 border-gray-300"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "27px 15px",
                   
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  Get Started
                  <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
                <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto text-white rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#0061A4",
                    border: "2px solid #4485b2",
                    padding: "25px 15px",
                  }}
                  onClick={() => (window.location.href = "/book-a-demo")}
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
        <div className="flex justify-center">
          <img
            src="/Images/calculator-one-platform.png"
            alt="One Platform"
            className="w-full max-w-md md:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
