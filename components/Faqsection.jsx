'use client';

import { useRef, useState } from 'react';

/* -------------------------------------------------------------------------
   FaqSection  —  "// FAQ · Frequently Asked Questions"
   Single-open accordion on the dark blue field. Plus icon rotates into an
   X (135deg) and fills orange when its row is open; answer panel expands
   via a measured max-height so it animates smoothly regardless of length.

   Place directly below <CtaBannerSection />:

     <CtaBannerSection />
     <FaqSection />
     <DemoSection />
     <GlobalTokens />
------------------------------------------------------------------------- */

const FAQS = [
  { q: 'Is AccuraCore suitable for small contracting companies too?', a: 'Yes! AccuraCore contractor management software is suitable for small crews, as well as medium-sized contracting businesses.' },
  { q: 'Can I assign different roles to my crew members?', a: 'Yes, roles are fully customizable and can be assigned to everyone on your crew.' },
  { q: 'Does AccuraCore automatically calculate financials?', a: 'Yes, financial calculations are handled automatically, and displayed for easy review.' },
  { q: 'Is AccuraCore cloud-based?', a: 'Yes, AccuraCore is a SaaS platform that exists in the cloud, and requires internet access to use.' },
  { q: 'Can I export my data from the system?', a: 'The only data we support exporting is reports.' },
];

function FaqRow({ f, i, open, onToggle }) {
  const panelRef = useRef(null);

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.13)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 22,
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '24px 4px',
        }}
        aria-expanded={open}
      >
        <span
          style={{
            flex: '0 0 auto',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--ac-orange-400)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 6,
            padding: '5px 9px',
          }}
        >
          {String(i + 1).padStart(2, '0')}
        </span>
        <span
          className="ac-faqq"
          style={{
            flex: '1 1 0%',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(15px,1.9vw,19px)',
            letterSpacing: '0.005em',
            textTransform: 'uppercase',
            color: '#fff',
          }}
        >
          {f.q}
        </span>
        <span
          style={{
            flex: '0 0 auto',
            width: 34,
            height: 34,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.22)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s cubic-bezier(0.16,0.9,0.3,1), background 0.3s',
            transform: open ? 'rotate(135deg)' : 'rotate(0deg)',
            background: open ? 'var(--ac-orange-500)' : 'transparent',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? `${panelRef.current ? panelRef.current.scrollHeight : 240}px` : '0px',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.34s cubic-bezier(0.16,0.9,0.3,1), opacity 0.3s',
        }}
      >
        <p ref={panelRef} style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', padding: '0 4px 26px 66px', maxWidth: 780 }}>
          {f.a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="ac-sec" style={{ background: 'var(--ac-blue-900)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ac-orange-400)' }}>
            // FAQ
          </span>
          <h2 className='font-bold' style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4.6vw,40px)', marginTop: 14, color: '#fff' }}>
            Frequently <span className="ac-text-gradient">Asked</span> Questions
          </h2>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.13)' }}>
          {FAQS.map((f, i) => (
            <FaqRow key={f.q} f={f} i={i} open={openIdx === i} onToggle={() => setOpenIdx((cur) => (cur === i ? -1 : i))} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ac-text-gradient {
          background: var(--ac-gradient-flame);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @media (max-width: 768px) {
          .ac-sec {
            padding-left: 22px !important;
            padding-right: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}