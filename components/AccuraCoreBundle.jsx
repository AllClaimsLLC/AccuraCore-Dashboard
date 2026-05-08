"use client";

import React, { useState } from "react";
import { Boxes, Camera, Users, Sparkles, MessageSquare } from "lucide-react";

const bundleCards = [
  {
    id: "c1",
    icon: <Boxes size={18} />,
    title: "AccuraCore",
    desc: "Jobs, contacts, financials, work orders.",
    price: "$199",
    sub: "/mo value",
    iconBg: "bg-blue-100",
    iconColor: "text-[#1161A5]",
  },
  {
    id: "c2",
    icon: <MessageSquare size={18} />,
    title: "ClaimCore",
    desc: "Claims dashboard, dispatch, scheduling.",
    price: "$199",
    sub: "/mo value",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
  },
  {
    id: "c3",
    icon: <Camera size={18} />,
    title: "AccuraCam",
    desc: "Voice tagging, team photo library.",
    price: "$199",
    sub: "/mo value",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "c4",
    icon: <Users size={18} />,
    title: "5 Seats Shared",
    desc: "One seat unlocks all three platforms.",
    price: "+5",
    sub: "seats included",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    id: "c5",
    icon: <Sparkles size={18} />,
    title: "Unified Billing",
    desc: "Shared contacts, jobs, photos.",
    price: "$0",
    sub: "setup",
    iconBg: "bg-blue-100",
    iconColor: "text-[#1161A5]",
  },
];

