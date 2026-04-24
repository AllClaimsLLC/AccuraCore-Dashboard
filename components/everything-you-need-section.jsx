"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const allImages = [
  { id: "Work-Order-Management", src: "/Images/Work-Order-Management.png" },
  { id: "smart-dashboard", src: "/Images/Smart-Dashboard.png" },
  { id: "boards", src: "/Images/Boards.png" },
  { id: "Contact-Profiles", src: "/Images/Contact-Profiles.png" },
  { id: "calendar", src: "/Images/Calendar.png" },
];

const tabs = [
  { id: "Work-Order-Management", label: "Work Order Management" },
  { id: "smart-dashboard", label: "Smart Dashboard" },
  { id: "boards", label: "Boards" },
  { id: "Contact-Profiles", label: "Contact Profiles" },
  { id: "calendar", label: "Calendar" },
];

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("Work-Order-Management");

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
          className="p-8 lg:p-12 "
          style={{
            background: "radial-gradient(circle, #2f5071 0%, #162c44 100%)",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-12 px-4 lg:px-12">
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontSize: "1.5rem", lineHeight: "1.75rem" }}
            >
              Everything You Need To
              <br />
              Run And Grow Your Contracting Business
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap text-white`}
                style={{
                  background:
                    activeTab === tab.id
                      ? "radial-gradient(circle at center, #0061A4 0%, #004b82 100%)"
                      : "#1f344a",
                  border:
                    activeTab === tab.id
                      ? "1px solid #3380c6"
                      : "1px solid gray",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {allImages.map((img) => (
                <div
                  key={img.id}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_55%] flex justify-center items-center px-1 relative"
                >
                  <img
                    src={img.src}
                    alt=""
                    className={`w-full h-[300px] md:h-[500px] object-contain rounded-xl transition-all duration-500 ${
                      activeTab === img.id
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-50"
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
