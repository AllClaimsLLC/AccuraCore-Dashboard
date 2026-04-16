"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export default function JustAnotherCRM() {
  return (
    <section
      className="px-6 py-16"
      style={{
        background:
          "linear-gradient(120deg, rgb(250, 237, 231) 20%, rgb(227, 245, 247) 56%)",
      }}
    >
      {/* Section 1 */}
      <div className="max-w-[90%] mt-20 mb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap:10 lg:gap-30 items-center">
        {/* LEFT COL */}
        <div className="bg-[#ede8e5] rounded-[20px] p-6">
          {/* White Box */}
          <div className="bg-white rounded-[20px] p-4">
            {/* Inner Gray Box */}
            <div className="bg-[#f7f7f7] rounded-[20px] p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-2">
                {/* Main Box */}
                <div className="bg-white rounded-[12px] overflow-hidden text-center">
                  <div className="bg-[#FA8C3D] text-white py-2 text-sm">
                    Most Contractor CRMs
                  </div>
                  <div className="px-3 py-3 text-black text-sm text-left">
                    Track contacts
                  </div>
                </div>

                <div className="bg-white rounded-[12px] px-3 py-3 text-left text-sm">
                  Store notes
                </div>

                <div className="bg-white rounded-[12px] px-3 py-3 text-left text-sm">
                  Manage pipeline
                </div>

                <div className="bg-white rounded-[12px] px-3 py-3 text-left text-sm">
                  Display status
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-2">
                {/* Main Box */}
                <div className="bg-white rounded-[12px] overflow-hidden text-center">
                  <div className="bg-[#0061A4] text-white py-2 text-sm">
                    MyAccuraCore
                  </div>
                  <div className="px-3 py-3 text-black text-sm text-left">
                    Control job workflows
                  </div>
                </div>

                <div className="bg-white rounded-[12px] px-3 py-3 text-left text-sm">
                  Enforce operational structure
                </div>

                <div className="bg-white rounded-[12px] px-3 py-3 text-left text-sm">
                  Align field, office & claims
                </div>

                <div className="bg-white rounded-[12px] px-3 py-3 text-left text-sm">
                  Standardize execution
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COL (UPDATED CONTENT) */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-3xl text-black">
            Why This Isn’t <br /> Just Another CRM.
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Most systems simply organize information.
            <br /> <span className="text-[#FA8C3D]">MyAccuraCore</span> goes
            further by structuring operations
            <br /> themselves—defining how work moves, how decisions are
            <br /> made, and how accountability is enforced at every step.
            <br /> That is the category difference.
          </p>

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
                Eliminates Status Confusion <br /> Which Results In:
              </h3>

              {/* Separator */}
              <div className="w-full h-[2px] bg-white" />

              {/* Box */}
              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  " Field progress",
                  "Documentation readiness",
                  "Claim status &  Pending actions",
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
                  src="/Images/ESCWRI.png"
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
                Prevents Workflow Breakdowns <br /> Which Results In:
              </h3>

              <div className="w-full h-[2px] bg-white" />

              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "No skipped steps",
                  "No undocumented transitions",
                  "Cleaner job progression",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mt-1" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#ebf0ec] rounded-[20px] ">
                <Image
                  src="/Images/PWBWRI.png"
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
                Connects Documentation
                <br /> To Operations Which Results In:
              </h3>

              <div className="w-full h-[2px] bg-white" />

              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "No data silos",
                  "No reconstruction",
                  "Clean operational continuity",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mt-1" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#ebf0ec] rounded-[20px] ">
                <Image
                  src="/Images/CDTOWRI.png"
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

      {/* Section 3 */}
      <div className="max-w-[90%] mx-auto mb-30 flex flex-col gap-10">
        {/* Top 2 Cols */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
  
  {/* LEFT */}
  <div>
    <h1 className="text-3xl text-black">
      Stop Managing Jobs Across<br/>Disconnected Tools.
    </h1>

    <p className="text-gray-500 font-semibold text-sm md:text-base mt-3">
      Most contractors operate across:
    </p>

    {/* BULLETS GRID */}
    <div className="mt-5 flex flex-col gap-4">
      
      {/* Row 1 (3 items) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {["Text messages", "Spreadsheets", "Shared drives"].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-[5px] h-[5px] bg-gray-700 rounded-full" />
            <span className="text-sm md:text-base text-gray-700">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 (2 items) */}
      <div className="grid grid-cols-2 gap-9 max-w-[400px]">
        {["Field apps", "Claim portals"].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-[5px] h-[5px] bg-gray-700 rounded-full" />
            <span className="text-sm md:text-base text-gray-700">
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>
  </div>

  {/* RIGHT */}
  <div className="flex flex-col gap-5">
    
    {/* Heading */}
    <p className="text-gray-500 font-semibold text-[20px]">
      MyAccuraCore replaces that fragmentation.
    </p>

    {/* 2-COL BULLETS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        "Centralize jobs",
        "Standardize workflow",
        "Align teams",
        "Track readiness",
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <Image
            src="/Icons/checkmark-icon-green.png"
            alt="check"
            width={18}
            height={18}
          />
          <span className="text-sm md:text-base text-gray-700">
            {item}
          </span>
        </div>
      ))}
    </div>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-4">
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
</div>

        {/* Separator */}
        <div className="w-full h-[2px] bg-white" />

        {/* AccuraCam Reduces */}
        <div className="flex items-center gap-3">
          {/* Icon Box */}
          <div className="bg-white p-2 rounded-[5px]">
            <Image
              src="/Icons/my-accuracore.png"
              alt="AccuraCam"
              width={40}
              height={40}
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-[#0061A4]">
            My AccuraCore Reduces:
          </h1>
        </div>

        {/* 4 Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "/Icons/InC.png", title: "Internal confusion" },
            {
              icon: "/Icons/SG.png",
              title: "Status guessing",
            },
            {
              icon: "/Icons/MD.png",
              title: "Missed documentation",
            },
            { icon: "/Icons/CC.png", title: "Workflow breakdowns" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdfcf7] rounded-[20px] p-4 flex flex-col gap-4 shadow-sm hover:scale-105 transition-transform"
            >
              {/* Icon Box */}
              <div className="bg-[#0061A4] p-2 rounded-[10px] w-fit">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                />
              </div>

              {/* Title */}
              <p className="text-black font-semibold text-sm md:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 */}
      <div className="max-w-[90%] mx-auto bg-white rounded-[20px] mt-20 mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
            When Operations Are
            <br /> Structured,
            <span className="text-[#FA8C3D]"> Growth</span>
            <br /> <span className="text-[#FA8C3D]">Becomes Predictable.</span>
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
        <div className="bg-[#0061A4] rounded-[20px] p-6 md:p-14 text-white flex flex-col justify-center gap-6">
          {/* Bullet Points */}
          <div className="flex flex-col gap-4">
            {[
              "Jobs move cleanly.",
              "Teams stay aligned.",
              "Documentation stays connected.",
              "Revenue flows consistently.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] bg-white rounded-full mt-2"></div>
                <p className="text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-sm md:text-base">
            MyAccuraCore turns contractor 
            <br /> operations into a system — not a 
            <br /> scramble.
          </p>
        </div>
      </div>
    </section>
  );
}
