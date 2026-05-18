"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import BuiltForStructuredExecution from "@/components/BuiltForStructuredExecution";
import UnstructuredDocumentationCostsMoney from "@/components/UnstructuredDocumentationCostsMoney";
import WeStructureProof from "@/components/WeStructureProof";
import GetStartedModal from "@/components/GetStartedModal";
import FinalHeroSection from "@/components/FinalHeroSection";
import UIFrameHeroSection from "@/components/UIFrameHeroSection";

export default function AccuraCamPage() {
  const [isOpen, setIsOpen] = useState(false);
  const convertTime = (time) => {
    const [sec, ms] = time.toString().split(".");
    return Number(sec) + Number(`0.${ms}`);
  };

  return (
    <>
      <FinalHeroSection
        logo="/Logos/Accuracam/AccuraCam.svg"
        description="AccuraCam fixes documentation at the source, photos attach to
                the job, location, and scope item the moment they're taken.
                No rebuilding in the office."
        mediaType="image"
        imageSrc="/Images/accuracam-ui.png"
        onPrimaryClick={() => setIsOpen(true)}
        onSecondaryClick={() => (window.location.href = "/book-a-demo")}
      />

      <BuiltForStructuredExecution isOpen={isOpen} setIsOpen={setIsOpen} />
      <UnstructuredDocumentationCostsMoney />
      <WeStructureProof isOpen={isOpen} setIsOpen={setIsOpen} />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
