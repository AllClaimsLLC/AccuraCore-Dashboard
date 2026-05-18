"use client";
import { useState } from "react";
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import Footer from "@/components/Footer";
import LovedByPeople from "@/components/loved-by-people.jsx";
import TheToolsSection from "@/components/the-tools-section";
import { Button } from "@/components/ui/button";
import WhatMakesAccurascoreDifferent from "@/components/WhatMakesAccurascoreDifferent";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";

import GetStartedModal from "@/components/GetStartedModal";
import FlashSaleRibbon from "@/components/FlashSalesRibbon";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header + Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat h-[55rem] sm:h-[50rem]"
        style={{
          backgroundImage: "url('/Images/Hero-bg.png')",
        }}
      >
        <FlashSaleRibbon />
        {/* Header */}
        <header className="px-6 py-4 relative">
          <nav
            className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border bg-white dark:bg-slate-900"
            style={{ padding: "5px 30px" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img
                  src="/Logos/Accuracore/AC2025.png"
                  alt="AccuraCore Logo"
                  className="w-20 h-20 object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setAboutOpen(true);
                  setFeaturesOpen(false);
                }}
                onMouseLeave={() => {
                  setAboutOpen(false);
                }}
              >
                <button className="text-black dark:text-white text-sm flex items-center gap-1">
                  About
                  {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>

                {aboutOpen && (
                  <div className="text-center absolute left-1/2 -translate-x-1/2 top-full pt-12 w-44 z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-[15px] border border-white/10 overflow-hidden">
                      <Link href="/blog">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 border-b border-white/20">
                          Blog
                        </span>
                      </Link>

                      <Link href="/#faq-section">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500">
                          FAQs
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setFeaturesOpen(true);
                  setAboutOpen(false);
                }}
                onMouseLeave={() => {
                  setFeaturesOpen(false);
                }}
              >
                <button className="text-black dark:text-white  text-sm flex items-center gap-1">
                  Features
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>

                {featuresOpen && (
                  <div className="text-center absolute left-1/2 -translate-x-1/2 top-full pt-12 w-56 z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-[15px] border border-white/10 overflow-hidden">
                      <Link href="/accuracam">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                          AccuraCam
                        </span>
                      </Link>

                      <Link href="/accuracore-claims">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                          AccuraCore Claims
                        </span>
                      </Link>

                      <Link href="/my-accuracore">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                          My AccuraCore
                        </span>
                      </Link>

                      <Link href="/roof-calculations">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                          Roof Calculations
                        </span>
                      </Link>

                      <Link href="/weather-reports">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
                          Weather Reports
                        </span>
                      </Link>

                      <Link href="/workflow-automation">
                        <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text">
                          Workflow Automation
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining links */}
              <Link href="/our-story">
                <span className="text-black dark:text-white  text-sm">
                  Our Story
                </span>
              </Link>
              <Link href="/pricing-page">
                <span className="text-black dark:text-white  text-sm">
                  Pricing
                </span>
              </Link>

              {/* <Link href="/#faq-section">
                        <span className="text-black dark:text-white  text-sm">FAQs</span>
                      </Link> */}

              <Link href="/book-a-demo">
                <span className="text-black dark:text-white  text-sm">
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="  p-2 rounded-full   bg-slate-900 dark:bg-white   text-white dark:text-slate-900 flex items-center justify-center">
                <ModeToggle />
              </div>

              <Button
                className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center"
                style={{ color: "#0061A4", padding: "25px 15px" }}
              >
                <img
                  src="/Icons/Vector.svg"
                  alt="Login Icon"
                  className="w-4 h-4 mr-2"
                />
                Login
              </Button>

              <Button
                className="text-white rounded-full text-sm flex items-center"
                style={{
                  backgroundColor: "#0061A4",
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
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <div className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-slate-900 flex items-center justify-center">
                <ModeToggle />
              </div>

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-black dark:text-white w-8 h-8" />
                ) : (
                  <Menu className="text-black dark:text-white w-8 h-8" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-black px-6 py-4 rounded-[15px] mt-2 w-[95%] m-auto z-50 space-y-4 text-center">
              {/* About */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 text-black dark:text-white"
                >
                  About
                  {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>

                {aboutOpen && (
                  <div className="mt-2 w-full bg-white dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                    <Link href="/blog">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 rounded-t-[15px] hover:bg-gray-500 hover:text">
                        Blog
                      </p>
                    </Link>
                    <Link href="/#faq-section">
                      <p className="text-black dark:text-white text-sm p-3 rounded-b-[15px] hover:bg-gray-500 hover:text">
                        FAQs
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex items-center gap-1 text-black dark:text-white"
                >
                  Features
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>

                {featuresOpen && (
                  <div className="mt-2 w-full bg-white dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                    <Link href="/accuracam">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        AccuraCam
                      </p>
                    </Link>

                    <Link href="/accuracore-claims">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        AccuraCore Claims
                      </p>
                    </Link>

                    <Link href="/my-accuracore">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        My AccuraCore
                      </p>
                    </Link>

                    <Link href="/roof-calculations">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        Roof Calculations
                      </p>
                    </Link>

                    <Link href="/weather-reports">
                      <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
                        Weather Reports
                      </p>
                    </Link>

                    <Link href="/workflow-automation">
                      <p className="text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text">
                        Workflow Automation
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <Link href="/our-story">
                <p className="text-black dark:text-white text-sm mb-4">
                  Our Story
                </p>
              </Link>
              <Link href="/pricing-page">
                <p className="text-black dark:text-white text-sm mb-4">
                  Pricing
                </p>
              </Link>
              {/* <Link href="/#faq-section">
                <p className="text-black dark:text-white text-sm mb-4">FAQs</p>
              </Link> */}
              <Link href="/book-a-demo">
                <p className="text-black dark:text-white text-sm mb-4">
                  Contact Us
                </p>
              </Link>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 lg:mb-16">
              <div className="overflow-hidden">
                <h1
                  onClick={() => {
                    document
                      .getElementById("built-by-a-contractor-for-contractors")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                 className="text-3xl md:text-4xl text-white mb-6 leading-tight flex flex-wrap justify-center cursor-pointer relative z-10"
                >
                  {"Built by a Contractor, for Contractors"
                    .split(" ")
                    .map((word, i) => (
                      <span
  key={i}
  className="inline-block overflow-hidden align-bottom pr-[0.18em] pointer-events-none"
>
  <span
    className="inline-block animate-wordUp pointer-events-none"
    style={{
      transform: "translateY(110%)",
      animationDelay: `${0.15 + i * 0.06}s`,
      animationFillMode: "forwards",
    }}
  >
    {word}
  </span>
</span>
                    ))}
                </h1>

                <p
                  className="text-md text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeUp"
                  style={{
                    opacity: 0,
                    animationDelay: "0.35s",
                    animationFillMode: "forwards",
                  }}
                >
                  AccuraCore is a contractor management software that brings
                  everything you need into one dashboard, manage your crew,
                  track jobs, handle estimates and invoices, and stay in control
                  of every project.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/calculator"
                  className="w-full sm:w-auto md:w-auto lg:w-auto "
                >
                  <Button
                    className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center justify-center"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#0061A4",
                      padding: "25px 18px",
                    }}
                  >
                    Check My Tech-Mess Cost
                    <img
                      src="/Icons/Vector2.png"
                      alt="Arrow Icon"
                      className="w-2 h-3 ml-2"
                    />
                  </Button>
                </Link>
                <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto text-white rounded-full text-sm flex items-center"
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

                <Button
                  className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#0061A4",
                    padding: "27px 15px",
                    border: "none",
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  Get Started
                  <img
                    src="/Icons/Vector2.png"
                    alt="Arrow Icon"
                    className="w-2 h-3 ml-2"
                  />
                </Button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-3xl mx-auto">
              <div
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 lg:p-4 shadow-2xl"
                style={{ border: "2px solid white" }}
              >
                <img
                  src="/Images/Hero-image2.png"
                  alt="Hero"
                  className="h-auto rounded-3xl"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          </div>
        </main>
        <style jsx>{`
          @keyframes wordUp {
            from {
              transform: translateY(110%);
            }

            to {
              transform: translateY(0);
            }
          }

          .animate-wordUp {
            animation: wordUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}</style>
      </div>

      {/* Other components */}

      <WhatMakesAccurascoreDifferent
        id="why-section"
        onBookDemo={() => setIsOpen(true)}
      />
      <EverythingYouNeedSection />
      <TheToolsSection />
      <LovedByPeople id="faq-section" />
      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

// V2 of Homepage
// "use client";
// import { useState } from "react";
// import EverythingYouNeedSection from "@/components/everything-you-need-section";
// import Footer from "@/components/Footer";
// import LovedByPeople from "@/components/loved-by-people.jsx";
// import TheToolsSection from "@/components/the-tools-section";
// import { Button } from "@/components/ui/button";
// import WhatMakesAccurascoreDifferent from "@/components/WhatMakesAccurascoreDifferent";
// import { Menu, X } from "lucide-react";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import ModeToggle from "@/components/mode-toggle";
// import Link from "next/link";

// import GetStartedModal from "@/components/GetStartedModal";
// import FlashSaleRibbon from "@/components/FlashSalesRibbon";

// const features = [
//   {
//     icon: "/Icons/crm.png",
//     title: "A CRM That Fits One Operating System. Zero App Switching",
//     text: "Run your entire business from a single dashboard. No more juggling 5 tools to get through one job. Everything lives here your crew, your jobs, your money, your customers.",
//   },
//   {
//     icon: "/Icons/dashboard.png",
//     title: "A CRM That Fits How You Actually Work",
//     text: "Fully customizable to match your workflow, your team, and your trade, not the other way around.",
//   },
//   {
//     icon: "/Icons/snap.png",
//     title: "Snap. Speak. Upload. Done.",
//     text: "Integrated camera with voice labeling instantly uploads job photos and notes to the right file. No paperwork later.",
//   },
//   {
//     icon: "/Icons/talk.png",
//     title: "Talk Directly to Your Customers with MyAccuraCore",
//     text: "Real time two way communication that keeps clients in the loop and your phone from blowing up.",
//   },
//   {
//     icon: "/Icons/insurance.png",
//     title: "Get More Insurance Claims Paid",
//     text: "Track every claim and auto generate damage reports that adjusters actually approve. More approvals equals more revenue.",
//   },
//   {
//     icon: "/Icons/move.png",
//     title: "We Move Your Data In, Free",
//     text: "Switching systems? We migrate everything from your current setup at zero cost. No friction, no fees, no stress.",
//   },
//   {
//     icon: "/Icons/support.png",
//     title: "Onboarding and Support That Has Your Back",
//     text: "Real humans, real fast. We make the switch EASY so you can get back to building.",
//   },
// ];

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [featuresOpen, setFeaturesOpen] = useState(false);

//   return (
//     <>
//       {/* Header + Hero Section */}
//       <div
//         className="bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/Images/Hero-bg.png')",
//           height: "150rem",
//         }}
//       >
//                  {/* <FlashSaleRibbon /> */}
//         {/* Header */}
//         <header className="px-6 py-4 relative">
//           <nav
//             className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border bg-white dark:bg-slate-900"
//             style={{ padding: "5px 30px" }}
//           >
//             {/* Logo */}
//             <div className="flex items-center space-x-2">
//               <Link href="/">
//                 <img
//                   src="/Logos/Accuracore/AC2025.png"
//                   alt="AccuraCore Logo"
//                   className="w-20 h-20 object-contain cursor-pointer"
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8 relative">
//               {/* About */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => {
//                   setAboutOpen(true);
//                   setFeaturesOpen(false);
//                 }}
//                 onMouseLeave={() => {
//                   setAboutOpen(false);
//                 }}
//               >
//                 <button className="text-black dark:text-white text-sm flex items-center gap-1">
//                   About
//                   {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//                 </button>

//                 {aboutOpen && (
//                   <div className="text-center absolute left-1/2 -translate-x-1/2 top-full pt-12 w-44 z-50">
//                     <div className="bg-white dark:bg-slate-900 rounded-[15px] border border-white/10 overflow-hidden">
//                       <Link href="/blog">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 border-b border-white/20">
//                           Blog
//                         </span>
//                       </Link>

//                       <Link href="/#faq-section">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500">
//                           FAQs
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Features */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => {
//                   setFeaturesOpen(true);
//                   setAboutOpen(false);
//                 }}
//                 onMouseLeave={() => {
//                   setFeaturesOpen(false);
//                 }}
//               >
//                 <button className="text-black dark:text-white  text-sm flex items-center gap-1">
//                   Features
//                   {featuresOpen ? (
//                     <MdKeyboardArrowUp />
//                   ) : (
//                     <MdKeyboardArrowDown />
//                   )}
//                 </button>

//                 {featuresOpen && (
//                   <div className="text-center absolute left-1/2 -translate-x-1/2 top-full pt-12 w-56 z-50">
//                     <div className="bg-white dark:bg-slate-900 rounded-[15px] border border-white/10 overflow-hidden">
//                       <Link href="/accuracam">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
//                           AccuraCam
//                         </span>
//                       </Link>

//                       <Link href="/accuracore-claims">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
//                           AccuraCore Claims
//                         </span>
//                       </Link>

//                       <Link href="/my-accuracore">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
//                           My AccuraCore
//                         </span>
//                       </Link>

//                       <Link href="/roof-calculations">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
//                           Roof Calculations
//                         </span>
//                       </Link>

//                       <Link href="/weather-reports">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text border-b border-white/20">
//                           Weather Reports
//                         </span>
//                       </Link>

//                       <Link href="/workflow-automation">
//                         <span className="block text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text">
//                           Workflow Automation
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Remaining links */}
//               <Link href="/our-story">
//                 <span className="text-black dark:text-white  text-sm">
//                   Our Story
//                 </span>
//               </Link>
//               <Link href="/pricing-page">
//                 <span className="text-black dark:text-white  text-sm">
//                   Pricing
//                 </span>
//               </Link>

//               {/* <Link href="/#faq-section">
//                         <span className="text-black dark:text-white  text-sm">FAQs</span>
//                       </Link> */}

//               <Link href="/book-a-demo">
//                 <span className="text-black dark:text-white  text-sm">
//                   Contact Us
//                 </span>
//               </Link>
//             </div>

//             {/* Desktop Action Buttons */}
//             <div className="hidden md:flex items-center space-x-3">
//               <div className="  p-2 rounded-full   bg-slate-900 dark:bg-white   text-white dark:text-slate-900 flex items-center justify-center">
//                 <ModeToggle />
//               </div>

//               <Button
//                 className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center"
//                 style={{ color: "#0061A4", padding: "25px 15px" }}
//               >
//                 <img
//                   src="/Icons/Vector.svg"
//                   alt="Login Icon"
//                   className="w-4 h-4 mr-2"
//                 />
//                 Login
//               </Button>

//               <Button
//                 className="text-white rounded-full text-sm flex items-center"
//                 style={{
//                   backgroundColor: "#0061A4",
//                   padding: "25px 15px",
//                 }}
//                 onClick={() => (window.location.href = "/book-a-demo")}
//               >
//                 Book Demo
//                 <img
//                   src="/Icons/Vector.png"
//                   alt="Arrow Icon"
//                   className="w-2 h-3 ml-2"
//                 />
//               </Button>
//             </div>

//             {/* Mobile Hamburger */}
//             <div className="md:hidden flex items-center gap-3">
//               {/* Dark Mode Toggle */}
//               <div className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-slate-900 flex items-center justify-center">
//                 <ModeToggle />
//               </div>

//               {/* Hamburger */}
//               <button onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? (
//                   <X className="text-black dark:text-white w-8 h-8" />
//                 ) : (
//                   <Menu className="text-black dark:text-white w-8 h-8" />
//                 )}
//               </button>
//             </div>
//           </nav>

//           {/* Mobile Menu */}
//           {menuOpen && (
//             <div className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-black px-6 py-4 rounded-[15px] mt-2 w-[95%] m-auto z-50 space-y-4 text-center">
//               {/* About */}
//               <div className="flex flex-col items-center">
//                 <button
//                   onClick={() => setAboutOpen(!aboutOpen)}
//                   className="flex items-center gap-1 text-black dark:text-white"
//                 >
//                   About
//                   {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//                 </button>

//                 {aboutOpen && (
//                   <div className="mt-2 w-full bg-white dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
//                     <Link href="/blog">
//                       <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 rounded-t-[15px] hover:bg-gray-500 hover:text">
//                         Blog
//                       </p>
//                     </Link>
//                     <Link href="/#faq-section">
//                       <p className="text-black dark:text-white text-sm p-3 rounded-b-[15px] hover:bg-gray-500 hover:text">
//                         FAQs
//                       </p>
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Features */}
//               <div className="flex flex-col items-center">
//                 <button
//                   onClick={() => setFeaturesOpen(!featuresOpen)}
//                   className="flex items-center gap-1 text-black dark:text-white"
//                 >
//                   Features
//                   {featuresOpen ? (
//                     <MdKeyboardArrowUp />
//                   ) : (
//                     <MdKeyboardArrowDown />
//                   )}
//                 </button>

//                 {featuresOpen && (
//                   <div className="mt-2 w-full bg-white dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
//                     <Link href="/accuracam">
//                       <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
//                         AccuraCam
//                       </p>
//                     </Link>

//                     <Link href="/accuracore-claims">
//                       <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
//                         AccuraCore Claims
//                       </p>
//                     </Link>

//                     <Link href="/my-accuracore">
//                       <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
//                         My AccuraCore
//                       </p>
//                     </Link>

//                     <Link href="/roof-calculations">
//                       <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
//                         Roof Calculations
//                       </p>
//                     </Link>

//                     <Link href="/weather-reports">
//                       <p className="text-black dark:text-white text-sm p-3 border-b border-white/20 hover:bg-gray-500 hover:text">
//                         Weather Reports
//                       </p>
//                     </Link>

//                     <Link href="/workflow-automation">
//                       <p className="text-black dark:text-white text-sm p-3 hover:bg-gray-500 hover:text">
//                         Workflow Automation
//                       </p>
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Other Links */}
//               <Link href="/our-story">
//                 <p className="text-black dark:text-white text-sm mb-4">
//                   Our Story
//                 </p>
//               </Link>
//               <Link href="/pricing-page">
//                 <p className="text-black dark:text-white text-sm mb-4">
//                   Pricing
//                 </p>
//               </Link>
//               {/* <Link href="/#faq-section">
//                 <p className="text-black dark:text-white text-sm mb-4">FAQs</p>
//               </Link> */}
//               <Link href="/book-a-demo">
//                 <p className="text-black dark:text-white text-sm mb-4">
//                   Contact Us
//                 </p>
//               </Link>
//             </div>
//           )}
//         </header>

//         {/* Hero Section */}
//         <main className="px-6 py-16">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-8 lg:mb-12">
//               <div className="overflow-hidden">
//                 <h1 className="text-3xl md:text-4xl text-white mb-6 leading-tight flex flex-wrap justify-center">
//                   {"Simplify Your Contracting Business with Precision"
//                     .split(" ")
//                     .map((word, i) => (
//                       <span
//                         key={i}
//                         className="inline-block overflow-hidden align-bottom pr-[0.18em]"
//                       >
//                         <span
//                           className="inline-block animate-wordUp"
//                           style={{
//                             transform: "translateY(110%)",
//                             animationDelay: `${0.15 + i * 0.06}s`,
//                             animationFillMode: "forwards",
//                           }}
//                         >
//                           {word}
//                         </span>
//                       </span>
//                     ))}
//                 </h1>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//                 <Link
//                   href="/calculator"
//                   className="w-full sm:w-auto md:w-auto lg:w-auto "
//                 >
//                   <Button
//                     className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center justify-center"
//                     style={{
//                       backgroundColor: "#ffffff",
//                       color: "#0061A4",
//                       padding: "25px 18px",
//                     }}
//                   >
//                     Check My Tech-Mess Cost
//                     <img
//                       src="/Icons/Vector2.png"
//                       alt="Arrow Icon"
//                       className="w-2 h-3 ml-2"
//                     />
//                   </Button>
//                 </Link>
//                 <Button
//                   className="w-full sm:w-auto md:w-auto lg:w-auto text-white rounded-full text-sm flex items-center"
//                   style={{
//                     backgroundColor: "#0061A4",
//                     border: "2px solid #4485b2",
//                     padding: "25px 15px",
//                   }}
//                   onClick={() => (window.location.href = "/book-a-demo")}
//                 >
//                   Book Demo
//                   <img
//                     src="/Icons/Vector.png"
//                     alt="Arrow Icon"
//                     className="w-2 h-3 ml-2"
//                   />
//                 </Button>

//                 <Button
//                   className="w-full sm:w-auto md:w-auto lg:w-auto rounded-full text-sm flex items-center"
//                   style={{
//                     backgroundColor: "#ffffff",
//                     color: "#0061A4",
//                     padding: "27px 15px",
//                     border: "none",
//                   }}
//                   onClick={() => setIsOpen(true)}
//                 >
//                   Get Started
//                   <img
//                     src="/Icons/Vector2.png"
//                     alt="Arrow Icon"
//                     className="w-2 h-3 ml-2"
//                   />
//                 </Button>
//               </div>
//               <p
//                 className="text-md text-[#FA8C3D] font-[400] uppercase mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeUp"
//                 style={{
//                   opacity: 0,
//                   animationDelay: "0.35s",
//                   animationFillMode: "forwards",
//                 }}
//               >
//                 Built by a Contractor for Contractors.
//               </p>

// <div className="max-w-6xl mx-auto p-[8px]">
//   {/* Mobile = 1 card per row | Desktop = 2 cards */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
//     {features.map((item, idx) => {
//       const isLast = idx === features.length - 1;

//       return (
//         <div
//           key={idx}
//           className={`${
//             isLast ? "md:col-span-2" : ""
//           } rounded-2xl p-[1px]`}
//           style={{
//             background:
//               "linear-gradient(90.76deg, #FFFFFF 0.13%, #FA8C3D 22.33%, #0061A4 51.87%, #FFFFFF 99.9%)",
//           }}
//         >
//           <div className="bg-[#2c3659] rounded-2xl h-full flex gap-3 md:gap-4 p-3 md:p-4 overflow-hidden">

//             {/* Icon */}
//             <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-[5px] flex items-center justify-center">
//               <img
//                 src={item.icon}
//                 alt="icon"
//                 className="w-5 h-5 md:w-6 md:h-6 object-contain"
//               />
//             </div>

//             {/* Text */}
//             <div className="flex flex-col text-left">
//               <h3 className="text-white text-xs md:text-sm font-semibold leading-snug">
//                 {item.title}
//               </h3>

//               <p className="text-[#9499a7] text-xs md:text-sm mt-1.5 md:mt-2 leading-relaxed">
//                 {item.text}
//               </p>
//             </div>

//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>
//             </div>

//             {/* Dashboard Preview */}
//             <div className="relative max-w-3xl mx-auto">
//               <div
//                 className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 lg:p-4 shadow-2xl"
//                 style={{ border: "2px solid white" }}
//               >
//                 <img
//                   src="/Images/Hero-image2.png"
//                   alt="Hero"
//                   className="h-auto rounded-3xl"
//                   style={{ maxHeight: "500px" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </main>
//         <style jsx>{`
//           @keyframes wordUp {
//             from {
//               transform: translateY(110%);
//             }

//             to {
//               transform: translateY(0);
//             }
//           }

//           .animate-wordUp {
//             animation: wordUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//           }

//           @keyframes fadeUp {
//             from {
//               opacity: 0;
//               transform: translateY(12px);
//             }

//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .animate-fadeUp {
//             animation: fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//           }
//         `}</style>
//       </div>

//       {/* Other components */}

//       <WhatMakesAccurascoreDifferent
//         id="why-section"
//         onBookDemo={() => setIsOpen(true)}
//       />
//       <EverythingYouNeedSection />
//       <TheToolsSection />
//       <LovedByPeople id="faq-section" />
//       <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
//       {/* Popup Modal */}
//       {isOpen && <GetStartedModal isOpen={isOpen} setIsOpen={setIsOpen} />}
//     </>
//   );
// }
