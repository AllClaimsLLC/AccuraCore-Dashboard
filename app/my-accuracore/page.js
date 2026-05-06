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
import FinalHeroSection from "@/components/FinalHeroSection";

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
  const [isOpen, setIsOpen] = useState(false);
  const convertTime = (time) => {
  const [sec, ms] = time.toString().split(".");
  return Number(sec) + Number(`0.${ms}`);
};
  return (
    <>
      <FinalHeroSection
        logo ="/Logos/Accuracore/My-Accuracore.png"
        description="MyAccuraCore centralizes jobs, documentation, teams, and claims in one
      structured system. This is where field capture, office review, and claim
      workflows connect. One system, Full visibility, Controlled execution."
      startTime={convertTime(9.04)}
        onPrimaryClick={() => setIsOpen(true)}
        onSecondaryClick={() => (window.location.href = "/book-a-demo")}
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
