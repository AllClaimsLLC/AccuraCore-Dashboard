import React, {useState} from 'react'
import { Menu, X } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";
import ModeToggle from './mode-toggle';
import { Button } from './ui/button';

export const DesktopUpdatedHeader = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const [isPlaying, setIsPlaying] = useState(false);
      const [aboutOpen, setAboutOpen] = useState(false);
      const [featuresOpen, setFeaturesOpen] = useState(false);
  return (
<header className="px-6 py-4 relative">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
              {/* About */}
              <div className="relative">
                <button
                  onClick={() => {
                    setAboutOpen(!aboutOpen);
                    setFeaturesOpen(false);
                  }}
                  className="text-white hover:text-blue-200 text-sm flex items-center gap-1"
                >
                  About
                  {aboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>

                {aboutOpen && (
                  <div className="text-center absolute left-1/2 -translate-x-1/2 mt-[45px] w-44 bg-[#51607d] dark:bg-slate-900 rounded-[15px] z-50 border border-white/10">
                    <Link href="#">
                      <span className="block text-white text-sm p-3 rounded-t-md hover:bg-white hover:text-black border-b border-white/20">
                        Page 1
                      </span>
                    </Link>

                    <Link href="#">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        Page 2
                      </span>
                    </Link>

                    <Link href="#">
                      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
                        Page 3
                      </span>
                    </Link>

                    <Link href="#">
                      <span className="block text-white text-sm p-3 rounded-b-md hover:bg-white hover:text-black">
                        Page 4
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="relative">
                <button
                  onClick={() => {
                    setFeaturesOpen(!featuresOpen);
                    setAboutOpen(false);
                  }}
                  className="text-white hover:text-blue-200 text-sm flex items-center gap-1"
                >
                  Features
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>

                {featuresOpen && (
  <div className="text-center absolute left-1/2 -translate-x-1/2 mt-[45px] w-56 bg-[#51607d] dark:bg-slate-900 rounded-[15px] z-50 border border-white/10 overflow-hidden">

    <Link href="/accuracam">
      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
        AccuraCam
      </span>
    </Link>

    <Link href="/accuracore-claims">
      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
        AccuraCore Claims
      </span>
    </Link>

    <Link href="/my-accuracore">
      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
        My AccuraCore
      </span>
    </Link>

    <Link href="/roof-calculations">
      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
        Roof Calculations
      </span>
    </Link>

    <Link href="/weather-reports">
      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black border-b border-white/20">
        Weather Reports
      </span>
    </Link>

    <Link href="/workflow-automation">
      <span className="block text-white text-sm p-3 hover:bg-white hover:text-black">
        Workflow Automation
      </span>
    </Link>

  </div>
)}
              </div>

              {/* Remaining links */}
              <Link href="/pricing-page">
                <span className="text-white hover:text-blue-200 text-sm">
                  Pricing
                </span>
              </Link>

              <Link href="/#faq-section">
                <span className="text-white hover:text-blue-200 text-sm">
                  FAQs
                </span>
              </Link>

              <Link href="/book-a-demo">
                <span className="text-white hover:text-blue-200 text-sm">
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
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
                  className="w-3 h-4 ml-2"
                />
              </Button>
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
                    <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                      Page 1
                    </p>
                    <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                      Page 2
                    </p>
                    <p className="text-white text-sm p-3 border-b border-white/20 hover:bg-white hover:text-black">
                      Page 3
                    </p>
                    <p className="text-white text-sm p-3 hover:bg-white hover:text-black">
                      Page 4
                    </p>
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
                  {featuresOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
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
              <Link href="/#faq-section">
              <p className="text-white text-sm">FAQs</p>
              </Link>
              <p className="text-white text-sm">Contact Us</p>
            </div>
          )}
        </header>
  )
}
