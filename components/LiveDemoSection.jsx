"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";

const FIELDS = [
  {
    key: "name",
    label: "First Name / Last Name *",
    ph: "Jane Contractor",
    type: "text",
  },
  { key: "company", label: "Company Name *", ph: "Your company", type: "text" },
  {
    key: "role",
    label: "Company Title / Role *",
    ph: "Owner, PM, Estimator…",
    type: "text",
  },
  {
    key: "email",
    label: "Email Address *",
    ph: "you@company.com",
    type: "email",
  },
  { key: "phone", label: "Phone Number *", ph: "(555) 000-0000", type: "tel" },
];

const PhoneIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
    <path d="M21 16a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 16a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function LiveDemoSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | done
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const filledCount = useMemo(
    () => Object.values(form).filter((v) => v.trim().length > 0).length,
    [form],
  );
  const percent = Math.round((filledCount / FIELDS.length) * 100);

  const setField = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  // reveal-on-scroll, mirrors the original .rv / .rv-l / .rv-r / .in pattern
  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean);
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (percent < 100 || status === "submitting") return;
    setStatus("submitting");
    // hook your real submit call up here
    setTimeout(() => {
      setStatus("done");
    }, 700);
  };

  return (
    <section className="ld-sec">
      <div className="ld-blob" aria-hidden="true" />

      <div className="ld-grid">
        {/* ---- Left: copy + contact rows ---- */}
        <div ref={leftRef} className="rv rv-l ld-copy">
          <span className="ld-eyebrow">See it live</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px,4.6vw,40px)",
              marginTop: 14,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
           See AccuraCore in Action
          </h2>
          <p className="ld-sub">
            Book a personalised 30-minute walkthrough with our team. We&apos;ll
            show you the exact features your business needs.
          </p>

          <div className="ld-contacts">
            <a href="tel:+18778877279" className="ld-contact-row">
              <span className="ld-contact-icon">
                <PhoneIcon />
              </span>
              (877) 887-7279
            </a>
            <a href="mailto:admin@accuracore.com" className="ld-contact-row">
              <span className="ld-contact-icon">
                <MailIcon />
              </span>
              admin@accuracore.com
            </a>
          </div>
        </div>

        {/* ---- Right: glass form card ---- */}
        <div ref={rightRef} className="rv rv-r ld-card">
          <div className="ld-card-head">
            <span className="ld-card-title">Contact Info</span>
            <span className="ld-card-pct">{percent}% completed</span>
          </div>

          <div className="ld-progress-track">
            <div
              className="ld-progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>

          <form onSubmit={handleSubmit} className="ld-form">
            {FIELDS.map((f) => (
              <label key={f.key} className="ld-field">
                <span className="ld-field-label">{f.label}</span>
                <input
                  type={f.type}
                  placeholder={f.ph}
                  value={form[f.key]}
                  onChange={(e) => setField(f.key, e.target.value)}
                  className="ld-input"
                  required
                />
              </label>
            ))}

            <button
              type="submit"
              className="ld-submit"
              disabled={status === "submitting"}
            >
              {status === "done"
                ? "Sent — we'll be in touch"
                : status === "submitting"
                  ? "Sending…"
                  : "Submit"}
              {status !== "done" && <ArrowIcon />}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .ld-sec {
          background: var(--ac-blue-900);
          padding: clamp(56px, 9vw, 96px) clamp(20px, 5vw, 40px);
          position: relative;
          overflow: hidden;
        }

        .ld-blob {
          position: absolute;
          bottom: -80px;
          left: 6%;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(250, 140, 61, 0.16),
            transparent 70%
          );
          animation: ld-blob 19s ease-in-out 0s infinite normal none running;
          pointer-events: none;
        }

        @keyframes ld-blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(24px, -18px) scale(1.08);
          }
          66% {
            transform: translate(-16px, 14px) scale(0.94);
          }
        }

        .ld-grid {
          max-width: var(--container-max, 1240px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
        }

        /* reveal-on-scroll base */
        .rv {
          opacity: 0;
          transition:
            opacity 0.7s cubic-bezier(0.16, 0.8, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 0.8, 0.3, 1);
        }
        .rv-l {
          transform: translateX(-24px);
        }
        .rv-r {
          transform: translateX(24px);
        }
        .rv.in {
          opacity: 1;
          transform: translate(0, 0);
        }

        .ld-eyebrow {
          font-family: var(--font-ui);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ac-orange-400);
        }

        .ld-heading {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 42px);
          color: #fff;
          margin: 12px 0 16px;
          line-height: 1.08;
          font-weight: 800;
        }

        .ld-sub {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          max-width: 460px;
          margin-bottom: 26px;
        }

        .ld-contacts {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ld-contact-row {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-body);
          font-size: 16px;
          color: #fff;
          text-decoration: none;
          width: fit-content;
          transition: opacity 0.2s ease;
        }
        .ld-contact-row:hover {
          opacity: 0.8;
        }

        .ld-contact-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ac-orange-400);
          flex: none;
        }

        .ld-card {
          position: relative;
          background: linear-gradient(
            155deg,
            rgba(255, 255, 255, 0.16),
            rgba(255, 255, 255, 0.06)
          );
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: var(--radius-2xl, 24px);
          padding: clamp(22px, 3vw, 36px);
          box-shadow:
            rgba(6, 32, 58, 0.4) 0px 24px 60px,
            rgba(255, 255, 255, 0.28) 0px 1px 0px inset;
        }

        .ld-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
          gap: 12px;
        }

        .ld-card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
          color: #fff;
        }

        .ld-card-pct {
          font-family: var(--font-ui);
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          white-space: nowrap;
        }

        .ld-progress-track {
          height: 5px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.16);
          overflow: hidden;
          margin-bottom: 22px;
        }

        .ld-progress-fill {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--color-primary),
            var(--ac-orange-500)
          );
          border-radius: 3px;
          transition: width 0.35s cubic-bezier(0.16, 0.9, 0.3, 1);
        }

        .ld-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ld-field {
          display: block;
        }

        .ld-field-label {
          display: block;
          font-family: var(--font-ui);
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.82);
          margin-bottom: 6px;
        }

        .ld-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: var(--radius-md, 10px);
          padding: 12px 14px;
          font-family: var(--font-body);
          font-size: 15px;
          color: #fff;
          background: rgba(255, 255, 255, 0.09);
          outline: none;
          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }
        .ld-input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
        .ld-input:focus {
          border-color: var(--ac-orange-400);
          background: rgba(255, 255, 255, 0.14);
        }

        .ld-submit {
          margin-top: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--ac-orange-500);
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: var(--font-ui);
          font-weight: 600;
          font-size: 16px;
          padding: 14px 24px;
          border-radius: var(--radius-md, 10px);
          box-shadow: rgba(250, 140, 61, 0.4) 0px 10px 26px;
          transition:
            transform 0.15s ease,
            filter 0.15s ease,
            opacity 0.2s ease;
        }
        .ld-submit:hover:not(:disabled) {
          filter: brightness(1.06);
          transform: translateY(-1px);
        }
        .ld-submit:active:not(:disabled) {
          transform: translateY(0);
        }
        .ld-submit:disabled {
          opacity: 0.75;
          cursor: default;
        }

        /* ---- Responsive ---- */
        @media (max-width: 900px) {
          .ld-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ld-sub {
            max-width: 100%;
          }
        }

        @media (max-width: 560px) {
          .ld-blob {
            width: 220px;
            height: 220px;
          }
          .ld-card {
            padding: 20px;
          }
          .ld-contact-row {
            font-size: 15px;
          }
        }

        @media (min-width: 1600px) {
          .ld-grid {
            gap: 64px;
          }
        }
      `}</style>
    </section>
  );
}
