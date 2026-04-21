"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function GetStartedModal({ isOpen, setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState({});

  // live validation
  const validate = (name, value) => {
    let msg = "";

    if (name === "name" && value.length > 0 && value.length < 2) {
      msg = "Name must be at least 2 characters";
    }

    if (name === "company" && value.length > 0 && value.length < 2) {
      msg = "Company must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "email" && value.length > 0 && !emailRegex.test(value)) {
      msg = "Enter a valid email";
    }
    const phoneRegex = /^\+?[0-9]{8,15}$/;

    if (name === "phone" && value.length > 0 && !phoneRegex.test(value)) {
      msg = "Enter valid international phone";
    }

    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};

  if (form.name.trim().length < 2)
    newErrors.name = "Name must be at least 2 characters";

  if (!form.email)
    newErrors.email = "Email is required";

  if (!form.phone)
    newErrors.phone = "Phone is required";

  if (form.company.trim().length < 2)
    newErrors.company = "Company must be at least 2 characters";

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    setLoading(false);
    return;
  }

  setLoading(true);

  try {
    // DB
    const { error } = await supabase.from("leads").insert([
      {
        full_name: form.name,
        phone: form.phone,
        company_name: form.company,
        email: form.email,
      },
    ]);

    if (error) {
      alert("Error saving data");
      setLoading(false);
      return;
    }

    // Email
    const emailRes = await fetch("/api/send-lead-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const emailData = await emailRes.json();

    // WhatsApp
    const waRes = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const waData = await waRes.json();

    if (!emailData.success || !waData.success) {
      console.error("Email:", emailData);
      console.error("WhatsApp:", waData);
      alert("Lead saved but notification failed");
    }

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
    });

    setErrors({});
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }

  setLoading(false);
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 w-[90%] max-w-[600px] relative">
        {/* Close */}
        <button
          onClick={() => {
            setIsOpen(false);
            setSuccess(false);
          }}
          className="absolute top-4 right-4"
        >
          ✕
        </button>

        {/* SUCCESS SCREEN */}
        {success ? (
          <div className="text-center p-6">
            <h2 className="text-xl font-bold">Thank you</h2>
            <p className="mt-2">We will contact you within 30 minutes.</p>

            <button
              className="bg-blue-600 text-white p-3 rounded-full mt-6"
              onClick={() => {
                setIsOpen(false);
                setSuccess(false);
                setForm({ name: "", email: "", phone: "", company: "" });
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-center font-semibold text-md md:text-lg lg:text-lg">
              Get Started with AccuraCore
            </h2>

            <p className="text-gray-500 text-sm mb-6 text-center dark:text-gray-400">
              Share your details and a representative will reach out as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <div>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* COMPANY */}
              <div>
                <input
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                disabled={loading}
                className="w-full bg-blue-600 text-white p-3 rounded-full"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
