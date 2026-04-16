import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CustomDropdown from "@/components/CustomDropdown";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "./ui/button";
import Link from "next/link";

export const BookDemoForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [toolsValue, setToolsValue] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    role: "",
    email: "",
    phone: "",
    timezone: "",
    contractorType: "",
    companySize: "",
    revenue: "",
    tools: [],
    challenges: [],
    improvements: [],
  });

  // New state for status message
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mdapvjqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/thank-you");

        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          role: "",
          email: "",
          phone: "",
          timezone: "",
          contractorType: "",
          companySize: "",
          revenue: "",
          tools: [],
          challenges: [],
          improvements: [],
        });
        setCurrentStep(1);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setStatusMessage({
        text: "Error submitting form. Please try again.",
        type: "error",
      });
    }

    // Hide message after 5 seconds
    setTimeout(() => setStatusMessage({ text: "", type: "" }), 5000);
  };

  return (
    <main className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Book A Demo Form */}
        <div className="relative flex justify-center">
          <div className="bg-white w-full md:w-[80%] rounded-[20px] p-4 md:p-10 shadow-lg">
            {/* Heading */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-[500] text-gray-900">
                Demo Form
              </h2>

              <button onClick={() => router.push("/")} className="text-black">
                <RxCross2 size={22} />
              </button>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-gray-200 mt-3 mb-6"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inner Container 1 */}
              {currentStep === 1 && (
                <div className="border-[15px] border-[#f4f4f4] rounded-[20px] p-4 lg:p-5 md:p-8">
                  <h3 className="text-lg font-medium text-gray-800">
                    Contact Info
                  </h3>
                  <div className="w-full h-[1px] bg-gray-200 mt-2 mb-6"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-black mb-1">
                        First Name / Last Name
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
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
                        value={formData.companyName}
                        onChange={handleChange}
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
                        value={formData.role}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        value={formData.timezone}
                        onChange={handleChange}
                        required
                        placeholder="Timezone"
                        className="inputClass"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-1 text-white px-6 py-2 rounded-[5px]"
                      style={{ backgroundColor: "#136AF3" }}
                    >
                      Next <MdKeyboardArrowRight size={25} />
                    </button>
                  </div>
                </div>
              )}
              {/* Inner Container 2 */}
              {currentStep === 2 && (
                <div className="border-[15px] border-[#f4f4f4] rounded-[20px] p-4 lg:p-5 md:p-8">
                  <h3 className="text-lg font-medium text-gray-800">
                    Business Profile
                  </h3>
                  <div className="w-full h-[1px] bg-gray-200 mt-2 mb-6"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="relative">
                        <CustomDropdown
                          label="What type of contractor are you?"
                          name="contractorType"
                          required
                          multiSelect={false}
                          options={[
                            "Roofing",
                            "Siding",
                            "Gutters",
                            "Exteriors",
                            "Construction",
                            "Commercial",
                            "Restoration",
                            "Solar",
                            "General Contractor",
                            "Remodeling",
                            "Other ",
                          ]}
                          value={formData.contractorType}
                          onChange={(val) =>
                            setFormData({ ...formData, contractorType: val })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <CustomDropdown
                          label="Company Size"
                          name="companySize"
                          required={false}
                          multiSelect={false}
                          options={[
                            "Just me",
                            "2–5 employees",
                            "6–20 employees",
                            "21–50 employees",
                            "50+ employees",
                          ]}
                          value={formData.companySize}
                          onChange={(val) =>
                            setFormData({ ...formData, companySize: val })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <CustomDropdown
                          label="Annual Revenue (optional)"
                          name="revenue"
                          required={false}
                          multiSelect={false}
                          options={["<$500K", "$500K–$2M", "$2M–$10M", "$10M+"]}
                          value={formData.revenue}
                          onChange={(val) =>
                            setFormData({ ...formData, revenue: val })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3 mt-4 sm:flex-row sm:justify-between sm:items-center">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 rounded-[5px] border border-gray-400 bg-white text-black"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-1 text-white px-6 py-2 rounded-[5px]"
                      style={{ backgroundColor: "#136AF3" }}
                    >
                      Next <MdKeyboardArrowRight size={25} />
                    </button>
                  </div>
                </div>
              )}
              {/* Inner Container 3 */}
              {currentStep === 3 && (
                <div className="border-[15px] border-[#f4f4f4] rounded-[20px] p-4 lg:p-5 md:p-8">
                  <h3 className="text-lg font-medium text-gray-800">
                    Current Workflow
                  </h3>
                  <div className="w-full h-[1px] bg-gray-200 mt-2 mb-6"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <CustomDropdown
                          label="What tools are you currently using? (select all that apply)"
                          name="tools"
                          required
                          multiSelect
                          options={[
                            "Spreadsheets",
                            "CRM (which one?)",
                            "Estimating software",
                            "Project management tools",
                            "CompanyCam",
                            "Hover",
                            "Eagleview",
                            "Other ",
                            "None",
                          ]}
                          value={formData.tools} 
                          onChange={(selected) =>
                            setFormData({ ...formData, tools: selected })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <div className="relative">
                          <CustomDropdown
                            label="Select Challenges"
                            name="challenges"
                            required={false}
                            multiSelect={true}
                            options={[
                              "Using too many apps/software that don’t work well together",
                              "Outgrowing your current system or tools",
                              "Paying for software that doesn’t deliver what you need",
                              "Losing time switching between systems or duplicate data entry",
                              "Difficulty scaling operations with your current setup",
                              "Limited visibility into jobs, leads, or performance",
                              "Other ",
                            ]}
                            value={formData.challenges}
                            onChange={(selected) =>
                              setFormData({ ...formData, challenges: selected })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="relative">
                        <CustomDropdown
                          label="What are you most interested in improving? (select top 3)"
                          name="improvements"
                          required={false}
                          multiSelect={true}
                          options={[
                            "Saving time & reducing day-to-day busywork",
                            "Improving overall efficiency & team management",
                            "Reducing wasted time from manual processes or duplicate entry",
                            "Lead management & pipeline visibility",
                            "Job scheduling & calendar coordination",
                            "Estimates & proposals",
                            "Document & photo organization",
                            "Automation & workflows",
                            "Customer communication (email/SMS)",
                            "Payments, financing & cash flow",
                            "Reporting & business insights",
                          ]}
                          value={formData.improvements}
                          onChange={(selected) =>
                            setFormData({ ...formData, improvements: selected })
                          }
                        />
                      </div>
                    </div>
                  </div>

                 <div className="flex flex-col items-center gap-3 mt-4 sm:flex-row sm:justify-between sm:items-center">
  <button
    type="button"
    onClick={prevStep}
    className="px-6 py-2 rounded-[5px] border border-gray-400 bg-white text-black w-full sm:w-auto"
  >
    Back
  </button>

<Link href="/calculator">
  <Button
    className="flex items-center justify-center gap-1 text-white px-6 py-2 border border-blue-600 rounded-[5px] w-full sm:w-auto"
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

  <button
    type="submit"
    className="flex items-center justify-center gap-1 text-white px-6 py-2 rounded-[5px] w-full sm:w-auto"
    style={{ backgroundColor: "#136AF3" }}
  >
    Submit <MdKeyboardArrowRight size={25} />
  </button>
</div>
                </div>
              )}

              <input type="hidden" name="fullName" value={formData.fullName} />
              <input
                type="hidden"
                name="companyName"
                value={formData.companyName}
              />
              <input type="hidden" name="role" value={formData.role} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="phone" value={formData.phone} />
              <input type="hidden" name="timezone" value={formData.timezone} />
              <input
                type="hidden"
                name="contractorType"
                value={formData.contractorType}
              />
              <input
                type="hidden"
                name="companySize"
                value={formData.companySize}
              />
              <input type="hidden" name="revenue" value={formData.revenue} />

              {/* Arrays */}
              {formData.tools.map((item, i) => (
                <input key={i} type="hidden" name="tools" value={item} />
              ))}
              {formData.challenges.map((item, i) => (
                <input key={i} type="hidden" name="challenges" value={item} />
              ))}
              {formData.improvements.map((item, i) => (
                <input key={i} type="hidden" name="improvements" value={item} />
              ))}
            </form>
            {statusMessage.text && (
              <div
                className={`mt-4 mb-4 p-3 rounded ${
                  statusMessage.type === "success"
                    ? "bg-green-100 text-green-800 text-center"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {statusMessage.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
