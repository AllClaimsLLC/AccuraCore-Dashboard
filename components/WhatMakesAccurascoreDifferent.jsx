"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Workflow,
  TrendingUp,
} from "lucide-react";

export default function WhatMakesAccurascoreDifferent({ id, onBookDemo }) {
  const [selectedFeature, setSelectedFeature] = useState("Unified Dashboard Experience");

  const images = {
    "Unified Dashboard Experience": "/Images/woman-typing.png",
    "Workflow That Matches Your Business": "/Images/workflow.png",
    "Built-In Financial Intelligence": "/Images/builtIn.png",
  };

  const features = [
    {
      title: "Unified Dashboard Experience",
      desc: "One Platform, Total Control, Zero Hassle",
      Icon: Monitor,
    },
    {
      title: "Workflow That Matches Your Business",
      desc: "We Adapt To You With Custom Workflows And Logic Switches",
      Icon: Workflow,
    },
    {
      title: "Built-In Financial Intelligence",
      desc: "Budgeting, Estimates, Invoicing All Accurate And Audit-Ready.",
      Icon: TrendingUp,
    },
  ];

  return (
    <section className="lg:px-6 py-16 bg-[#f4f0ed] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto mt-45 md:mt-54">
        <div id={id} className="grid lg:grid-cols-2 gap-12 mb-16" style={{ width: "90%", margin: "auto" }}>
          
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
                  <div className="w-12 h-12 rounded-lg flex items-center p-2 lg:p-0 justify-center bg-slate-100 dark:bg-slate-800 group-hover:bg-[#0061a5] transition-all">
                    <feature.Icon className="
                      w-6 h-6 text-gray-800 dark:text-slate-200
                      group-hover:text-white
                    " />
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
              className="rounded-full text-sm flex items-center text-white bg-[#0061A4] hover:bg-[#00548f]"
              style={{
                padding: "25px 15px",
              }}
              onClick={() => window.location.href = "/book-a-demo"}
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

         {/* Bottom Section - How It Works */}
        <div id="how-section" className="space-y-12" style={{ width: "90%", margin: "auto" }}>
          {/* First Row - Heading */}
          <div className="text-left" style={{ marginTop: "5rem" }}>
            <h2 className="text-2xl text-gray-900 dark:text-white mb-2">
              How It Works To Power Your Business
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              From Setup To Execution — See How AccuraCore Simplifies
              Operations, Streamlines Workflows, And Puts You In Control.
            </p>
          </div>

          {/* Second Row - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Create Your Company",
                desc: "Create your workspace and invite your team.",
                icon: "/Icons/siri.png",
              },
              {
                title: "Build Custom Workflows",
                desc: "Adapt the platform to your process.",
                icon: "/Icons/workflow.png",
              },
              {
                title: "All-in-One Control Panel",
                desc: "Operations, finances & team in one place.",
                icon: "/Icons/dashboard-browsing.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0061A5] flex items-center justify-center">
                  <img src={item.icon} alt={item.title} />
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
