"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useFadeIn from "@/lib/useFadeIn";
import StageBasedJobProgressionIcon from "@/public/Icons/WorkflowAutomation/Stage-Based Job Progression.svg?url";
import TaskEnforcementIcon from "@/public/Icons/WorkflowAutomation/Task Enforcement.svg?url";
import AutomatedNotificationsIcon from "@/public/Icons/WorkflowAutomation/Automated Notifications.svg?url";
import StatusVisibilityIcon from "@/public/Icons/WorkflowAutomation/Status Visibility.svg?url";
import DocumentationGatesIcon from "@/public/Icons/WorkflowAutomation/Documentation Gates.svg?url";
import OperationalConsistencyIcon from "@/public/Icons/WorkflowAutomation/Operational Consistency.svg?url";

const steps = [
  {
    icon: StageBasedJobProgressionIcon,
    title: "Stage-Based Job Progression",
    desc: "Jobs move through predefined phases automatically with structured control and clarity.",
  },
  {
    icon: TaskEnforcementIcon,
    title: "Task Enforcement",
    desc: "Critical steps cannot be skipped, ensuring proper process control at every stage.",
  },
  {
    icon: AutomatedNotificationsIcon,
    title: "Automated Notifications",
    desc: "Teams are alerted when action is required, ensuring timely response and accountability.",
  },
  {
    icon: StatusVisibilityIcon,
    title: "Status Visibility",
    desc: "See bottlenecks instantly to identify and resolve workflow delays quickly.",
  },
  {
    icon: DocumentationGatesIcon,
    title: "Documentation Gates",
    desc: "Prevent jobs from advancing without required items.",
  },
  {
    icon: OperationalConsistencyIcon,
    title: "Operational Consistency",
    desc: "Every job follows the same clear and structured path from start to finish.",
  },
];

export default function StageBasedControlforReliableJobExecution({
  isOpen,
  setIsOpen,
}) {
  useFadeIn();
  return (
    <>
      <section className="hidden sm:block md:block lg:block lg:px-6 py-16 bg-[#fbf0ec] dark:bg-slate-950">
        <div className="fade-up">
          <div className="max-w-[90%] mx-auto space-y-4 mt-24 md:mt-88">
            {/* Top Heading & Text */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <h1 className="text-3xl text-black dark:text-white">
                Stage-Based Control for Reliable Job Execution
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
                src="/Icons/right-arrow-blue.svg"
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
                src="/Icons/right-arrow-white.svg"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="block sm:hidden md:hidden lg:hidden lg:px-6 py-16 bg-[#fbf0ec] dark:bg-slate-950">
        <div className="fade-up">
          <div className="max-w-[90%] mx-auto space-y-4 mt-24 md:mt-72">
            {/* Top Heading & Text */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <h1 className="text-3xl text-black dark:text-white">
                Stage-Based Control for Reliable Job Execution
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
                src="/Icons/right-arrow-blue.svg"
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
                src="/Icons/right-arrow-white.svg"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
