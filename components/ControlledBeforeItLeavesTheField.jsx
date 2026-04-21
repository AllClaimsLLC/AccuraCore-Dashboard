"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: "/Icons/MA.png",
    title: "Measurement Accuracy",
    desc: "Generate precise roof dimensions tied to each job record.",
  },
  {
    icon: "/Icons/SA.png",
    title: "Scope Alignment",
    desc: "Calculations connect directly to scope items and documentation",
  },
  {
    icon: "/Icons/EC.png",
    title: "Estimate Confidence",
    desc: "Reduce guesswork and ensure accuracy before every submission or proposal.",
  },
  {
    icon: "/Icons/DI2.png",
    title: "Documentation Integrity",
    desc: "Measurements align with photo evidence and claim data.",
  },
  {
    icon: "/Icons/SR.png",
    title: "Supplement Reduction",
    desc: "Fewer disagreements and corrections due to accurate sizing.",
  },
  {
    icon: "/Icons/SJR.png",
    title: "Structured Job Linking",
    desc: "Every calculation stays attached to the job — not in spreadsheets.",
  },
];

export default function ControlledBeforeItLeavesTheField({ isOpen, setIsOpen }) {
  return (
    <section className="lg:px-6 py-16 bg-[#fbf0ec] dark:bg-slate-950">
      <div className="max-w-[90%] mx-auto space-y-4 mt-24 md:mt-72">
        {/* Top Heading & Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <h1 className="text-3xl text-black dark:text-white">
            Controlled Before It Leaves the Field
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
    </section>
  );
}
