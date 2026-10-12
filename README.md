# Webonio — Production Marketing & Hosting Platform

A pixel-polished, production-grade web application for **Webonio** (digital agency & managed cloud hosting), engineered with Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lenis.

---

## 🚀 Key Highlights & Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables Design System
- **Motion & Interactions**: Framer Motion with custom cubic-bezier ease `[0.22, 1, 0.36, 1]` and `prefers-reduced-motion` compliance
- **Smooth Scrolling**: Lenis smooth wheel & touch scrolling
- **Theming**: `next-themes` (light default + dark mode)
- **Internationalization (i18n)**: English (default) and Arabic at `/ar` with full RTL layout support using logical CSS properties
- **Performance**: Pre-rendered static pages (85+ routes), optimized typography via Google Fonts (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`, `IBM Plex Sans Arabic`)

---

## 📐 Design System Tokens

### Light Mode (Default)
- `--bg`: `#f5f7fa`
- `--surface`: `#ffffff`
- `--ink`: `#0b1220`
- `--muted`: `#5b6678`
- `--line`: `#e3e8ef`
- `--accent`: `#2563eb`
- `--accent-ink`: `#ffffff`

### Dark Mode
- `--bg`: `#070b14`
- `--surface`: `#0e1524`
- `--ink`: `#eef2f8`
- `--muted`: `#8d99ad`
- `--line`: `#1b2540`
- `--accent`: `#4f8cff`

---

## 🗺️ Sitemap & Implemented Routes

| Route | Description |
|---|---|
| `/` & `/ar` | Complete Home Page (14 sequential sections) |
| `/services` & `/ar/services` | 15 capabilities grid with category filters |
| `/services/[slug]` & `/ar/services/[slug]` | 15 detailed scope pages (WEB, APP, SHOP, SYS, INFRA, DNS, MAIL, SEC, GROW, PPC, SEO, SOCIAL, BRAND, COPY, KEYS) |
| `/work` & `/ar/work` | Filterable portfolio of 10 live client projects |
| `/work/[slug]` & `/ar/work/[slug]` | 10 case study deep-dives with architecture & metrics |
| `/solutions` & `/ar/solutions` | Industry architectures (E-Commerce, SaaS, Advisory, Logistics) |
| `/hosting` & `/ar/hosting` | Managed cloud hosting plans, EGP/USD toggle, comparison matrix & FAQ |
| `/company` & `/ar/company` | 11-year company narrative, core values & infrastructure partners |
| `/insights` & `/ar/insights` | Technical essays with category filters |
| `/insights/[slug]` & `/ar/insights/[slug]` | Article reading view with scroll progress & recommendations |
| `/start` & `/ar/start` | 3-step project discovery wizard with form validation |
| `/privacy` & `/ar/privacy` | Enterprise data protection & isolation policy |
| `/terms` & `/ar/terms` | Terms of service and SLA guarantees |

---

## 🛠️ Getting Started & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or [http://localhost:3000/ar](http://localhost:3000/ar) for Arabic RTL) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
src/
├── app/                  # Next.js App Router (EN & AR routes)
│   ├── layout.tsx        # Root HTML, Google Fonts, theme setup
│   ├── page.tsx          # 14-section home page
│   ├── globals.css       # Complete design system CSS tokens & animations
│   ├── ar/               # Arabic mirror of all routes (dir="rtl")
│   ├── services/         # Capabilities & dynamic slugs
│   ├── work/             # Portfolio & dynamic case study slugs
│   ├── hosting/          # Hosting pricing & comparison matrix
│   ├── company/          # About Webonio & engineering values
│   ├── insights/         # Editorial essays & dynamic slugs
│   ├── solutions/        # Industry blueprints
│   ├── start/            # 3-step project discovery wizard
│   ├── privacy/          # Legal privacy policy
│   └── terms/            # Terms of service
├── components/
│   ├── layout/           # Header, Footer, MenuOverlay, ThemeProvider, SmoothScroll
│   ├── sections/         # 14 home page sections (Hero, Marquees, WhatWeBuild, Work, etc.)
│   ├── pages/            # Reusable page views for subpages
│   ├── ui/               # Button, SectionHeader, and atoms
│   └── motion/           # Motion tokens, easing, and Framer Motion variants
└── content/
    └── site-data.ts      # Centralized bilingual content repository
```
