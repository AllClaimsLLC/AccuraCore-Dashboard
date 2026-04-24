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
    [autoplay]
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
    <section className="py-16 lg:py-20 bg-[#f4f0ed] dark:bg-slate-950">
      <div className="w-full">
        <div
          className="p-8 lg:p-12"
          style={{
            background: "radial-gradient(circle, #2f5071 0%, #162c44 100%)",
          }}
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-white font-bold text-xl">
              Everything You Need To
              <br />
              Run And Grow Your Business
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className="px-5 py-2 rounded-full text-white transition-all"
                style={{
                  background:
                    activeTab === tab.id
                      ? "linear-gradient(to right, #0061A4, #004b82)"
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
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {allImages.map((img) => (
                <div
                  key={img.id}
                  className="flex-[0_0_100%] md:flex-[0_0_55%] flex justify-center items-center px-2"
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