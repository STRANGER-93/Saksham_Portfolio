import { Github, Facebook, Instagram, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

const socials = [
  { name: "GitHub", href: profile.github, Icon: Github },
  {
    name: "Facebook",
    href: "https://www.facebook.com/93.saksham",
    Icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/saksham__bhujel/",
    Icon: Instagram,
  },
  { name: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
];

export default function ProfilePhoto() {
  return (
    <div className="profile-picture">
      <img
        className="profile-photo"
        src={profile.photoUrl}
        alt="Saksham’s display picture: sunglasses with Himalayan mountains in the background"
        width="210"
        height="210"
        loading="lazy"
      />
      <div
        className="profile-socials"
        role="group"
        aria-label="Saksham’s social profiles"
      >
        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
            title={name}
          >
            <Icon size={22} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
