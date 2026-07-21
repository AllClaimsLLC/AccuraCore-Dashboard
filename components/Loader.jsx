"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader({ duration = 5000, onEnter }) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const dismissedRef = useRef(false);

useEffect(() => {
  const leaveTimer = setTimeout(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setLeaving(true);
  }, duration);

  return () => clearTimeout(leaveTimer);
}, [duration]);

useEffect(() => {
  if (!leaving) return;

  const t = setTimeout(() => {
    setVisible(false);
    onEnter?.();
  }, 200);

  return () => clearTimeout(t);
}, [leaving, onEnter]);

  if (!visible) return null;

  return (
<div className={`loader ${leaving ? "loaderOut" : ""}`}>
      <div className="backdrop" />

      <div className="content">
        <div className="mark">
          <svg
            viewBox="46 0 74 62"
            width="168"
            height="140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient
                id="acloadorange"
                x1="139.34"
                y1="6.87"
                x2="50.34"
                y2="58.26"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AD4D32" />
                <stop offset="1" stopColor="#FA8C3D" />
              </linearGradient>
            </defs>

            <g className="blue">
              <path
                d="M118.779 60.45H56.4395L66.4895 54.55H108.139L98.0595 37.27L102.979 34L118.779 60.45Z"
                fill="#1161A5"
              />
              <path
                d="M82.8309 0L100.531 29.95L95.1809 32.09L94.9009 32.06L82.7209 11.87L67.6509 37.17L57.2109 42.76L82.8309 0Z"
                fill="#1161A5"
              />
            </g>

            <g className="orange">
              <path
                d="M46.8105 60.4501L46.8705 60.16L55.3705 45.8801L65.7205 40.12L65.8305 40.16L60.6305 48.85L60.8105 48.87C71.1505 44.22 81.5005 39.5701 92.0505 35.4001L114.471 25.3L98.7205 34.7001C83.5305 43.5101 68.0705 51.8701 52.7505 60.4501H46.8105Z"
                fill="url(#acloadorange)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}