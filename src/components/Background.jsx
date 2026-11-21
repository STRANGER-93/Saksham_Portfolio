import {
  Code2,
  Database,
  Braces,
  BrainCircuit,
  Terminal,
  Compass,
  Server,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import { profile, skills, experience } from "../data/profile";
import { Reveal, SectionHeading } from "./UI";
import ProfilePhoto from "./ProfilePhoto";
const icons = [
  Code2,
  Braces,
  Server,
  Database,
  BrainCircuit,
  Terminal,
  Compass,
];
export function About() {
  return (
    <section id="about" className="section about-section">
      <Reveal>
        <SectionHeading
          number="01"
          eyebrow="THE PERSON BEHIND THE CODE"
          title="A Little About Me"
        />
        <div className="about-grid">
          <div className="about-identity">
            <ProfilePhoto />
            <p className="about-lead">
              Software, grounded
              <br />
              in <span>real problems.</span>
            </p>
          </div>
          <div className="about-copy">
            <p>
              I'm a final-year Computer Engineering undergraduate at Advanced
              College of Engineering and Management, affiliated with Tribhuvan
              University / Institute of Engineering.
            </p>
            <p>
              Through academic and personal projects, I’ve worked on frontend
              interfaces, backend systems, databases, and machine learning
              applications. I’m interested in turning real-world problems into
              useful software.
            </p>
            <p>
              I’m now exploring AI engineering, retrieval-augmented generation,
              and cybersecurity, and looking for an internship where I can
              contribute and learn.
            </p>
            <div className="about-values">
              <span>Practical problem solving</span>
              <span>Continuous learning</span>
              <span>Engineering with purpose</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
export function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <SectionHeading
          number="02"
          eyebrow="TECHNICAL TOOLKIT"
          title="The tools behind the work."
        >
          Technologies I use in projects, alongside the areas I’m actively
          exploring.
        </SectionHeading>
      </Reveal>
      <div className="skills-grid">
        {skills.map(([title, items], i) => {
          const Icon = icons[i];
          return (
            <Reveal key={title} className="skill-card">
              <Icon size={21} />
              <h3>{title}</h3>
              <div className="tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <SectionHeading
          number="04"
          eyebrow="LEARNING THROUGH DOING"
          title="Education & practical experience."
        >
          My practical foundation is built through academic work, personal
          projects, and collaborative development.
        </SectionHeading>
      </Reveal>
      <div className="experience-grid">
        <Reveal>
          <div className="timeline">
            {[experience[3], ...experience.slice(0, 3)].map(
              ([title, desc], i) => (
                <article key={title}>
                  <span className="timeline-dot" />
                  <p className="eyebrow">
                    {i === 0
                      ? "FEBRUARY 2026 · HACKATHON"
                      : "PROJECT-BASED LEARNING"}
                  </p>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ),
            )}
          </div>
        </Reveal>
        <Reveal>
          <aside className="education">
            <GraduationCap size={27} />
            <p className="eyebrow">EDUCATION</p>
            <span className="final-year">FINAL YEAR</span>
            <h3>
              Bachelor’s Degree in
              <br />
              Computer Engineering
            </h3>
            <p>
              Tribhuvan University / Institute of Engineering affiliated college
            </p>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>Nepal</dd>
              </div>
              <div>
                <dt>College</dt>
                <dd>{profile.college || "To be added"}</dd>
              </div>
              <div>
                <dt>Enrollment</dt>
                <dd>{profile.enrollmentYear || "To be added"}</dd>
              </div>
              <div>
                <dt>Expected graduation</dt>
                <dd>{profile.graduationYear || "To be added"}</dd>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>
      <Reveal className="learning">
        <div>
          <p className="eyebrow">CURRENTLY EXPLORING</p>
          <h3>Always Learning. Always Building.</h3>
        </div>
        <div className="learning-tags">
          {[
            "Retrieval-Augmented Generation (RAG)",
            "AI Engineering",
            "Cybersecurity Fundamentals",
            "Networking and Telecommunications",
          ].map((t) => (
            <span key={t}>
              {t}
              <ArrowUpRight size={13} />
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
