'use client';

/* -------------------------------------------------------------------------
   CtaBannerSection  —  "Ready to ditch the tech-mess?"
   Simple dark banner with heading, copy, and a single CTA button.

   Place directly below <StatsSection />:

     <StatsSection />
     <CtaBannerSection />
     <FaqSection />
     <DemoSection />
     <GlobalTokens />
------------------------------------------------------------------------- */

export default function CTASection() {
  return (
    <section className="ac-sec" style={{ maxWidth: 'var(--container-max, 1240px)', margin: '0 auto', padding: '96px 40px' }}>
      <div
        className="ac-ctabanner"
        style={{
          background: 'var(--ac-blue-900)',
          borderRadius: 'var(--radius-2xl, 24px)',
          padding: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
          boxShadow: 'var(--shadow-lg, 0 12px 32px rgba(15,23,41,.1))',
        }}
      >
        <div>
          <h3 className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: '#fff', marginBottom: 8 }}>Ready to ditch the tech-mess?</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.85)', maxWidth: 520 }}>
            First 90 days free for the next 25 contractors. We move your data in, free - you just keep building.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          <a
            href="#"
            className="ac-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--ac-orange-500)',
              color: '#fff',
              fontFamily: 'var(--font-ui)',
              fontWeight: 700,
              fontSize: 16,
              padding: '15px 26px',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 28px rgba(250,140,61,0.4)',
              textDecoration: 'none',
            }}
          >
            Book Demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .ac-cta {
          transition: transform 0.16s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.22s, background 0.2s, color 0.2s, border-color 0.2s, filter 0.2s;
          will-change: transform;
        }
        .ac-cta:hover {
          transform: translateY(-2px);
          filter: brightness(1.04);
        }
        .ac-cta:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .ac-sec {
            padding-left: 22px !important;
            padding-right: 22px !important;
          }
          .ac-ctabanner {
            flex-direction: column;
            align-items: flex-start !important;
            text-align: left;
            padding: 34px !important;
          }
        }

        @media (min-width: 1600px) {
          .ac-sec {
            padding: 128px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}