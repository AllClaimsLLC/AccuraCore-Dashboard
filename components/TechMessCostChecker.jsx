"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@/components/ui/button";
import useFadeIn from "@/lib/useFadeIn";

const questions = [
  {
    q: "What is your hourly time worth?",
    key: "hourlyRate",
    options: ["200", "150", "100"],
    suffix: "$ / hr",
  },
  {
    q: "How many jobs do you complete per month?",
    key: "jobsPerMonth",
    options: ["30", "50", "75"],
    suffix: " jobs",
  },
  {
    q: "How many apps do you use per job?",
    key: "appsPerJob",
    options: ["4", "3", "5"],
    suffix: " apps",
  },
  {
    q: "Hours spent with one customer across all apps?",
    key: "hoursPerCustomer",
    options: ["1", "2", "0.5"],
    suffix: " hr",
  },
  {
    q: "For every 3 hrs freed, how many extra jobs could you take?",
    key: "extraJobsPer3Hrs",
    options: ["1", "2", "3"],
    suffix: " job",
  },
  {
    q: "What is your average job value?",
    key: "avgJobValue",
    options: ["25000", "20000", "30000"],
    suffix: "$",
  },
];

const formatCurrency = (value) => "$" + Number(value).toLocaleString();

export default function TechMessCostChecker({ onBookDemo }) {
  useFadeIn();
  const initialState = questions.reduce(
    (acc, q) => ({ ...acc, [q.key]: Number(q.options[0]) }),
    {},
  );
  const [answers, setAnswers] = useState(initialState);
  const [results, setResults] = useState({
    totalTimeLost: 0,
    timeCost: 0,
    totalMonthlyCost: 0,
    potentialJobsMissed: 0,
    monthlyRevenueLost: 0,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Handle dropdown / input change
  const handleChange = (key, value, index) => {
    const numericValue = value === "" ? "" : Number(value);
    setAnswers((prev) => ({ ...prev, [key]: numericValue }));
    setActiveStep(index);
  };

  // Calculate function, only runs on button click
  const calculateResults = () => {
    const {
      hourlyRate,
      jobsPerMonth,
      appsPerJob,
      hoursPerCustomer,
      extraJobsPer3Hrs,
      avgJobValue,
    } = answers;
    const totalTimeLost =
      (Number(jobsPerMonth) || 0) *
      (Number(appsPerJob) || 0) *
      (Number(hoursPerCustomer) || 0);
    const timeCost = totalTimeLost * (Number(hourlyRate) || 0);
    const totalMonthlyCost = timeCost + 3750;
    const potentialJobsMissed = Math.floor(
      (totalTimeLost / 3) * (Number(extraJobsPer3Hrs) || 0),
    );
    const monthlyRevenueLost = potentialJobsMissed * (Number(avgJobValue) || 0);

    setResults({
      totalTimeLost,
      timeCost,
      totalMonthlyCost,
      potentialJobsMissed,
      monthlyRevenueLost,
    });
    setShowResults(true);
  };

  return (
    <div
      className="flex flex-col items-center px-4 py-10 md:py-12"
      style={{
        background: "linear-gradient(120deg, #faede7 20%, #e4f5fc 100%)",
      }}
    >
      
        <div className="w-full max-w-7xl rounded-[20px] bg-white p-0 overflow-hidden">
          <div className="fade-up">
          {/* Header */}
          <div className="w-full bg-[#0061A4] px-4 py-2 text-center relative flex flex-col items-center md:block">
            <img
              src="/Images/RYG.png"
              alt="Logo"
              className="mb-1 w-8 h-auto md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 md:mb-0"
            />
            <h1 className="text-white text-[16px] font-[400]">
              AccuraCore · Tech-Mess Cost Checker
            </h1>
          </div>

          {/* Subheading */}
          <div className="text-center space-y-1 py-3 px-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Answer 6 quick questions
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Takes less than 60 seconds · No email required
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-2 px-4">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row justify-between items-center gap-2 bg-[#f6f7fb] p-3 rounded-[10px]"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#0061A4] text-white font-semibold rounded-[10px] min-w-[36px] min-h-[36px] flex items-center justify-center">
                    Q{idx + 1}
                  </div>
                  <span className="text-gray-900 font-medium">{q.q}</span>
                </div>
                <div className="relative w-full md:w-48">
                  {q.key === "hourlyRate" ? (
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={answers[q.key] ?? ""}
                      onChange={(e) => handleChange(q.key, e.target.value, idx)}
                      className="w-full py-1.5 px-2 rounded-[10px] bg-white border border-gray-300 text-gray-900 text-sm"
                    />
                  ) : (
                    <>
                      <select
                        value={answers[q.key]}
                        onChange={(e) =>
                          handleChange(q.key, e.target.value, idx)
                        }
                        className="w-full py-1.5 px-2 rounded-[10px] border border-gray-300 bg-white text-gray-900 text-sm appearance-none pr-7"
                      >
                        {q.options.map((opt, oidx) => (
                          <option key={oidx} value={opt}>
                            {opt} {q.suffix}
                          </option>
                        ))}
                      </select>
                      <MdKeyboardArrowDown
                        className="absolute right-2 top-1.5 text-gray-500 pointer-events-none"
                        size={20}
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center py-4">
            <Button
              className="text-white rounded-full text-sm px-6 py-2"
              style={{ backgroundColor: "#0061A4" }}
              onClick={calculateResults}
            >
              Calculate Now
            </Button>
          </div>

          {/* Results */}
          {showResults && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-4 mb-6">
              {[
                "totalTimeLost",
                "timeCost",
                "totalMonthlyCost",
                "potentialJobsMissed",
              ].map((key, idx) => (
                <div
                  key={idx}
                  className="bg-[#f6f7fb] p-3 rounded-[10px] flex flex-col justify-between gap-1"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-gray-500 text-sm">
                      {
                        [
                          "Total time lost",
                          "Time cost",
                          "Total monthly cost",
                          "Potential jobs missed",
                        ][idx]
                      }
                    </span>
                    <div className="w-8 h-8 bg-white rounded-[5px] flex items-center justify-center">
                      <img
                        src="/Icons/auto-conversations.png"
                        alt="icon"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                  <span className="font-semibold text-lg text-gray-900">
                    {key === "totalTimeLost"
                      ? results.totalTimeLost + " hrs"
                      : key === "timeCost"
                        ? formatCurrency(results.timeCost)
                        : key === "totalMonthlyCost"
                          ? formatCurrency(results.totalMonthlyCost)
                          : results.potentialJobsMissed + " jobs"}
                  </span>
                  <span className="text-[#0CB146] text-sm">
                    {
                      [
                        "Per Month",
                        "Per Month",
                        "Time cost + software overhead",
                        "Per Month",
                      ][idx]
                    }
                  </span>
                </div>
              ))}
              <div className="bg-[#f6f7fb] p-3 rounded-[10px] flex flex-col justify-between gap-1 md:col-span-4">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 text-sm">
                    Monthly revenue you're losing
                  </span>
                  <div className="w-8 h-8 bg-white rounded-[5px] flex items-center justify-center">
                    <img
                      src="/Icons/auto-conversations.png"
                      alt="icon"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
                <span className="font-semibold text-lg text-gray-900">
                  {formatCurrency(results.monthlyRevenueLost)}
                </span>
                <span className="text-[#0CB146] text-sm">
                  Based on your job value × conversion rate
                </span>
              </div>
            </div>
          )}

          {/* CTA Section */}
          {showResults && (
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 mb-6">
              <p className="text-sm md:text-base max-w-lg text-black">
                <span className="text-[#FA8C3D] font-[400]">
                  Ready to stop losing this money?
                </span>{" "}
                AccuraCore consolidates your entire field service operation into
                one platform — so your team never switches apps again.
              </p>
              <Button
                className="text-white rounded-full text-sm flex items-center"
                style={{ backgroundColor: "#0061A4", padding: "20px 15px" }}
                onClick={() => (window.location.href = "/book-a-demo")}
              >
                Book a Demo{" "}
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-2 h-3 ml-2"
                />
              </Button>
            </div>
          )}
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6 max-w-3xl">
          Assumes 3 people use the tech stack and average monthly software cost
          is $3,750 for a 15-person company. Switching time: 0.25 hrs/app.
          Communication inefficiency factor: 0.5. Revenue conversion factor:
          0.375.
        </p>

      {/* One Platform  */}
      <div className="fade-up">
        <div className="w-full max-w-7xl bg-white rounded-[20px] mt-20 mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
              <span className="text-[#FA8C3D]">One platform.</span>
              <br />
              Zero app-switching.
            </h2>

            <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto md:mx-0">
              AccuraCore replaces your fragmented stack with a single, connected
              platform built for field service — manage your team, track work
              orders, handle finances, and stay in control.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Back button */}
              <Button
                className="rounded-full text-sm flex items-center justify-center border border-gray-300"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0061A4",
                  padding: "25px 18px",
                }}
                onClick={() =>
                  (window.location.href = "https://accuracore.com")
                }
              >
                Back to AccuraCore.com
                <img
                  src="/Icons/Vector2.png"
                  alt="Arrow Icon"
                  className="w-2 h-3 ml-2"
                />
              </Button>

              {/* Demo button */}
              <Button
                className="text-white rounded-full text-sm flex items-center justify-center"
                style={{ backgroundColor: "#0061A4", padding: "25px 15px" }}
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
    </div>
  );
}
