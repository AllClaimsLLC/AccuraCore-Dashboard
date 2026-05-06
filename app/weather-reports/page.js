"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import WeatherIntelligenceClaimValidation from "@/components/WeatherIntelligenceClaimValidation";
import UnverifiedWeatherDataGetsClaimsQuestioned from "@/components/UnverifiedWeatherDataGetsClaimsQuestioned";
import WeatherLookupTool from "@/components/WeatherLookupTool";
import GetStartedModal from "@/components/GetStartedModal";
import FinalHeroSection from "@/components/FinalHeroSection";

export default function WeatherReportsPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FinalHeroSection
        title="Weather Reports"
        description="Weather Reports inside AccuraCore attach verified storm and
                weather data directly to job records, strengthening claims,
                reducing disputes, and improving documentation integrity with
                job-linked, submission-ready evidence."
                height="40rem"
        onPrimaryClick={() => setIsOpen(true)}
        onSecondaryClick={() => (window.location.href = "/book-a-demo")}
      />

      <WeatherIntelligenceClaimValidation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <UnverifiedWeatherDataGetsClaimsQuestioned
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <WeatherLookupTool isOpen={isOpen} setIsOpen={setIsOpen} />

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
