# Design Document — Sanjay Sundar BV Personal Homepage

**Course:** CS 5610 - Web Development
**Northeastern University — Khoury College of Computer Sciences**
**Author:** Sanjay Sundar BV
**Live Site:** https://sasu3303.github.io/Personal-Homepage/

---

## 1. Project Description

This project is a personal portfolio homepage for Sanjay Sundar BV, a Computer Science graduate student at Northeastern University's Khoury College. The site serves as a professional hub that showcases his academic background, technical skills, work experience, and projects to potential employers and collaborators.

The homepage is built entirely with vanilla HTML5, CSS3, and ES6+ JavaScript modules — no frameworks, no backend. It features three pages:

- **index.html** — Main homepage with hero, about, skills, experience, certifications, and an interactive terminal emulator (the creative component)
- **projects.html** — Full showcase of 8 projects ranked by complexity
- **contact.html** — AI-generated contact page with availability and social links

The site is designed to feel like it was built by a developer who is actively learning — approachable and genuine, not overly corporate — while the contact page deliberately uses a different, more polished AI-aesthetic design to satisfy the "AI-generated page" rubric requirement.

---

## 2. User Personas

### Persona 1 — Maya, Technical Recruiter

**Age:** 32
**Role:** Senior Technical Recruiter at a Boston-based fintech startup
**Tech comfort:** Medium — can read code but is not a developer

**Background:**
Maya reviews 30+ developer portfolios a week. She needs to quickly assess whether a candidate has the right mix of technical skills and real-world experience. She uses LinkedIn primarily but follows up on GitHub and personal sites.

**Goals:**

- Quickly understand what Sanjay has built and what technologies he knows
- See whether he has real work experience, not just academic projects
- Find his contact information without digging around

**Frustrations:**

- Portfolios that are all style and no substance
- Sites that take too long to load or don't work on her laptop
- No clear way to contact the candidate

**How she uses the site:**
Maya lands on the homepage, skims the hero section to confirm he's open to co-op, scrolls to Skills to check for the tech stack her company uses, then clicks to Projects to see real code. If impressed, she clicks Contact.

---

### Persona 2 — Dr. Anand, CS Professor & Research Collaborator

**Age:** 45
**Role:** Associate Professor at Northeastern Khoury College, researching ML systems
**Tech comfort:** High — deep expertise in ML and systems

**Background:**
Dr. Anand is looking for a capable graduate student to assist with an ML research project. He wants to understand the depth of a student's ML knowledge beyond just course grades — he wants to see what they've built independently.

**Goals:**

- Evaluate the depth and quality of Sanjay's ML projects
- Understand whether Sanjay can work independently on research
- See evidence of published work or technical writing

**Frustrations:**

- Shallow project descriptions with no technical detail
- Sites that list skills without showing them applied in real projects

**How he uses the site:**
Dr. Anand goes directly to the Projects page, reads the Conditional GANs and Autonomous Parking projects in detail, checks the tech stack, then uses the terminal component to quickly query skills and experience.

---

### Persona 3 — Ravi, Fellow CS Student & Peer

**Age:** 24
**Role:** First-year MS CS student at Northeastern, new to web development
**Tech comfort:** High for backend/algorithms, low for frontend

**Background:**
Ravi is Sanjay's classmate who is building his own portfolio and wants to see what a good one looks like. He's curious about the interactive terminal on the site and wants to understand how it was built.

**Goals:**

- Get inspiration for his own portfolio site
- Understand how the interactive terminal works
- See how to present projects effectively

**Frustrations:**

- Sites that are too complex to reverse-engineer
- Overly designed pages that don't teach him anything about HTML/CSS

**How he uses the site:**
Ravi spends most of his time on the terminal section, typing every command to see what it does. He then views the page source to understand the ES6 module structure.

---

## 3. User Stories

### From Maya (Recruiter)

**US-01:** As a recruiter, I want to see Sanjay's availability for co-op at a glance so that I don't waste time if the timing doesn't match.

> _Satisfied by: "Available for Co-op — Jan 2027" badge in the hero section_

