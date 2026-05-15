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
      mediaType="image"
             imageSrc="/Images/myaccuracore-ui.png"
               height="46rem"
               mediaTranslateY="39%"
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
