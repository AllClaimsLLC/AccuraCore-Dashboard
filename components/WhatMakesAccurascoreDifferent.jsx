// "use client";

// import Image from "next/image";
// import useFadeIn from "@/lib/useFadeIn";
// import Marquee from "./Marquee";
// import CreateCompanyIcon from "@/public/Icons/Homepage/Create Your Company.svg?url";
// import BuildWorkflowIcon from "@/public/Icons/Homepage/Build Custom Workflows.svg?url";
// import ControlPanelIcon from "@/public/Icons/Homepage/All-in-One Control Panel.svg?url";
// import Link from "next/link";
// import CreateYourCompanyImage from "@/public/Images/Create-Your-Company.svg?url";
// import BuildCustomWorkflowsImage from "@/public/Images/Build-Custom-Workflows.svg?url";
// import AllInOneControlPanelImage from "@/public/Images/All-in-One-Control-Panel.svg?url";

// export default function WhatMakesAccurascoreDifferent({ id, onBookDemo }) {
//   useFadeIn();

//   const steps = [
//     {
//       icon: "/Icons/one-operating.svg",
//       title: "One Operating System. Zero App-Switching.",
//       desc: "Run your entire business from a single dashboard, no more juggling 5 tools to get through one job.",
//       link: null,
//     },
//     {
//       icon: "/Icons/a-crm-that-fits.svg",
//       title: "A CRM That Fits How You Actually Work",
//       desc: "Fully customizable to match your workflow, your team, and your trade, not the other way around.",
//       link: "/workflow-automation",
//     },
//     {
//       icon: "/Icons/snap.svg",
//       title: "Snap. Speak. Upload. Done.",
//       desc: "Integrated camera with voice labeling instantly uploads job photos and notes to the right file. No paperwork later.",
//       link: "/accuracam",
//     },
//     {
//       icon: "/Icons/talk.svg",
//       title: "Talk Directly to Your Customers with MyAccuraCore",
//       desc: "Real-time, two-way communication that keeps clients in the loop and your phone from blowing up.",
//       link: "/my-accuracore",
//     },
//     {
//       icon: "/Icons/insurance.svg",
//       title: "Get More Insurance Claims Paid",
//       desc: "Track every claim and auto-generate damage reports that adjusters actually approve. More approvals = more revenue.",
//       link: "/accuracore-claims",
//     },
//     {
//       icon: "/Icons/move.svg",
//       title: "We Move Your Data In, Free",
//       desc: "Switching systems? We migrate everything from your current setup at zero cost.",
//       link: "/book-a-demo",
//     },
//     {
//       icon: "/Icons/support.svg",
//       title: "Onboarding & Support That Has Your Back",
//       desc: "Real humans, real fast. We make the switch EASY so you can get back to building.",
//       link: "/book-a-demo",
//     },
//   ];

//   return (
//     <section className="lg:px-6 py-16 bg-[#f4f0ed] dark:bg-slate-950">
//       <Marquee />

//       {/* Built by a Contractor, for Contractors */}
//       <section
//         id="built-by-a-contractor-for-contractors"
//         className="lg:px-6 py-16 dark:bg-slate-950 "
//       >
//         <div className="fade-up">
//           <div className="max-w-[90%] mx-auto space-y-4 mt-8">
//             {/* Top Heading & Text */}
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//               <h2 className="text-2xl text-gray-900 dark:text-white">
//                 Simplify Your Business With Precision
//                 {/* <span className="text-[#f3893d]">for Contractors</span> */}
//               </h2>
//             </div>

//             <div className="gradient-border gradient-shadow p-[1px] rounded-[15px]">
//               <div className="bg-white dark:bg-slate-900 p-2 md:p-6 rounded-[15px] flex flex-col gap-4 transition-transform transform hover:scale-105">
//                 {/* Number */}
//                 <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
//                   <Image
//                     src={steps[0].icon}
//                     alt={steps[0].title}
//                     width={20}
//                     height={20}
//                     className="object-contain md:w-5 md:h-5"
//                   />
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

//             {/* Steps / Boxes */}
//             <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//               {steps.slice(1).map((step, idx) => (
//                 <Link
//                   key={idx}
//                   href={step.link}
//                   className="bg-white dark:bg-slate-900 p-2 md:p-6 rounded-[12px] md:rounded-[15px] shadow-lg flex flex-row md:flex-col items-start gap-3 md:gap-4 transition-transform transform hover:scale-105 cursor-pointer"
//                 >
//                   {/* Number Box */}
//                   <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
//                     <Image
//                       src={step.icon}
//                       alt={step.title}
//                       width={20}
//                       height={20}
//                       className="object-contain md:w-5 md:h-5"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col gap-2">
//                     <h3 className="text-[13px] md:text-lg font-semibold text-gray-900 dark:text-white">
//                       {step.title}
//                     </h3>