**US-02:** As a recruiter, I want to see a clear list of his technical skills so that I can quickly match them against our job requirements.

> _Satisfied by: Skills section with 6 categorized skill boxes — Languages, Databases, Frameworks, AI/ML, Platforms, Dev Tools_

**US-03:** As a recruiter, I want to find his contact information and LinkedIn without scrolling through the whole page so that I can reach out efficiently.

> _Satisfied by: Contact page with email, LinkedIn, GitHub, and location cards all visible above the fold_

**US-04:** As a recruiter, I want to see evidence of real work experience, not just personal projects so that I can assess professional readiness.

> _Satisfied by: Experience section showing 1.5+ years at TVS Credit Services with specific impact metrics (110+ agents trained, 1,000+ daily transactions)_

---

### From Dr. Anand (Professor)

**US-05:** As a professor, I want to see detailed descriptions of Sanjay's ML projects including architecture choices so that I can evaluate his depth of knowledge.

> _Satisfied by: Projects page showing Conditional GANs project with U-Net generator, PatchGAN discriminator, 95% accuracy, and 5 datasets_

**US-06:** As a professor, I want to quickly query Sanjay's experience without reading the full page so that I can save time during my review.

> _Satisfied by: Interactive terminal — typing "experience" or "projects" returns formatted summaries instantly_

**US-07:** As a professor, I want to see projects ranked by complexity so that the most impressive work is immediately visible.

> _Satisfied by: Projects page ordered from Nexus Gaming Hub (most complex) to Voting System (simplest)_

---

### From Ravi (Peer Student)

**US-08:** As a fellow student, I want to interact with something creative on the site so that visiting it is memorable and fun.

> _Satisfied by: Interactive terminal emulator with 9 commands — about, skills, projects, experience, contact, certs, fun, clear, help_

**US-09:** As a fellow student, I want the site to load fast and work without errors so that I can focus on the content.

> _Satisfied by: Static frontend-only site, no backend, W3C validated, Bootstrap 5 for responsive layout_

**US-10:** As a fellow student, I want to see clear file organization so that I can learn from the code structure.

> _Satisfied by: Organized folders — css/, js/, images/ — with ES6 modules and clear naming conventions_

---

## 4. Design Mockups

### Page 1 — index.html (Homepage)

```
+----------------------------------------------------------+
|  <Sanjay />    About  Skills  Experience  Terminal  ...  |  ← Sticky navbar
+----------------------------------------------------------+
|                                                          |
|  👋 Available for Co-op — Jan 2027                      |
|                                                          |
|  Hi, I'm Sanjay Sundar BV                               |  ← Hero section
|  I'm a [typing animation]|                              |
|  CS grad student at Northeastern...                     |
|                                                          |
|  [See My Work]  [Contact Me]                            |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  About Me                                               |  ← About section
|  ────                                                   |
|  [Text left col 7/12]    [1.5+ yrs] [2028]             |
|                          Stat boxes right col 5/12      |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  My Skills                                              |  ← Skills section
|  ────                                                   |
|  [Languages] [Databases] [Frameworks]                   |
|  [AI/ML]     [Platforms] [Dev Tools]                    |
|  Bootstrap 3-col grid, skill pills inside each box      |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  Work Experience                                        |  ← Experience section
|  ────                                                   |
|  [TVS Credit Card — blue left border]                   |
|    Trainee → Developer progression note                 |
|    • bullet points                                      |
|  [Infotech Card]                                        |
|    • bullet points                                      |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  Certifications                                         |  ← Certs section
|  ────                                                   |
|  [SF icon | Agentforce Specialist]                      |
|  [AI icon | AI Associate]                               |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  Interactive Terminal          ← Dark background section |
|  ────                                                   |
|  +--------------------------------------------------+   |
|  | ● ● ●  visitor@sanjay — bash — 80x24            |   |
|  |--------------------------------------------------|   |
|  | visitor@sanjay:~$ █                              |   |
|  +--------------------------------------------------+   |
|                                                          |
+----------------------------------------------------------+
|  © 2026 Sanjay Sundar BV   GitHub  LinkedIn  Email      |  ← Footer
+----------------------------------------------------------+
```

