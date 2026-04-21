"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export default function WeStructureTheWorkflow({ isOpen, setIsOpen }) {
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
          <div className="rounded-[30px] border-2 border-white bg-white/10 backdrop-blur-md p-12 w-full shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
            <Image
              src="/Images/WeStructureTheWorkflow-left.png"
              alt="Structure Proof"
              width={500}
              height={500}
              className="rounded-[16px] object-contain w-full"
            />
          </div>
        </div>

        {/* RIGHT COL */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-3xl text-[#FA8C3D]">
            Most Claims Apps File Paperwork.
            <br className="hidden lg:block" /> We Structure the Workflow.
          </h1>

          {/* BOX 1 */}
          <div className="bg-[#f2f1ef] rounded-[20px] p-6 flex flex-col gap-4">
            <h3 className="text-black font-semibold">Other tools:</h3>

            {/* Inline bullets */}
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>Track claim status</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>Store documents</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>Organize folders</span>
              </div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="bg-[#F6BE71] rounded-[20px] p-6 flex flex-col gap-4">
            <h3 className="text-black font-semibold">AccuraCam:</h3>

            {/* Vertical points */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Image
                  src="/Icons/checkmark-icon.png"
                  alt="check"
                  width={18}
                  height={18}
                />
                <span className="text-gray-700 text-sm md:text-base">
                  Enforces structure at capture
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/Icons/checkmark-icon.png"
                  alt="check"
                  width={18}
                  height={18}
                />
                <span className="text-gray-700 text-sm md:text-base">
                  Align scope with supporting evidence
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/Icons/checkmark-icon.png"
                  alt="check"
                  width={18}
                  height={18}
                />
                <span className="text-gray-700 text-sm md:text-base">
                  Create review-ready claim files automatically
                </span>
              </div>
            </div>
          </div>

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
                Prevents Incomplete Submissions <br className="hidden lg:block" /> Which Results In:
              </h3>

              {/* Separator */}
              <div className="w-full h-[2px] bg-white" />

              {/* Box */}
              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "Fewer clarification requests",
                  "Faster approval cycles",
                  "Less back-and-forth",
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
                  src="/Images/PISWRI.png"
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
                Eliminates Scope-To-Photo <br className="hidden lg:block" /> Confusion Which Results In:
              </h3>

              <div className="w-full h-[2px] bg-white" />

              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "Cleaner review experience",
                  "Stronger defensibility",
                  "Reduced ambiguity",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mt-1" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#ebf0ec] rounded-[20px] ">
                <Image
                  src="/Images/ESTPCWRI.png"
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
                Produces Submission-Ready <br className="hidden lg:block" /> Claim Packs Which Results In:
              </h3>

              <div className="w-full h-[2px] bg-white" />

              <div className="bg-[#FEEACF] rounded-[20px] p-6 flex flex-col gap-3">
                {[
                  "Faster carrier review",
                  "Fewer supplement loops",
                  "Stronger documentation credibility",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mt-1" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#ebf0ec] rounded-[20px] ">
                <Image
                  src="/Images/PSRCPWRI.png"
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
      <div className="max-w-[90%] mx-auto mb-30 flex flex-col gap-10">
        {/* Top 2 Cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT */}
          <div>
            <h1 className="text-[27px] lg:text-3xl text-black">
              Stop Chasing Missing
              <br className="hidden lg:block" /> {" "}
               Documentation.
            </h1>
            <p className="text-gray-700 text-sm md:text-base mt-3">
              Most teams discover gaps after submission when
              <br className="hidden lg:block" /> it’s already expensive
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 font-semibold text-sm md:text-base">
              AccuraCore Claims reverses that model.
            </p>

            {/* Vertical Points */}
            <div className="flex flex-col gap-3">
              {[
                "Define required documentation upfront",
                "Validate completeness before submission",
                "Review cleanly in-office",
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
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[2px] bg-white" />

        {/* AccuraCam Reduces */}
        <div className="flex items-center gap-3">
          {/* Icon Box */}
          <div className="bg-white p-2 rounded-[5px]">
            <Image
              src="/Icons/accuracore-claims.png"
              alt="AccuraCam"
              width={40}
              height={40}
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-[#0061A4]">
            AccuraCore Claims reduces:
          </h1>
        </div>

        {/* 4 Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "/Icons/RC2.png", title: "Resubmission cycles" },
            {
              icon: "/Icons/siri.png",
              title: "Internal follow-ups with field crews",
            },
            {
              icon: "/Icons/IC.png",
              title: "Confusion between scope and proof",
            },
            { icon: "/Icons/DI.png", title: "Documentation inconsistencies" },
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
            When Submission is
            <br  className="hidden lg:block" /> Structured,
            <span className="text-[#FA8C3D]"> Approvals</span>
            <br  className="hidden lg:block" /> <span className="text-[#FA8C3D]">Move Faster.</span>
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
        <div className="bg-[#0061A4] rounded-[20px] p-6 md:p-14 text-white flex flex-col justify-center gap-6">
          {/* Bullet Points */}
          <div className="flex flex-col gap-4">
            {[
              "Claims stop stalling.",
              "Documentation stays consistent.",
              "Office overhead decreases.",
              "Cash flow stabilizes.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] bg-white rounded-full mt-2"></div>
                <p className="text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-sm md:text-base">
            AccuraCore Claims transforms
            <br className="hidden lg:block" /> documentation from a liability into an
            <br className="hidden lg:block" /> advantage.
          </p>
        </div>
      </div>
    </section>
  );
}
