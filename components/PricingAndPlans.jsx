import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";
import useFadeIn from "@/lib/useFadeIn";

/* ================= FAQs ================= */

const faqs = [
  {
    id: 1,
    question: "Is AccuraCore Suitable For Small Companies Too?",
    answer:
      "Yes! AccuraCore is suitable for small teams of people, as well as medium sized businesses.",
  },
  {
    id: 2,
    question: "Can I Assign Different Roles To My Team Members?",
    answer:
      "Yes, roles are fully customizable, and can be assigned to everyone.",
  },
  {
    id: 3,
    question: "Does AccuraCore Automatically Calculate Financials?",
    answer:
      "Yes, financial calculations are handled automatically, and displayed for easy review.",
  },
  {
    id: 4,
    question: "Is AccuraCore Cloud-Based?",
    answer:
      "Yes, AccuraCore is a SaaS platform that exists in the cloud, and requires internet access to use.",
  },
  {
    id: 5,
    question: "Can I Export My Data From The System?",
    answer: "The only data we support exporting is reports.",
  },
];

/* ================= BULLET ================= */

const Bullet = ({ children, variant }) => {
  const isInner = variant === "inner";

  return (
    <li
      className={`flex items-start ${
        isInner ? "flex ml-[20px] items-end" : ""
      }`}
    >
      {/* ICON */}
      <span className="flex-shrink-0 mr-2 mt-[2px]">
        {isInner ? (
          <span className="text-gray-500 text-[12px] leading-none">•</span>
        ) : (
          <img
            src="/Icons/checkmark-icon-green.png"
            className="w-4 h-4"
            alt=""
          />
        )}
      </span>

      {/* TEXT */}
      <span className="text-gray-500 text-[13px] leading-[20px]">
        {children}
      </span>
    </li>
  );
};

/* ================= PRICE ================= */

const Price = ({ amount }) => (
  <div className="flex items-end gap-1 mt-6 mb-6">
    <span className="text-sm text-black relative -top-2">$</span>
    <span className="text-3xl text-black font-bold leading-none">{amount}</span>
    <span className="text-sm text-black relative top-1">/mo</span>
  </div>
);

const Price2 = ({ amount }) => (
  <div className="flex items-end gap-1 mt-8 mb-8">
    <span className="text-[35px] relative -top-2 text-white">$</span>
    <span className="text-[45px] font-bold leading-none text-white">
      {amount}
    </span>
    <span className="text-[35px] relative top-1 text-white">/mo</span>
  </div>
);

/* ================= CTA ================= */

const CTAButton = ({ color, setIsOpen }) => (
  <button
    onClick={() => setIsOpen(true)}
    className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.03]"
    style={{
      backgroundColor: color,
      color: "#fff",
    }}
  >
    Get Started
    <img src="/Icons/Vector.png" className="w-2 h-3" />
  </button>
);

/* ================= MAIN ================= */

