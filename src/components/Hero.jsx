import OrbitalDiagram from "./OrbitalDiagram";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, ResumeButton } from "./UI";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <Reveal>
          <div className="availability">
            <span />
            Open to Internship Opportunities
          </div>
          <p className="hero-name">HELLO, I’M SAKSHAM BHUJEL</p>
          <h1>
            Building Practical<br />Solutions<br />Through <span>Code.</span>
          </h1>
          <p className="hero-description">
            I'm Saksham Bhujel, a Computer Engineering undergraduate passionate
            about software development, artificial intelligence, and solving
            real-world engineering problems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Explore My Projects <ArrowRight size={17} />
            </a>
            <ResumeButton />
          </div>
          <div className="hero-socials">
            <a href="#contact">Contact Me <ArrowUpRight size={16} /></a>
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
