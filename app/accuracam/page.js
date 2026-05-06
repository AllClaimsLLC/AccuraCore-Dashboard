"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import BuiltForStructuredExecution from "@/components/BuiltForStructuredExecution";
import UnstructuredDocumentationCostsMoney from "@/components/UnstructuredDocumentationCostsMoney";
import WeStructureProof from "@/components/WeStructureProof";
import GetStartedModal from "@/components/GetStartedModal";
import FinalHeroSection from "@/components/FinalHeroSection";

export default function AccuraCamPage() {
  const [isOpen, setIsOpen] = useState(false);
  const convertTime = (time) => {
  const [sec, ms] = time.toString().split(".");
  return Number(sec) + Number(`0.${ms}`);
};

  return (
    <>
      <FinalHeroSection
        logo="/Logos/Accuracam/AccuraCam-Logo.png"
        description="AccuraCam fixes documentation at the source, photos attach to
                the job, location, and scope item the moment they&apos;re taken.
                No rebuilding in the office."
                startTime={convertTime(26.18)}
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
