'use client';

import { useEffect, useRef, useState } from 'react';
import { LayoutGrid, Kanban, Camera, Check, ArrowRight } from 'lucide-react';

const INITIAL_CONTACTS = [
  { name: 'Emily Johnson', flow: 'Claim Intake', status: 'In Progress', addr: '123 Main St, Chicago, IL' },
  { name: 'Michael Brown', flow: 'Assessment', status: 'Pending', addr: '455 Oak Ave, Aurora, IL' },
  { name: 'Sarah Williams', flow: 'Collaboration', status: 'Completed', addr: '78 Lincoln Dr, Naperville, IL' },
  { name: 'David Miller', flow: 'Reporting & Compliance', status: 'Pending', addr: '910 River Rd, Rockford, IL' },
];

const INITIAL_BOARD_COLS = [
  {
    name: 'Intake',
    tone: '#1161a5',
    cards: [
      { id: 'c1', title: 'Emily Johnson', addr: '123 Main St, Chicago, IL', amount: '$12,400', rep: 'Charles R.' },
      { id: 'c2', title: 'James Carter', addr: '88 Elm St, Joliet, IL', amount: '$8,900', rep: 'Charles R.' },
    ],
  },
  {
    name: 'Assessment',
    tone: '#f59423',
    cards: [{ id: 'c3', title: 'Michael Brown', addr: '455 Oak Ave, Aurora, IL', amount: '$21,750', rep: 'Mitchael B.' }],
  },
  {
    name: 'In Progress',
    tone: '#1e9e57',
    cards: [{ id: 'c4', title: 'Sarah Williams', addr: '78 Lincoln Dr, Naperville, IL', amount: '$34,200', rep: 'Robert K.' }],
  },
  {
    name: 'Completed',
    tone: '#7a828e',
    cards: [{ id: 'c5', title: 'David Miller', addr: '910 River Rd, Rockford, IL', amount: '$17,050', rep: 'David M.' }],
  },
];

const INITIAL_CAM_SHOTS = [
  { id: 1, tone: 'flame', label: 'Hail damage - ridge cap', meta: '0:06 voice note · 2m ago', transcribing: false, done: true },
  { id: 2, tone: 'blue', label: 'Roof - north slope', meta: '0:11 voice note · 8m ago', transcribing: false, done: true },
];

const NEW_SHOT_LABELS = ['Gutter seam - rear elevation', 'Soft metal - downspout', 'Shingle bruising - south slope', 'Flashing - chimney base'];

const STATUS_STYLE = {
  'In Progress': { bg: 'var(--ac-info-bg)', fg: 'var(--ac-info)' },
  Pending: { bg: 'var(--ac-warning-bg)', fg: 'var(--ac-warning)' },
  Completed: { bg: 'var(--ac-success-bg)', fg: 'var(--ac-success)' },
};

