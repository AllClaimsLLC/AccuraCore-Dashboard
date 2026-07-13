"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const allImages = [
  { id: "Contact-Profiles", src: "/Images/Contact-Profiles.svg" },
  { id: "Job-Management", src: "/Images/Job-Management.svg" },
  { id: "Financials", src: "/Images/Financials.svg" },
  { id: "Boards", src: "/Images/Boards.svg" },
  { id: "Calendar", src: "/Images/Calender.svg" },
];

const tabs = [
  { id: "Contact-Profiles", label: "Contact Profiles" },
  { id: "Job-Management", label: "Job Management" },
  { id: "Financials", label: "Financials" },
  { id: "Boards", label: "Boards" },
  { id: "Calendar", label: "Calendar" },
];

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("Contact-Profiles");

  // Autoplay plugin (3 seconds)
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay],
  );

  // Sync active tab when slide changes (swipe / autoplay / buttons)
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setActiveTab(allImages[index].id);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect(); // initial sync

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Button click scroll
  const scrollTo = (id) => {
    const index = allImages.findIndex((img) => img.id === id);
    if (emblaApi && index !== -1) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <section
      className="py-16 lg:py-20 bg-[#f4f0ed] dark:bg-slate-950"
      style={{ paddingBottom: 0 }}
    >
      <div className="w-full">
        <div
          className="bg-[#010A2D] relative py-8 lg:py-12 bg-cover bg-center bg-no-repeat overflow-hidden"
          // style={{
          //   backgroundImage: "url('/Images/everything-bg.png')",
          //   paddingLeft: 0,
          //   paddingRight: 0,
          // }}
        >
          {/* LEFT BG SHADOW */}
          {/* <div className="hidden md:block absolute left-0 top-0 h-full w-24 md:w-84 pointer-events-none z-10 bg-gradient-to-r from-[#000b20] via-[#000b20]/10 to-transparent" /> */}

          {/* RIGHT BG SHADOW */}
          {/* <div className="hidden md:block absolute right-0 top-0 h-full w-24 md:w-84 pointer-events-none z-10 bg-gradient-to-l from-[#000b20] via-[#000b20]/10 to-transparent" /> */}
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-12 px-4 lg:px-12">
            <h2
              className="text-white leading-tight"
              style={{ fontSize: "1.5rem", lineHeight: "1.75rem" }}
            >
              Everything You Need To Run
              <br />
              And Grow Your Contracting Business
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab.id)}
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium whitespace-nowrap transition-all duration-300 backdrop-blur-[4px]"
                  style={
                    isActive
                      ? {
                          background: "white",
                          color: "#0061A4",
                          border: "1px solid transparent",
                          borderImage:
                            "linear-gradient(0deg, rgba(255,255,255,0.15), rgba(255,255,255,0.15)), linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), linear-gradient(92.43deg, #0061A4 -0.5%, rgba(255,255,255,0.6) 17.55%, #0061A4 52.19%, rgba(255,255,255,0.5) 86.83%, #0061A4 100.98%), linear-gradient(0deg, #0061A4, #0061A4)",
                          borderImageSlice: 1,
                          boxShadow: "0px 0px 20px 0px #0061A4",
                          backdropFilter: "blur(4px)",
                        }
                      : {
                          background: "#1515174D",
                          color: "#FFFFFF",
                          border: "1px solid #FFFFFF59",
                          backdropFilter: "blur(4px)",
                        }
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {allImages.map((img) => (
                <div
                  key={img.id}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_55%] flex justify-center items-center px-[2px] relative"
                >
                  <img
                    src={img.src}
                    alt=""
                    className={`w-full h-[35vh] sm:h-[90vh] md:h-[80vh] lg:h-[90vh] object-contain rounded-xl transition-all duration-500 ${
                      activeTab === img.id
                        ? "scale-95 sm:scale-95 md:scale-110 lg:scale-110 opacity-100"
                        : "scale-80 opacity-50"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