---

### Page 2 — projects.html

```
+----------------------------------------------------------+
|  <Sanjay />    About  Skills  Experience  Terminal  ...  |
+----------------------------------------------------------+
|                                                          |
|  My Projects                                            |  ← Dark hero
|  Everything I've built...                               |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  ⭐ Featured Project                                    |
|  +--------------------------------------------------+   |
|  | Nexus Gaming Hub                                 |   |  ← Full width card
|  | [description left] [highlights right]            |   |
|  | React.js  Node.js  MySQL  Express                |   |
|  +--------------------------------------------------+   |
|                                                          |
|  [Cond. GANs card]      [Respiratio card]               |  ← 2 col row
|                                                          |
|  [Autonomous Parking]   [Home-Service-Mgmt]             |  ← 2 col row
|                                                          |
|  [Airbnb SF Listings]   [Inventory Mgmt]                |  ← 2 col row
|                                                          |
|  [Voting System]                                        |  ← 1 col
|                                                          |
+----------------------------------------------------------+
|  © 2026 Sanjay Sundar BV   GitHub  LinkedIn  Email      |
+----------------------------------------------------------+
```

---

### Page 3 — contact.html (AI-Generated)

```
+----------------------------------------------------------+
|  <SSB/>   About  Skills  Experience  Terminal  Projects  |  ← Cyberpunk nav
+----------------------------------------------------------+
|  // contact.init()                                      |
|                                                          |
|  Let's Connect                                          |  ← Glowing gradient title
|  Open to co-op opportunities...                         |
+----------------------------------------------------------+
|  +------------------------------------------------+     |
|  |  ● Available for Co-op                        |     |  ← Availability banner
|  |  Open to Co-op — Starting January 2027        |     |
|  |  [Reach Out →]                                |     |
|  +------------------------------------------------+     |
+----------------------------------------------------------+
|  Get In Touch                                           |
|                                                          |
|  [✉ Email]  [in LinkedIn]  [</> GitHub]                |  ← 3 col grid
|  [⚓ Location] [🎓 University] [🕐 Response Time]      |
+----------------------------------------------------------+
|  What I'm Looking For                                   |
|                                                          |
|  [💻 Full-Stack]  [🧠 AI/ML]                           |  ← 2 col grid
|  [☁ Enterprise]  [🚀 Open to Explore]                 |
+----------------------------------------------------------+
|  [AI-Generated Page badge]                              |
|  This page was generated with Claude (Anthropic)...     |
+----------------------------------------------------------+
|  © 2026 Sanjay Sundar BV   GitHub  LinkedIn  Email      |
+----------------------------------------------------------+
```

---

## 5. Color Palette & Typography

### index.html + projects.html (Hand-coded style)

| Element        | Value                                   |
| -------------- | --------------------------------------- |
| Background     | `#1a1a2e` (dark navy)                   |
| Primary accent | `#4fc3f7` (sky blue)                    |
| Secondary bg   | `#f8f9fa` (light gray for alt sections) |
| Text           | `#333` on light, `#ccc` on dark         |
| Font           | Poppins (body), Fira Code (terminal)    |

### contact.html (AI-generated style)

| Element          | Value                                                  |
| ---------------- | ------------------------------------------------------ |
| Background       | `#0a0a0f` (near black)                                 |
| Primary accent   | `#00e5ff` (cyan)                                       |
| Secondary accent | `#7b2ff7` (purple)                                     |
| Font             | Orbitron (headings), Rajdhani (body), Fira Code (mono) |

---

## 6. Accessibility & Technical Decisions

- All sections have `aria-labelledby` attributes linking to their headings
- All images include `alt` attributes
- Navigation has `aria-label="Main navigation"`
- Heading hierarchy follows H1 → H2 → H3 strictly (W3C validated)
- Color contrast ratio maintained above 4.5:1 for text
- Site is fully responsive — tested at 375px (mobile), 768px (tablet), 1280px (desktop)
- ES6 modules used with `type="module"` on all script tags
- No jQuery, no component libraries for index/projects pages
- Bootstrap 5.3 used for grid layout only
