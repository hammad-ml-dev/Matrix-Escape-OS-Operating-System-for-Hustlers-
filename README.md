# Matrix Escape OS (Operating System for Hustlers)

## Summary

Matrix Escape OS is a **frontend-only** portfolio-style web app that acts as an **AI mentor + action toolkit + design lab + roadmap builder** for people who want to move beyond a 9–5 and build income online. The UI is a single dashboard with a **compact navigation rail**, **theme toggle** (light ↔ dark), a **welcome modal** on first visit, and **feature pages** for escape planning, viral prompts, SEO copy, design feedback, learning resources, tool recommendations, and side-hustle ideas. Content is generated with **client-side logic** (templates and structured flows)—no backend or API keys are required to run the app locally.

**Tagline:** *You are not stuck — you are untrained. This app is your OS to escape the Matrix.*

---

## Technologies

- **Frontend**: **React 18** and **TypeScript**, bundled with **Vite 5**
- **Routing**: **React Router** (`react-router-dom`)
- **Styling**: **Tailwind CSS**, **PostCSS**, **Autoprefixer**
- **UI**: **Framer Motion** (welcome modal motion), **Lucide React** (icons)
- **Tooling**: npm, ESLint, TypeScript ESLint; **Windows batch** (`RUN.bat`) for one-command local dev

---

## Features

- **Escape Plan Generator** — inputs for skill level, time, and money goal → a **14-day roadmap** touching freelancing, content, trading, dropshipping, and AI tools
- **Viral Prompt Generator** — prompts tuned for **Instagram Reels, YouTube Shorts, X, LinkedIn**, and similar short-form ideas
- **SEO Blog + Copywriter** — topic in → blog-style copy, titles, and **SEO meta** suggestions
- **Design + Edit Toolkit** — upload a **screenshot** → redesign ideas, UI polish notes, and links to **Figma / Canva**-style resources
- **Learn & Escape** — curated **free resources** (freelancing, dropshipping, trading, digital products, SaaS) with video and reading ideas
- **Tool Stack + AI recommendations** — free tools by category (AI writing, design, sites, automation, selling digital products) plus a **“Tool of the Day”** style highlight
- **Side Hustle Generator** — short questionnaire → **three paths** with steps and resources for roughly **7 days** of action
- **Dark / light themes** — dark mode uses **black + neon green** (Matrix-style); light mode uses **white + royal blue** accents
- **Responsive layout** — mobile-first shell with collapsible navigation on small screens
- **Welcome modal** — shown once per browser (stored in `localStorage` as `welcomeShown`)

**Product roadmap (not all implemented as paid flows in code):** auto-scheduling content, motivational dashboard, in-app digital sales, mentor avatar, **PDF export** for roadmaps, community, **14-day trial → $9/mo or $49/yr**, “Escape in 30 Days” bootcamp, affiliate links (Fiverr, Canva Pro, Gumroad, etc.).

---

## Keyboard shortcuts

There are **no global keyboard shortcuts** in this build (navigation and actions are mouse / touch). A future pass could add shortcuts (for example, focus mode, theme toggle, or quick navigation).

| Action | Shortcut |
|--------|----------|
| — | *Not implemented yet* |

---

## What I learned (process)

- **Routing + layout**: one **Layout** shell wrapping all routes keeps each feature page small and focused
- **Theming** with React **context** + `localStorage` avoids prop-drilling and keeps dark/light consistent across the tree
- **Frontend-only “AI”** is really **templates + forms + copy**—honest scope for a demo without hosting keys or a backend
- **Folder naming** matters: Vite and tooling resolve paths strictly on some systems; mismatched `pages` vs `Pages` or `components` vs `Compoenet` breaks builds until paths align

---

## Overall growth

- Practiced end-to-end ownership of a **single-page product** from navigation to feature screens
- Reinforced **component reuse** (cards, inputs, shared layout) instead of duplicating markup per page
- Balanced **ambition** (many “mentor” features) with **maintainability** (one Vite app, no microservices for v1)

---

## How this project can be improved

- Add a **real LLM backend** (OpenAI, OpenRouter, or local Ollama) with user-controlled API keys and streaming replies
- **Persist** saved roadmaps and prompts (localStorage, IndexedDB, or a small **SQLite** / **PostgreSQL** API with auth)
- **PDF export** for escape plans and roadmaps
- **Automated tests** (Vitest + React Testing Library, smoke E2E with Playwright)
- **Accessibility**: keyboard shortcuts, focus traps in modals, and ARIA labels on interactive controls
- **Rename** `Compoenet` → `components` (or add a path alias) for cleaner imports and onboarding

