# Saksham Bhujel — Developer Portfolio

A responsive, accessible portfolio for a final-year Computer Engineering undergraduate from Nepal. Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. No backend or secrets are required.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Customize

- `src/data/profile.js`: email, LinkedIn, résumé URL, college, academic years, skills, and project-based experience. Replace `null` with verified values. Add a résumé PDF to `public/` and set `resumeUrl` to `/resume.pdf`.
- `src/data/projects.js`: all six projects, correct repositories, descriptions, problem statements, contributions, screenshot paths, and optional live demos. Missing contributions are explicitly labeled; missing repository/demo links are not fabricated. Add screenshot files to `public/` and set `image` to their path. Current artwork is conceptual, not a screenshot.
- `src/components/`: navigation, hero, background sections, projects, contact, and reusable UI.
- `src/styles.css`: design tokens, layouts, responsive rules, and reduced-motion support.
- `index.html`: title, description, and Open Graph metadata. Add an absolute `og:image` and `og:url` when your final domain and share image are available.

## Contact and résumé

GitHub works immediately. Email and LinkedIn are visibly unavailable until configured. The résumé buttons open an accessible explanation until an actual file is configured. With a résumé URL configured they become download links. No form pretends to send a message. A contact backend is optional; if added later, validate inputs server-side, rate-limit submissions, add a honeypot or challenge, and keep email credentials on the server.

## Deployment

Run `npm run build` and deploy `dist/` to any static host such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages. Use build command `npm run build` and output directory `dist`. For a subdirectory deployment set Vite's `base` option accordingly. All navigation is on-page and needs no router or backend. `.openai/hosting.json` records the associated private Sites deployment.

## Verification

Check desktop and mobile layouts, project filters, expandable details, mobile menu, section links, résumé dialog, external repository links, and keyboard focus. Framer Motion honors reduced-motion preferences. No claims of employment, model accuracy, awards, or certifications are included.
