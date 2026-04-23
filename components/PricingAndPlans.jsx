import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";

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

const Bullet = ({ children }) => (
  <li className="flex gap-2 items-start">
    <img
      src="/Icons/checkmark-icon-green.png"
      className="w-5 h-5 mt-1"
      alt=""
    />
    <span className="text-gray-500 text-[14px]">{children}</span>
  </li>
);

const Price = ({ amount }) => (
  <div className="flex items-end gap-1 mt-8 mb-8">
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

const SoloCTAButton = ({ color, setIsOpen }) => (
  <button
    className="w-full text-white rounded-full flex items-center justify-between"
    style={{
      backgroundColor: color,
      padding: "20px 15px",
    }}
    onClick={() => setIsOpen(true)}
  >
    Get Started
    <img src="/Icons/Vector.png" className="w-2 h-3 ml-2" />
  </button>
);

const CompanyCTAButton = ({ color, setIsOpen }) => (
  <button
    className="w-full text-white rounded-full mb-6 flex items-center justify-between"
    style={{
      backgroundColor: color,
      padding: "20px 15px",
    }}
    onClick={() => setIsOpen(true)}
  >
    Get Started
    <img src="/Icons/Vector.png" className="w-2 h-3 ml-2" />
  </button>
);

export const PricingAndPlans = ({setIsOpen}) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };
  return (
    <section
      className="lg:px-6 py-16"
      style={{
        backgroundImage: "url('/Images/bgforlastsection.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[90%] md:max-w-[85%] mx-auto">
        <h1 className="text-3xl text-black text-left md:text-center mb-6 lg:mb-12">
          Our Pricing & Plans
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* ================= CARD 1 ================= */}
          <div className="bg-white rounded-[15px] p-4 flex flex-col h-full">
            <div className="bg-[#1161A5] text-white p-4 rounded-[15px]">
              <h1 className="text-2xl">
                AccuraCore
                <br />
                Subscription
              </h1>
            </div>

            <div className="mt-4 flex flex-col h-full gap-8">
              {/* SOLO */}
              <div className="min-h-[270px] flex flex-col">
                <div>
                  <h1 className="text-2xl text-black">Solo Plan</h1>
                  <div className="w-[90%] border-b border-gray-300 my-2"></div>
                  <Price amount="49" />
                </div>

                <div className="mt-4">
                  <ul className="space-y-2">
                    <Bullet>1 user (owner only)</Bullet>
                    <Bullet>
                      Core modules: Jobs, Contacts, Financials
                      (Estimates/Invoices), Work Orders.
                    </Bullet>
                    <Bullet>Basic storage (5GB).</Bullet>
                  </ul>
                </div>

                <div className="mt-[93px] pt-6">
                  <SoloCTAButton color="#0061A4" setIsOpen={setIsOpen} />
                </div>
              </div>

              {/* COMPANY */}
              <div className="flex flex-col flex-1">
                <div>
                  <h1 className="text-black text-2xl">
                    Company Plan <br />
                    <span>(seat-based)</span>
                  </h1>
                  <Price amount="199" />

                  <ul className="mt-4 space-y-2">
                    <Bullet>Includes 5 seats</Bullet>
                    <Bullet>
                      Covers full company modules (all AccuraCore features).
                    </Bullet>
                    <Bullet>Add extra seats: $20/month per user.</Bullet>
                    <Bullet>
                      <span className="font-semibold text-gray-500">
                        Includes:
                      </span>
                    </Bullet>
                  </ul>

                  <ul className="text-[14px] text-gray-500 ml-12 mt-2 space-y-1 list-disc">
                    <li>Jobs, Contacts, Work Orders</li>
                    <li>Full Financial Suite</li>
                    <li>Tasks & Workflows</li>
                    <li>Attachments & Notes</li>
                    <li>Dashboards & Analytics</li>
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <CompanyCTAButton color="#0061A4" setIsOpen={setIsOpen} />
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="bg-white rounded-[15px] p-4 flex flex-col h-full">
            <div className="bg-[#FA8C3D] text-white p-4 rounded-[15px]">
              <h1 className="text-2xl">
                AccuraCore Claims
                <br />
                Subscription
              </h1>
            </div>

            <div className="mt-4 flex flex-col h-full gap-8">
              {/* SOLO */}
              <div className="min-h-[270px] flex flex-col">
                <div>
                  <h1 className="text-2xl text-black">Solo Plan</h1>
                  <div className="w-[90%] border-b border-gray-300 my-2"></div>
                  <Price amount="49" />
                </div>

                <div className="mt-4">
                  <ul className="space-y-2">
                    <Bullet>1 inspector/adjuster</Bullet>
                    <Bullet>Can create & manage own claims.</Bullet>
                    <Bullet>Upload inspections + reports.</Bullet>
                  </ul>
                </div>

                <div className="mt-[111px] pt-6">
                  <SoloCTAButton color="#FA8C3D" setIsOpen={setIsOpen} />
                </div>
              </div>

              {/* COMPANY */}
              <div className="flex flex-col flex-1">
                <div>
                  <h1 className="text-black text-2xl">
                    Company Plan <br />
                    <span>(seat-based)</span>
                  </h1>
                  <Price amount="199" />

                  <ul className="mt-4 space-y-2">
                    <Bullet>Includes 5 seats</Bullet>
                    <Bullet>
                      Unlimited claims, dispatch engine, full scheduling.
                    </Bullet>
                    <Bullet>Add extra seats: $20/month per user.</Bullet>
                    <Bullet>
                      <span className="font-semibold text-gray-500">
                        Includes:
                      </span>
                    </Bullet>
                  </ul>

                  <ul className="text-[14px] text-gray-500 ml-12 mt-2 space-y-1 list-disc">
                    <li>Claims dashboard</li>
                    <li>Smart Dispatch (ZIP/radius)</li>
                    <li>Photo/Report uploads</li>
                    <li>Notifications & Client Updates</li>
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <CompanyCTAButton color="#FA8C3D" setIsOpen={setIsOpen} />
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div className="bg-white rounded-[15px] p-4 flex flex-col h-full">
            <div className="bg-[#1161A5] text-white p-4 rounded-[15px]">
              <h1 className="text-2xl">
                AccuraCam
                <br />
                Subscription
              </h1>
            </div>

            <div className="mt-4 flex flex-col h-full gap-8">
              {/* SOLO */}
              <div className="min-h-[270px] flex flex-col">
                <div>
                  <h1 className="text-2xl text-black">Solo Plan</h1>
                  <div className="w-[90%] border-b border-gray-300 my-2"></div>
                  <Price amount="49" />
                </div>

                <div className="mt-4">
                  <ul className="space-y-2">
                    <Bullet>1 inspector/adjuster</Bullet>
                    <Bullet>Can create & manage own claims.</Bullet>
                    <Bullet>
                      Designed for freelancers or single inspectors.
                    </Bullet>
                    <Bullet>
                      <span className="font-semibold text-gray-500">
                        Core features:
                      </span>
                    </Bullet>
                  </ul>

                  <ul className="text-[14px] text-gray-500 ml-12 mt-2 space-y-1 list-disc">
                    <li>Capture & upload photos/videos</li>
                    <li>Manual + dropdown tagging</li>
                    <li>Sync to cloud (5 GB storage)</li>
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <SoloCTAButton color="#1161A5" setIsOpen={setIsOpen} />
                </div>
              </div>

              {/* COMPANY */}
              <div className="flex flex-col flex-1">
                <div>
                  <h1 className="text-black text-2xl">
                    Company Plan <br />
                    <span>(seat-based)</span>
                  </h1>
                  <Price amount="199" />

                  <ul className="mt-4 space-y-2">
                    <Bullet>Includes 5 seats</Bullet>
                    <Bullet>50 GB storage included</Bullet>
                    <Bullet>
                      <span className="font-semibold text-gray-500">
                        Features:
                      </span>
                    </Bullet>
                  </ul>

                  <ul className="text-[14px] text-gray-500 ml-12 mt-2 space-y-1 list-disc">
                    <li>All Solo features</li>
                    <li>Voice tagging (hands-free labeling)</li>
                    <li>Team photo library (centralized)</li>
                    <li>Sync with AccuraCore/ClaimCore jobs/claims</li>
                  </ul>

                  <ul className="mt-3 space-y-2">
                    <Bullet>Add extra seats: $10/month per user</Bullet>
                    <Bullet>Add extra storage: $10 per 50 GB</Bullet>
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <CompanyCTAButton color="#1161A5" setIsOpen={setIsOpen} />
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 ">
            <div className="bg-[#FA8C3D] rounded-[15px] p-4 grid grid-cols-1 md:grid-cols-[0.7fr_1.1fr] gap-4">
              {/* LEFT SIDE */}
              <div className="p-4 flex flex-col justify-between">
                {/* Top Content */}
                <div>
                  {/* Heading */}
                  <div className="bg-[white] text-black p-4 rounded-[15px]">
                    <h1 className="text-2xl">
                      AccuraCore Bundle Plan <br className="hidden sm:block md:block lg:block"/>
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
              <div className="bg-[#FA9348] rounded-[15px] p-6 flex items-center">
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
      <div className="max-w-[90%] mx-auto mb-5">
        <div className="mt-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - FAQ Heading */}
            <div>
              <h3 className="text-2xl  text-gray-900  mb-2">
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
                  className="
                    p-[25px] rounded-[10px]
                    bg-white
                    dark:bg-slate-900
                    border border-transparent
                    dark:border-slate-700
                    transition-colors
                  "
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
                      className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
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
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
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

      <div className="max-w-[90%] mx-auto bg-white rounded-[20px] mt-20 mb-20 px-6 md:px-12 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-[400] leading-tight text-[#FA8C3D]">
                  Get Accurate Roof &
                  <br className="hidden lg:block" /> Weather
                  <span className="text-black"> Intelligence </span>
                  <br className="hidden lg:block" /> <span className="text-black">Power Your Claims</span>
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
                  src="/Images/calculator-one-platform.png"
                  alt="One Platform"
                  className="w-full max-w-md md:max-w-full object-contain"
                />
              </div>
            </div>
    </section>
  );
};
