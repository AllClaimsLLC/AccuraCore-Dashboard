import React from "react";
import Image from "next/image";
import useFadeIn from "@/lib/useFadeIn";

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

export const AccuraCoreSuite = () => {
  useFadeIn();

  return (
    <section className="relative bg-[#fbe9dd] pb-20 pt-24 sm:pb-20">
      <div className="fade-up mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* LEFT */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/Images/AccuraCoreSuite.svg"
              alt="AccuraCore Suite"
              width={520}
              height={520}
              className="w-full max-w-full sm:max-w-[90%] h-auto"
            />
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-[#111113] font-[400] leading-[1.2] text-[24px] sm:text-[30px] text-left">
              Every Plan<br className="hidden sm:block" /> Includes{" "}
              <span className="text-[#FA8C3D]">
                The Full AccuraCore Suite
              </span>
            </h3>

            <p className="text-[13px] sm:text-[15px] text-[#111113] mt-4 leading-relaxed text-left">
              No feature gates. No paywalls. Pick a plan based on team size
              get everything from day one.
            </p>

            <div className="mt-7 flex flex-col gap-4">
              {suiteItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 sm:gap-4 rounded-[14px] bg-white p-4 sm:p-5"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src="/Icons/blue-circle-check.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-[22px] h-[22px] sm:w-[20px] sm:h-[20px]"
                    />
                  </div>

                  <div>
                    <h4 className="text-[13.5px] sm:text-base font-[500] text-gray-900 leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-[13px] text-gray-600 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};