# Sanjay Sundar BV — Personal Homepage

A personal portfolio website built with vanilla HTML5, CSS3, and ES6+ modules. Features an interactive terminal component, typing animations, scroll-triggered experience timeline. The contact page was generated with AI assistance to demonstrate modern AI-assisted development workflows.

---

## Project Objective

Build a personal homepage using vanilla HTML5, CSS3, and ES6+ as a front-end only static site. The page showcases my professional background, technical skills, work experience, projects, and certifications. It includes an original creative component:

- A **technical demonstration** of vanilla web engineering with ES6 modules
- An **interactive terminal emulator** — visitors type commands to explore my profile

---

## Screenshot

![Homepage Screenshot](images/screenshot.png)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main homepage — hero, about, skills, experience, certifications, interactive terminal |
| `projects.html` | Full project showcase |
| `contact.html` | Contact info, availability, and co-op details (AI-generated page) |

---

## Creative Component

**Interactive Terminal Emulator** — a fully functional command-line interface embedded in the homepage. Visitors type commands like `about`, `skills`, `projects`, `experience`, `contact`, `certs`, `fun`, `clear`, and `help` to explore my profile in a developer-friendly way. Built entirely with vanilla ES6+ JavaScript (~250 lines of original code).

---

## Tech Requirements

- **Core Structure:** HTML5 — semantic tags, accessible markup, W3C compliant
- **Styling:** CSS3 — custom properties, flexbox, CSS grid, keyframe animations, no `!important`
- **Layout Framework:** Bootstrap 5.3 — grid system, responsiveness utilities (index + projects pages)
- **Fonts:** Google Fonts — Poppins for body, Fira Code for terminal, Orbitron/Rajdhani for contact page
- **Scripting:** ES6+ JavaScript Modules — IntersectionObserver, typewriter animation, terminal command engine
- **Linting:** ESLint with `eslint:recommended` rules
- **Formatting:** Prettier with 2-space indent, double quotes, trailing commas

---

## File Structure

```
homepage/
├── index.html              # Main homepage (hero, about, skills, experience, terminal)
├── projects.html           # Projects showcase — 8 projects ranked by complexity
├── contact.html            # Contact page (AI-generated — different visual style)
├── css/
│   ├── styles.css          # Global styles — navbar, hero, about, skills, experience
│   ├── projects.css        # Projects page specific card styles
│   ├── terminal.css        # Interactive terminal component styles
│   └── contact-ai.css      # Polished AI-styled contact page (separate design system)
├── js/
│   ├── app.js              # Entry point — imports and initialises all modules
│   ├── main.js             # Navigation toggle, scroll animations, active nav highlight
│   ├── terminal.js         # Full terminal engine — commands, output rendering, input handling
│   └── typing.js           # Typewriter animation for hero section role cycling
├── images/
│   ├── favicon.svg         # SVG site favicon
│   └── screenshot.png      # Homepage screenshot (for README)
├── package.json            # Project metadata, scripts, and dev dependencies
├── .eslintrc.json          # ESLint configuration (es2021, browser env, recommended rules)
├── .prettierrc             # Prettier formatting configuration
├── LICENSE                 # MIT License
└── README.md               # This file
```

---

## Instructions to Build

### Prerequisites

- [Node.js](https://nodejs.org) installed (LTS version recommended)
- [Git](https://git-scm.com) installed

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sasu3303/homepage.git
   cd homepage
   ```

2. **Install dev dependencies:**
   ```bash
   npm install
   ```

3. **Run ESLint:**
   ```bash
   npm run lint
   ```

4. **Format with Prettier:**
   ```bash
   npm run format
   ```

### Running Locally

**Node.js serve:**
```bash
npx serve .
```
Then open `http://localhost:3000` in your browser.


---

## GenAI Tools Usage

**Tool:** Claude (Anthropic) — model `claude-sonnet-4-6`
**Platform:** claude.ai web interface
**Date:** May 2026

### AI Usage Highlights

- **Contact page (AI-generated page):** The entire `contact.html` and `contact-ai.css` were designated as the AI-generated page, with a visibly different design system (cyberpunk/dark theme vs the beginner Bootstrap style of the other pages).
  - *Prompt used:* "Generate a polished, AI-aesthetic contact page that looks visually different from the rest of the site — like it was made by AI rather than a beginner developer."

- **Content and copy editing:** Work experience bullet points, about me section, and project descriptions were refined with Claude based on my original resume content.

- **Debugging and iteration:** Used Claude to troubleshoot CSS layout issues, fix nav hamburger toggle on mobile, and update content across multiple iterations.

---

## Video Demonstration

🎥 [Watch the demo video](#) *(add your video link here after recording)*

---

## Author

**Sanjay Sundar BV**
- Homepage: [sasu3303.github.io/homepage](https://sasu3303.github.io/homepage)
- Education: M.S. Computer Science — Northeastern University, Boston (Expected May 2028)
- Email: [sanjaysundar.bv@gmail.com](mailto:sanjaysundar.bv@gmail.com)
- LinkedIn: [linkedin.com/in/sanjaysundarbv](https://www.linkedin.com/in/sanjaysundarbv/)
- GitHub: [github.com/sasu3303](https://github.com/sasu3303)

---

## Class Link

**CS 5610 - Web Development**
Northeastern University — Khoury College of Computer Sciences

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
