"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import StructuredBeforeItLeavesTheField from "@/components/StructuredBeforeItLeavesTheField";
import ClaimDelaysDisruptCashFlow from "@/components/ClaimDelaysDisruptCashFlow";
import WeStructureTheWorkflow from "@/components/WeStructureTheWorkflow";
import GetStartedModal from "@/components/GetStartedModal";
import FinalHeroSection from "@/components/FinalHeroSection";
import { Button } from "@/components/ui/button";

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
     <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
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
       <img
                    src="/Icons/Vector.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
    </Button>
  </>
);

export default function AccuraCoreClaimsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FinalHeroSection
        logo="/Logos/Claimcore/AccuraCore-Claims-Logo.png"
        description="AccuraCore Claims standardizes documentation from field to
                submission eliminating guesswork, incomplete files, and review
                delays."
        onPrimaryClick={() => setIsOpen(true)}
        onSecondaryClick={() => (window.location.href = "/book-a-demo")}
      />

      <StructuredBeforeItLeavesTheField
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttons={buttons(() => setIsOpen(true))}
      />
      <ClaimDelaysDisruptCashFlow />
      <WeStructureTheWorkflow isOpen={isOpen} setIsOpen={setIsOpen} />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