/* -------------------------- scroll-reveal wrapper ------------------------ */
function Reveal({ as: Tag = 'div', className = '', style = {}, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(32px)',
        transition: 'opacity 0.8s cubic-bezier(0.16,0.8,0.3,1), transform 0.8s cubic-bezier(0.16,0.8,0.3,1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* count-up number, starts once its own element scrolls into view */
function CountUp({ to, prefix = '', suffix = '', decimals = 0, style }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1400;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / dur);
              const e = 1 - Math.pow(1 - p, 3);
              setVal(to * e);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} style={style}>
      {prefix}
      {val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export default function TourSection() {
  const [tab, setTab] = useState('dashboard'); 
  const [boardCols, setBoardCols] = useState(INITIAL_BOARD_COLS);
  const [camShots, setCamShots] = useState(INITIAL_CAM_SHOTS);
  const [capturing, setCapturing] = useState(false);
  const shotN = useRef(0);

  const panelStyle = (name) => {
    const active = tab === name;
    const base = { transition: 'opacity .5s cubic-bezier(.16,.8,.3,1), transform .5s cubic-bezier(.16,.8,.3,1)' };
    return active
      ? { ...base, position: 'relative', opacity: 1, transform: 'none', pointerEvents: 'auto' }
      : { ...base, position: 'absolute', top: 0, left: 0, right: 0, opacity: 0, transform: 'translateY(16px)', pointerEvents: 'none' };
  };

  const tabStyle = (name) => {
    const active = tab === name;
    return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill, 999px)',
      border: 'none',
      transition: 'all .2s cubic-bezier(.4,0,.2,1)',
      background: active ? '#fff' : 'transparent',
      color: active ? 'var(--color-primary)' : 'var(--ac-gray-600)',
      boxShadow: active ? 'var(--shadow-sm, 0 1px 3px rgba(0,0,0,.08))' : 'none',
    };
  };

  const advance = (colIdx, cardId) => {
    setBoardCols((cols) => {
      if (colIdx >= cols.length - 1) return cols;
      const next = cols.map((c) => ({ ...c, cards: [...c.cards] }));
      const i = next[colIdx].cards.findIndex((c) => c.id === cardId);
      if (i < 0) return cols;
      const [card] = next[colIdx].cards.splice(i, 1);
      next[colIdx + 1].cards.unshift(card);
      return next;
    });
  };

  const snap = () => {
    if (capturing) return;
    setCapturing(true);
    setTimeout(() => setCapturing(false), 260);
    setTimeout(() => {
      shotN.current += 1;
      const id = Date.now();
      const label = NEW_SHOT_LABELS[(shotN.current - 1) % NEW_SHOT_LABELS.length];
      const tone = shotN.current % 2 === 0 ? 'flame' : 'blue';
      setCamShots((s) => [{ id, tone, label, meta: '0:08 voice note · just now', transcribing: true, done: false }, ...s].slice(0, 5));
      setTimeout(() => {
        setCamShots((s) => s.map((x) => (x.id === id ? { ...x, transcribing: false, done: true } : x)));
      }, 1200);
    }, 300);
  };

  return (
    <section
      className="ac-tour-sec"
      style={{ maxWidth: 'var(--container-max, 1200px)', margin: '0 auto' }}
    >
      <Reveal className="text-left md:text-center mb-[34px]">
        <span className="ac-eyebrow" style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
          Take it for a spin
        </span>
       <h2
       className='font-bold'
  style={{
    fontFamily: "var(--font-display, inherit)",
    fontSize: "clamp(27px,5vw,42px)",
    marginTop: 12,
    color: "var(--text-strong)",
  }}
>
  See AccuraCore{" "}
  <span
    style={{
      background: "linear-gradient(135deg, #ad4d32 0%, #fa8c3d 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
    }}
  >
    In Action
  </span>
</h2>
        <p className="ac-tour-lead" style={{ fontFamily: 'var(--font-body, inherit)', fontSize: 18, color: 'var(--text-body)', maxWidth: 600, margin: '16px auto 0' }}>
          Click through the real product - every screen you run your business on, live.
        </p>
      </Reveal>

      <Reveal style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
        <div style={{ display: 'inline-flex', gap: 5, background: 'var(--ac-gray-100)', borderRadius: 'var(--radius-pill, 999px)', padding: 5 }}>
          <button style={tabStyle('dashboard')} onClick={() => setTab('dashboard')}>
            <LayoutGrid size={17} />
            Dashboard
          </button>
          <button style={tabStyle('boards')} onClick={() => setTab('boards')}>
            <Kanban size={17} />
            Boards
          </button>
          <button style={tabStyle('accuracam')} onClick={() => setTab('accuracam')}>
            <Camera size={17} />
            AccuraCam
          </button>
        </div>
      </Reveal>

      <Reveal
        className="rv-s ac-tour-panel p-[15px] sm:p-6"
        style={{
          position: 'relative',
          background: 'var(--ac-gray-50)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-2xl, 24px)',
          boxShadow: 'var(--shadow-lg, 0 20px 50px rgba(15,23,41,.14))',
        }}
      >
        {/* ---------------------------- DASHBOARD ---------------------------- */}
        <div style={panelStyle('dashboard')}>
          <div className="ac-dash-head" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 700, fontSize: 22, color: 'var(--text-strong)' }}>Dashboard Overview</div>
              <div style={{ fontFamily: 'var(--font-body, inherit)', fontSize: 13.5, color: 'var(--ac-gray-500)', marginTop: 2 }}>
                Everything happening across your company, right now.
              </div>
            </div>
            <div
              className="ac-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                background: 'var(--color-primary)',
                color: '#fff',
                fontFamily: 'var(--font-ui)',
                fontWeight: 600,
                fontSize: 13.5,
                padding: '9px 16px',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
              }}
            >
              <ArrowRight size={0} style={{ display: 'none' }} />
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Add Contacts
            </div>
          </div>

          <div className="ac-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 14 }}>
            <div className="ac-lift" style={{ background: 'var(--ac-gradient-blue)', borderRadius: 'var(--radius-lg)', padding: 18, color: '#fff', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, opacity: 0.85 }}>New Jobs This Week</div>
              <CountUp to={294} style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 800, fontSize: 38, marginTop: 6, display: 'block' }} />
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, opacity: 0.85, marginTop: 2 }}>271 completed · 23 active</div>
            </div>

            <div className="ac-lift" style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, boxShadow: 'var(--shadow-xs, 0 1px 2px rgba(0,0,0,.05))' }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--ac-gray-500)' }}>Invoices Created</div>
              <CountUp to={283} style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 800, fontSize: 38, marginTop: 6, color: 'var(--text-strong)', display: 'block' }} />
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 26, marginTop: 8 }}>
                {[40, 65, 50, 90, 70, 100].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      flex: 1,
                      borderRadius: '3px 3px 0 0',
                      height: `${h}%`,
                      background: i === 5 ? 'var(--ac-orange-500)' : i === 3 ? 'var(--color-primary)' : `var(--ac-blue-${(i + 1) * 100})`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="ac-lift" style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, boxShadow: 'var(--shadow-xs, 0 1px 2px rgba(0,0,0,.05))' }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--ac-gray-500)' }}>Payments Made</div>
              <CountUp to={245} style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 800, fontSize: 38, marginTop: 6, color: 'var(--text-strong)', display: 'block' }} />
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--ac-success)', fontWeight: 600, marginTop: 2 }}>+3.48% since last month</div>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>Contacts</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--ac-gray-500)' }}>Page 2 of 12</span>
            </div>
            <div
              className="ac-contact-head"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1.2fr 0.9fr 1.6fr',
                background: 'var(--color-primary)',
                color: '#fff',
                fontFamily: 'var(--font-ui)',
                fontWeight: 600,
                fontSize: 13,
                padding: '12px 18px',
              }}
            >
              <span>Contact Name</span>
              <span>WorkFlow</span>
              <span>Status</span>
              <span>Address &amp; Info</span>
            </div>
            {INITIAL_CONTACTS.map((c) => {
              const st = STATUS_STYLE[c.status];
              return (
                <div
                  key={c.name}
                  className="ac-contact-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1.2fr 0.9fr 1.6fr',
                    alignItems: 'center',
                    padding: '13px 18px',
                    fontFamily: 'var(--font-body, inherit)',
                    fontSize: 13.5,
                    color: 'var(--text-body)',
                    borderBottom: '1px solid var(--border-subtle)',
                    transition: 'background .15s',
                  }}
                >
                  <span style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{c.name}</span>
                  <span>{c.flow}</span>
                  <span>
                    <span
                      style={{
                        background: st.bg,
                        color: st.fg,
                        borderRadius: 'var(--radius-pill, 999px)',
                        padding: '3px 12px',
                        fontFamily: 'var(--font-ui)',
                        fontSize: 12,
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {c.status}
                    </span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--ac-gray-600)' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {c.addr}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------ BOARDS ------------------------------ */}
        <div style={panelStyle('boards')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 700, fontSize: 22, color: 'var(--text-strong)' }}>Boards</div>
              <div style={{ fontFamily: 'var(--font-body, inherit)', fontSize: 13.5, color: 'var(--ac-gray-500)', marginTop: 2 }}>
                Drag work forward - click a card's arrow to advance its stage.
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, alignItems: 'start' }} className="ac-g4">
            {boardCols.map((col, ci) => (
              <div key={col.name} style={{ background: 'var(--ac-gray-100)', borderRadius: 'var(--radius-lg)', padding: 12, minHeight: 260 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, padding: '0 4px' }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: col.tone, flex: '0 0 auto' }} />
                  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-strong)' }}>{col.name}</span>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontFamily: 'var(--font-ui)',
                      fontSize: 12,
                      color: 'var(--ac-gray-500)',
                      background: '#fff',
                      borderRadius: 'var(--radius-pill, 999px)',
                      padding: '1px 9px',
                    }}
                  >
                    {col.cards.length}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.cards.map((card) => (
                    <div
                      key={card.id}
                      className="ac-lift ac-drop"
                      style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 12, boxShadow: 'var(--shadow-xs, 0 1px 2px rgba(0,0,0,.05))' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-strong)' }}>{card.title}</span>
                        {ci < boardCols.length - 1 && (
                          <button
                            className="ac-cta"
                            onClick={() => advance(ci, card.id)}
                            style={{
                              flex: '0 0 auto',
                              width: 26,
                              height: 26,
                              borderRadius: 7,
                              border: 'none',
                              background: 'var(--ac-blue-50)',
                              color: 'var(--color-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }}
                            aria-label={`Advance ${card.title} to next stage`}
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </button>
                        )}
                      </div>
                      <div style={{ fontFamily: 'var(--font-body, inherit)', fontSize: 12, color: 'var(--ac-gray-500)', marginTop: 6 }}>{card.addr}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <span style={{ fontFamily: 'var(--font-display, inherit)', fontWeight: 700, fontSize: 13.5, color: 'var(--text-strong)' }}>{card.amount}</span>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: 'var(--ac-gray-400)' }}>{card.rep}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------- ACCURACAM ---------------------------- */}
        <div style={panelStyle('accuracam')}>
          <div className="ac-camgrid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1fr', gap: 28, alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="ac-cam-phone" style={{ background: 'var(--ac-blue-900)', borderRadius: 38, padding: 10, boxShadow: 'var(--shadow-xl, 0 30px 70px rgba(15,23,41,.28))', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 96, height: 24, background: 'var(--ac-blue-900)', borderRadius: '0 0 16px 16px', zIndex: 5 }} />
                <div style={{ width: '100%', height: '100%', borderRadius: 30, overflow: 'hidden', position: 'relative', background: 'linear-gradient(160deg,#2b3f57,#0f1729)' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)',
                      backgroundSize: '34px 34px',
                    }}
                  />
                  <div style={{ position: 'absolute', top: 52, left: 20, display: 'flex', alignItems: 'center', gap: 7, color: '#fff', fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600 }}>
                    <span className="ac-pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ac-danger)' }} />
                    REC · AccuraCam
                  </div>
                  <div style={{ position: 'absolute', top: 96, left: 34, width: 26, height: 26, borderTop: '2px solid rgba(255,255,255,.7)', borderLeft: '2px solid rgba(255,255,255,.7)' }} />
                  <div style={{ position: 'absolute', top: 96, right: 34, width: 26, height: 26, borderTop: '2px solid rgba(255,255,255,.7)', borderRight: '2px solid rgba(255,255,255,.7)' }} />
                  <div style={{ position: 'absolute', bottom: 150, left: 34, width: 26, height: 26, borderBottom: '2px solid rgba(255,255,255,.7)', borderLeft: '2px solid rgba(255,255,255,.7)' }} />
                  <div style={{ position: 'absolute', bottom: 150, right: 34, width: 26, height: 26, borderBottom: '2px solid rgba(255,255,255,.7)', borderRight: '2px solid rgba(255,255,255,.7)' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'rgba(255,255,255,.5)' }}>
                    <Camera size={40} strokeWidth={1.5} />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#fff',
                      pointerEvents: 'none',
                      opacity: capturing ? 1 : 0,
                      transition: capturing ? 'opacity .05s ease-out' : 'opacity .35s ease-out',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: 34, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
                    <button
                      onClick={snap}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        border: '4px solid rgba(255,255,255,.9)',
                        background: '#fff',
                        cursor: 'pointer',
                        boxShadow: '0 4px 16px rgba(0,0,0,.35)',
                        transition: 'transform .12s',
                        transform: capturing ? 'scale(0.88)' : 'scale(1)',
                      }}
                      aria-label="Take photo"
                    />
                  </div>
                  <div style={{ position: 'absolute', bottom: 112, left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,.85)', fontFamily: 'var(--font-ui)', fontSize: 11.5 }}>
                    Tap to snap · voice tags automatically
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--ac-orange-50)',
                  color: 'var(--ac-orange-700)',
                  borderRadius: 'var(--radius-pill, 999px)',
                  padding: '5px 13px',
                  fontFamily: 'var(--font-ui)',
                  fontSize: 12.5,
                  fontWeight: 700,
                }}
              >
                AccuraCam
              </span>
              <h3 className="ac-cam-title" style={{ fontFamily: 'var(--font-display, inherit)', fontSize: 30, color: 'var(--text-strong)', margin: '16px 0 10px' }}>
                Snap. Speak. Upload. Done.
              </h3>
              <p style={{ fontFamily: 'var(--font-body, inherit)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 420, marginBottom: 22 }}>
                Integrated camera with voice labeling instantly uploads job photos and notes to the right file. Tap the shutter - watch it land, transcribed, in seconds.
              </p>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ac-gray-500)', marginBottom: 12 }}>
                Recent uploads
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {camShots.map((s) => (
                  <div
                    key={s.id}
                    className="ac-drop"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      background: '#fff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '10px 12px',
                      boxShadow: 'var(--shadow-xs, 0 1px 2px rgba(0,0,0,.05))',
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 10,
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: s.tone === 'flame' ? 'var(--ac-gradient-flame)' : 'var(--ac-gradient-blue)',
                      }}
                    >
                      <Camera size={20} color="#fff" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-strong)' }}>{s.label}</div>
                      <div style={{ fontFamily: 'var(--font-body, inherit)', fontSize: 11.5, color: 'var(--ac-gray-500)', marginTop: 1 }}>
                        {s.transcribing ? 'Transcribing voice note…' : s.meta}
                      </div>
                    </div>
                    {s.done ? (
                      <span style={{ flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--ac-success)', fontFamily: 'var(--font-ui)', fontSize: 11.5, fontWeight: 600 }}>
                        <Check size={14} strokeWidth={2.4} />
                        Uploaded
                      </span>
                    ) : (
                      <span
                        style={{
                          flex: '0 0 auto',
                          width: 14,
                          height: 14,
                          borderRadius: '50%',
                          border: '2px solid var(--ac-gray-300)',
                          borderTopColor: 'var(--color-primary)',
                          animation: 'ac-spin 0.8s linear infinite',
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <style jsx>{`
        @keyframes ac-spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes ac-pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.35;
          }
        }
        .ac-pulse {
          animation: ac-pulse 1.4s ease-in-out infinite;
        }
        @keyframes ac-drop-in {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .ac-drop {
          animation: ac-drop-in 0.35s cubic-bezier(0.16, 0.8, 0.3, 1);
        }

        /* -------- outer section / panel spacing (desktop values unchanged) -------- */
        .ac-tour-sec {
          padding: 100px 40px 40px;
        }
        .ac-tour-panel {
          padding: 22px;
          min-height: 560px;
        }
        .ac-cam-phone {
          width: 270px;
          height: 544px;
        }

        @media (max-width: 1024px) {
          .ac-g4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .ac-camgrid {
            grid-template-columns: 1fr !important;
          }
        }

        /* ================= MOBILE ONLY (<=640px) ================= */
        @media (max-width: 640px) {
          .ac-tour-sec {
            padding: 56px 20px 32px;
          }
          .ac-tour-panel {
            padding: 14px;
            min-height: 0;
          }
          .ac-tour-lead {
            font-size: 15px !important;
          }

          /* Dashboard header: let title + button wrap instead of overflowing */
          .ac-dash-head {
            flex-wrap: wrap !important;
            row-gap: 12px !important;
          }
          .ac-dash-head > div:first-child {
            flex: 1 1 100% !important;
          }
          .ac-dash-head > div:first-child > div:first-child {
            font-size: 18px !important;
          }

          /* Stat cards: stack instead of 3 cramped columns */
          .ac-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .ac-stats-grid .ac-lift > span {
            font-size: 28px !important;
          }

          /* Contacts table: hide the column header row, stack each field */
          .ac-contact-head {
            display: none !important;
          }
          .ac-contact-row {
            grid-template-columns: 1fr !important;
            row-gap: 6px !important;
            padding: 14px 16px !important;
          }

          /* Boards: single column on narrow phones (2-col from the 1024px
             rule above is still too tight under ~640px) */
          .ac-g4 {
            grid-template-columns: 1fr !important;
          }

          /* AccuraCam phone mockup: scale down so it fits the panel width */
          .ac-cam-phone {
            width: 230px;
            height: 464px;
          }
          .ac-cam-title {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}