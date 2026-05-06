"use client";

import { useRef, useState } from "react";
import { BookDemoForm } from "./BookDemoForm";
import useFadeIn from "@/lib/useFadeIn";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Jerry Clark",
    image: "/Images/testimonial.png",
    feedback:
      "AccuraCore transformed how we manage our daily operations. Everything is in one place, from tasks to invoices. It’s like having a full operations team inside one dashboard.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/Images/testimonial.png",
    feedback:
      "The workflow automation has saved us countless hours. What used to take our team days now happens automatically. AccuraCore is a game-changer for our business.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "/Images/testimonial.png",
    feedback:
      "Finally, a platform that understands our business needs. The financial intelligence features have given us insights we never had before. Highly recommended!",
    rating: 5,
  },
];

const faqs = [
  {
    id: 1,
    question: "Is AccuraCore Suitable For Small Contracting Companies Too?",
    answer:
      "Yes! AccuraCore contractor management software is suitable for small crews, as well as medium-sized contracting businesses.",
  },
  {
    id: 2,
    question: "Can I Assign Different Roles To My Crew Members?",
    answer:
      "Yes, roles are fully customizable and can be assigned to everyone on your crew.",
  },
  {
    id: 3,
    question: "Does AccuraCore Automatically Calculate Financials?",
    answer:
      "Yes, financial calculations are handled automatically, and displayed for easy review.",
  },
  {
    id: 4,
    question: "Is AccuraCore Cloud-Based?",
    answer:
      "Yes, AccuraCore is a SaaS platform that exists in the cloud, and requires internet access to use.",
  },
  {
    id: 5,
    question: "Can I Export My Data From The System?",
    answer: "The only data we support exporting is reports.",
  },
];

export default function LovedByPeople({ id }) {
  useFadeIn();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };
  return (
    <section
      className="
        py-8 relative overflow-hidden custom-padding
        bg-[linear-gradient(312deg,_#faefe9_-17%,_#ffffff_100%)]
        dark:bg-[linear-gradient(50deg,_#020617_0%,_#0f172a_100%)]
      "
    >
      <div>
        <div className="container mx-auto px-6 max-w-6xl mb-5">
          {/* Video Section */}
          <div className="fade-up text-left sm:text-center mb-20">
            {/* Heading */}
            <h3 className="text-2xl sm:text-4xl text-gray-900 dark:text-gray-100 mb-6">
              Experience The Future
              <br className="hidden sm:block" /> Of Intelligent Operations With
              <br className="hidden sm:block" /> AccuraCore
            </h3>

            {/* Video Wrapper */}
            <motion.div
  initial={{ scale: 0.7, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.4 }}
  className="relative w-full sm:w-[90%] max-w-6xl mx-auto rounded-[30px] overflow-hidden"
>
  {/* Thumbnail */}
  {!isPlaying && (
    <img
      src="/Videos/video-thumbnail.png"
      alt="Thumbnail"
      className="absolute inset-0 w-full h-full object-cover z-10"
    />
  )}

  {/* Video */}
  <video
    ref={videoRef}
    className="w-full max-h-[500px] rounded-[30px] object-cover"
    controls={isPlaying}
  >
    <source src="/Videos/accuracore-explainer.mp4" type="video/mp4" />
  </video>

  {/* Play Button */}
  {!isPlaying && (
    <button
      onClick={() => {
        videoRef.current.play();
        setIsPlaying(true);
      }}
      className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
    >
      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
        ▶
      </div>
    </button>
  )}
</motion.div>
          </div>

          {/* First Row - Hero Section */}
          <div className="text-center mb-16">
            <img
              src="/Images/Loved-by-people.png"
              alt="Loved by People"
              className="mx-auto rounded-3xl custom-width"
              style={{ width: "70%" }}
            />
          </div>

          {/* Second Row - Testimonials */}
          <div className="text-left sm:text-center">
            <h3 className="text-2xl  text-gray-900 dark:text-gray-100 mb-2">
              Trusted By Teams Who
            </h3>
            <p className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-12">
              Value Clarity, Control, And Results.
            </p>

            {/* Testimonial Slider */}
            <div className="relative max-w-4xl mx-auto">
              {/* <img
    src="/Icons/Spiral.png"
    alt="Spiral Background"
    className="absolute w-[480px] h-[480px] top-[-95px] left-[-80px] z-20 pointer-events-none select-none"
  /> */}

              <div className="bg-white rounded-[20px] sm:rounded-full p-4 md:p-4 relative text-center">
                <div className="flex flex-col items-center justify-center">
                  {/* Profile Image (commented out for now)
      <div className="flex-shrink-0">
        <img
          src={
            testimonials[currentTestimonial].image ||
            "/placeholder.svg"
          }
          alt={testimonials[currentTestimonial].name}
          className="w-63 h-63 rounded-full object-cover"
        />
      </div>
      */}

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      {testimonials[currentTestimonial].name}
                    </h4>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {testimonials[currentTestimonial].feedback}
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-[#0061A4] w-[80px]"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div id={id} className="mt-25">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - FAQ Heading */}
              <div>
                <h3 className="text-2xl  text-gray-900 dark:text-gray-100 mb-2">
                  Frequently
                  <br />
                  <strong>Asked</strong> Questions
                </h3>
              </div>

              {/* Right Column - FAQ Items */}
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`faq-item p-[25px] rounded-[10px] bg-white dark:bg-slate-900 border border-transparent dark:border-slate-700 transition-colors ${
                      openFaq === faq.id ? "open" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="
                      w-full flex justify-between items-center text-left
                      text-gray-900 dark:text-gray-100
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-colors duration-200
                    "
                      style={{ cursor: "pointer" }}
                    >
                      <span className="text-sm font-medium pr-4">
                        {faq.question}
                      </span>

                      <svg
                        className="faq-chevron w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Answer */}
                    <div className="faq-answer">
                      <div className="pt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Heading Section */}
      <div
        className="text-left sm:text-center mt-16 mx-auto"
        style={{ width: "90%" }}
      >
        <h2 className="text-2xl text-gray-900 dark:text-white mb-2">
          See AccuraCore in Action
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Book a personalised 30-minute walkthrough with our team. We'll show
          you the exact features your business needs.
        </p>
      </div>

      <BookDemoForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </section>
  );
}
