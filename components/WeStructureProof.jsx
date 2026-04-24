"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import useFadeIn from "@/lib/useFadeIn";

export default function WeStructureProof({ isOpen, setIsOpen }) {
  useFadeIn();
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
       <div className="fade-up">
      <div className="max-w-[90%] mt-0 sm:mt-20 md:mt-20 lg:mt-20 mb-0 sm:mb-20 md:mb-20 lg:mb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT COL */}
        <div className="hidden lg:flex justify-center">
          <div className="rounded-[30px] border-2 border-white bg-white/10 backdrop-blur-md p-12 w-full">
            <Image
              src="/Images/WeStructureProof-left.png"
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
          <h1 className="text-3xl text-[#FA8C3D]">We Structure Proof</h1>

          {/* BOX 1 */}
          <div className="bg-[#f2f1ef] rounded-[20px] p-6 flex flex-col gap-4">
            <h3 className="text-black font-semibold">Other tools:</h3>

            {/* Inline bullets */}
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>Store photos</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>Organize folders</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>Add notes</span>
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
                  Aligns field documentation with claims workflows
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
                  Creates review-ready records automatically
                </span>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden justify-center">
            <div className="rounded-[30px] border-2 border-white bg-white/10 backdrop-blur-md p-12 w-full">
              <Image
                src="/Images/WeStructureProof-left.png"
                alt="Structure Proof"
                width={500}
                height={500}
                className="rounded-[16px] object-contain w-full"
              />
            </div>
          </div>

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
      </div></div>

      {/* Section 2 */}
       <div className="fade-up">
      <div className="max-w-[90%] mx-auto mb-30 flex flex-col gap-10">
        {/* CENTER HEADING */}
        <h1 className="hidden lg:block text-3xl text-black lg:text-center">
          Every Screen <br className="hidden lg:block" />
          Has a Business Outcome
        </h1>

        {/* IMAGE WRAPPER DESKTOP */}
        <div className="hidden lg:flex w-full overflow-hidden justify-center">
          {/* FIXED CANVAS */}
          <div className="relative w-[1000px] scale-[0.9] sm:scale-[1] origin-top">
            {/* LEFT OVERLAY CONTENT */}
            <div className="absolute left-5 top-41 z-10 max-w-[250px] flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <img
                  src="/Icons/checkmark-icon-green.png"
                  className="w-5 h-5 mt-1"
                />
                <h3 className="text-black text-sm">
                  Establishes Ownership & Accountability
                </h3>
              </div>
              <p className="text-gray-600 text-[11px] pl-7">
                Clear identity mapping ensures every project, upload, and action
                is traceable eliminating responsibility gaps.
              </p>
            </div>

            <div className="absolute left-5 top-88 z-10 max-w-[250px] flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <img
                  src="/Icons/checkmark-icon-green.png"
                  className="w-5 h-5 mt-1"
                />
                <h3 className="text-black text-sm">
                  Centralizes Asset Control
                </h3>
              </div>
              <p className="text-gray-600 text-[11px] pl-7">
                All project-related files, images, and resources are accessible
                from one controlled location
              </p>
            </div>

            {/* RIGHT OVERLAY CONTENT */}
            <div className="absolute right-5 top-41 z-10 max-w-[250px] flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <img
                  src="/Icons/checkmark-icon-green.png"
                  className="w-5 h-5 mt-1"
                />
                <h3 className="text-black text-sm">
                  Provides Instant Project Visibility
                </h3>
              </div>
              <p className="text-gray-600 text-[11px] pl-7">
                Each card surfaces location, media, and current state at a
                glance.
              </p>
            </div>

            <div className="absolute right-5 top-88 z-10 max-w-[250px] flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <img
                  src="/Icons/checkmark-icon-green.png"
                  className="w-5 h-5 mt-1"
                />
                <h3 className="text-black text-sm">
                  Enables Real-Time Field Documentation
                </h3>
              </div>
              <p className="text-gray-600 text-[11px] pl-7">
                Capture and attach evidence directly to the project context.
              </p>
            </div>

            {/* MAIN IMAGE */}
            <img
              src="/Images/EveryScreenHasBusinessOutcome.png"
              className="w-full max-w-[600px] mx-auto object-contain"
            />
          </div>
        </div>

        {/* WRAPPER MOBILE */}
        <div className="hidden flex-col gap-6">
          {[
            {
              title: "Establishes Ownership & Accountability",
              desc: "Clear identity mapping ensures every project, upload, and action is traceable eliminating responsibility gaps.",
            },
            {
              title: "Centralizes Asset Control",
              desc: "All project-related files, images, and resources are accessible from one controlled location",
            },
            {
              title: "Provides Instant Project Visibility",
              desc: "Each card surfaces location, media, and current state at a glance.",
            },
            {
              title: "Enables Real-Time Field Documentation",
              desc: "Capture and attach evidence directly to the project context.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <img
                  src="/Icons/checkmark-icon-green.png"
                  className="w-5 h-5 mt-1"
                />
                <h3 className="text-black text-sm font-medium">{item.title}</h3>
              </div>

              <p className="text-gray-600 text-sm pl-7 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Top 2 Cols */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT */}
          <h1 className="text-3xl text-black">
            Stop rebuilding <br className="hidden lg:block" />
            documentation in <br className="hidden lg:block" />
            the office.
          </h1>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 text-sm md:text-base">
              Most teams capture photos fast and fix them later. AccuraCam
              reverses that model.
            </p>

            {/* Inline Points */}
            <div className="flex flex-wrap items-center gap-6">
              {["Capture once.", "Structure instantly.", "Review cleanly"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-2">
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
                ),
              )}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[2px] bg-white" />

        {/* AccuraCam Reduces */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-[5px]">
            <Image
              src="/Icons/accuracam.png"
              alt="AccuraCam"
              width={40}
              height={40}
            />
          </div>

          <h1 className="text-2xl font-semibold text-[#0061A4]">
            Accuracam reduces:
          </h1>
        </div>

        {/* 4 Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {[
            { icon: "/Icons/OLH.png", title: "Office labor hours" },
            { icon: "/Icons/SL.png", title: "Supplement loops" },
            { icon: "/Icons/IC.png", title: "Internal confusion" },
            { icon: "/Icons/MPR.png", title: "Missed photo risk" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdfcf7] rounded-[14px] sm:rounded-[20px] md:rounded-[20px] lg:rounded-[20px] p-3 sm:p-6 md:p-6 lg:p-6 flex flex-col items-center sm:items-start md:items-start lg:items-start text-center gap-2 sm:gap-4 shadow-sm hover:scale-105 transition-transform"
            >
              <div className="bg-[#0061A4] p-2 rounded-[10px] w-fit">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                />
              </div>

              <p className="text-black font-semibold text-sm md:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div></div>

      {/* Section 4 */}
       <div className="fade-up">
      <div className="max-w-[90%] mx-auto bg-white rounded-[20px] mt-20 mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
            <span className="text-[#FA8C3D]">Capture Once.</span>
             {" "}Structure Instantly. Review
            Cleanly.
          </h2>

          {/* Buttons */}
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

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/Images/girl-smiling.png"
            alt="One Platform"
            className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] max-w-md md:max-w-full object-contain"
          />
        </div>
      </div></div>
    </section>
  );
}
