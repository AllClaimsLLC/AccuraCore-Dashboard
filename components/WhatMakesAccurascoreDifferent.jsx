// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import useFadeIn from "@/lib/useFadeIn";
// import Marquee from "./Marquee";
// import DashboardIcon from "@/public/Icons/Homepage/Unified Dashboard Experience.svg?url";
// import WorkflowIcon from "@/public/Icons/Homepage/Workflow That Matches Your Contracting Process.svg?url";
// import FinancialIcon from "@/public/Icons/Homepage/Built-in Financial Intelligence.svg?url";
// import CreateCompanyIcon from "@/public/Icons/Homepage/Create Your Company.svg?url";
// import BuildWorkflowIcon from "@/public/Icons/Homepage/Build Custom Workflows.svg?url";
// import ControlPanelIcon from "@/public/Icons/Homepage/All-in-One Control Panel.svg?url";

// export default function WhatMakesAccurascoreDifferent({ id, onBookDemo }) {
//   useFadeIn();
//   const [selectedFeature, setSelectedFeature] = useState(
//     "Unified Dashboard Experience",
//   );

//   const images = {
//     "Unified Dashboard Experience": "/Images/unified.png",
//     "Workflow That Matches Your Contracting Process": "/Images/OCET.png",
//     "Built-In Financial Intelligence": "/Images/builtIn.png",
//   };

// const features = [
//   {
//     title: "Unified Dashboard Experience",
//     desc: "One Platform, Total Control, Zero Hassle",
//     Icon: DashboardIcon,
//   },
//   {
//     title: "Workflow That Matches Your Contracting Process",
//     desc: "We Adapt To You With Custom Workflows And Logic Switches",
//     Icon: WorkflowIcon,
//   },
//   {
//     title: "Built-In Financial Intelligence",
//     desc: "Budgeting, Estimates, Invoicing All Accurate And Audit-Ready",
//     Icon: FinancialIcon,
//   },
// ];

//   const steps = [
//     {
//       title: "A CRM That Fits One Operating System. Zero App Switching",
//       desc: "Run your entire business from a single dashboard. No more juggling 5 tools to get through one job. Everything lives here your crew, your jobs, your money, your customers.",
//     },
//     {
//       number: "02",
//       title: "A CRM That Fits How You Actually Work",
//       desc: "Fully customizable to match your workflow, your team, and your trade, not the other way around.",
//     },
//     {
//       number: "03",
//       title: "Snap. Speak. Upload. Done.",
//       desc: "Integrated camera with voice labeling instantly uploads job photos and notes to the right file. No paperwork later.",
//     },
//     {
//       number: "04",
//       title: "Talk Directly to Your Customers with MyAccuraCore",
//       desc: "Real time two way communication that keeps clients in the loop and your phone from blowing up.",
//     },
//     {
//       number: "05",
//       title: "Get More Insurance Claims Paid",
//       desc: "Track every claim and auto generate damage reports that adjusters actually approve. More approvals equals more revenue.",
//     },
//     {
//       number: "06",
//       title: "We Move Your Data In, Free",
//       desc: "Switching systems? We migrate everything from your current setup at zero cost. No friction, no fees, no stress.",
//     },
//     {
//       number: "07",
//       title: "Onboarding and Support That Has Your Back",
//       desc: "Real humans, real fast. We make the switch EASY so you can get back to building.",
//     },
//   ];

//   return (
//     <section className="lg:px-6 py-16 bg-[#f4f0ed] dark:bg-slate-950">
//       <Marquee />

//       <section className="hidden sm:hidden md:hidden lg:hidden lg:px-6 py-16 dark:bg-slate-950 ">
//         <div className="fade-up">
//           <div className="max-w-[90%] mx-auto space-y-4 mt-8">
//             {/* Top Heading & Text */}
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//              <h2 className="text-2xl text-gray-900 dark:text-white">
//                 Everything you need. Nothing you don't.
//               </h2>
//             </div>

//             <div className="gradient-border gradient-shadow p-[1px] rounded-[15px]">
//   <div className="bg-white dark:bg-slate-900 p-6 rounded-[15px] flex flex-col gap-4 transition-transform transform hover:scale-105">

//     {/* Number */}
//     <div className="text-white w-10 h-10 flex items-center justify-center bg-[#0061A4] rounded-[10px]">
//       01
//     </div>

//     {/* Content */}
//     <div>
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//         {steps[0].title}
//       </h3>
//       <p className="text-gray-600 dark:text-gray-400 mt-2">
//         {steps[0].desc}
//       </p>
//     </div>

//   </div>
// </div>