//                     <p className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400 leading-snug">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="lg:px-6 pt-8 lg:pt-16 dark:bg-slate-950">
//         {/* Bottom Section - How It Works */}
//         <div className="fade-up">
//           <div id="how-section" className="max-w-[90%] mx-auto space-y-4">
//             {/* First Row - Heading */}
//             <div className="text-left">
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
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Create Your Company",
//                   desc: "Create your workspace and invite your crew.",
//                   icon: CreateCompanyIcon,
//                   image: CreateYourCompanyImage,
//                 },
//                 {
//                   title: "Build Custom Workflows",
//                   desc: "Adapt the platform to your process, not the other way around no templates needed.",
//                   icon: BuildWorkflowIcon,
//                   image: BuildCustomWorkflowsImage,
//                 },
//                 {
//                   title: "All-in-One Control Panel",
//                   desc: "Jobs, finances & crew in one place.",
//                   icon: ControlPanelIcon,
//                   image: AllInOneControlPanelImage,
//                 },
//               ].map((item, i) => (
//                 <div
//   key={i}
//   className="bg-white dark:bg-slate-900 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg overflow-hidden"
// >
//   {/* Content */}
//   <div className="p-6 space-y-4">
//     <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
//       <Image
//         src={item.icon}
//         alt={item.title}
//         width={20}
//         height={20}
//         className="object-contain md:w-5 md:h-5"
//       />
//     </div>

//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//       {item.title}
//     </h3>

//     <p className="text-[14px] text-gray-600 dark:text-gray-400 min-h-[50px]">
//       {item.desc}
//     </p>
//   </div>

//   {/* Image Section */}
// <div className="p-2 pt-0">
//   <div className="w-full aspect-[16/12] relative overflow-hidden rounded-[15px]">
//     <Image
//       src={item.image}
//       alt={item.title}
//       fill
//       className="object-contain"
//       quality={100}
//     />
//   </div>
// </div>
// </div>
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

// NEW UPDATED SECTION WITH IMAGE BG HOVER ANIMATION
"use client";

import Image from "next/image";
import useFadeIn from "@/lib/useFadeIn";
import Marquee from "./Marquee";
import CreateCompanyIcon from "@/public/Icons/Homepage/Create Your Company.svg?url";
import BuildWorkflowIcon from "@/public/Icons/Homepage/Build Custom Workflows.svg?url";
import ControlPanelIcon from "@/public/Icons/Homepage/All-in-One Control Panel.svg?url";
import Link from "next/link";
import CreateYourCompanyImage from "@/public/Images/Create-Your-Company.svg?url";
import BuildCustomWorkflowsImage from "@/public/Images/Build-Custom-Workflows.svg?url";
import AllInOneControlPanelImage from "@/public/Images/All-in-One-Control-Panel.svg?url";

