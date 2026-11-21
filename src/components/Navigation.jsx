import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ResumeButton } from "./UI";
const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuButton = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    links.forEach((label) => {
      const el = document.getElementById(label.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header>
      <div className="nav-shell">
        <a className="logo" href="#home" aria-label="Saksham Bhujel home">
          SB<span>.</span>
        </a>
        <nav
          id="main-navigation"
          className={open ? "open" : ""}
          aria-label="Main navigation"
        >
          {links.map((label) => (
            <a
              key={label}
              href={"#" + label.toLowerCase()}
              aria-current={
                active === label.toLowerCase() ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ResumeButton compact />
          <button
            ref={menuButton}
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
