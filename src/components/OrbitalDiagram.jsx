import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Box, X } from "lucide-react";

export default function OrbitalDiagram() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const pointerFocus = useRef(false);
  const keyboardFocus = useRef(false);
  const pointerType = useRef("mouse");
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
        if (event.pointerType === "mouse" && !keyboardFocus.current)
          setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          keyboardFocus.current = false;
          setOpen(false);
        }
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
        onPointerDown={(event) => {
          pointerFocus.current = true;
          keyboardFocus.current = false;
          pointerType.current = event.pointerType;
        }}
        onPointerCancel={() => {
          pointerFocus.current = false;
        }}
        onFocus={() => {
          if (!pointerFocus.current) {
            keyboardFocus.current = true;
            setOpen(true);
          }
          pointerFocus.current = false;
        }}
        onClick={(event) => {
          // Mouse interaction follows hover; touch and keyboard activate a toggle.
          if (event.detail === 0 || pointerType.current !== "mouse")
            setOpen((value) => !value);
          pointerFocus.current = false;
        }}
      >
        <svg
          className="network"
          viewBox="0 0 480 420"
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
              <circle cx="1" cy="1" r="1" fill="#356577" />
            </pattern>
          </defs>
          <rect width="480" height="420" fill="url(#dots)" />
          <g className="orbit-paths" fill="none" stroke="#42788b">
            <path d="M240 45 405 135 405 285 240 380 75 285 75 135Z" />
            <path d="M240 45V380M75 135 405 285M405 135 75 285M75 135l165 95 165-95M75 285l165-95 165 95" />
            <ellipse
              cx="240"
              cy="212"
              rx="192"
              ry="76"
              transform="rotate(-30 240 212)"
            />
            <ellipse
              cx="240"
              cy="212"
              rx="192"
              ry="76"
              transform="rotate(30 240 212)"
            />
          </g>
          <g
            className="orbit-nodes"
            fill="#101113"
            stroke="#67d5e8"
            strokeWidth="2.5"
          >
            {[
              [240, 45],
              [405, 135],
              [405, 285],
              [240, 380],
              [75, 285],
              [75, 135],
            ].map(([x, y]) => (
              <circle key={x + ":" + y} cx={x} cy={y} r="7" />
            ))}
          </g>
          <g className="orbit-cube" stroke="#67d5e8" strokeWidth="1.5" strokeLinejoin="round">
            <path className="cube-top" d="M240 158 292 188 240 218 188 188Z" fill="#176681" />
            <path className="cube-left" d="M188 188 240 218V278L188 248Z" fill="#143d52" />
            <path className="cube-right" d="M240 218 292 188V248L240 278Z" fill="#102e42" />
          </g>
          <text
            x="12"
            y="92"
            fill="#9fcbd9"
            fontSize="11"
            fontFamily="monospace"
          >
            IDEA
          </text>
          <text
            x="320"
            y="402"
            fill="#9fcbd9"
            fontSize="11"
            fontFamily="monospace"
          >
            IMPLEMENTATION
          </text>
        </svg>
      </button>
      <motion.div
        className="philosophy-slot"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        aria-hidden={!open}
        inert={!open}
        transition={{
          duration: reduceMotion ? 0 : 0.35,
          delay: open && !reduceMotion ? 0.16 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.section
          id="engineering-philosophy"
          className="philosophy-panel"
          aria-labelledby="philosophy-title"
          initial={false}
          animate={{ y: open || reduceMotion ? 0 : 8 }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
        >
          <div className="philosophy-heading">
            <Box size={20} aria-hidden="true" />
            <h2 id="philosophy-title">The Philosophy Behind the Design</h2>
            <button
              type="button"
              className="philosophy-close"
              aria-label="Close philosophy panel"
              onClick={close}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <p>Every meaningful solution begins with curiosity.</p>
          <p>I believe engineering something is rarely a straight line.</p>
          <p>
            The central cube represents an idea waiting to take shape. The
            interconnected paths symbolize knowledge, experimentation, and the
            different approaches that bring an idea to life.
          </p>
          <p>
            For me, engineering is the journey from{" "}
            <span>curiosity to code to possibility</span> — turning ideas into
            practical solutions.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}
