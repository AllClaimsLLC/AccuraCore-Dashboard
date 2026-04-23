"use client";
import Image from "next/image";

const steps = [
  {
    title: "Standardize Your Workflow",
    desc: "By defining clear stages for every job—from request to completion—you minimize confusion and reduce turnaround time.",
  },
  {
    title: "Utilize Real-Time Data",
    desc: "Live dashboards help you monitor team performance and identify bottlenecks before they impact delivery.",
  },
  {
    title: "Automate Routine Tasks",
    desc: "Use built-in features to automate recurring jobs, alerts, and reports so your team can focus on high-value work.",
  },
  {
    title: "Centralize Communication",
    desc: "Keep all project details, notes, and files linked to relevant tasks or contacts to eliminate scattered information.",
  },
];

export default function BestPracticesForTransformativeWorkflows() {
  return (
    <>
    
    <section
      className="hidden sm:block md:block lg:block lg:px-6 py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/Images/UnstructuredDocumentationCostsMoney-bg.png')",
      }}
    >
      <div className="max-w-[90%] mx-auto space-y-6">

        {/* HEADING */}
        <h2 className="text-[20px] md:text-3xl font-normal leading-tight text-white">
          Best Practices for Transformative Workflows
        </h2>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-4 md:p-6 rounded-[15px] shadow-lg flex flex-col gap-3 transition-transform hover:scale-105"
            >
              {/* ICON */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#0061A4] rounded-[10px]">
                <Image
                  src="/Icons/SYW.png"
                  alt="icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-xs md:text-sm text-gray-600 leading-snug">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
    
    <section
      className="block sm:hidden md:hidden lg:hidden lg:px-6 py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/Images/UnstructuredDocumentationCostsMoney-bg.png')",
      }}
    >
      <div className="max-w-[90%] mx-auto space-y-6">

        {/* HEADING */}
        <h2 className="text-[20px] md:text-3xl font-normal leading-tight text-white">
          Best Practices for Transformative Workflows
        </h2>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-2 md:p-6 rounded-[12px] md:rounded-[15px] shadow-lg flex flex-row md:flex-col items-start gap-3 md:gap-4 transition-transform transform hover:scale-105"
              >
                {/* Number Box */}
                <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
                 <Image
                  src="/Icons/SYW.png"
                  alt="icon"
                  width={20}
                  height={20}
                  className="object-contain"
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
      </div>
    </section>
      </>
  );
}