export const PricingAndPlans = ({ setIsOpen }) => {
  useFadeIn();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section
      className="lg:px-6 py-16"
      style={{
        backgroundImage: "url('/Images/bgforlastsection.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="fade-up">
        <div className="max-w-[90%] md:max-w-[85%] mx-auto">
          <h1 className="text-3xl text-center mb-12 text-black">
            Our Pricing & Plans
          </h1>

          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ===================================================== */}
            {/* ACCURACORE */}
            {/* ===================================================== */}
            <div className="flex flex-col gap-6">
              {/* ================= SOLO ================= */}
              <div
                className="pricing-card bg-white rounded-[15px] border-t-4 border-[#1161A5] p-4 flex flex-col h-full 
transition-all duration-300 
hover:scale-[1.02] 
hover:bg-white/40 
hover:backdrop-blur-xl 
hover:shadow-2xl 
hover:border-white/40"
              >
                <div className="bg-[#1161A5] text-white p-4 rounded-[15px]">
                  <h1 className="text-2xl">
                    AccuraCore
                    <br />
                    Subscription
                  </h1>
                </div>

                <div className="flex flex-col flex-1 mt-4">
                  <div>
                    <h1 className="text-2xl text-black">Solo Plan</h1>

                    <div className="border-b border-gray-200 my-3"></div>

                    <Price amount="49" />

                    <ul className="space-y-2">
                      <Bullet>1 user (owner only)</Bullet>
                      <Bullet>
                        Core modules: Jobs, Contacts, Financials
                        (Estimates/Invoices), Work Orders.
                      </Bullet>
                      <Bullet>Basic storage (5GB).</Bullet>
                    </ul>
                  </div>

                  <div className="mt-45 pt-6">
                    <CTAButton color="#0061A4" setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>

              {/* ================= COMPANY ================= */}
              <div
                className="pricing-card bg-white rounded-[15px] border-t-4 border-[#1161A5] p-4 flex flex-col h-full 
transition-all duration-300 
hover:scale-[1.02] 
hover:bg-white/40 
hover:backdrop-blur-xl 
hover:shadow-2xl 
hover:border-white/40"
              >
                <div className="bg-[#1161A5] text-white p-4 rounded-[15px]">
                  <h1 className="text-2xl">
                    AccuraCore
                    <br />
                    Subscription
                  </h1>
                </div>

                <div className="flex flex-col flex-1 mt-4">
                  <div>
                    <h1 className="text-2xl text-black">
                      Company Plan (seat-based)
                    </h1>

                    <div className="border-b border-gray-200 my-3"></div>

                    <Price amount="199" />

                    <ul className="space-y-2">
                      <Bullet>Includes 5 seats</Bullet>
                      <Bullet>
                        Covers full company modules (all AccuraCore features).
                      </Bullet>
                      <Bullet>Add extra seats: $20/month per user.</Bullet>

                      <Bullet>
                        <b>Includes:</b>
                      </Bullet>
                      <ul className="text-[12px] text-gray-500 ml-12 mt-2 space-y-1 list-disc">
                        <li>Jobs, Contacts, Work Orders</li>
                        <li>Full Financial Suite</li>
                        <li>Tasks & Workflows</li>
                        <li>Attachments & Notes</li>
                        <li>Dashboards & Analytics</li>
                      </ul>
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <CTAButton color="#0061A4" setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* CLAIMS */}
            {/* ===================================================== */}
            <div className="flex flex-col gap-6">
              {/* ================= SOLO ================= */}
              <div
                className="pricing-card bg-white rounded-[15px] border-t-4 border-red-500 p-4 flex flex-col h-full 
transition-all duration-300 
hover:scale-[1.02] 
hover:bg-white/40 
hover:backdrop-blur-xl 
hover:shadow-2xl 
hover:border-white/40"
              >
                {" "}
                <div className="bg-red-500 text-white p-4 rounded-[15px]">
                  <h1 className="text-2xl">
                    AccuraCore Claims
                    <br />
                    Subscription
                  </h1>
                </div>
                <div className="flex flex-col flex-1 mt-4">
                  <div>
                    <h1 className="text-2xl text-black">Solo Plan</h1>

                    <div className="border-b border-gray-200 my-3"></div>

                    <Price amount="49" />

                    <ul className="space-y-2">
                      <Bullet>1 inspector/adjuster</Bullet>
                      <Bullet>Can create & manage own claims.</Bullet>
                      <Bullet>Upload inspections + reports.</Bullet>
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <CTAButton color="#fb2c36" setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>

              {/* ================= COMPANY ================= */}
              <div
                className="pricing-card bg-white rounded-[15px] border-t-4 border-red-500 p-4 flex flex-col h-full 
transition-all duration-300 
hover:scale-[1.02] 
hover:bg-white/40 
hover:backdrop-blur-xl 
hover:shadow-2xl 
hover:border-white/40"
              >
                <div className="bg-red-500 text-white p-4 rounded-[15px]">
                  <h1 className="text-2xl">
                    AccuraCore Claims
                    <br />
                    Subscription
                  </h1>
                </div>

                <div className="flex flex-col flex-1 mt-4">
                  <div>
                    <h1 className="text-2xl text-black">
                      Company Plan (seat-based)
                    </h1>

                    <div className="border-b border-gray-200 my-3"></div>

                    <Price amount="199" />

                    <ul className="space-y-2">
                      <Bullet>Includes 5 seats</Bullet>
                      <Bullet>
                        Unlimited claims, dispatch engine, full scheduling.
                      </Bullet>
                      <Bullet>Add extra seats: $20/month per user.</Bullet>

                      <Bullet>
                        <b>Includes:</b>
                      </Bullet>

                      <ul className="text-[12px] text-gray-500 ml-12 mt-2 space-y-1 list-disc">
                        <li>Claims dashboard</li>
                        <li>Smart Dispatch (ZIP/radius)</li>
                        <li>Photo/Report uploads</li>
                        <li>Notifications & Client Updates</li>
                      </ul>
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <CTAButton color="#fb2c36" setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* ACCURACAM */}
            {/* ===================================================== */}
            <div className="flex flex-col gap-6">
              {/* ================= SOLO ================= */}
              <div
                className="pricing-card bg-white rounded-[15px] border-t-4 border-orange-500 p-4 flex flex-col h-full 
