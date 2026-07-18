"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * Footer — site footer with logo/blurb/CTA, contact info,
 * parent company link, and social icons.
 *
 * Goes after <LiveDemoSection />:
 *
 *   <LiveDemoSection />
 *   <Footer />
 *   <GlobalTokens />
 */

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ac-orange-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
    <path d="M21 16a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 16a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ac-orange-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M6.5 8A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5zM10 10h2.8v1.3h.04c.4-.75 1.4-1.55 2.86-1.55C18.5 9.75 19 11.7 19 14v5h-3v-4.4c0-1.05-.02-2.4-1.5-2.4s-1.7 1.15-1.7 2.32V19h-3z" />
  </svg>
);

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/accura_core/", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/p/AccuraCore-61579000254667/", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/accura-core/", Icon: LinkedinIcon },
];

export default function NewFooter() {
  return (
    <footer id="footer" className="ft-sec">
      <div className="ft-grid">
        {/* ---- Brand + blurb + CTA ---- */}
        <div className="ft-col ft-brand">
          <Image
            src="/Logos/Accuracore/AccuraCore.svg"
            alt="AccuraCore"
            width={120}
            height={52}
            className="ft-logo"
            priority={false}
          />
          <p className="ft-blurb">
            AccuraCore is a complete contractor management software to manage
            your contracting business from start to finish.
          </p>
          <Link href="/book-a-demo">
          <button  className="ft-cta">
            Book Demo
            <ArrowIcon /></button>
          </Link>
        </div>

        {/* ---- Contact ---- */}
        <div className="ft-col">
          <div className="ft-heading">CONTACT</div>
          <div className="ft-contact-list">
            <a href="tel:+18778877279" className="ft-contact-row">
              <PhoneIcon />
              (877) 887-7279
            </a>
            <a href="mailto:admin@accuracore.com" className="ft-contact-row">
              <MailIcon />
              admin@accuracore.com
            </a>
          </div>
        </div>

        {/* ---- Parent company ---- */}
        <div className="ft-col">
          <div className="ft-heading">PARENT COMPANY</div>
          <a
            href="https://www.sparxtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-link"
          >
            sparxtech.com
          </a>
        </div>

        {/* ---- Social ---- */}
        <div className="ft-col">
          <div className="ft-heading">FOLLOW US</div>
          <div className="ft-social-row">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="ft-social-btn"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="ft-bottom">© 2026 AccuraCore. All rights reserved.</div>

      <style jsx>{`
        .ft-sec {
          background: #fff;
          color: var(--text-strong);
          padding: 64px 40px 32px;
          border-top: 1px solid var(--border-subtle);
        }

        .ft-grid {
          max-width: var(--container-max, 1240px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .ft-logo {
          height: 52px;
          width: auto;
        }

        .ft-blurb {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-body);
          max-width: 360px;
          margin: 18px 0 22px;
        }
.ft-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background: #fa8c3d;
  color: rgb(255, 255, 255);

  font-family: var(--font-ui);
  font-weight: 600;
  font-size: 15px;
  line-height: 1;

  padding: 11px 20px;

  border: none;
  border-radius: var(--radius-md);

  text-decoration: none;
}

        .ft-heading {
          font-family: var(--font-ui);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--ac-gray-500);
          margin-bottom: 16px;
        }

        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-body);
        }

        .ft-contact-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-body);
          text-decoration: none;
          transition: color 0.15s ease;
          width: fit-content;
        }
        .ft-contact-row:hover {
          color: var(--color-primary);
        }

        .ft-link {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-body);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .ft-link:hover {
          color: var(--color-primary);
        }

        .ft-social-row {
          display: flex;
          gap: 12px;
        }

        .ft-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--ac-gray-100, #eef0f3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .ft-social-btn:hover {
          background: var(--ac-orange-500);
          color: #fff;
          transform: translateY(-2px);
        }

        .ft-bottom {
          max-width: var(--container-max, 1240px);
          margin: 40px auto 0;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
          font-family: var(--font-ui);
          font-size: 13px;
          color: var(--ac-gray-500);
        }

        /* ---- Responsive ---- */
        @media (max-width: 1024px) {
          .ft-grid {
            grid-template-columns: 1.4fr 1fr 1fr;
            row-gap: 36px;
          }
          .ft-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 720px) {
          .ft-sec {
            padding: 48px 20px 24px;
          }
          .ft-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 32px;
          }
          .ft-brand {
            grid-column: 1 / -1;
          }
          .ft-blurb {
            max-width: 100%;
          }
        }

        @media (max-width: 460px) {
          .ft-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 1600px) {
          .ft-sec {
            padding: 80px 40px 40px;
          }
          .ft-grid {
            gap: 56px;
          }
        }
      `}</style>
    </footer>
  );
}