'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    num: '01',
    eyebrow: 'Clarity',
    title: 'One place for tasks, jobs & invoices.',
    desc: 'No more juggling five tools to get through one job. Every part of the business lives in a single dashboard your whole crew can see.',
    bullets: ['Tasks to invoices, unified', 'Your crew always in sync'],
  },
  {
    num: '02',
    eyebrow: 'Control',
    title: 'Stay on top of every project.',
    desc: 'Track jobs, crews, estimates and claims in real time - so nothing slips and you always know exactly where every project stands.',
    bullets: ['Real-time job tracking', 'Estimates & claims in view'],
  },
  {
    num: '03',
    eyebrow: 'Results',
    title: 'More approvals. More revenue.',
    desc: 'Auto-generate damage reports adjusters actually approve and get more insurance claims paid. Fewer bottlenecks, faster cash.',
    bullets: ['Reports adjusters approve', 'Get more claims paid'],
  },
];

function StarIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ac-orange-400)" stroke="none" {...props}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7Z" />
    </svg>
  );
}

function InfoCard({ c }) {
  return (
    <div
      style={{
        flex: '0 0 auto',
        width: 'min(80vw, 540px)',
        height: 'clamp(380px, 62vh, 450px)',
        background: 'linear-gradient(158deg, #132540, #0a1524)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 28,
        padding: 'clamp(30px, 3.4vw, 46px)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', right: 26, top: 14, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(90px,11vw,150px)', lineHeight: 1, color: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }}>
        {c.num}
      </div>
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ac-orange-400)', position: 'relative' }}>
        {c.eyebrow}
      </span>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: '16px 0 14px', position: 'relative', maxWidth: 420 }}>
        {c.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', position: 'relative', maxWidth: 440 }}>
        {c.desc}
      </p>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
        {c.bullets.map((b) => (
          <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600, color: '#fff' }}>
            <span style={{ color: 'var(--ac-orange-400)', fontSize: 13 }}>◆</span>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div
      style={{
        flex: '0 0 auto',
        width: 'min(80vw, 540px)',
        height: 'clamp(380px, 62vh, 450px)',
        background: 'var(--ac-gradient-blue)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 28,
        padding: 'clamp(30px, 3.4vw, 46px)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: -30, right: -10, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 200, lineHeight: 1, color: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }}>
        &rdquo;
      </div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, position: 'relative' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(19px,2.2vw,26px)', lineHeight: 1.45, color: '#fff', position: 'relative', marginBottom: 'auto' }}>
        AccuraCore transformed how we manage our daily operations. Everything is in one place, from tasks to invoices. It&apos;s like having a full operations team inside one dashboard.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', marginTop: 24 }}>
        <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#fff' }}>
          JC
        </span>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#fff' }}>Jerry Clark</div>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, color: 'rgba(255,255,255,0.7)' }}>Contractor · AccuraCore customer</div>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!section || !track) return;

    const getMaxX = () => Math.max(0, track.scrollWidth - track.clientWidth);

    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0 });
      if (bar) bar.style.width = '6%';

      gsap.to(track, {
        x: () => -getMaxX(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getMaxX()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar) bar.style.width = `${(6 + self.progress * 94).toFixed(1)}%`;
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="ac-statssec"
      style={{ position: 'relative', height: '100vh', background: 'var(--ac-blue-900)', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}
    >
      <div className="ac-statshead" style={{ maxWidth: 'var(--container-max, 1240px)', margin: '0 auto', width: '100%', padding: '0 40px 34px', boxSizing: 'border-box' }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ac-orange-400)' }}>
          Loved by contractors
        </span>
        <h2 className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4.6vw,40px)', marginTop: 12, color: '#fff', maxWidth: 660, lineHeight: 1.06 }}>
          Trusted By Teams Who Value <span className="ac-text-gradient">Clarity, Control &amp; Results</span>
        </h2>
      </div>

      <div ref={trackRef} className="ac-statstrack" style={{ display: 'flex', gap: 26, padding: '0 40px', willChange: 'transform', transform: 'translateX(0px)' }}>
        {CARDS.map((c) => (
          <InfoCard key={c.num} c={c} />
        ))}
        <TestimonialCard />
        <div style={{ flex: '0 0 auto', width: 20 }} />
      </div>

      <div className="ac-statshead" style={{ maxWidth: 'var(--container-max, 1240px)', margin: '30px auto 0', width: '100%', padding: '0 40px', boxSizing: 'border-box' }}>
        <div style={{ height: 4, borderRadius: 3, background: 'rgba(255,255,255,0.12)', overflow: 'hidden' }}>
          <div ref={barRef} style={{ height: '100%', width: '6%', background: 'linear-gradient(90deg,var(--color-primary),var(--ac-orange-500))', borderRadius: 3 }} />
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
          .ac-statshead {
            padding-left: 22px !important;
            padding-right: 22px !important;
          }
          .ac-statstrack {
            padding-left: 22px !important;
            padding-right: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}