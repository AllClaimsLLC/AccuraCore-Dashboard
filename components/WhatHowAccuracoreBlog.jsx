import React from "react";
import { Button } from "./ui/button";
import useFadeIn from "@/lib/useFadeIn";

export const WhatHowAccuracoreBlog = () => {
useFadeIn();  
  return (
    <section
      className="lg:px-6 py-16"
      style={{
        backgroundImage: "url('/Images/blogbg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="fade-up">
        <div className="max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] mx-auto rounded-[20px] mt-75 sm:mt-65 md:mt-65 lg:mt-65 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-30 md:gap-30 lg:gap-30 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-5 text-left">
          <h2 className="text-[20px] md:text-3xl font-normal leading-tight text-black">
            What Is AccuraCore And
            <br className="hidden lg:block" /> Why It Matters
          </h2>

          <p className="text-gray-500 text-[12px] md:text-[14px]">
            AccuraCore is a cloud-based SaaS solution that simplifies your daily
            operations. Whether you are managing field teams, tracking work
            orders, or overseeing budgets, this platform gives you the clarity
            and control you need to run your business efficiently.
          </p>
        </div>

        {/* RIGHT CONTENT (BULLETS) */}
        <div className="bg-[#FEEACF] rounded-[16px] p-6 md:p-8 space-y-5">
          {/* ITEM 1 */}
          <div>
            <p className="font-medium text-black text-[12px] md:text-[14px]">
              • Centralized Dashboard
            </p>
            <p className="text-gray-600 text-xs md:text-sm ml-3">
              To view all important metrics at a glance.
            </p>
          </div>

          {/* ITEM 2 */}
          <div>
            <p className="font-medium text-black text-[12px] md:text-[14px]">
              • Customizable Workflows
            </p>
            <p className="text-gray-600 text-xs md:text-sm ml-3">
              That adapt to your business process.
            </p>
          </div>

          {/* ITEM 3 */}
          <div>
            <p className="font-medium text-black text-[12px] md:text-[14px]">
              • Built-in Financial Tools
            </p>
            <p className="text-gray-600 text-xs md:text-sm ml-3">
              To manage estimates, invoices, and reports.
            </p>
          </div>

          {/* ITEM 4 */}
          <div>
            <p className="font-medium text-black text-[12px] md:text-[14px]">
              • Advanced Team Management
            </p>
            <p className="text-gray-600 text-xs md:text-sm ml-3">
              For roles, permissions, and collaboration.
            </p>
          </div>
        </div>
      </div>
      </div>

<div className="fade-up">
<div className="mt-15 sm:mt-30 md:mt-30 lg:mt-30 max-w-[90%] mx-auto bg-white rounded-[20px] mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  
  {/* LEFT CONTENT */}
  <div className="space-y-5 text-left">
    
    {/* HEADING */}
    <h2 className="text-[20px] md:text-3xl font-normal leading-tight text-black">
      How AccuraCore <br className="hidden lg:block" />
      Simplifies Business Management
    </h2>

    {/* TEXT */}
    <p className="text-gray-500 text-[12px] md:text-[14px]">
      In traditional setups, businesses often rely on spreadsheets, emails, and multiple separate systems for operations, communication, and finance. This fragmented approach leads to delays, errors, and miscommunication. AccuraCore solves this by combining all critical functions into a single platform:
    </p>

    {/* LIST */}
    <div className="space-y-3 pt-2">
      
      {[
        "Work Order Scheduling",
        "Smart Reporting and Analytics",
        "Contact and Customer Profiles",
        "Calendar Management",
        "Financial Overview & Audit-Ready Records",
      ].map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <img
            src="/Icons/check.png"
            alt="check"
            className="w-4 h-4 mt-1"
          />
          <p className="text-[12px] md:text-[14px] text-gray-500">
            {item}
          </p>
        </div>
      ))}

    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex justify-center">
    <img
      src="/Images/BM.png"
      alt="Business Management"
      className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] max-w-md md:max-w-full object-contain"
    />
  </div>

</div></div>
    </section>
  );
};
