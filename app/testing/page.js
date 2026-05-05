"use client";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import BuiltForStructuredExecution from "@/components/BuiltForStructuredExecution";
import UnstructuredDocumentationCostsMoney from "@/components/UnstructuredDocumentationCostsMoney";
import WeStructureProof from "@/components/WeStructureProof";
import GetStartedModal from "@/components/GetStartedModal";
import { DesktopUpdatedHeader } from "@/components/DesktopUpdatedHeader";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";
import FinalHeroSection from "@/components/FinalHeroSection";

export default function TestingPage() {
  const videoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* DESKTOP HERO AND HEADER */}
      <FinalHeroSection
        logo="/Logos/Accuracam/AccuraCam-Logo.png"
        description="AccuraCam fixes documentation at the source, photos attach to
                  the job, location, and scope item the moment they're
                  taken. No rebuilding in the office."
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
