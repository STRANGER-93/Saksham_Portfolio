# Saksham Bhujel — Developer Portfolio

React, Vite, Tailwind CSS, Framer Motion, and Lucide React. Static site; no backend or credentials required.

## Development and Vercel

Use Node.js 22.12+ (build also verified with Node 24).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Vercel: framework Vite, build command `npm run build`, output directory `dist`. Canonical domain: https://saksham-portfolio-theta-liard.vercel.app/. Changes in this checkout have not been deployed.

## Editing the portfolio

- `src/data/profile.js`: verified contact information, education, skills, and project-based experience.
- `src/data/projects.js`: all six projects, descriptions, contributions, optional screenshots, repositories and demos. Optional `implementation`, `challenges`, `results`, and `limitations` fields appear in expanded details only when supplied. Do not add unsupported claims.
- `src/components/`: existing section components and shared controls. The circular photo keeps its four social links, hover reveal, keyboard reveal, and always-visible touch controls.
- `src/styles.css`: centralized charcoal/navy design tokens, typography, section styles, responsive layouts, and reduced-motion behavior.
- `src/artwork.css`: original conceptual project artwork, separated from layout styling. No screenshots have been replaced.
- `index.html`: canonical, title, description, Open Graph and Twitter metadata. An actual social sharing asset is still needed before adding image metadata.

The font stack uses Inter when installed, then Segoe UI and system fallbacks, without a remote font request. Main content uses 16px body text; labels use a smaller secondary scale. Accent color is reserved for actions, focus states and small highlights. Mobile layouts stack content deliberately rather than scaling the desktop down.

## Assets and missing information

The existing résumé (`public/SAKSHAM_BHUJEL_CV.pdf`), photo (`public/saksham-bhujel.jpeg`), and favicon (`public/favicon.svg`) are present. Screenshots, live demos, the NotesAPP and Bike Rental repository URLs, and a dedicated social sharing image remain unavailable. Grades, certifications, awards, detailed challenges and measured results have not been supplied and are not fabricated.

## Verification — November 21, 2026

- Production build passes.
- Server rendering passes with all section anchors, six expandable project details, and configured social/contact/repository links present.
- Compared project records, profile values, skills, experience, and original artwork with the previous Git revision: preserved (formatting and skill regrouping aside).
- Confirmed configured local image, résumé and favicon assets exist.
- Responsive breakpoints, keyboard focus styles and reduced-motion handling reviewed in source.
- Browser interaction, mobile visual QA, console inspection and destination availability are not fully verified: the in-app browser timed out and Chrome automation failed. Run the manual checklist below before publishing.

### Manual browser checklist

1. Inspect at 320, 390, 768, 1024 and 1440px; confirm no horizontal scrolling.
2. Navigate all section links. Open the mobile menu, select a link, and test Escape/focus return.
3. Select All projects (6), Full-stack (4), and AI & ML (3); expand and collapse project details using mouse and keyboard.
4. Hover and tab into the portrait; confirm all four social destinations. Check touch controls.
5. Download the résumé and check email, GitHub and LinkedIn actions.
6. Enable reduced motion and check focus visibility, text zoom, console errors and image loading.
