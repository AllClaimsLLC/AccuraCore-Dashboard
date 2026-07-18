'use client';

import { useEffect, useRef, useState } from 'react';
import { LayoutGrid, Sparkles, Camera, MessagesSquare, ShieldCheck, RefreshCw, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

/* -------------------------------------------------------------------------
   CapabilitiesSection  —  "What you get"
   Dark, numbered capability list on a deep-blue field. On pointer-fine
   devices, a small color-coded card tracks the cursor and previews the
   hovered capability; on touch devices (mobile/tablet) the card and hover
   dimming are disabled and the list falls back to a clean stacked layout.

   Place directly below <TourSection />:

     <TourSection />
     <CapabilitiesSection />
     <GlobalTokens />

   Section padding comes entirely from the shared `.ac-sec` utility defined
   once in <GlobalTokens /> (page.jsx) — same equal top/bottom scale used by
   every other section, across mobile / tablet / desktop / ultra-wide.
   Background stays the deep-navy tone (this section isn't light/white).
------------------------------------------------------------------------- */

const CAPS = [
  { num: '01', title: 'One Operating System', desc: 'Run your whole business from a single dashboard.', color: '#1161a5', Icon: LayoutGrid },
  { num: '02', title: 'AI Walkthrough', desc: 'AI guides you through setup and every feature, step by step.', color: '#1e9e57', Icon: Sparkles },
  { num: '03', title: 'AccuraCam', desc: 'Snap, speak, upload - photos filed in seconds.', color: '#fa8c3d', Icon: Camera },
  { num: '04', title: 'MyAccuraCore', desc: 'Two-way customer comms that stop the phone tag.', color: '#1161a5', Icon: MessagesSquare },
  { num: '05', title: 'AccuraCore Claims', desc: 'Auto-generate reports adjusters actually approve.', color: '#f59423', Icon: ShieldCheck },
  { num: '06', title: 'Free Data Migration', desc: 'We move everything in from your old system, free.', color: '#1e9e57', Icon: RefreshCw },
];

export default function CapabilitiesSection() {
  const listRef = useRef(null);
  const cardRef = useRef(null);
  const [hover, setHover] = useState(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setCanHover(mq.matches);
    apply();
    mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);
    return () => (mq.removeEventListener ? mq.removeEventListener('change', apply) : mq.removeListener(apply));
  }, []);

  const onListMove = (e) => {
    if (!canHover) return;
    const card = cardRef.current;
    const list = listRef.current;
    if (!card || !list) return;
    const r = list.getBoundingClientRect();
    card.style.transform = `translate(${(e.clientX - r.left - 132).toFixed(0)}px, ${(e.clientY - r.top - 92).toFixed(0)}px)`;
  };

  const activeCap = hover !== null ? CAPS[hover] : CAPS[0];

  return (
    <section
      id="capabilities"
      className="ac-sec ac-capsec"
      style={{ background: 'var(--ac-blue-900)', position: 'relative', overflow: 'hidden' }}
    >
      {/* ambient blob */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -80,
          left: '8%',
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(17,97,165,0.2), transparent 70%)',
          animation: 'ac-blob 20s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 'var(--container-max, 1200px)', margin: '0 auto', position: 'relative' }}>
        <div className="ac-caphead" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 14, flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ac-orange-400)' }}>
              What you get
            </span>
            <h2 style={{ fontFamily: 'var(--font-display, inherit)', fontSize: 'clamp(30px,5.4vw,44px)', color: '#fff', marginTop: 12, lineHeight: 1.05 }}>
              Everything to run
              <br />
              the whole business
            </h2>
          </div>
          <span className="ac-caphint" style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, color: 'rgba(255,255,255,0.5)' }}>
            Hover a capability →
          </span>
        </div>

        <div
          ref={listRef}
          onMouseMove={onListMove}
          onMouseLeave={() => setHover(null)}
          style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.12)' }}
        >
          {CAPS.map((cap, i) => {
            const active = hover === i;
            const dim = hover !== null && !active;
            return (
              <a
                key={cap.num}
                href="#tour"
                onMouseEnter={() => setHover(i)}
                className="ac-caprow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  padding: '26px 8px',
                  borderBottom: '1px solid rgba(255,255,255,0.12)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s',
                  opacity: dim ? 0.5 : 1,
                }}
              >
                <span
                  className="ac-capnum"
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: active ? cap.color : 'rgba(255,255,255,0.4)',
                    width: 44,
                    flex: '0 0 auto',
                    transition: 'color 0.3s',
                  }}
                >
                  {cap.num}
                </span>
                <span
                  className="ac-captitle"
                  style={{
                    flex: '1 1 0%',
                    minWidth: 0,
                    fontFamily: 'var(--font-display, inherit)',
                    fontWeight: 800,
                    fontSize: 'clamp(22px,5vw,44px)',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s, transform 0.35s cubic-bezier(0.16,0.9,0.3,1)',
                    color: active ? '#fff' : 'rgba(255,255,255,0.9)',
                    transform: active && canHover ? 'translateX(16px)' : 'translateX(0)',
                  }}
                >
                  {cap.title}
                </span>
                <span
                  className="ac-capdesc"
                  style={{
                    flex: '0 0 auto',
                    maxWidth: 300,
                    fontFamily: 'var(--font-body, inherit)',
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: 'rgba(255,255,255,0.55)',
                    display: dim ? 'none' : 'block',
                  }}
                >
                  {cap.desc}
                </span>
                <span
                  className="ac-caparrow"
                  style={{
                    flex: '0 0 auto',
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    color: active ? '#fff' : 'rgba(255,255,255,0.6)',
                    background: active ? cap.color : 'transparent',
                    transition: '0.32s cubic-bezier(0.16,0.9,0.3,1)',
                    transform: active ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <ArrowUpRight size={20} strokeWidth={2} />
                </span>
              </a>
            );
          })}

          {/* floating preview card — follows the cursor, pointer-fine only */}
          <div
            ref={cardRef}
            className="ac-capcard"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 264,
              height: 184,
              borderRadius: 20,
              padding: 20,
              zIndex: 5,
              pointerEvents: 'none',
              overflow: 'hidden',
              background: activeCap.color,
              boxShadow: '0 26px 60px rgba(0,0,0,0.4)',
              opacity: canHover && hover !== null ? 1 : 0,
              scale: canHover && hover !== null ? '1' : '0.82',
              transition: 'opacity 0.28s, scale 0.28s cubic-bezier(0.16,0.9,0.3,1), background 0.28s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              willChange: 'transform',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)' }}>
              <span>{activeCap.num}</span>
              <span style={{ opacity: 0.7 }}>/ CAPABILITY</span>
            </div>
