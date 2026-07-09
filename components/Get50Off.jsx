"use client";

import Image from "next/image";
import useFadeIn from "@/lib/useFadeIn";
import { Button } from "@/components/ui/button";

export default function Get50Off({ onClaim, isDiscounted }) {
  useFadeIn();

  return (
    <>
      <section className="relative bg-[#faefe9] pt-5 pb-20 sm:py-20 z-20">
        <div className="mx-auto sm:max-w-7xl px-5 relative">
          <div className="fade-up relative z-30 mx-auto w-full sm:w-[60%] sm:mt-[-300px]">
            <div className="rounded-[20px] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-5 sm:p-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 px-2 sm:px-2 pt-4 sm:py-6">
                {/* LEFT */}
                <div className="relative flex justify-center md:justify-start">
                  <div className="relative w-fit">
                    <Image
                      src="/Images/mic-sound-waves.png"
                      alt=""
                      width={140}
                      height={140}
                      className="absolute -top-6 left-60 sm:-top-25 sm:left-1/2 -translate-x-1/2 md:left-auto sm:right-[-40px] md:translate-x-0 w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] z-10 pointer-events-none select-none"
                    />
                    <Image
                      src="/Images/mic-left.png"
                      alt="Microphone"
                      width={400}
                      height={400}
                      className="relative z-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] object-contain"
                    />
                  </div>
                </div>

                {/* RIGHT: Promo content */}
                <div className="text-left">
                  <h2 className="text-[#FA8C3D] font-[600] tracking-tight leading-tight text-[25px] sm:text-[42px]">
                    Get 50% Off
                  </h2>

                  <h3 className="text-[#1d1d1d] text-[18px] sm:text-[26px] leading-snug mt-1">
                    Your Plan For The First <br className="hidden sm:block" />6 Months
                  </h3>

                  <div className="w-full h-[2px] bg-gray-100 my-5 mx-auto md:mx-0" />

                  <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed max-w-md mx-auto md:mx-0">
                    Sign up by July 31st and lock in half price on any
                    AccuraCore plan for your first six months.
                  </p>

                 <Button
  className="mt-7 rounded-full text-sm inline-flex items-center"
  style={{
    backgroundColor: "#0061A4",
    color: "white",
    padding: "25px 22px",
  }}
  onClick={onClaim}
>
  {isDiscounted ? "Remove 50% Off" : "Claim 50% Off"}
  <img
    src="/Icons/right-arrow-white.svg"
    alt="Arrow Icon"
    className="ml-2 h-3 w-2"
  />
</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
