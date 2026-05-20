"use client";

import useFadeIn from "@/lib/useFadeIn";
import Image from "next/image";

export default function MyAccuraCoreCustomers() {
  useFadeIn();
  return (
    <section className="relative w-full pt-16 pb-14 lg:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/UnstructuredDocumentationCostsMoney-bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      <div className="fade-up">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <h3
              className="
            text-white
            font-[400]
            leading-[1.2]
            text-[25px] md:text-[30px]
          "
            >
              MyAccuraCore.
              <br className="hidden lg:block" />
              Customers In The Loop,
              <br className="hidden lg:block" /> Always.
            </h3>
            <p
              className="
            text-gray-300
            leading-[1.9] 
            max-w-3xl
          "
            >
              They love it. My crew loves it. And I love finally having
              everything in one place.
            </p>

            {/* PILL ROW */}
<div className="mt-4 flex flex-wrap items-center gap-4">
  {/* Pill 1 */}
  <div
    className="
      flex items-center gap-2
      px-4 py-4
      rounded-full
      border border-[#0061A4]
    "
  >
    <Image
      src="/Icons/OurStory/customers-love-it.svg"
      alt="Customers"
      width={20}
      height={20}
      className="w-5 h-5 object-contain"
    />
    <span className="text-sm text-white">Customers love it</span>
  </div>

  {/* Pill 2 */}
  <div
    className="
      flex items-center gap-2
      px-4 py-4
      rounded-full
      border border-[#FA8C3D]
    "
  >
    <Image
      src="/Icons/OurStory/crew-loves-it.svg"
      alt="Crew"
      width={20}
      height={20}
      className="w-5 h-5 object-contain"
    />
    <span className="text-sm text-white">Crew loves it</span>
  </div>
</div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-full flex justify-center bg-[#e9f2f9] p-10 rounded-[20px]">
            <Image
              src="/Images/MAC.png"
              alt="preview"
              width={600}
              height={500}
              className="object-contain w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
