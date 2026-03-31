"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

export default function BookADemo() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toolsValue, setToolsValue] = useState("");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/Hero-bg.png')",
          height: "30rem",
        }}
      >
        {/* Header */}
        <header className="px-6 py-4">
          <nav
            className="flex items-center justify-between max-w-6xl mx-auto rounded-full px-8 py-4 border border-white/20 bg-[#51607d] dark:bg-slate-900"
            style={{ padding: "5px 30px" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/Logos/Accuracore/accuraCore-logo.png"
                alt="AccuraCore Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Why", id: "why-section" },
                { label: "How It Works", id: "how-section" },
                { label: "FAQs", id: "faq-section" },
                { label: "Contact Us", id: "contact-section" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-white hover:text-blue-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
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
                onClick={() => setIsOpen(true)}
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
            <div className="md:hidden bg-[#51607d] px-6 py-4 space-y-4 rounded-lg mt-2">
              <div className="flex flex-col space-y-4 text-white text-sm text-center">
                <span onClick={() => handleScroll("why-section")}>Why</span>
                <span onClick={() => handleScroll("how-section")}>
                  How It Works
                </span>
                <span onClick={() => handleScroll("faq-section")}>FAQs</span>
                <span onClick={() => handleScroll("contact-section")}>
                  Contact Us
                </span>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 mt-4">
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
                  onClick={() => setIsOpen(true)}
                >
                  Book Demo
                  <img
                    src="/Icons/Vector.png"
                    alt="Arrow Icon"
                    className="w-3 h-4 ml-2"
                  />
                </Button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Book A Demo Form */}
            <div className="relative flex justify-center">
              <div className="bg-white w-full md:w-[80%] rounded-[20px] p-6 md:p-10 shadow-lg">
                {/* Heading */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-[500] text-gray-900">
                    AccuraCore Demo Form
                  </h2>

                  <button
                    onClick={() => router.push("/")}
                    className="text-black"
                  >
                    <RxCross2 size={22} />
                  </button>
                </div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gray-200 mt-3 mb-6"></div>

                <form
                  action="https://formspree.io/f/xkobwzne"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Inner Container 1 */}
                  <div className="border-[15px] border-[#f4f4f4] rounded-[20px] p-5 md:p-8">
                    <h3 className="text-lg font-medium text-gray-800">
                      Job And Description
                    </h3>
                    <div className="w-full h-[1px] bg-gray-200 mt-2 mb-6"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-black mb-1">
                          First Name / Last Name
                        </label>
                        <input
                          name="fullName"
                          required
                          placeholder="First Name / Last Name"
                          className="inputClass"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          Company Name
                        </label>
                        <input
                          name="companyName"
                          required
                          placeholder="Company Name"
                          className="inputClass"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          Company Title/Role
                        </label>
                        <input
                          name="role"
                          required
                          placeholder="Company Title/Role"
                          className="inputClass"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <label className="block text-sm text-black mb-1">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Email Address"
                          className="inputClass"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="Phone Number"
                          className="inputClass"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          Timezone
                        </label>
                        <input
                          name="timezone"
                          required
                          placeholder="Timezone"
                          className="inputClass"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inner Container 2 */}
                  <div className="border-[15px] border-[#f4f4f4] rounded-[20px] p-5 md:p-8">
                    <h3 className="text-lg font-medium text-gray-800">
                      Business Profile
                    </h3>
                    <div className="w-full h-[1px] bg-gray-200 mt-2 mb-6"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-black mb-1">
                          What type of contractor are you?
                        </label>
                        <div className="relative">
                          <select
                            name="contractorType"
                            required
                           className="inputClass appearance-none pr-8 md:pr-10 text-sm md:text-base"
                          >
                            <option value="">Select Contractor Type</option>
                            <option value="General Contractor">
                              General Contractor
                            </option>
                            <option value="Sub Contractor">
                              Sub Contractor
                            </option>
                            <option value="Builder">Builder</option>
                          </select>

                          {/* Right Arrow */}
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <MdKeyboardArrowDown />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          Company Size
                        </label>
                        <div className="relative">
                          <select
                            name="companySize"
                            className="inputClass appearance-none pr-10"
                          >
                            <option value="">Select Company Size</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="200+">200+</option>
                          </select>

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <MdKeyboardArrowDown />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          Annual Revenue (optional)
                        </label>
                        <div className="relative">
                          <select
                            name="revenue"
                            className="inputClass appearance-none pr-10"
                          >
                            <option value="">Select Revenue</option>
                            <option value="0-100k">$0 - $100k</option>
                            <option value="100k-1M">$100k - $1M</option>
                            <option value="1M-10M">$1M - $10M</option>
                          </select>

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <MdKeyboardArrowDown />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inner Container 3 */}
                  <div className="border-[15px] border-[#f4f4f4] rounded-[20px] p-5 md:p-8">
                    <h3 className="text-lg font-medium text-gray-800">
                      Current Workflow
                    </h3>
                    <div className="w-full h-[1px] bg-gray-200 mt-2 mb-6"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-black mb-1">
                          What tools are you currently using? (select all that
                          apply)
                        </label>
                        <div className="relative">
                          <select
                            name="tools"
                            className="inputClass appearance-none pr-10"
                          >
                            <option value="">Select Tools</option>
                            <option value="Excel">Excel</option>
                            <option value="QuickBooks">QuickBooks</option>
                          </select>

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <MdKeyboardArrowDown />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          Biggest challenges right now
                        </label>
                        <div className="relative">
                          <select
                            name="challenges"
                            className={`inputClass appearance-none pr-10 text-sm ${
                              !toolsValue
                                ? "bg-gray-200 text-gray-300 cursor-not-allowed"
                                : "text-gray-700"
                            }`}
                          >
                            <option value="">Select Challenges</option>
                            <option value="a">a</option>
                            <option value="b">b</option>
                          </select>

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <MdKeyboardArrowDown />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm text-black mb-1">
                          Biggest challenges right now
                        </label>
                        <div className="relative">
                          <select
                            name="challenges2"
                            className="inputClass appearance-none pr-10"
                          >
                            <option value="">Select Challenges</option>
                            <option value="a">a</option>
                            <option value="b">b</option>
                          </select>

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <MdKeyboardArrowDown />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-black mb-1">
                          What are you most interested in improving? (select top
                          3)
                        </label>
                        <div className="relative">
                          <select
                            name="improvements"
                            className="inputClass appearance-none pr-10"
                          >
                            <option value="">Select improvements</option>
                            <option value="a">a</option>
                            <option value="b">b</option>
                          </select>

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <MdKeyboardArrowDown />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-start mt-4">
                    <button
                      type="submit"
                      className="flex items-center gap-1 text-white px-6 py-2 rounded-[5px]"
                      style={{ backgroundColor: "#136AF3" }}
                    >
                      Submit
                     <MdKeyboardArrowRight size={25} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section className="h-[100rem] md:h-[60rem] px-6 py-16 bg-[#f4f0ed] dark:bg-slate-950"></section>

      <Footer id="contact-section" onBookDemo={() => setIsOpen(true)} />
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-xl w-[90%] max-w-[600px] max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-md lg:text-md text-center text-gray-900 mb-2 dark:text-white">
              Registration Form
            </h3>
            <p className="text-gray-500 text-sm mb-6 text-center dark:text-gray-400">
              Please fill out this form with the required information
            </p>

            <form
              action="https://formspree.io/f/xkobwzne"
              method="POST"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Software of Interest */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Software of Interest
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCore"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700 dark:text-gray-300"
                      style={{ fontSize: "13px" }}
                    >
                      AccuraCore
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="ClaimCore"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700 dark:text-gray-300"
                      style={{ fontSize: "13px" }}
                    >
                      ClaimCore
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCam"
                      className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700 dark:text-gray-300"
                      style={{ fontSize: "13px" }}
                    >
                      AccuraCam
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-md"
                style={{
                  backgroundColor: "#0061A4",
                  padding: "10px 15px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
