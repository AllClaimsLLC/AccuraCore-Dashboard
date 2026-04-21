"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export default function JustTaskManagement({ isOpen, setIsOpen }) {
  return (
        <section
      className="px-6 py-16"
      style={{
  backgroundImage: "url('/Images/bgforlastsection.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
    >
      {/* Section 1 */}
      <div className="max-w-[90%] mt-20 mb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT COL */}
        <div className="flex justify-center">
          <Image
            src="/Images/JustTaskManagement.png"
            alt="Disconnected Measurement Tools"
            width={500}
            height={500}
            className="rounded-[16px] object-contain w-full"
          />
        </div>

        {/* RIGHT COL */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-3xl text-[black]">
            Why This Isn’t
            <br className="hidden lg:block" />{" "}
            Just Task Management.
          </h1>

          {/* BOX 1 */}
          <div className="bg-[#f2f1ef] rounded-[20px] p-6 flex flex-col gap-4">
            <h3 className="text-black font-semibold">Most Measurement Tools</h3>

            {/* Vertical bullets */}
            <div className="flex flex-col gap-3 text-sm md:text-base text-gray-700">
              {[
                "Export static PDFs",
                "Operate outside the workflow",
                "Require manual scope alignment",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOX 2 */}
          <div className="bg-[#F6BE71] rounded-[20px] p-6 flex flex-col gap-4">
            <h3 className="text-black font-semibold">
              AccuraCore Roof Calculations
            </h3>

            {/* Vertical points */}
            <div className="flex flex-col gap-3">
              {[
                "Integrate directly into job records",
                "Align measurements with scope documentation",
                "Sync with claims workflow automatically",
                "Reduce supplement exposure",
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

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
           <Button
                  className="rounded-full text-sm flex items-center"
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
                  className="text-white rounded-full text-sm flex items-center"
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
          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {/* Heading */}
              <h3 className="text-black text-lg leading-snug">
                Eliminates Stalled Jobs <br className="hidden lg:block" /> Which Results In:
              </h3>

              {/* Separator */}
              <div className="w-full h-[2px] bg-white" />

              {/* Box */}
              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "Faster progression",
                  "No waiting on manual updates",
                  "Clear accountability",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mt-1" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Image Box */}
              <div className="bg-[#ebf0ec]">
                <Image
                  src="/Images/EliminatesStalledJobsWhichResultsIn.png"
                  alt="Column 1 Image"
                  width={400}
                  height={250}
                  className="rounded-[20px] object-cover w-full"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-black text-lg leading-snug">
                Prevents Skipped Steps Prevents <br className="hidden lg:block" /> confusion Which Results
                In:
              </h3>

              <div className="w-full h-[2px] bg-white" />

              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "Cleaner claims",
                  "Fewer errors",
                  "Stronger submission quality",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mt-1" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#ebf0ec] rounded-[20px] ">
                <Image
                  src="/Images/PreventsSkippedStepsPreventsWhichResultsIn.png"
                  alt="Column 2 Image"
                  width={400}
                  height={250}
                  className="rounded-[20px] object-cover w-full"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-black text-lg leading-snug">
                Reduces Internal Coordination <br className="hidden lg:block" /> Which Results In:
              </h3>

              <div className="w-full h-[2px] bg-white" />

              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "Fewer internal calls",
                  "Clear task ownership",
                  "Faster execution",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mt-1" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#ebf0ec] rounded-[20px] ">
                <Image
                  src="/Images/ReducesInternalCoordinationWhichResultsIn.png"
                  alt="Column 3 Image"
                  width={400}
                  height={250}
                  className="rounded-[20px] object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
                  className="rounded-full text-sm flex items-center"
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
                  className="text-white rounded-full text-sm flex items-center"
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
          Stop relying <br className="hidden lg:block" />
          on manual follow-ups
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
          <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
            Structured Roof
            <br className="hidden lg:block" /> Calculations.
            <span className="text-[#FA8C3D]"> Seamless</span>
            <br className="hidden lg:block" /> <span className="text-[#FA8C3D]">Downstream Workflow.</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
           <Button
                  className="rounded-full text-sm flex items-center border-2 border-gray-300"
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
                  className="text-white rounded-full text-sm flex items-center"
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
