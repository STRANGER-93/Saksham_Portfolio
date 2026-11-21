import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal, ExternalLink, ResumeButton } from "./UI";
function ContactItem({ icon: Icon, label, value, href }) {
  return href ? (
    <ExternalLink className="contact-item" href={href}>
      <Icon size={20} />
      <div>
        <span>{label}</span>
        <b>{value}</b>
      </div>
    </ExternalLink>
  ) : (
    <div className="contact-item unavailable">
      <Icon size={20} />
      <div>
        <span>{label}</span>
        <b>Details coming soon</b>
      </div>
      <span className="pending">To be added</span>
    </div>
  );
}
export default function Contact() {
  return (
    <>
      <section id="contact" className="section contact-section">
        <Reveal>
          <p className="eyebrow">
            <span>05 /</span> LET’S BUILD SOMETHING MEANINGFUL
          </p>
          <div className="contact-grid">
            <div>
              <h2>
                Have an Opportunity
                <br />
                or Interesting <span>Project?</span>
              </h2>
              <p>
                I'm always interested in connecting with engineers, developers,
                and organizations working on meaningful technology projects.
              </p>
              <p>
                If you're looking for an enthusiastic Computer Engineering
                intern, I'd love to hear from you.
              </p>
              <div className="contact-actions">
                <ResumeButton />
                <span className="availability">
                  <span />
                  Open to internships
                </span>
              </div>
            </div>
            <div className="contact-links">
              <ContactItem
                icon={Mail}
                label="EMAIL"
                value={profile.email}
                href={profile.email ? `mailto:${profile.email}` : null}
              />
              <ContactItem
                icon={Linkedin}
                label="LINKEDIN"
                value="Let’s connect"
                href={profile.linkedin}
              />
              <ContactItem
                icon={Github}
                label="GITHUB"
                value="STRANGER-93"
                href={profile.github}
              />
            </div>
          </div>
        </Reveal>
      </section>
      <footer>
        <div>
          <a className="logo" href="#home">
            SB<span>.</span>
          </a>
          <div>
            <b>Saksham Bhujel</b>
            <p>Computer Engineering Undergraduate.</p>
          </div>
        </div>
        <div className="footer-links">
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          {profile.linkedin ? (
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          ) : (
            <span>LinkedIn · coming soon</span>
          )}
          {profile.email ? (
            <a href={`mailto:${profile.email}`}>Email</a>
          ) : (
            <span>Email · coming soon</span>
          )}
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Saksham Bhujel. All rights reserved.
          </p>
          <a href="#home" aria-label="Back to top">
            <ArrowUp size={17} />
          </a>
        </div>
      </footer>
    </>
  );
}
