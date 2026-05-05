"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { DesktopUpdatedHeader } from "@/components/DesktopUpdatedHeader";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ModeToggle from "@/components/mode-toggle";

export default function FinalHeroSection({
  logo,
  title,
  description,
  videoSrc = "/Videos/accuracore-explainer.mp4",
  thumbnail = "/Videos/video-thumbnail.png",
  onPrimaryClick,
  onSecondaryClick,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const videoRefElement = useRef(null);

  return (
  <section
       className="relative bg-cover bg-center bg-no-repeat overflow-visible  sm:h-[45rem]"
       style={{ backgroundImage: "url('/Images/Hero-bg.png')" }}
     >
       {/* ================= HEADER ================= */}
       <DesktopUpdatedHeader />

       <header className="block md:hidden px-6 py-4 relative z-50">
         <nav
           className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border border-white/20 bg-[#51607d] dark:bg-slate-900"
           style={{ padding: "5px 30px" }}
         >
           {/* Logo */}
           <div className="flex items-center space-x-2">
             <Link href="/">
               <img
                 src="/Logos/Accuracore/accuraCore-logo.png"
                 alt="AccuraCore Logo"
                 className="w-20 h-20 object-contain cursor-pointer"
               />
             </Link>
           </div>
 
           {/* Mobile Hamburger */}
           <div className="md:hidden flex items-center gap-3">
             {/* Dark Mode Toggle */}
             <div
               className="
   p-2 rounded-full 
   bg-slate-900 dark:bg-white 
   text-white dark:text-slate-900
   flex items-center justify-center
 "
             >
               <ModeToggle />
             </div>
 
             {/* Hamburger */}
             <button onClick={() => setMenuOpen(!menuOpen)}>
               {menuOpen ? (
                 <X className="text-white w-8 h-8" />
               ) : (
                 <Menu className="text-white w-8 h-8" />
               )}
             </button>
           </div>
         </nav>
 
         {/* Mobile Menu */}
         {menuOpen && (
           <div className="md:hidden absolute left-0 right-0 top-full bg-[#51607d] px-6 py-4 rounded-[15px] mt-2 w-[95%] m-auto z-50 space-y-4 text-center">
             {/* About */}
             <div className="flex flex-col items-center">
               <button
                 onClick={() => setAboutOpen(!aboutOpen)}
                 className="flex items-center gap-1 text-white"
               >
                 About
                 {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
               </button>
 
               {aboutOpen && (
                 <div className="mt-2 w-full bg-[#51607d] dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                   <Link href="/blog">
                     <p className="text-white text-sm p-3 border-white/20 rounded-t-[15px] hover:bg-white hover:text-black">
                       Blog
                     </p>
                   </Link>
                   <Link href="/#faq-section">
                     <p className="text-white text-sm p-3 border-white/20 rounded-b-[15px] hover:bg-white hover:text-black">
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
                 className="flex items-center gap-1 text-white"
               >
                 Features
                 {featuresOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
               </button>
 
               {featuresOpen && (
                 <div className="mt-2 w-full bg-[#51607d] dark:bg-slate-900 rounded-[10px] overflow-hidden border border-white/10">
                   <Link href="/accuracam">
                     <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                       AccuraCam
                     </p>
                   </Link>
 
                   <Link href="/accuracore-claims">
                     <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                       AccuraCore Claims
                     </p>
                   </Link>
 
                   <Link href="/my-accuracore">
                     <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                       My AccuraCore
                     </p>
                   </Link>
 
                   <Link href="/roof-calculations">
                     <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                       Roof Calculations
                     </p>
                   </Link>
 
                   <Link href="/weather-reports">
                     <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                       Weather Reports
                     </p>
                   </Link>
 
                   <Link href="/workflow-automation">
                     <p className="text-white text-sm p-3 hover:bg-white hover:text-black">
                       Workflow Automation
                     </p>
                   </Link>
                 </div>
               )}
             </div>
 
             {/* Other Links */}
             <Link href="/pricing-page">
               <p className="text-white text-sm mb-4">Pricing</p>
             </Link>
             {/* <Link href="/#faq-section">
               <p className="text-white text-sm mb-4">FAQs</p>
             </Link> */}
             <Link href="/book-a-demo">
                 <p className="text-white text-sm mb-4">Contact Us</p>
               </Link>
           </div>
         )}
       </header>
 
       {/* ================= HERO CONTENT ================= */}
       <div className="max-w-7xl mx-auto px-6 text-center pt-16">
<div className="text-center mb-6">
                {logo ? (
            <img src={logo} className="h-24 object-contain m-auto" />
          ) : (
            <h1 className="text-3xl md:text-4xl text-white">{title}</h1>
          )}
                <p className="text-md text-blue-100 mt-6 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    className="rounded-full text-sm flex items-center"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#0061A4",
                      padding: "27px 15px",
                      border: "none",
                    }}
                    onClick={onPrimaryClick}
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
                    onClick={onSecondaryClick}
                  >
                    Book Demo
                    <img
                      src="/Icons/Vector.png"
                      alt="Arrow Icon"
                      className="w-2 h-3 ml-2"
                    />
                  </Button>
                </div>
              </div>
       </div>
 
       {/* ================= VIDEO ================= */}
       <div className="absolute left-1/2 bottom-0 w-[90%] max-w-6xl -translate-x-1/2 translate-y-1/2 rounded-[24px]">
         <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                  {!isPlaying && (
                    <img
                      src={thumbnail}
                      alt="Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                  )}

                  <video
                    ref={(videoRef) => (videoRefElement.current = videoRef)}
                    className="w-full max-h-[500px] rounded-[30px] object-cover"
                    controls={isPlaying}
                  >
                    <source
                      src={videoSrc}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {!isPlaying && (
                    <button
                      onClick={() => {
                        videoRefElement.current.play();
                        setIsPlaying(true);
                      }}
                      className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 cursor-pointer transition duration-300 hover:bg-black/40"
                    >
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-6.518-3.758A1 1 0 007 8.304v7.392a1 1 0 001.234.97l6.518-1.9a1 1 0 00.748-.97v-1.864a1 1 0 00-.748-.97z"
                          />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
       </div>
 
       {/* SPACING FOR OVERFLOW VIDEO */}
       <div className="h-[150px] md:h-[250px]"></div>
     </section>
  );
}