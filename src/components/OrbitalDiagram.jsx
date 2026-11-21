import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Box, X } from "lucide-react";

export default function OrbitalDiagram() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const pointerFocus = useRef(false);
  const reduceMotion = useReducedMotion();

  function close() {
    setOpen(false);
    // Return focus without reopening the focus-triggered disclosure.
    pointerFocus.current = true;
    trigger.current?.focus();
    pointerFocus.current = false;
  }

  return (
    <div
      className={`orbital-disclosure${open ? " is-open" : ""}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && !event.currentTarget.contains(document.activeElement)) setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          close();
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="orbital-trigger"
        aria-label="The philosophy behind the orbital diagram"
        aria-expanded={open}
        aria-controls="engineering-philosophy"
        onPointerDown={() => { pointerFocus.current = true; }}
        onPointerCancel={() => { pointerFocus.current = false; }}
        onFocus={() => {
          if (!pointerFocus.current) setOpen(true);
        }}
        onClick={(event) => {
          // Mouse interaction follows hover; touch and keyboard activate a toggle.
          if (event.detail === 0 || event.nativeEvent.pointerType !== "mouse") setOpen(value => !value);
          pointerFocus.current = false;
        }}
      >
        <svg
            className="network"
            viewBox="0 0 480 380"
            role="img"
            aria-label="Abstract engineering network connecting software, machine learning, and intelligent systems"
          >
            <defs>
              <pattern
                id="dots"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="#414856" />
              </pattern>
            </defs>
            <rect width="480" height="380" fill="url(#dots)" />
            <g className="orbit-paths" fill="none" stroke="#384459">
              <path d="M240 65 380 145 380 260 240 340 100 260 100 145Z" />
              <path d="m240 65 0 275M100 145l280 115M380 145 100 260M100 145l140 80 140-80M100 260l140-80 140 80" />
              <ellipse
                cx="240"
                cy="205"
                rx="173"
                ry="65"
                transform="rotate(-30 240 205)"
              />
              <ellipse
                cx="240"
                cy="205"
                rx="173"
                ry="65"
                transform="rotate(30 240 205)"
              />
            </g>
            <g className="orbit-nodes" fill="#101113" stroke="#8da9ed" strokeWidth="1.5">
              {[
                [240, 65],
                [380, 145],
                [380, 260],
                [240, 340],
                [100, 260],
                [100, 145],
              ].map(([x, y]) => (
                <circle key={x + ":" + y} cx={x} cy={y} r="5" />
              ))}
            </g>
            <path
              className="orbit-cube"
              d="m240 161 39 22v44l-39 23-39-23v-44Z"
              fill="#1c2a46"
              stroke="#a2baff"
            />
            <path
              className="orbit-cube"
              d="m201 183 39 23 39-23m-39 23v44"
              fill="none"
              stroke="#a2baff"
            />
            <text
              x="49"
              y="96"
              fill="#9099a9"
              fontSize="10"
              fontFamily="monospace"
            >
              IDEA
            </text>
            <text
              x="365"
              y="325"
              fill="#9099a9"
              fontSize="10"
              fontFamily="monospace"
            >
              IMPLEMENTATION
            </text>
          </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="philosophy-slot"
            key="philosophy"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.section
              id="engineering-philosophy"
              className="philosophy-panel"
              aria-labelledby="philosophy-title"
              initial={{ y: reduceMotion ? 0 : 8 }}
              animate={{ y: 0 }}
              exit={{ y: reduceMotion ? 0 : 8 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
            >
              <div className="philosophy-heading">
                <Box size={20} aria-hidden="true" />
                <h2 id="philosophy-title">The Philosophy Behind the Design</h2>
                <button type="button" className="philosophy-close" aria-label="Close philosophy panel" onClick={close}><X size={18} aria-hidden="true" /></button>
              </div>
              <p>Every meaningful solution begins with curiosity.</p>
              <p>I believe engineering something is rarely a straight line.</p>
              <p>The central cube represents an idea waiting to take shape. The interconnected paths symbolize knowledge, experimentation, and the different approaches that bring an idea to life.</p>
              <p>For me, engineering is the journey from <span>curiosity to code to possibility</span> — turning ideas into practical solutions.</p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