<div
  style={{
    position: "absolute",
    right: -10,
    bottom: -16,
    width: 130,
    height: 130,
    opacity: 0.2,
    pointerEvents: "none",
  }}
>
  <Image
    src="/Logos/Accuracore/accuracore.png"
    alt="AccuraCore"
    fill
    className="object-contain"
  />
</div>
            <div style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 800, fontSize: 27, lineHeight: 1.1, color: '#fff', position: 'relative' }}>
              {activeCap.title}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ac-blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, 20px) scale(1.08);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.95);
          }
        }

        /* ---- Desktop / large screens (default above) ---- */

        /* ---- Tablet ---- */
        @media (max-width: 1024px) {
          .ac-caprow {
            flex-wrap: wrap !important;
            opacity: 1 !important;
          }
          .ac-captitle {
            transform: none !important;
          }
          .ac-capdesc {
            display: block !important;
            max-width: none !important;
            width: 100% !important;
            margin-left: 68px !important;
            margin-top: -6px;
          }
          .ac-capcard {
            display: none !important;
          }
        }

        /* ---- Mobile ---- */
        @media (max-width: 640px) {
          .ac-caphead {
            align-items: flex-start !important;
          }
          .ac-caphint {
            display: none !important;
          }
          .ac-caprow {
            gap: 4px 14px !important;
            padding: 18px 4px !important;
            align-items: flex-start !important;
          }
          .ac-capnum {
            width: 28px !important;
            font-size: 12px !important;
            padding-top: 6px;
          }
          .ac-captitle {
            font-size: clamp(19px, 6.5vw, 26px) !important;
          }
          .ac-capdesc {
            margin-left: 42px !important;
            font-size: 13.5px !important;
          }
          .ac-caparrow {
            width: 38px !important;
            height: 38px !important;
          }
          .ac-caparrow svg {
            width: 15px;
            height: 15px;
          }
        }
      `}</style>
    </section>
  );
}