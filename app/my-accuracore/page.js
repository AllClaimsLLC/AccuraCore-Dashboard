"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ControlTheEntireWorkflow from "@/components/ControlTheEntireWorkflow";
import OperationalChaosCostsMargin from "@/components/OperationalChaosCostsMargin";
import JustAnotherCRM from "@/components/JustAnotherCRM";
import GetStartedModal from "@/components/GetStartedModal";
import HeroLayout from "@/components/HeroLayout";
import { DesktopUpdatedHeader } from "@/components/DesktopUpdatedHeader";

const content = (
  <>
    <p className="text-blue-100">
      MyAccuraCore centralizes jobs, documentation, teams, and claims in one
      structured system. This is where field capture, office review, and claim
      workflows connect.{" "}
      <span className="text-[#FA8C3D]">
        One system, Full visibility, Controlled execution.
      </span>
    </p>
  </>
);

const buttons = (onGetStarted) => (
  <>
    <Button
      className="rounded-full text-sm flex items-center"
      style={{
        backgroundColor: "#fff",
        color: "#0061A4",
        padding: "27px 15px",
      }}
      onClick={onGetStarted}
    >
      Get Started
      <img src="/Icons/Vector2.png" alt="Arrow Icon" className="w-2 h-3 ml-2" />
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
      <img src="/Icons/Vector.png" alt="Arrow Icon" className="w-2 h-3 ml-2" />
    </Button>
  </>
);

export default function MyAccuraCorePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const videoRefElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="hidden md:block lg:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/Hero-bg.png')",
          height: "50rem",
        }}
      >
        {/* Header */}
       <DesktopUpdatedHeader />

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <img
                src="/Logos/Accuracore/My-Accuracore.png"
                alt="AccuraCam Logo"
                className="h-25 object-contain m-auto"
              />
              <p className="text-md text-blue-100 mt-6 max-w-3xl mx-auto leading-relaxed">
                MyAccuraCore centralizes jobs, documentation, teams, and claims
                in one structured system.
              </p>
              <p className="text-md text-blue-100  max-w-3xl mx-auto leading-relaxed">
                This is where field capture, office review, and claim workflows
                connect.{" "}
              </p>
              <p className="text-md text-[#FA8C3D] mb-8 max-w-3xl mx-auto leading-relaxed">
                One system, Full visibility, Controlled execution.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "27px 15px",
                    border: "none",
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
                  className="w-full sm:w-auto md:w-auto lg:w-auto text-white rounded-full text-sm flex items-center"
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

            {/* Video Player */}
            <div className="relative w-[90%] mx-auto">
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                <video
                  ref={(videoRef) => (videoRefElement.current = videoRef)}
                  className="w-full max-h-[500px] rounded-[30px] object-cover"
                  poster="/Images/video.png" // thumbnail
                  controls={isPlaying} // show controls only when playing
                >
                  <source src="/Videos/DashboardDemo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isPlaying && (
                  <button
                    onClick={() => {
                      videoRefElement.current.play();
                      setIsPlaying(true);
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition duration-300 hover:bg-black/40"
                  >
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-6.518-3.758A1 1 0 007 8.304v7.392a1 1 0 001.234.97l6.518-1.9a1 1 0 00.748-.97v-1.864a1 1 0 00-.748-.97z"
                        />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <HeroLayout
        logo="/Logos/Accuracore/My-Accuracore.png"
        content={content}
        buttons={buttons(() => setIsOpen(true))}
      />

      <ControlTheEntireWorkflow isOpen={isOpen} setIsOpen={setIsOpen} />
      <OperationalChaosCostsMargin isOpen={isOpen} setIsOpen={setIsOpen} />
      <JustAnotherCRM isOpen={isOpen} setIsOpen={setIsOpen} />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
