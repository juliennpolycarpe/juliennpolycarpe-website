# Julien Polycarpe — Portfolio Website

A personal portfolio site showcasing my coursework, projects, work experience, and resume as a student studying Electrical & Computer Engineering and Computer Science at WPI.

**Live site:** https://juliennpolycarpe.github.io/juliennpolycarpe-website/ *(once GitHub Pages is enabled — see Deployment below)*

## What's on the site

- **Home** — landing page with intro and photo
- **About** — background and involvement outside class
- **Experience** — internships and work history, one page per role
- **Projects** — software and hardware projects, one page per project
- **Coursework** — classes taken, organized by department with filterable category tabs
- **Skills** — languages, frameworks/tools, and concepts
- **Contact** — email, LinkedIn, and GitHub

## Project structure

```
juliennpolycarpe-website/
├── index.html              Home page
├── about.html
├── experience.html         Index of roles → links to experience/*.html
├── projects.html           Index of projects → links to projects/*.html
├── coursework.html
├── skills.html
├── contact.html
├── styles.css               Shared styles for every page
├── common.js                 Shared sidebar/nav, injected into every page
├── assets/                     Images
├── experience/
│   ├── stv.html
│   ├── eastchester.html
│   └── sweetgreen.html
└── projects/
    ├── insurance-web-platform.html
    ├── balloon-popping-arm.html
    ├── greenhouse-climate-data-system.html
    ├── four-way-traffic-intersection.html
    ├── ball-sorting-machine.html
    ├── autonomous-wall-following-car.html
    ├── lcd-jukebox.html
    └── portfolio-website.html
```

This is a static site — plain HTML, CSS, and JavaScript, no build step or framework. The sidebar (nav links, icons, collapse behavior, mobile menu) lives in one place, `common.js`, and is injected into every page so it never has to be copy-pasted or kept in sync by hand.

## Running it locally

No installation or build step is required — just a way to serve the files so relative paths and scripts work correctly.

**Option 1 — VS Code Live Server (recommended)**
1. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions panel
2. Right-click `index.html` in the file explorer
3. Choose **"Open with Live Server"**
4. The site opens in your browser and auto-refreshes whenever you save a change

**Option 2 — open the file directly**
Double-click `index.html` to open it in your browser. This works, but a couple of things (like the shared sidebar loading via script) are more reliable when served over `http://` rather than as a raw `file://` path — Live Server is the better option while actively editing.

## Making changes

- To edit a page's content, edit the corresponding `.html` file directly.
- To change something that appears on every page (nav links, sidebar icons, footer), edit `common.js` and/or `styles.css` — it applies everywhere automatically.
- To add a new Experience or Project entry: add a new `.html` file in `experience/` or `projects/` (copy an existing one as a template), then add a matching link to `experience.html` or `projects.html`.

## Deployment

The site is hosted for free with **GitHub Pages**, served directly from this repository:

1. On GitHub, go to **Settings → Pages**
2. Under "Build and deployment," set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` and folder to `/ (root)`
4. Save — GitHub will publish the site at `https://juliennpolycarpe.github.io/juliennpolycarpe-website/` within a minute or two

Any time changes are pushed to `main`, the live site updates automatically.