---

## Running the project

After cloning or downloading the repo:

1. Open a terminal in the **project root** (the folder that contains `package.json`, `src/`, and `RUN.bat`).
2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

3. Open the URL Vite prints (usually **http://localhost:5173**). The Vite config sets **`open: true`** so your default browser may open automatically.

**Production preview (optional):**

```bash
npm run build
npm run preview
```

`preview` serves the built files from `dist/` (default port is often **4173**; check the terminal output).

### Prerequisites

- **Node.js LTS** and **npm** ([nodejs.org](https://nodejs.org/))

### Configuration

This app does **not** require a `.env` file to run—there is **no backend** and **no API keys** in the default flow. If you later add LLM or analytics keys, add `.env` locally and list `.env` in `.gitignore`.

### Easiest method on Windows: double-click the BAT file

Use **`RUN.bat`** at the **repository root** (same folder as `package.json`). An alias exists: **`run-matrix-escape-os.bat`** (it calls `RUN.bat`).

**How to use it**

1. Open File Explorer and go to your project folder (the root that contains `package.json`, `src/`, and `RUN.bat`).
2. **Double-click** `RUN.bat`.

**What happens**

- **First run** can take a minute while `npm install` finishes.
- A **Command Prompt** window stays open running the **Vite dev server** (usually **http://localhost:5173**).
- Your browser should open automatically (`server.open` in `vite.config.ts`). If port **5173** is busy, Vite picks another port—read the **Local:** line in that window.
- If the page is blank, wait until the window shows that Vite is ready, then refresh or open the printed URL.

**How to stop**

- Press **Ctrl+C** in the Command Prompt window, or close the window.

**Run the same script from a terminal**

```bat
cd path\to\Matrix Escape OS (Operating System for Hustlers)
RUN.bat
```

Use the real path where the project lives on your machine.

### Terminal method (step by step)

From the **repo root**:

```bash
npm install
npm run dev
```

Leave the terminal running. Open **http://localhost:5173** (or the URL Vite prints). There is **only one** process for local development—the Vite dev server.

**Summary**

| Piece        | Port (default) | Role                    |
|-------------|----------------|-------------------------|
| Vite dev    | **5173**       | React app in the browser |
| Vite preview| **4173** (typical) | Serves `dist/` after `npm run build` |

---

### “Cannot connect” versus “blank page”

These are **different** problems:

| Symptom | Meaning | Fix |
|--------|---------|-----|
| **Connection refused** / site cannot be reached | Nothing is listening on **5173** (or the port Vite chose). | Run `npm run dev` from the project root, or double-click **`RUN.bat`**. Do not open `index.html` via `file://`—Vite must serve the app. |
| **Blank or broken page** | Build error, wrong URL, or script blocked. | Check the terminal for Vite errors. Confirm the URL matches **http://localhost:** plus the port printed in the terminal. Run `npm run build` to catch TypeScript errors. |

**Summary:** You need the **Vite dev server running** locally. There is no separate API port in this repo.

---

## Publishing to GitHub

GitHub is built for **Git**, not for uploading a large **ZIP** through the website for an entire project.

**What usually gets stored:** source and config only. A typical `.gitignore` excludes **`node_modules/`**, **`dist/`**, and local env files like **`.env`**. Cloners run `npm install` themselves—do **not** commit `node_modules`.

**Typical workflow (command line)**

1. Install [Git](https://git-scm.com/downloads) if needed.
2. On GitHub: **New repository** — create an empty repo (optional README if you already have one locally).
3. In your project folder:

```bash
git init
git add .
git status
```

Confirm you do **not** see `node_modules` or secrets listed. If they appear, fix `.gitignore` before committing.

```bash
git commit -m "Initial commit: Matrix Escape OS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub URL.

**If GitHub asks for a password:** use a [Personal Access Token](https://github.com/settings/tokens) or SSH keys.

**Alternative:** [GitHub Desktop](https://desktop.github.com/) can publish the folder with a GUI.

**Never commit API keys** if you add them later—keep them only in local `.env` (ignored).

---

## License

**Private project** (`"private": true` in `package.json`). Change to MIT or another license if you open-source the repo.
