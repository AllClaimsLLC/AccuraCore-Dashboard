"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: "/Icons/JLWD.png",
    title: "Job-Linked Weather Data",
    desc: " Attach historical weather conditions directly to each job.",
  },
  {
    icon: "/Icons/SEV.png",
    title: "Storm Event Verification",
    desc: "Document hail, wind, or severe weather activity tied to the property location",
  },
  {
    icon: "/Icons/CSA.png",
    title: "Claim Support Alignment",
    desc: "Weather reports align with scope and damage documentation.",
  },
  {
    icon: "/Icons/DR.png",
    title: "Dispute Reduction",
    desc: "Strengthen defensibility with structured third-party data.",
  },
  {
    icon: "/Icons/ERR.png",
    title: "Export-Ready Reports",
    desc: "Generate submission-grade weather documentation instantly.",
  },
  {
    icon: "/Icons/TC.png",
    title: "Timeline Correlation",
    desc: "Match weather events with inspection dates and damage reports.",
  },
];

export default function WeatherIntelligenceClaimValidation({ isOpen, setIsOpen }) {
  return (
       <>
      <section className="hidden sm:block md:block lg:block lg:px-6 py-16 bg-[#fbf0ec] dark:bg-slate-950">
        <div className="max-w-[90%] mx-auto space-y-4 mt-24 md:mt-72">
          {/* Top Heading & Text */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <h1 className="text-3xl text-black dark:text-white">
              Weather Intelligence & Claim Validation
            </h1>
          </div>

          {/* Steps / Boxes */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-[15px] shadow-lg flex flex-col gap-4 transition-transform transform hover:scale-105"
              >
                {/* Number Box */}
                <div className="w-10 h-10 flex items-center justify-center bg-[#0061A4] rounded-[10px]">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>

                {/* Heading */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
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
      </section>

      <section className="block sm:hidden md:hidden lg:hidden lg:px-6 py-16 bg-[#fbf0ec] dark:bg-slate-950">
        <div className="max-w-[90%] mx-auto space-y-4 mt-24 md:mt-72">
          {/* Top Heading & Text */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <h1 className="text-3xl text-black dark:text-white">
              Weather Intelligence & Claim Validation
            </h1>
          </div>

          {/* Steps / Boxes */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-2 md:p-6 rounded-[12px] md:rounded-[15px] shadow-lg flex flex-row md:flex-col items-start gap-3 md:gap-4 transition-transform transform hover:scale-105"
              >
                {/* Number Box */}
                <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={14}
                    height={14}
                    className="object-contain md:w-5 md:h-5"
                  />
                </div>

                {/* Heading */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[13px] md:text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
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
      </section>
    </>
  );
}