export default function WhatMakesAccurascoreDifferent({ id, onBookDemo }) {
  useFadeIn();

  const steps = [
    {
      icon: "/Icons/one-operating.svg",
      bgImage: "/Images/1.png",
      title: "A CRM That Fits One Operating System. Zero App Switching",
      desc: "Run your entire business from a single dashboard. No more juggling 5 tools to get through one job. Everything lives here — your crew, your jobs, your money, your customers.",
      link: null,
    },
    {
      icon: "/Icons/a-crm-that-fits.svg",
      bgImage: "/Images/2.png",
      title: "A CRM That Fits How You Actually Work",
      desc: "Fully customizable to match your workflow, your team, and your trade, not the other way around.",
      link: "/workflow-automation",
    },
    {
      icon: "/Icons/snap.svg",
      bgImage: "/Images/3.png",
      title: "Snap. Speak. Upload. Done.",
      desc: "Integrated camera with voice labeling instantly uploads job photos and notes to the right file. No paperwork later.",
      link: "/accuracam",
    },
    {
      icon: "/Icons/talk.svg",
      bgImage: "/Images/4.png",
      title: "Talk Directly to Your Customers with MyAccuraCore",
      desc: "Real time two way communication that keeps clients in the loop and your phone from blowing up.",
      link: "/my-accuracore",
    },
    {
      icon: "/Icons/insurance.svg",
      bgImage: "/Images/5.png",
      title: "Get More Insurance Claims Paid",
      desc: "Track every claim and auto generate damage reports that adjusters actually approve. More approvals equals more revenue.",
      link: "/accuracore-claims",
    },
    {
      icon: "/Icons/move.svg",
      bgImage: "/Images/6.png",
      title: "We Move Your Data In, Free",
      desc: "Switching systems? We migrate everything from your current setup at zero cost. No friction, no fees, no stress.",
      link: "/book-a-demo",
    },
    {
      icon: "/Icons/support.svg",
      bgImage: "/Images/7.png",
      title: "Onboarding and Support That Has Your Back",
      desc: "Real humans, real fast. We make the switch EASY so you can get back to building.",
      link: "/book-a-demo",
    },
    {
      icon: "/Icons/ai-walkthrough.svg",
      bgImage: "/Images/8.png",
      title: "AI Walkthrough",
      desc: "Integrated camera with voice labeling instantly uploads job photos and notes to the right file. No paperwork later.",
      link: null,
    },
  ];

  return (
    <section className="lg:px-6 pb-16 bg-[#f4f0ed] dark:bg-slate-950">
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
              </h2>
            </div>

            {/* Unified Cards Grid */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">
              {steps.map((step, idx) => {
                const CardWrapper = step.link ? Link : "div";
                const wrapperProps = step.link ? { href: step.link } : {};

                return (
                  <CardWrapper
                    key={idx}
                    {...wrapperProps}
                    className="group relative overflow-hidden rounded-[12px] md:rounded-[15px] p-4 md:p-6 flex flex-col h-full sm:min-h-[400px] gap-4 cursor-pointer bg-white dark:bg-slate-900 shadow-lg transition-transform duration-500 ease-out hover:scale-[1.03]"
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 transition-all duration-700 ease-out"
                      style={{ backgroundImage: `url(${step.bgImage})` }}
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-700 ease-out group-hover:opacity-0"
                      style={{
                        background: `linear-gradient(0deg, rgba(255,255,255,.10), rgba(255,255,255,.10)), linear-gradient(180deg, rgba(0,97,164,0) -175.22%, #0061A4 100%)`,
                      }}
                    />

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0, 97, 164, 0) 18.43%, #0061A4 90.49%)",
                      }}
                    />

                    {/* Content  */}
                    <div className="relative z-10 flex flex-col h-full justify-between gap-20">
                      {/* Icon Box */}
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-[8px] md:rounded-[10px] shrink-0">
                        <div
                          className="w-4 h-4 md:w-5 md:h-5 bg-[#0061A4]"
                          style={{
                            WebkitMaskImage: `url(${step.icon})`,
                            maskImage: `url(${step.icon})`,
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                          }}
                        />
                      </div>

                      {/* Heading + Content */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[13px] md:text-lg font-semibold text-white transition-colors duration-500 ease-out">
                          {step.title}
                        </h3>
                        <p className="text-[12px] md:text-sm text-white/90 leading-snug transition-colors duration-500 ease-out">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="lg:px-6 pt-8 lg:pt-16 dark:bg-slate-950">
        {/* How It Works */}
        <div className="fade-up">
          <div id="how-section" className="max-w-[90%] mx-auto space-y-4">
            <div className="text-left">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-2">
                How It Works To Power Your Contracting Business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                From Setup To Execution See How AccuraCore Contractor Management
                Software Simplifies Operations, Streamlines Workflows, And Puts
                You In Control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Create Your Company",
                  desc: "Create your workspace and invite your crew.",
                  icon: CreateCompanyIcon,
                  image: CreateYourCompanyImage,
                },
                {
                  title: "Build Custom Workflows",
                  desc: "Adapt the platform to your process, not the other way around no templates needed.",
                  icon: BuildWorkflowIcon,
                  image: BuildCustomWorkflowsImage,
                },
                {
                  title: "All-in-One Control Panel",
                  desc: "Jobs, finances & crew in one place.",
                  icon: ControlPanelIcon,
                  image: AllInOneControlPanelImage,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#0061A4] rounded-[8px] md:rounded-[10px] shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="object-contain md:w-5 md:h-5"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-gray-600 dark:text-gray-400 min-h-[50px]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="p-2 pt-0">
                    <div className="w-full aspect-[16/12] relative overflow-hidden rounded-[15px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