transition-all duration-300 
hover:scale-[1.02] 
hover:bg-white/40 
hover:backdrop-blur-xl 
hover:shadow-2xl 
hover:border-white/40"
              >
                <div className="bg-orange-500 text-white p-4 rounded-[15px]">
                  <h1 className="text-2xl">
                    AccuraCam
                    <br />
                    Subscription
                  </h1>
                </div>

                <div className="flex flex-col flex-1 mt-4">
                  <div>
                    <h1 className="text-2xl text-black">Solo Plan</h1>

                    <div className="border-b border-gray-200 my-3"></div>

                    <Price amount="49" />

                    <ul className="space-y-2">
                      <Bullet>1 inspector/adjuster</Bullet>
                      <Bullet>
                        Designed for freelancers or single inspectors.
                      </Bullet>

                      <Bullet>
                        <b>Core features:</b>
                      </Bullet>

                      <ul className="ml-12 text-[13px] text-gray-500 space-y-1 list-disc">
                        <li>Capture & upload photos/videos</li>
                        <li>Manual + dropdown tagging</li>
                        <li>Sync to cloud (5 GB storage)</li>
                      </ul>
                    </ul>
                  </div>

                  <div className="mt-27 pt-6">
                    <CTAButton color="#ff6900" setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>

              {/* ================= COMPANY ================= */}
              <div
                className="pricing-card bg-white rounded-[15px] border-t-4 border-orange-500 p-4 flex flex-col h-full 
