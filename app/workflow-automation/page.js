"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import StageBasedControlforReliableJobExecution from "@/components/StageBasedControlforReliableJobExecution";
import DelaysSlowRevenue from "@/components/DelaysSlowRevenue";
import JustTaskManagement from "@/components/JustTaskManagement";
import GetStartedModal from "@/components/GetStartedModal";
import FinalHeroSection from "@/components/FinalHeroSection";

export default function WorkflowAutomationPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FinalHeroSection
        title="Workflow Automation"
        description="Workflow Automation inside AccuraCore eliminates manual
                handoffs, missed steps, and operational delays by ensuring every
                job progresses automatically in the correct sequence. Tasks are
                triggered systematically, so nothing is forgotten and no stage
                is skipped."
                height="40rem"
        onPrimaryClick={() => setIsOpen(true)}
        onSecondaryClick={() => (window.location.href = "/book-a-demo")}
      />

      <StageBasedControlforReliableJobExecution
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <DelaysSlowRevenue isOpen={isOpen} setIsOpen={setIsOpen} />
      <JustTaskManagement isOpen={isOpen} setIsOpen={setIsOpen} />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
