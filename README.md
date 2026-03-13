# JEE Mission Control v2.0

> A cinematic, Apple-level motion design dashboard for JEE Main April 2026 mock test analysis — built for **Poorvith MP**.

![Dark Theme](https://img.shields.io/badge/theme-dark%20%2B%20gold-0a0a0f?style=flat-square&labelColor=f0c040&color=0a0a0f)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square)

---

## ✨ Features

### 🎬 20 Motion Effects (All Apple-inspired)
| # | Effect | Description |
|---|--------|-------------|
| 1 | Scroll Storytelling | Sections reveal with staggered children on scroll entry |
| 2 | Spring Physics | Every transition uses `cubic-bezier(0.16, 1, 0.3, 1)` |
| 3 | Hero Cinematic | Blackout fade → typewriter → word-by-word → gradient zoom |
| 4 | Section Reveals | Tag slides left, title rises, desc fades, children stagger |
| 5 | Stat Cards | Scale 0.94→1.0, count-up numbers, accent bar growth |
| 6 | Percentile Journey | Bars grow with spring, SVG connectors draw themselves |
| 7 | Liquid Fill Bars | Spring overshoot + shimmer sweep after fill |
| 8 | Table Row Scan | Rows slide in, gold scanline on hover, change flash |
| 9 | 3D Tilt Cards | Cursor-tracked `rotateX/Y` with radial glow follow |
| 10 | Issue Entrance | Staggered slide-in from left with colored accent |
| 11 | Schedule Wave | Diagonal `(row+col)*40ms` wave, done=green, active=pulse |
| 12 | Accordion Physics | Spring expand/collapse, inner content staggers |
| 13 | Cell Highlight | Column-by-column highlight, gold flash on total row |
| 14 | College Flip | `rotateY(8°→0)` fan entrance with hover bloom |
| 15 | Terminal Typewriter | R1→R2→R3 type sequentially, cursor blinks between |
| 16 | Scroll Progress | Fixed gold line at top tracks scroll position |
| 17 | Ambient Background | Hue-rotate gradient + drifting noise texture |
| 18 | Custom Cursor | Gold dot with lerp smoothing, expands on interactive |
| 19 | Page Transitions | Flash + smooth scroll on nav click, sliding pill |
| 20 | Reduced Motion | `prefers-reduced-motion` disables all animations |

### 📊 9 Dashboard Sections
1. **Hero** — Cinematic score reveal + countdown timer
2. **Overview** — 8 KPI stat cards + Percentile Journey chart
3. **Comparison** — MT1 vs MT2 table + Radar chart
4. **Subjects** — Animated bars + 3D tilt detail cards
5. **Verdicts** — 8 color-coded assessment cards
6. **Schedule** — 23-card mock test grid + milestone targets
7. **Action Plan** — 3-phase accordion with 13 tasks
8. **Simulation** — Projection table + interactive score sliders
9. **Rules** — Terminal typewriter + final verdict

### 🎮 Interactive Features
- **Score Simulator** — Drag sliders per subject, see live percentile
- **College Filter** — Filter by IIT / NIT / IIIT / Private tiers
- **Accordion Plan** — Expand/collapse action plan phases
- **Live Countdown** — Real-time countdown to April 2, 2026

---

## 🏗️ Project Structure

```
├── index.html                    # Entry HTML with Google Fonts
├── vite.config.ts                # Vite + Tailwind + SingleFile plugin
├── tsconfig.json                 # TypeScript strict mode config
├── package.json                  # Dependencies & scripts
├── .gitignore                    # Git ignore rules
├── README.md                     # This file
│
└── src/
    ├── main.tsx                  # React DOM entry point
    ├── App.tsx                   # Root component — assembles all sections
    ├── index.css                 # Global styles, animations, design tokens
    │
    ├── types/
    │   └── index.ts              # All TypeScript interfaces & types
    │
    ├── data/
    │   ├── index.ts              # Barrel export
    │   ├── student.ts            # Student profile (Poorvith MP)
    │   ├── journey.ts            # Percentile journey milestones
    │   ├── subjects.ts           # Subject-wise scores (Phy/Chem/Math)
    │   ├── stats.ts              # 8 KPI stat card data
    │   ├── comparison.ts         # MT1 vs MT2 comparison table
    │   ├── verdicts.ts           # 8 verdict cards (strength/warn/danger)
    │   ├── schedule.ts           # 20-mock schedule + milestones
    │   ├── plan.ts               # 3-phase action plan with tasks
    │   ├── simulation.ts         # Score projection scenarios
    │   ├── colleges.ts           # 6 college target cards
    │   ├── rules.ts              # 3 non-negotiable exam rules
    │   └── navigation.ts         # Section navigation config
    │
    ├── hooks/
    │   ├── index.ts              # Barrel export
    │   ├── useInView.ts          # IntersectionObserver for scroll triggers
    │   ├── useCountUp.ts         # requestAnimationFrame count-up
    │   ├── useTypewriter.ts      # Character-by-character text reveal
    │   ├── useCountdown.ts       # Live countdown to exam date
    │   ├── useScrollProgress.ts  # Page scroll position (0→1)
    │   └── useActiveSection.ts   # Current viewport section tracker
    │
    └── components/
        ├── index.ts              # Barrel export
        ├── CustomCursor.tsx       # Gold lerp cursor (#18)
        ├── ScrollProgressBar.tsx  # Fixed gold top bar (#16)
        ├── Navigation.tsx         # Sidebar + mobile nav (#19)
        ├── Section.tsx            # Scroll-reveal section wrapper (#4)
        ├── HeroSection.tsx        # Cinematic hero sequence (#3)
        ├── StatCard.tsx           # KPI stat with count-up (#5)
        ├── PercentileJourney.tsx   # Journey bar chart (#6)
        ├── SubjectBar.tsx         # Liquid fill progress bar (#7)
        ├── CompareRow.tsx         # Table row with scan effect (#8)
        ├── TiltCard.tsx           # 3D perspective tilt card (#9)
        ├── VerdictCard.tsx        # Color-coded verdict card (#10)
        ├── ScheduleCard.tsx       # Mock test grid card (#11)
        ├── PlanPhaseCard.tsx      # Accordion action plan (#12)
        ├── SimulationTable.tsx    # Cell-highlight projection (#13)
        ├── ScoreSliderSimulator.tsx # Interactive score sliders
        ├── CollegeCard.tsx        # Flip-entrance college card (#14)
        ├── RuleTypewriter.tsx     # Terminal typewriter rule (#15)
        ├── RadarChart.tsx         # SVG radar/spider chart
        └── CountdownWidget.tsx    # Live exam countdown
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/jee-mission-control.git
cd jee-mission-control

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The dev server runs at `http://localhost:5173` with hot module replacement.

---

## 🎨 Design System

### Color Tokens (from CSS custom properties)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0a0a0f` | Page background |
| `--color-bg-card` | `#15151e` | Card backgrounds |
| `--color-gold` | `#f0c040` | Primary accent |
| `--color-accent-blue` | `#5ab4f0` | Physics / info |
| `--color-accent-green` | `#4ecb7f` | Chemistry / success |
| `--color-accent-red` | `#e05a5a` | Maths / danger |
| `--color-accent-purple` | `#a78bfa` | Mathematics accent |
| `--color-accent-orange` | `#f97316` | Warning / gap |

### Typography
| Font | Weight | Usage |
|------|--------|-------|
| **Syne** | 600–800 | Headings, section titles |
| **DM Sans** | 400–600 | Body text, descriptions |
| **JetBrains Mono** | 400–700 | Data, numbers, code |

### Motion
- **Spring curve**: `cubic-bezier(0.16, 1, 0.3, 1)` — used everywhere
- **Reveal duration**: 0.6s
- **Hover duration**: 0.3s  
- **Count-up duration**: 1.2s
- **Scale origin**: 0.92–0.94 (never 0)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2 | UI framework |
| TypeScript | 5.9 | Type safety (strict mode) |
| Vite | 7.2 | Build tool & dev server |
| Tailwind CSS | 4.1 | Utility-first styling |
| Vanilla CSS | — | Animations & custom properties |
| Vanilla JS | — | IntersectionObserver, rAF, lerp |

**Zero animation libraries** — all motion is pure CSS + vanilla JS hooks.

---

## 📋 Data

All data is extracted from the original JEE Mock Analysis HTML and stored as typed TypeScript constants:

- **Student**: Poorvith MP, General, Karnataka, 1st Year Dropper
- **Scores**: MT1: 60/300 → MT2: 84/300 (+24 improvement)
- **Subjects**: Physics 34, Chemistry 33, Mathematics 17
- **Target**: 99+ percentile = 198+/300
- **Schedule**: 20 mocks from Mar 10 – Apr 1, 2026
- **Action Plan**: 3 phases, 13 tasks, Mar 14 – Apr 1
- **Colleges**: IIT Bombay, IIT Delhi, NIT-K, NIT Trichy, IIIT-H, BITS Pilani

---

## ♿ Accessibility

- Full `prefers-reduced-motion` support — all animations disabled
- Semantic HTML throughout
- Keyboard-navigable sections
- High contrast text on dark backgrounds

---

## 📄 License

MIT — Feel free to fork and customize for your own exam prep dashboard.

---

<p align="center">
  <em>"The only impossible journey is the one you never begin."</em>
  <br/>
  <strong>Built with 🔥 for Poorvith MP</strong>
</p>
