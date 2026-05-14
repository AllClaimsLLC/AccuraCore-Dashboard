"use client";

import { useState } from "react";
import useFadeIn from "@/lib/useFadeIn";
import { Button } from "./ui/button";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "What's included in MyAccuraCore add-on?",
    answer:
      "Yes! AccuraCore contractor management software is suitable for small crews, as well as medium-sized contracting businesses.",
  },
  {
    id: 2,
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, roles are fully customizable and can be assigned to everyone on your crew.",
  },
  {
    id: 3,
    question: "What happens if I exceed my user limit?",
    answer:
      "Yes, financial calculations are handled automatically, and displayed for easy review.",
  },
  {
    id: 4,
    question: "Is there a free trial?",
    answer:
      "Yes, AccuraCore is a SaaS platform that exists in the cloud, and requires internet access to use.",
  },
  {
    id: 5,
    question: "Can I export my data?",
    answer: "The only data we support exporting is reports.",
  },
];

export default function PricingFaqs({ id }) {
  useFadeIn();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
<section
  className="
    py-8 relative overflow-hidden custom-padding
    bg-[linear-gradient(to_top_right,_#faf5ef_40%,_#e8f5fb_60%)]
    dark:bg-[linear-gradient(50deg,_#020617_0%,_#0f172a_100%)]
  "
>
      <div>
        <div className="container mx-auto sm:px-6 max-w-[90%] mb-5">
          <div className="mt-25">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - FAQ Heading */}
              <div>
                <h3 className="text-2xl  text-gray-900 dark:text-gray-100 mb-2">
                  Frequently
                  <br className="hidden sm:block" />
                  Asked Questions
                </h3>
              </div>

              {/* Right Column - FAQ Items */}
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`faq-item p-[25px] rounded-[10px] bg-white dark:bg-slate-900 border border-transparent dark:border-slate-700 transition-colors ${
                      openFaq === faq.id ? "open" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="
                      w-full flex justify-between items-center text-left
                      text-gray-900 dark:text-gray-100
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-colors duration-200
                    "
                      style={{ cursor: "pointer" }}
                    >
                      <span className="text-sm font-medium pr-4">
                        {faq.question}
                      </span>

                      <svg
                        className="faq-chevron w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Answer */}
                    <div className="faq-answer">
                      <div className="pt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fade-up">
        <div className="max-w-[90%] mx-auto bg-white rounded-[20px] mt-30 mb-10 sm:mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
              Still unsure
              <br className="hidden sm:block" />
              <span className="text-[#FA8C3D]"> We'll help you pick</span>
            </h2>

            <p
              className="
            text-gray-500
            leading-[1.9] 
            max-w-3xl
          "
            >
              Book a 30-minute walkthrough and our team will recommend the right
              plan for your crew.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <Link href="/" className="w-full sm:w-auto md:w-auto lg:w-auto ">
                <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center justify-center"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "25px 18px",
                  }}
                >
                  Talk to Sales
                  <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
              </Link>
              <Button
                className="w-full sm:w-auto text-white rounded-full text-sm flex items-center"
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
          <div className="flex justify-end">
            <img
              src="/Images/girl-using-laptop.png"
              alt="girl-using-laptop"
              className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
