import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const BookDemoFormV2 = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    role: "",
    email: "",
    phone: "",
  });

  // New state for status message
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });

  const totalFields = 5;

  const getValidFieldCount = () => {
    let count = 0;

    if (formData.fullName.trim().length >= 2 && !errors.fullName) count++;

    if (formData.companyName.trim().length >= 2 && !errors.companyName) count++;

    if (formData.role.trim().length > 0) count++;

    if (
      formData.email.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      count++;

    if (
      formData.phone.trim().length > 0 &&
      /^\(\d{3}\)-\d{3}-\d{4}$/.test(formData.phone)
    )
      count++;

    return count;
  };

  const progress = (getValidFieldCount() / totalFields) * 100;

  const validate = (name, value) => {
    let msg = "";

    if (name === "fullName" && value.length > 0 && value.length < 2) {
      msg = "Name must be at least 2 characters";
    }

    if (name === "companyName" && value.length > 0 && value.length < 2) {
      msg = "Company must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "email" && value.length > 0 && !emailRegex.test(value)) {
      msg = "Enter a valid email with @ and .com";
    }

    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;

    if (name === "phone" && value.length > 0 && !phoneRegex.test(value)) {
      msg = "Phone number must be in the format (123)-456-7890";
    }

    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "phone") {
      // Keep only digits
      const digits = value.replace(/\D/g, "").slice(0, 10);

      if (digits.length <= 3) {
        newValue = digits.length ? `(${digits}` : "";
      } else if (digits.length <= 6) {
        newValue = `(${digits.slice(0, 3)})-${digits.slice(3)}`;
      } else {
        newValue = `(${digits.slice(0, 3)})-${digits.slice(
          3,
          6,
        )}-${digits.slice(6)}`;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, newValue),
    }));
  };

  const validateForm = () => {
    return (
      formData.fullName.trim().length >= 2 &&
      formData.companyName.trim().length >= 2 &&
      formData.role.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^\(\d{3}\)-\d{3}-\d{4}$/.test(formData.phone)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatusMessage({
        text: "Please fill all the required fields",
        type: "error",
      });

      // auto hide
      setTimeout(() => setStatusMessage({ text: "", type: "" }), 3000);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mdapvjqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        sessionStorage.setItem("submitted", "1");
        router.push("/thank-you");

        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          role: "",
          email: "",
          phone: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
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
            {/* PROGRESS BAR */}
            <div className="w-full mb-6">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#136AF3] transition-all duration-500 ease-in-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-end text-xs text-gray-500 mt-2">
                <span>{Math.round(progress)}% completed</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-[15px] border-[#f4f4f4] rounded-[20px] p-4 lg:p-5 md:p-8">
                <h3 className="text-lg font-medium text-gray-800">
                  Contact Info
                </h3>
                <div className="w-full h-[1px] bg-gray-200 mt-2 mb-6"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-black mb-1">
                      First Name / Last Name *
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="First Name / Last Name"
                      className="inputClass"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-black mb-1">
                      Company Name *
                    </label>
                    <input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Company Name"
                      className="inputClass"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-black mb-1">
                      Company Title/Role *
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
                      Email Address *
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
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-black mb-1">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      required
                      maxLength={14}
                      placeholder="(123)-456-7890"
                      className="inputClass"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <Button
                    type="submit"
                    className="text-white rounded-full text-sm flex items-center"
                    style={{
                      backgroundColor: "#0061A4",
                      padding: "25px 15px",
                    }}
                  >
                    Submit
                    <img
                      src="/Icons/right-arrow-white.svg"
                      alt="Arrow Icon"
                      className="w-2 h-3 ml-2"
                    />
                  </Button>
                </div>
              </div>

              <input type="hidden" name="fullName" value={formData.fullName} />
              <input
                type="hidden"
                name="companyName"
                value={formData.companyName}
              />
              <input type="hidden" name="role" value={formData.role} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="phone" value={formData.phone} />
              {/* <input type="hidden" name="timezone" value={formData.timezone} /> */}
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