transition-all duration-300 
hover:scale-[1.02] 
hover:bg-white/40 
hover:backdrop-blur-xl 
hover:shadow-2xl 
hover:border-white/40"
              >
                <div className="bg-orange-500 text-white p-4 rounded-[15px]">
                  <h1 className="text-2xl">
                    AccuraCam
                    <br />
                    Subscription
                  </h1>
                </div>

                <div className="flex flex-col flex-1 mt-4">
                  <div>
                    <h1 className="text-2xl text-black">
                      Company Plan (seat-based)
                    </h1>

                    <div className="border-b border-gray-200 my-3"></div>

                    <Price amount="199" />

                    <ul className="space-y-2">
                      <Bullet>Includes 5 seats</Bullet>
                      <Bullet>50 GB storage included</Bullet>

                      <Bullet>
                        <b>Features:</b>
                      </Bullet>

                      <ul className="text-[12px] text-gray-500 ml-12 mt-2 space-y-1 list-disc">
                        <li>All Solo features</li>
                        <li>Voice tagging (hands-free labeling)</li>
                        <li>Team photo library (centralized)</li>
                        <li>Sync with AccuraCore/ClaimCore jobs/claims</li>
                      </ul>

                      <Bullet>Add extra seats: $10/month per user</Bullet>
                      <Bullet>Add extra storage: $10 per 50 GB</Bullet>
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <CTAButton color="#ff6900" setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-25">
              <div className="bg-[linear-gradient(to_right,#1162a4,#518cd2a3)] rounded-[15px] p-4 grid grid-cols-1 md:grid-cols-[0.7fr_1.1fr] gap-4">

              {/* LEFT SIDE */}
              <div className="p-4 flex flex-col justify-between">
                {/* Top Content */}
                <div>
                  {/* Heading */}
                  <div className="bg-[white] text-black p-4 rounded-[15px]">
                    <h1 className="text-2xl">
                      AccuraCore Bundle Plan{" "}
                      <br className="hidden sm: md: lg:" />
                      (All-In-One)
                    </h1>
                  </div>

                  {/* Sub Heading */}
                  <h1 className="text-2xl mt-10 text-white">
                    AccuraCore Core Suite
                  </h1>
                  <div className="w-[90%] border-b border-gray-300 my-2 mb-5"></div>

                  {/* Price */}
                  <Price2 amount="349" />
                </div>

                {/* Button */}
                <button
                  className="w-full rounded-full flex items-center justify-between mt-6"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "20px 15px",
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  Get Started
                  <MdKeyboardArrowRight size={25} />
                </button>
              </div>

              {/* RIGHT SIDE */}
              <div className="bg-[#518cd2a3] rounded-[15px] p-6 flex items-center">
                <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <img
                      src="/Icons/checkmark-icon.png"
                      className="w-5 h-5 mt-1"
                    />
                    <span className="text-white text-[14px]">
                      (includes 5 seats total, shared
                      <br />
                      across both platforms).
                    </span>
                  </li>

                  <li className="flex gap-2 items-start">
                    <img
                      src="/Icons/checkmark-icon.png"
                      className="w-5 h-5 mt-1"
                    />
                    <span className="text-white text-[14px]">
                      Add extra seats:
                      <br />
                      $30/month per user (since they get both systems).
                    </span>
                  </li>

                  <li className="flex gap-2 items-start">
                    <img
                      src="/Icons/checkmark-icon.png"
                      className="w-5 h-5 mt-1"
                    />
                    <span className="text-white text-[14px]">
                      Add extra seats:
                      <br />
                      $30/month per user (since they get both systems).
                    </span>
                  </li>

                  <li className="flex gap-2 items-start">
                    <img
                      src="/Icons/checkmark-icon.png"
                      className="w-5 h-5 mt-1"
                    />
                    <span className="text-white text-[14px]">
                      Add extra seats:
                      <br />
                      $30/month per user (since they get both systems).
                    </span>
                  </li>

                  <li className="flex gap-2 items-start">
                    <img
                      src="/Icons/checkmark-icon.png"
                      className="w-5 h-5 mt-1"
                    />
                    <span className="text-white text-[14px] font-semibold">
                      Includes:
                    </span>
                  </li>

                  <li className="ml-12 text-white text-[14px] list-disc">
                    Everything in AccuraCore + ClaimCore.
                  </li>
                  <li className="ml-12 text-white text-[14px] list-disc">
                    Unified company billing.
                  </li>
                  <li className="ml-12 text-white text-[14px] list-disc">
                    Shared contacts/jobs/photos across systems.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="fade-up">
        <div className="max-w-[90%] mx-auto mb-5">
  <div className="mt-25">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Column - FAQ Heading */}
      <div>
        <h3 className="text-2xl text-gray-900 mb-2">
          Frequently
          <br />
          <strong>Asked</strong> Questions
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
              className="w-full flex justify-between items-center text-left text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              style={{ cursor: "pointer" }}
            >
              <span className="text-sm font-medium pr-4">
                {faq.question}
              </span>

              {/* Chevron */}
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
        <div className="max-w-[90%] mx-auto bg-white rounded-[20px] mt-20 mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-black">
              <span className="text-[#FA8C3D]">One Platform. </span>Every Tool
              Your Team Needs.
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <Button
                className="rounded-full text-sm flex items-center border-2 border-gray-300"
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
};
