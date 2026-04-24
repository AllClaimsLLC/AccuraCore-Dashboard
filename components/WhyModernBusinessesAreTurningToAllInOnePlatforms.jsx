"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import AccuraCard from "./AccuraCard";
import useFadeIn from "@/lib/useFadeIn";

export default function WhyModernBusinessesAreTurningToAllInOnePlatforms({
  setIsOpen,
}) {
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
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 md:gap-20 lg:gap-20 items-start py-16">
        {/* LEFT COL */}
        <div>
          <h2 className="text-[20px] md:text-3xl font-normal leading-tight text-black">
            Why Modern
            <br className="hidden sm:block md:block lg:block" /> Businesses Are
            Turning
            <br className="hidden sm:block md:block lg:block" /> To All-In-One
            Platforms
          </h2>
        </div>

        {/* RIGHT COL */}
        <div className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400 leading-snug space-y-6">
          <p>
            As businesses grow, operational complexity increases across
            departments—whether it’s managing teams, tracking financial
            performance, overseeing field operations, or maintaining clear
            communication channels. Relying on disconnected tools and manual
            processes often leads to inefficiencies, data silos, and delayed
            decision-making. This is why modern organizations are increasingly
            adopting integrated SaaS platforms like AccuraCore, which centralize
            operations into a single, unified ecosystem. By bringing workflows,
            reporting, team management, and financial oversight together,
            companies gain complete visibility and control over their day-to-day
            activities.
          </p>

          <p>
            With real-time dashboards and consolidated data, leadership teams
            can make faster, more informed decisions backed by accurate
            insights. Instead of reacting to problems after they escalate,
            businesses can proactively identify bottlenecks, optimize resource
            allocation, and improve performance across all departments. This
            unified control not only enhances operational efficiency but also
            reduces administrative overhead and minimizes costly errors caused
            by fragmented systems.
          </p>

          <p>
            Whether you are a startup establishing structured processes or an
            expanding enterprise managing multiple teams and projects, having a
            scalable platform that evolves with your business is essential. An
            all-in-one solution eliminates unnecessary IT complexity, supports
            sustainable growth, and ensures that as your operations expand, your
            systems remain aligned, efficient, and future-ready.
          </p>

          <p>
            As businesses grow, operational complexity increases across
            departments—whether it’s managing teams, tracking financial
            performance, overseeing field operations, or maintaining clear
            communication channels. Relying on disconnected tools and manual
            processes often leads to inefficiencies, data silos, and delayed
            decision-making. This is why modern organizations are increasingly
            adopting integrated SaaS platforms like AccuraCore, which centralize
            operations into a single, unified ecosystem. By bringing workflows,
            reporting, team management, and financial oversight together,
            companies gain complete visibility and control over their day-to-day
            activities.
          </p>
          <p>
            With real-time dashboards and consolidated data, leadership teams
            can make faster, more informed decisions backed by accurate
            insights. Instead of reacting to problems after they escalate,
            businesses can proactively identify bottlenecks, optimize resource
            allocation, and improve performance across all departments. This
            unified control not only enhances operational efficiency but also
            reduces administrative overhead and minimizes costly errors caused
            by fragmented systems.{" "}
          </p>
          <p>
            Whether you are a startup establishing structured processes or an
            expanding enterprise managing multiple teams and projects, having a
            scalable platform that evolves with your business is essential. An
            all-in-one solution eliminates unnecessary IT complexity, supports
            sustainable growth, and ensures that as your operations expand, your
            systems remain aligned, efficient, and future-ready.
          </p>
        </div>
      </div>
      </div>

      {/* Section 3 */}
      <div className="fade-up">
      <div className="max-w-[90%] mx-auto bg-white rounded-[20px] mt-20 mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
            Structured Roof
            <br className="hidden lg:block" /> Calculations.
            <span className="text-[#FA8C3D]"> Seamless</span>
            <br className="hidden lg:block" />{" "}
            <span className="text-[#FA8C3D]">Downstream Workflow.</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <Button
              className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center border-2 border-gray-300"
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
      </div>
      </div>
    </section>
  );
}
