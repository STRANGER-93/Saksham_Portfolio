import OrbitalDiagram from "./OrbitalDiagram";
import { ArrowDown, MapPin, Github, Linkedin } from "lucide-react";
import { Reveal, ResumeButton, ExternalLink } from "./UI";
import { profile } from "../data/profile";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <Reveal>
          <div className="availability">
            <span />
            Open to Internship Opportunities
          </div>
          <p className="hero-name">COMPUTER ENGINEERING UNDERGRADUATE</p>
          <h1>
            Saksham Bhujel<span>.</span>
          </h1>
          <p className="hero-description">
            Building practical software solutions with a focus on AI, backend
            engineering, and intelligent applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View Projects
            </a>
            <ResumeButton />
          </div>
          <div className="hero-socials">
            <ExternalLink href={profile.github}>
              <Github size={18} />
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin}>
              <Linkedin size={18} />
              LinkedIn
            </ExternalLink>
          </div>
        </Reveal>
        <Reveal className="hero-art">
          <div className="art-label">
            <span className="status-dot" /> A MIND IN DEVELOPMENT{" "}
            <span>01 — ∞</span>
          </div>
          <OrbitalDiagram />
          <div className="code-caption">
            <span className="code-slash">&lt;/&gt;</span>
            <div>
              <b>Curiosity → code → possibility</b>
              <p>
                Exploring the intersection of software engineering, machine
                learning, and intelligent systems.
              </p>
            </div>
            <span className="tiny-plus">+</span>
          </div>
        </Reveal>
      </div>
      <div className="hero-bottom">
        <p>
          <MapPin size={14} /> Kathmandu, Nepal <span className="divider" />{" "}
          Computer Engineering · Final Year
        </p>
        <a href="#about">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </div>
      <div className="interest-strip">
        <span>SOFTWARE DEVELOPMENT</span>
        <i>+</i>
        <span>ARTIFICIAL INTELLIGENCE</span>
        <i>+</i>
        <span>MACHINE LEARNING</span>
        <i>+</i>
        <span>ENGINEERING CURIOSITY</span>
      </div>
    </section>
  );
}
