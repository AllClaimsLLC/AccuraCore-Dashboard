"use client";

import useFadeIn from "@/lib/useFadeIn";
import { Button } from "./ui/button";

export default function TheTosolsSection() {
  useFadeIn();
  return (
    <section
      className="py-16 lg:pb-10 bg-[linear-gradient(50deg,_#fbfcf8_43%,_#e6f4f7_100%)]
    dark:bg-[linear-gradient(50deg,_#020617_0%,_#0f172a_100%)]"
      // style={{
      //     background: "linear-gradient(50deg, #fbfcf8 43%, #e6f4f7 100%)"
      //   }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 custom-width pt-8 sm:pt-16"
        style={{ width: "90%" }}
      >
        {/* Grid Section */}
        <div className="fade-up">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8"
            style={{ alignItems: "center" }}
          >
            {/* Report Compile Card */}
            <div className="p-2 lg:p-10">
              <h4 className="text-2xl mb-3 text-orange-500">
                <span className="font-bold text-gray-900 dark:text-gray-100">
                  Organize Your Company & Empower Your Team
                </span>
              </h4>
              <p
                className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-6"
                style={{ fontSize: "15px" }}
              >
                Easily create your company profile, onboard crew members, assign
                custom roles, set permissions, and manage user access, all from
                one powerful, centralized dashboard built for control and
                clarity.
              </p>
            </div>

            {/* RT Image */}
            <div
              className="rounded-2xl p-8 lg:p-10 flex items-center justify-center bg-white/60 dark:bg-slate-900 border-2 border-white dark:border-slate-700"
              // style={{ backgroundColor: "#fbfaf83d", border: "3px solid white" }}
            >
              <div className="relative w-full max-w-md">
                <img
                  src="/Images/OCET.png"
                  alt="Organize Your Company & Empower Your Team"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Capture Image */}
            <div
              className="rounded-2xl p-8 lg:p-10 flex items-center justify-center bg-white/60 dark:bg-slate-900 border-2 border-white dark:border-slate-700"
              // style={{ backgroundColor: "#fbfaf8", border: "5px solid white" }}
            >
              <div className="relative w-full max-w-md">
                <img
                  src="/Images/builtIn.png"
                  alt="Integrated Notes & File Management"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Claim Images & Attachments Card */}
            <div className="p-2 lg:p-10">
              <h4 className="text-2xl mb-3 text-orange-500">
                <span className="font-bold text-gray-900 dark:text-gray-100">
                  Integrated Notes & File Management
                </span>
              </h4>
              <p
                className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-6"
                style={{ fontSize: "15px" }}
              >
                Maintain a complete and organized record by linking notes,
                documents, and images to every contact, job, or claim within
                AccuraCore, ensuring your crew always has the right information
                at the right time, with nothing lost, missed, or out of place.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                src="/Icons/right-arrow-white.svg"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