export default function AccuraCoreBundle() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="mt-[100px] overflow-hidden">
      {/* BEST VALUE TAG */}
      <div className="flex justify-center mb-4">
        <div className="bg-red-500 text-white px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.12em] font-semibold shadow-lg animate-pulse">
          Best Value
        </div>
      </div>
      {/* HEADING */}
      <div className="text-center">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#1161A5] font-medium">
          AccuraCore Bundle Plan (All-In-One)
        </div>

        <h1 className="text-3xl text-center mb-12 text-black">
          AccuraCore Core Suite
        </h1>
      </div>

      {/* WRAP */}
      <div className="mt-10 relative [perspective:1600px]">
        {/* BUNDLE */}
        <div
          onClick={() => setOpened(!opened)}
          className={`relative w-full max-w-[760px] mx-auto transition-all duration-700
  ${opened ? "h-[500px] max-md:h-[825px]" : "h-[520px] max-md:h-[450px]"}
`}
        >
          {/* BOX */}
          <div
            className={`absolute top-1/2 left-1/2 w-[380px] h-[380px]
            [transform-style:preserve-3d]
            transition-all duration-[1200ms] ease-in-out
            ${
              opened
                ? "-translate-x-1/2 -translate-y-1/2 scale-[0.4] -translate-y-[180px] opacity-30"
                : "-translate-x-1/2 -translate-y-1/2 hover:rotate-x-[-10deg] hover:rotate-y-[12deg]"
            }`}
          >
            {/* FACES */}
            {["top", "bottom", "left", "right", "back", "front"].map((face) => (
              <div
                key={face}
                className={`
                absolute w-[380px] h-[380px] rounded-[24px]
                bg-[linear-gradient(135deg,#fff,#f3f7fc)]
                border border-gray-200
                shadow-[0_24px_60px_-20px_rgba(37,99,235,.2)]
                transition-all duration-[1200ms] ease-in-out
                grid place-items-center

                ${
                  face === "top"
                    ? opened
                      ? "[transform:rotateX(90deg)_translateZ(190px)_translateY(-200px)_rotateX(-30deg)] opacity-20"
                      : "[transform:rotateX(90deg)_translateZ(190px)]"
                    : ""
                }

                ${
                  face === "bottom"
                    ? "[transform:rotateX(-90deg)_translateZ(190px)]"
                    : ""
                }

                ${
                  face === "left"
                    ? opened
                      ? "[transform:rotateY(-90deg)_translateZ(190px)_translateX(-220px)_rotateY(60deg)] opacity-20"
                      : "[transform:rotateY(-90deg)_translateZ(190px)]"
                    : ""
                }

                ${
                  face === "right"
                    ? opened
                      ? "[transform:rotateY(90deg)_translateZ(190px)_translateX(220px)_rotateY(-60deg)] opacity-20"
                      : "[transform:rotateY(90deg)_translateZ(190px)]"
                    : ""
                }

                ${
                  face === "front"
                    ? opened
                      ? "[transform:translateZ(190px)_translateY(220px)_rotateX(60deg)] opacity-20"
                      : "[transform:translateZ(190px)]"
                    : ""
                }

                ${
                  face === "back"
                    ? opened
                      ? "[transform:rotateY(180deg)_translateZ(190px)_translateY(220px)_rotateX(-60deg)] opacity-20"
                      : "[transform:rotateY(180deg)_translateZ(190px)]"
                    : ""
                }
              `}
              >
                {face === "front" && (
                  <>
                    <div className="text-center">
                      {/* GLOW RING */}
                      <div className="relative w-[74px] h-[74px] rounded-full border-[1.5px] border-[#1161A5] mx-auto mb-5 animate-pulse">
                        <div className="absolute inset-0 rounded-full border-[1.5px] border-[#1161A5] animate-ping"></div>
                        <div className="absolute inset-0 rounded-full border-[1.5px] border-[#1161A5] animate-ping delay-300"></div>
                      </div>

                      <h1 className="text-3xl text-center mb-12 text-black">
                        AccuraCore
                      </h1>

                      <small className="block mt-4 text-[11px] uppercase tracking-[0.2em] text-[#1161A5] font-medium not-italic">
                        Core Suite — All-In-One
                      </small>
                    </div>

                    {/* RIBBON */}
                    <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[linear-gradient(90deg,#1161A5,#06b6d4)]"></div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CARDS */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            {bundleCards.map((card, index) => (
              <div
                key={card.id}
                className={`
                absolute w-[230px] p-5 rounded-[18px]
                bg-white border border-gray-200
                shadow-[0_18px_40px_-14px_rgba(37,99,235,.2)]
                transition-all duration-1000 ease-in-out
                pointer-events-auto

                ${opened ? "opacity-100 scale-100" : "opacity-0 scale-[0.4]"}

                ${
                  opened && index === 0
                    ? "translate-x-[-280px] translate-y-[-110px] rotate-[-6deg]"
                    : ""
                }

                ${opened && index === 1 ? "translate-y-[-160px]" : ""}

                ${
                  opened && index === 2
                    ? "translate-x-[280px] translate-y-[-110px] rotate-[6deg]"
                    : ""
                }

                ${
                  opened && index === 3
                    ? "translate-x-[-180px] translate-y-[110px] rotate-[-3deg]"
                    : ""
                }

                ${
                  opened && index === 4
                    ? "translate-x-[180px] translate-y-[110px] rotate-[3deg]"
                    : ""
                }

                max-md:w-[260px]

                ${
                  opened && index === 0
                    ? "max-md:translate-x-0 max-md:translate-y-[-330px]"
                    : ""
                }

                ${
                  opened && index === 1
                    ? "max-md:translate-x-0 max-md:translate-y-[-150px]"
                    : ""
                }

                ${
                  opened && index === 2
                    ? "max-md:translate-x-0 max-md:translate-y-[30px]"
                    : ""
                }

                ${
                  opened && index === 3
                    ? "max-md:translate-x-0 max-md:translate-y-[200px]"
                    : ""
                }

                ${
                  opened && index === 4
                    ? "max-md:translate-x-0 max-md:translate-y-[370px]"
                    : ""
                }
              `}
              >
                <div
                  className={`w-[34px] h-[34px] rounded-lg grid place-items-center mb-3 ${card.iconBg} ${card.iconColor}`}
                >
                  {card.icon}
                </div>

                <h5 className="text-[15px] font-semibold tracking-[-0.01em] text-black">
                  {card.title}
                </h5>

                <p className="mt-1.5 text-[12px] text-gray-500 leading-[1.4]">
                  {card.desc}
                </p>

                <div className="mt-4 text-[22px] font-bold tracking-[-0.02em] text-black">
                  {card.price}
                  <small className="text-[11px] text-gray-400 font-normal ml-1">
                    {card.sub}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUMMARY */}
        {opened && (
          <div className="max-w-[520px] mx-auto text-center mt-[30px] max-md:mt-[90px] animate-fadeIn">
            <div className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
              All-in-One Core Suite
            </div>

            <div className="mt-4 text-[54px] font-bold tracking-[-0.04em] text-black">
              <span className="text-[24px] line-through text-gray-400 font-normal mr-2">
                $597
              </span>
              $349
              <span className="text-[16px] text-gray-500 font-normal">
                /mo · 5 seats
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-[12px] mt-4 uppercase tracking-[0.08em]">
              ◆ You save $248/mo · 41% off
            </div>

            <div className="mt-6">
              <button
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.03]"
                style={{
                  backgroundColor: "#1161A5",
                  color: "#fff",
                }}
              >
                Get Started
                <img src="/Icons/Vector.png" className="w-2 h-3" />
              </button>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setOpened(false)}
                className="text-[11px] uppercase tracking-[0.1em]  text-gray-500 border border-gray-200 rounded-full  px-4 py-2 hover:border-[#1161A5] hover:text-[#1161A5]   transition-all"
              >
                ↺ Repack Bundle
              </button>
            </div>
          </div>
        )}

        {/* FEATURES */}
        {opened && (
          <div className="max-w-[560px] mx-auto mt-[60px] max-md:mt-[80px] animate-fadeIn">
            <ul className="grid gap-3">
              {[
                "(includes 5 seats total, shared across both platforms).",
                "Add extra seats: $30/month per user.",
                "Includes: Everything in AccuraCore + ClaimCore.",
                "Unified company billing.",
                "Shared contacts/jobs/photos across systems.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[14px] text-gray-500 items-start animate-fadeItem"
                  style={{
                    animationDelay: `${i * 120}ms`,
                  }}
                >
                  <span className="w-[18px] h-[18px] rounded-full bg-blue-100 grid place-items-center flex-shrink-0 mt-[2px]">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1161A5"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CUSTOM KEYFRAMES */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes fadeItem {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeItem {
          animation: fadeItem 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
