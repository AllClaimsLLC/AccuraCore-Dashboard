"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import BuiltForStructuredExecution from "@/components/BuiltForStructuredExecution";
import UnstructuredDocumentationCostsMoney from "@/components/UnstructuredDocumentationCostsMoney";
import WeStructureProof from "@/components/WeStructureProof";
import GetStartedModal from "@/components/GetStartedModal";
import HeroLayout from "@/components/HeroLayout";
import { DesktopUpdatedHeader } from "@/components/DesktopUpdatedHeader";

const content = (
  <p className="text-blue-100">
    AccuraCore is a powerful platform that brings everything you need into one
    dashboard, manage your team, track work orders, handle finances, and stay in
    control of every detail.
  </p>
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
    </Button>
  </>
);

export default function AccuraCamPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ MOBILE (CSS controlled) */}
      <div className="block md:hidden">
        <HeroLayout
          logo="/Logos/Accuracam/AccuraCam-Logo.png"
          content={content}
          buttons={buttons(() => setIsOpen(true))}
        />
      </div>

      {/* ✅ DESKTOP (NO re-render on rotate now) */}
      <div className="hidden md:block">
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Images/Hero-bg.png')",
            height: "45rem",
          }}
        >
          <DesktopUpdatedHeader />

          <main className="px-6 py-16">
            <div className="max-w-7xl mx-auto text-center">

              <img
                src="/Logos/Accuracam/AccuraCam-Logo.png"
                className="h-25 m-auto"
              />

              <p className="text-md text-blue-100 mt-6 mb-8 max-w-3xl mx-auto">
                AccuraCam fixes documentation at the source...
              </p>

              <div className="flex justify-center gap-4">
                {buttons(() => setIsOpen(true))}
              </div>

              {/* ✅ FIXED DESKTOP VIDEO */}
              <div className="mt-10 w-[90%] mx-auto">
                <video
                  className="w-full rounded-[30px]"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/Videos/accuracore-explainer.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </main>
        </div>
      </div>

      <BuiltForStructuredExecution isOpen={isOpen} setIsOpen={setIsOpen} />
      <UnstructuredDocumentationCostsMoney />
      <WeStructureProof isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer onBookDemo={() => setIsOpen(true)} />

      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}