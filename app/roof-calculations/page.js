"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import ControlledBeforeItLeavesTheField from "@/components/ControlledBeforeItLeavesTheField";
import InaccurateMeasurementsCostMargin from "@/components/InaccurateMeasurementsCostMargin";
import DisconnectedMeasurementTools from "@/components/DisconnectedMeasurementTools";
import GetStartedModal from "@/components/GetStartedModal";
import FinalHeroSection from "@/components/FinalHeroSection";

export default function RoofCalculationsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FinalHeroSection
        title="Roof Calculations"
        description="Roof Calculations inside AccuraCore generate precise, job-linked
                measurements, eliminating manual estimating errors, supplement
                disputes, and costly miscalculations."
                height="40rem"
        onPrimaryClick={() => setIsOpen(true)}
        onSecondaryClick={() => (window.location.href = "/book-a-demo")}
      />

      <ControlledBeforeItLeavesTheField isOpen={isOpen} setIsOpen={setIsOpen} />
      <InaccurateMeasurementsCostMargin isOpen={isOpen} setIsOpen={setIsOpen} />
      <DisconnectedMeasurementTools isOpen={isOpen} setIsOpen={setIsOpen} />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