//             {/* Steps / Boxes */}
//             <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {steps.slice(1).map((step, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white dark:bg-slate-900 p-6 rounded-[15px] shadow-lg flex flex-col gap-4 transition-transform transform hover:scale-105"
//                 >
//                   {/* Number Box */}
//                   <div className="text-white w-10 h-10 flex items-center justify-center bg-[#0061A4] rounded-[10px]">
//                     {step.number}
//                   </div>

//                   {/* Heading */}
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {step.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-600 dark:text-gray-400 text-sm">
//                     {step.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="hidden sm:hidden md:hidden lg:hidden lg:px-6 py-16 dark:bg-slate-950 ">
//         <div className="fade-up">
//           <div className="max-w-[90%] mx-auto space-y-4 mt-8">
//             {/* Top Heading & Text */}
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//               <h2 className="text-2xl text-gray-900 dark:text-white">
//                 Everything you need. Nothing you don't.
//               </h2>
//             </div>

//  <div className="gradient-border gradient-shadow p-[1px] rounded-[15px]">
//             <div className="bg-white dark:bg-slate-900 p-2 rounded-[16px] shadow-lg hover:scale-[1.01] transition-transform">
//               <div className="flex gap-4 items-start">
//                 {/* Number */}
//                 <div className="text-white w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
//                   <span className="text-[12px]">01</span>
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h3 className="text-[13px] md:text-lg font-semibold text-gray-900 dark:text-white">
//                     {steps[0].title}
//                   </h3>
//                   <p className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400 leading-snug">
//                     {steps[0].desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             </div>

//             {/* Steps / Boxes */}
//             <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//               {steps.slice(1).map((step, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white dark:bg-slate-900 p-2 md:p-6 rounded-[12px] md:rounded-[15px] shadow-lg flex flex-row md:flex-col items-start gap-3 md:gap-4 transition-transform transform hover:scale-105"
//                 >
//                   {/* Number Box */}
//                   <div className="text-white  w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
//                     <span className="text-[12px]">{step.number}</span>
//                   </div>

//                   {/* Heading */}
//                   <div className="flex flex-col gap-2">
//                     <h3 className="text-[13px] md:text-lg font-semibold text-gray-900 dark:text-white">
//                       {step.title}
//                     </h3>

//                     <p className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400 leading-snug">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto mt-14 md:mt-18">
//         <div className="fade-up">
//           <div
//             id={id}
//             className="grid lg:grid-cols-2 gap-12 mb-16"
//             style={{ width: "90%", margin: "auto" }}
//           >
//             {/* Left Column */}
//             <div className="space-y-8">
//               <h2 className="text-2xl text-gray-900 dark:text-white">
//                 What Makes <br />
//                 <strong>AccuraCore</strong> Different?
//               </h2>

//               {/* Feature Items */}
//               <div className="space-y-6">
//                 {features.map((feature, idx) => (
//                   <div
//                     key={idx}
//                     onClick={() => setSelectedFeature(feature.title)}
//                     className={`
//                     group flex items-start space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 bg-white dark:bg-slate-900 hover:shadow-[0_8px_25px_rgba(0,97,165,0.3)]
//                      ${
//                        selectedFeature === feature.title
//                          ? "border-2 border-[#0061a5]"
//                          : "border border-transparent"
//                      }
//                   `}
//                   >
//                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#0061a5] transition-all shrink-0">
//   <Image
//     src={feature.Icon}
//     alt={feature.title}
//     width={28}
//     height={28}
//     className="
//   w-7 h-7 object-contain
//   brightness-0 invert
//   transition-all duration-300
// "
//   />
// </div>

//                     <div>
//                       <h3 className="text-md font-semibold text-gray-800 dark:text-white">
//                         {feature.title}
//                       </h3>
//                       <p className="text-gray-600 dark:text-gray-400">
//                         {feature.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <Button
//                 className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center text-white bg-[#0061A4] hover:bg-[#00548f]"
//                 style={{
//                   padding: "25px 15px",
//                 }}
//                 onClick={() => (window.location.href = "/book-a-demo")}
//               >
//                 Book Demo
//                 <img
//                   src="/Icons/Vector.png"
//                   alt="Arrow Icon"
//                   className="w-2 h-3 ml-2"
//                 />
//               </Button>
//             </div>

//             {/* Right Column - Animated Image */}
//             <div className="relative overflow-hidden">
//               <img
//                 key={selectedFeature} // Forces re-render when feature changes
//                 src={images[selectedFeature]}
//                 alt={selectedFeature}
//                 className="rounded-2xl w-full h-auto object-cover slide-in"
//               />
//             </div>
//           </div>
//         </div>
//         {/* Bottom Section - How It Works */}
//         <div className="fade-up">
//           <div
//             id="how-section"
//             className="space-y-12"
//             style={{ width: "90%", margin: "auto" }}
//           >
//             {/* First Row - Heading */}
//             <div className="text-left" style={{ marginTop: "5rem" }}>
//               <h2 className="text-2xl text-gray-900 dark:text-white mb-2">
//                 How It Works To Power Your Contracting Business
//               </h2>
//               <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
//                 From Setup To Execution See How AccuraCore Contractor Management
//                 Software Simplifies Operations, Streamlines Workflows, And Puts
//                 You In Control.
//               </p>
//             </div>

//             {/* Second Row - 3 Columns */}
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//   {
//     title: "Create Your Company",
//     desc: "Create your workspace and invite your crew.",
//     icon: CreateCompanyIcon,
//   },
//   {
//     title: "Build Custom Workflows",
//     desc: "Adapt the platform to your process, not the other way around no templates needed.",
//     icon: BuildWorkflowIcon,
//   },
//   {
//     title: "All-in-One Control Panel",
//     desc: "Jobs, finances & crew in one place.",
//     icon: ControlPanelIcon,
//   },
// ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                 >
//                  <div className="w-12 h-12 rounded-lg bg-[#0061A5] flex items-center justify-center group transition-all duration-300">
//   <Image
//     src={item.icon}
//     alt={item.title}
//     width={28}
//     height={28}
//     className="
//       w-7 h-7 object-contain
//       brightness-0 invert
//       transition-all duration-300
//     "
//   />
// </div>

//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 dark:text-gray-400">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* CSS for Animation */}
//       <style jsx>{`
//         .slide-in {
//           transform: translateX(100%);
//           opacity: 0;
//           animation: slideIn 0.6s ease forwards;
//         }
//         @keyframes slideIn {
//           0% {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// V3 of Homepage
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Monitor, Workflow, TrendingUp } from "lucide-react";
import useFadeIn from "@/lib/useFadeIn";
import Marquee from "./Marquee";
import DashboardIcon from "@/public/Icons/Homepage/Unified Dashboard Experience.svg?url";
import WorkflowIcon from "@/public/Icons/Homepage/Workflow That Matches Your Contracting Process.svg?url";
import FinancialIcon from "@/public/Icons/Homepage/Built-in Financial Intelligence.svg?url";
import CreateCompanyIcon from "@/public/Icons/Homepage/Create Your Company.svg?url";
import BuildWorkflowIcon from "@/public/Icons/Homepage/Build Custom Workflows.svg?url";
import ControlPanelIcon from "@/public/Icons/Homepage/All-in-One Control Panel.svg?url";

