# Portfolio Implementation Plan: Nitin Verma

## 1. Project Identity & Vision
**Role:** Senior Full-Stack Software Development Engineer
**Core Narrative:** "Engineering Scalability & Precision."
**Visual Style:**
-   **Aesthetic:** Ultra-modern, dark-mode first (but fully themable), clean lines, technical typography (Inter/JetBrains Mono).
-   **Metaphor:** The interface should feel like a high-end developer tool (VS Code met minimal Swiss design).
-   **Motion:** Smooth, physics-based (Springs), no jagged jarring movements.

## 2. Tech Stack & Architecture
-   **Framework:** Next.js 14+ (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS + CSS Variables (Dynamic Theming)
-   **Components:** Shadcn/UI + Radix UI
-   **State Management:** Zustand (Persisted settings)
-   **Animations:** Framer Motion (Layout/Interactions) + GSAP (ScrollTrigger)
-   **Smooth Scroll:** React Lenis
-   **I18n:** `next-intl` (Middleware based routing: `/en`, `/es`, etc.)
-   **Icons:** Lucide React

## 3. Directory Structure
```
/
├── app/
│   ├── [locale]/
│   │   ├── globals.css        # Base styles + CSS Variables
│   │   ├── layout.tsx         # Root Layout (Providers: Theme, Lenis, Intl)
│   │   ├── page.tsx           # Home Page (Composition of sections)
│   │   ├── error.tsx          # Global Error boundary
│   │   └── not-found.tsx      # 404 Page
│   └── api/                   # API routes (if needed for contact form)
├── components/
│   ├── ui/                    # Shadcn UI components (Button, Card, etc.)
│   ├── sections/              # Page Sections (Hero, About, Exp, Projects)
│   │   ├── hero.tsx
│   │   ├── experience.tsx
│   │   └── ...
│   ├── layout/                # Header, Footer, Navigation
│   ├── theme/                 # ThemeSwitcher, AccentPicker
│   └── shared/                # Reusable atoms (SectionHeading, TechBadge)
├── hooks/                     # Custom hooks (useScrollProgress, etc.)
├── lib/
│   ├── store.ts               # Zustand Store (Theme, Language)
│   ├── constants.ts           # Resume Data (Experience, Skills, Projects)
│   ├── utils.ts               # CN, formatters
│   └── i18n/                  # Internationalization config
├── public/                    # Static assets
└── messages/                  # Translation JSON files (en.json, de.json)
```

## 4. Section Breakdown (Resume Mapped)

### A. Hero Section (`components/sections/hero.tsx`)
-   **Content:** "Nitin Verma — Full-Stack SDE".
-   **Visual:** Large, bold typography.
-   **Interaction:** 3D or algorithmic background (Particle field or Grid distortion) responding to mouse movement.
-   **Data Source:** Resume Header.

### B. About Me (`components/sections/about.tsx`)
-   **Content:** "2.5+ Years Exp", "Scalable Systems", "Clean Code".
-   **Visual:** Split layout. Text on left, "Stats" or "Profile Code Snippet" on right.
-   **Data Source:** Professional Summary.

### C. Technosphere (`components/sections/skills.tsx`)
-   **Content:** Categorized skills (Frontend, Backend, Cloud, Tools).
-   **Visual:** Interactive "Constellation" or "Orbit" animation using Framer Motion. Hovering a category expands the nodes.
-   **Data Source:** Skills Section.

### D. Experience Timeline (`components/sections/experience.tsx`)
-   **Content:** RemoteState (SDE).
-   **Visual:** Vertical line with glowing nodes. As you scroll, the line lights up.
-   **Data Source:** Work Experience.

### E. Featured Projects (`components/sections/projects.tsx`)
-   **Content:** Cab Buddy, Blogify, Book Nexus.
-   **Visual:** Large, immersive cards. "Case Study" mode.
    -   **Cab Buddy:** Highlight Socket.io & Real-time.
    -   **Blogify:** Highlight Docker & Architecture.
-   **Data Source:** Projects Section.

### F. Contact (`components/sections/contact.tsx`)
-   **Content:** Email, LinkedIn, Github.
-   **Visual:** Clean form + large social links. Interactive "Copy Email" button.

## 5. Key Features Implementation

### Theme Engine (Zustand + CSS Vars)
-   Global `data-theme` attribute on `<body>`.
-   Zustand store allows user to pick:
    -   **Mode:** Light / Dark
    -   **Accent:** Blue / Green / Violet / Orange (Updates `--primary` variable).
    -   **Radius:** Roundness of UI elements.

### Internationalization (next-intl)
-   Middleware detects browser locale.
-   `messages/en.json` will contain all resume text.
-   `messages/hi.json` (Hindi) or others as placeholders to demonstrate capability.

### Animations
-   **Scroll:** Lenis for smooth momentum scrolling.
-   **Reveal:** `framer-motion` `whileInView` for sections sliding up.
-   **Micro:** Buttons scale on press, badges glow on hover.

## 6. Execution Plan
1.  **Scaffold**: Init Next.js, Setup Tailwind, Radix, Lucide.
2.  **Core**: Implement `ThemeStore` and `Lenis` wrapper.
3.  **Data**: Transform `Nitin_Verma_Resume.pdf` content into structure JSON in `lib/data.ts`.
4.  **Components**: Build base UI (Buttons, Cards).
5.  **Sections**: Build each section iteratively, focusing on animation and responsiveness.
6.  **Polish**: Add i18n translations, verify accessibility, optimize performance.
