"use client";

import Image from "next/image";
import useFadeIn from "@/lib/useFadeIn";
import { Button } from "@/components/ui/button";

const suiteItems = [
  {
    title: "Customizable CRM",
    desc: "Track customers, jobs, tasks and your business workflows  built to match how you actually work.",
  },
  {
    title: "AccuraCam",
    desc: "Integrated camera with voice labeling, photo upload and instant AI reporting from the field.",
  },
  {
    title: "AccuraClaims",
    desc: "Track insurance claims and generate AI damage reports  get more claims paid.",
  },
  {
    title: "Free data transfer",
    desc: "We move everything from your current system at no cost  we make it easy to switch.",
  },
  {
    title: "Free onboarding & training",
    desc: "Real humans get your whole team up and running fast, so you can get back to building.",
  },
];

export default function AccuraCoreSuite() {
  useFadeIn();

  return (
    <>
      <section className="relative bg-[#faefe9] pt-5 pb-20 sm:py-20 z-20">
        <div className="mx-auto sm:max-w-7xl px-5 relative">
          <div className="fade-up relative z-30 mx-auto w-full sm:w-[80%] sm:mt-[-300px]">
            <div className="rounded-[20px] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-5 sm:p-8">
              {/* HEADING */}
              <div className="sm:text-center mb-8 sm:mb-8">
                <h3 className="text-[#1d1d1d] font-[400] leading-[1.2] text-[24px] sm:text-[30px]">
                  Every Plan Includes <br className="hidden sm:block" />
                  <span className="block sm:inline text-[#FA8C3D] mt-1 sm:mt-0">
                    The Full AccuraCore Suite
                  </span>
                </h3>

                <p className="text-[13px] sm:text-[15px] text-[#111113] mt-4 leading-relaxed">
                  One platform to run your entire contracting business, no
                  add-ons required to get started.
                </p>
              </div>

              {/* INNER GREY CARD */}
             <div className="rounded-[20px] bg-[#F6F6F6] p-5 sm:p-7">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-10 sm:gap-y-9">
    {suiteItems.map((item, i) => {
      const isLast = i === suiteItems.length - 1;

      return (
        <div
          key={item.title}
          className={`flex items-start gap-3 sm:gap-4 ${
            isLast ? "md:col-span-1" : ""
          }`}
        >
          <div className="flex-shrink-0 grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] bg-[#0061A4]">
            <Image
              src="/Icons/PricingPage/checkmark-circle.svg"
              alt=""
              width={20}
              height={20}
              className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
            />
          </div>

          <div>
            <h4 className="text-[13.5px] sm:text-base font-[500] text-gray-900 leading-snug mb-1">
              {item.title}
            </h4>
            <p className="text-[11.5px] sm:text-[12px] text-gray-600 leading-snug">
              {item.desc}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#faefe9] pb-16 sm:pb-24 overflow-hidden">
        <div className="fade-up mx-auto max-w-7xl w-[80%] px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-5 sm:gap-10 md:gap-4">
            <div className="flex justify-center md:justify-start">
              <div className="relative inline-block">
                <Image
                  src="/Images/get-circle.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="sm:w-[500px] sm:h-[500px]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-[500] tracking-tight leading-none select-none text-[80px] sm:text-[120px]">
                    Get
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left md:-ml-10">
              <h2 className="text-[#FA8C3D] font-[500] leading-none tracking-tight text-[80px] sm:text-[120px]">
                50%
              </h2>

              <h3 className="text-[#1d1d1d] text-[24px] sm:text-[30px] font-medium leading-tight mt-1">
                Off Your Plan For The First 6 Months
              </h3>

              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mt-4 max-w-md mx-auto md:mx-0">
                Sign up by July 31st and lock in half price on any AccuraCore
                plan for your first six months.
              </p>

              <Button
                className="mt-7 rounded-full text-sm inline-flex items-center"
                style={{
                  backgroundColor: "#0061A4",
                  color: "white",
                  padding: "25px 22px",
                }}
              >
                Claim 50% Off
                <img
                  src="/Icons/right-arrow-white.svg"
                  alt="Arrow Icon"
                  className="ml-2 h-3 w-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