export default function WhatMakesAccurascoreDifferent({ id, onBookDemo }) {
  useFadeIn();
  const [selectedFeature, setSelectedFeature] = useState(
    "Unified Dashboard Experience",
  );

  const images = {
    "Unified Dashboard Experience": "/Images/unified.png",
    "Workflow That Matches Your Contracting Process": "/Images/OCET.png",
    "Built-In Financial Intelligence": "/Images/builtIn.png",
  };

  const features = [
    {
      title: "Unified Dashboard Experience",
      desc: "One Platform, Total Control, Zero Hassle",
      Icon: DashboardIcon,
    },
    {
      title: "Workflow That Matches Your Contracting Process",
      desc: "We Adapt To You With Custom Workflows And Logic Switches",
      Icon: WorkflowIcon,
    },
    {
      title: "Built-In Financial Intelligence",
      desc: "Budgeting, Estimates, Invoicing All Accurate And Audit-Ready",
      Icon: FinancialIcon,
    },
  ];

const steps = [
  {
    title: "One Operating System. Zero App-Switching.",
    desc: "Run your entire business from a single dashboard, no more juggling 5 tools to get through one job.",
  },
  {
    number: "02",
    title: "A CRM That Fits How You Actually Work",
    desc: "Fully customizable to match your workflow, your team, and your trade, not the other way around.",
  },
  {
    number: "03",
    title: "Snap. Speak. Upload. Done.",
    desc: "Integrated camera with voice labeling instantly uploads job photos and notes to the right file. No paperwork later.",
  },
  {
    number: "04",
    title: "Talk Directly to Your Customers with MyAccuraCore",
    desc: "Real-time, two-way communication that keeps clients in the loop and your phone from blowing up.",
  },
  {
    number: "05",
    title: "Get More Insurance Claims Paid",
    desc: "Track every claim and auto-generate damage reports that adjusters actually approve. More approvals = more revenue.",
  },
  {
    number: "06",
    title: "We Move Your Data In, Free",
    desc: "Switching systems? We migrate everything from your current setup at zero cost.",
  },
  {
    number: "07",
    title: "Onboarding & Support That Has Your Back",
    desc: "Real humans, real fast. We make the switch EASY so you can get back to building.",
  },
];

  return (
    <section className="lg:px-6 py-16 bg-[#f4f0ed] dark:bg-slate-950">
      <Marquee />

      {/* Built by a Contractor, for Contractors */}
      <section
        id="built-by-a-contractor-for-contractors"
        className="lg:px-6 py-16 dark:bg-slate-950 "
      >
        <div className="fade-up">
          <div className="max-w-[90%] mx-auto space-y-4 mt-8">
            {/* Top Heading & Text */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <h2 className="text-2xl text-gray-900 dark:text-white">
                Simplify Your Business With Precision
                {/* <span className="text-[#f3893d]">for Contractors</span> */}
              </h2>
            </div>

            <div className="gradient-border gradient-shadow p-[1px] rounded-[15px]">
              <div className="bg-white dark:bg-slate-900 p-2 md:p-6 rounded-[15px] flex flex-col gap-4 transition-transform transform hover:scale-105">
                {/* Number */}
                <div className="text-white w-6 h-6 md:w-10 md:h-10 flex items-center text-[12px] md:text-lg justify-center bg-[#0061A4] rounded-[8px] md:rounded-[12px]">
                  01
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[13px] md:text-lg font-semibold text-gray-900 dark:text-white">
                    {steps[0].title}
                  </h3>
                  <p className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400 leading-snug">
                    {steps[0].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Steps / Boxes */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {steps.slice(1).map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-2 md:p-6 rounded-[12px] md:rounded-[15px] shadow-lg flex flex-row md:flex-col items-start gap-3 md:gap-4 transition-transform transform hover:scale-105"
                >
                  {/* Number Box */}
                  <div className="text-white w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
                    <span className="text-[12px] md:text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
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
        </div>
      </section>

      <div className="max-w-7xl mx-auto md:mt-10">
        <div className="fade-up">
          <div
            id={id}
            className="grid lg:grid-cols-2 gap-12 mb-16"
            style={{ width: "90%", margin: "auto" }}
          >
            {/* Left Column */}
            <div className="space-y-8">
              <h2 className="text-2xl text-gray-900 dark:text-white">
                What Makes <br />
                <strong>AccuraCore</strong> Different?
              </h2>

              {/* Feature Items */}
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedFeature(feature.title)}
                    className={`
                    group flex items-start space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 bg-white dark:bg-slate-900 hover:shadow-[0_8px_25px_rgba(0,97,165,0.3)]
                     ${
                       selectedFeature === feature.title
                         ? "border-2 border-[#0061a5]"
                         : "border border-transparent"
                     }
                  `}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#0061a5] transition-all shrink-0">
                      <Image
                        src={feature.Icon}
                        alt={feature.title}
                        width={28}
                        height={28}
                        className="
  w-7 h-7 object-contain
  brightness-0 invert
  transition-all duration-300
"
                      />
                    </div>

                    <div>
                      <h3 className="text-md font-semibold text-gray-800 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center text-white bg-[#0061A4] hover:bg-[#00548f]"
                style={{
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

            {/* Right Column - Animated Image */}
            <div className="relative overflow-hidden">
              <img
                key={selectedFeature} // Forces re-render when feature changes
                src={images[selectedFeature]}
                alt={selectedFeature}
                className="rounded-2xl w-full h-auto object-cover slide-in"
              />
            </div>
          </div>
        </div>
        {/* Bottom Section - How It Works */}
        <div className="fade-up">
          <div
            id="how-section"
            className="space-y-12"
            style={{ width: "90%", margin: "auto" }}
          >
            {/* First Row - Heading */}
            <div className="text-left" style={{ marginTop: "5rem" }}>
              <h2 className="text-2xl text-gray-900 dark:text-white mb-2">
                How It Works To Power Your Contracting Business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                From Setup To Execution See How AccuraCore Contractor Management
                Software Simplifies Operations, Streamlines Workflows, And Puts
                You In Control.
              </p>
            </div>

            {/* Second Row - 3 Columns */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Create Your Company",
                  desc: "Create your workspace and invite your crew.",
                  icon: CreateCompanyIcon,
                },
                {
                  title: "Build Custom Workflows",
                  desc: "Adapt the platform to your process, not the other way around no templates needed.",
                  icon: BuildWorkflowIcon,
                },
                {
                  title: "All-in-One Control Panel",
                  desc: "Jobs, finances & crew in one place.",
                  icon: ControlPanelIcon,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0061A5] flex items-center justify-center group transition-all duration-300">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="
      w-7 h-7 object-contain
      brightness-0 invert
      transition-all duration-300
    "
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* CSS for Animation */}
      <style jsx>{`
        .slide-in {
          transform: translateX(100%);
          opacity: 0;
          animation: slideIn 0.6s ease forwards;
        }
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
