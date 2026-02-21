# Nitin Verma Portfolio - Project Summary

## Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| Framework | Next.js (App Router) | 16.1.6 | Full-stack React framework with SSR |
| UI | React | 19.2.3 | Component-based UI rendering |
| Language | TypeScript | 5 | Type-safe JavaScript |
| Styling | Tailwind CSS | 3.4.17 | Utility-first CSS |
| State | Zustand | 5.0.11 | Lightweight state management with localStorage persistence |
| Animation | Framer Motion | 12.33.0 | Declarative React animations |
| Animation | GSAP | 3.14.2 | Advanced timeline animations |
| 3D | Three.js | 0.182.0 | 3D globe rendering |
| 3D | @react-three/fiber | 9.5.0 | React renderer for Three.js |
| 3D | @react-three/drei | 10.7.7 | Three.js helper components |
| Scroll | Lenis | 1.3.17 | Physics-based smooth scrolling |
| i18n | next-intl | 4.8.2 | Internationalization (EN, HI, ES) |
| Icons | Lucide React | 0.563.0 | SVG icon library |
| UI Kit | Shadcn/UI + Radix | - | Accessible component primitives |
| Variants | Class Variance Authority | 0.7.1 | Component variant system |

---

## Project Structure

```
nitin-portfolio/
├── app/
│   ├── globals.css                    # CSS variables, Tailwind, Lenis styles
│   └── [locale]/
│       ├── layout.tsx                 # Root layout (providers, fonts, metadata)
│       └── page.tsx                   # Home page (section composition)
├── components/
│   ├── landing/
│   │   └── LandingIntro.tsx           # 3D globe intro overlay
│   ├── sections/
│   │   ├── Hero.tsx                   # Hero with animated greeting
│   │   ├── About.tsx                  # Bio + stats grid
│   │   ├── Skills.tsx                 # Tech skills badges
│   │   ├── Experience.tsx             # Timeline cards
│   │   ├── Projects.tsx               # Project showcase grid
│   │   └── Contact.tsx                # Contact form + socials
│   ├── theme/
│   │   ├── ThemeProvider.tsx          # Applies CSS vars from Zustand
│   │   ├── SettingsPanel.tsx          # Theme/language settings sidebar
│   │   └── LenisScroll.tsx            # Smooth scroll wrapper
│   └── ui/                            # Shadcn/UI primitives
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── constants.ts                   # RESUME_DATA (single source of truth)
│   ├── store.ts                       # Zustand theme store
│   ├── utils.ts                       # cn() helper, formatDate()
│   └── i18n/request.ts               # next-intl server config
├── messages/
│   ├── en.json                        # English translations
│   ├── hi.json                        # Hindi translations
│   └── es.json                        # Spanish translations
├── middleware.ts                      # i18n locale routing
├── tailwind.config.ts                 # Theme extensions & animations
├── next.config.mjs                    # next-intl plugin setup
└── tsconfig.json                      # TypeScript config
```

---

## How Each Piece Works

### 1. Routing & Internationalization

**How it works**: The `[locale]` dynamic segment in `app/[locale]/` powers multi-language routing. `middleware.ts` intercepts requests, reads the `NEXT_LOCALE` cookie, and routes to the correct locale. `localePrefix: 'never'` keeps URLs clean (no `/en/` prefix).

**Flow**:
```
Request → middleware.ts (reads cookie) → app/[locale]/layout.tsx → loads messages/{locale}.json
```

**Files involved**:
- `middleware.ts` - Route matching & locale detection
- `lib/i18n/request.ts` - Server-side message loading
- `messages/*.json` - Translation strings
- Components use `useTranslations('SectionName')` to read keys

### 2. Theme System

**How it works**: A Zustand store (`lib/store.ts`) holds the current theme state (color, mode, radius). `ThemeProvider.tsx` subscribes to this store and applies values to the DOM via CSS classes and `data-theme` attributes. `globals.css` defines CSS variables that respond to these attributes.

**Flow**:
```
User clicks in SettingsPanel → Zustand store updates → ThemeProvider applies to DOM → CSS variables change → UI re-renders
```

**State shape**:
```typescript
{
  color: 'blue' | 'green' | 'violet' | 'orange',
  mode: 'light' | 'dark',
  radius: 0 | 0.3 | 0.5 | 0.75 | 1.0
}
```
Persisted to `localStorage` under key `portfolio-theme-storage`.

### 3. Landing Globe Animation

**How it works**: On every visit, a full-screen overlay renders a 3D scene with `@react-three/fiber`. The globe is a **dotted sphere** (3500 points distributed using the golden ratio algorithm) with a wireframe overlay and decorative arcs between cities. The Canvas uses a fixed container height (`45vh`) and `resize={{ scroll: false }}` to prevent layout-triggered camera recalculations. A `FixedCamera` component locks the camera at position `[0, 0, 5]` with FOV 50 every frame.

**Key algorithms**:
- **Golden ratio point distribution** - Evenly spaces dots on sphere surface
- **Lat/Lng to 3D conversion** - `latLngToVector3()` converts geographic coordinates to Three.js Vector3 positions
- **Arc generation** - `generateArcPoints()` creates curved paths between cities above the sphere surface

**Geolocation**: Uses `navigator.geolocation` to detect user position. Falls back to New Delhi (28.6, 77.2) if denied.

**Dismissal**: Clicking "Start Exploring" triggers an exit animation (fade out + scale up) and removes the overlay.

### 4. Animation Strategy

**Framer Motion patterns used across sections**:

| Pattern | Usage | Example |
|---------|-------|---------|
| Entrance | `initial={{ opacity: 0 }} animate={{ opacity: 1 }}` | Hero title fade-in |
| Scroll trigger | `whileInView={{ opacity: 1 }}` with `viewport={{ once: true }}` | All sections |
| Stagger | Container `variants` with `staggerChildren: 0.1` | Skills badges |
| Exit | `AnimatePresence` with `exit` prop | Settings panel, Landing intro |
| Hover | `whileHover={{ scale: 1.1 }}` | Settings gear button |

**Three.js animation**: `useFrame()` hook runs every frame for continuous globe rotation at `delta * 0.15` rad/s.

**Lenis smooth scroll**: Wraps the entire page. Config: `lerp: 0.1`, `duration: 1.5`, `smoothWheel: true`.

### 5. Component Architecture

**Section components** (`components/sections/`) are all client components that:
1. Use `useTranslations()` for localized text
2. Read static data from `RESUME_DATA` in `lib/constants.ts`
3. Apply Framer Motion animations
4. Use Shadcn/UI primitives (Card, Badge, Button, Input)

**Page composition** (`app/[locale]/page.tsx`) simply stacks sections:
```tsx
<Hero /> → <About /> → <Skills /> → <Experience /> → <Projects /> → <Contact />
```

**Provider hierarchy** (`layout.tsx`):
```
<html>
  <body>
    <NextIntlClientProvider>     ← i18n context
      <ThemeProvider />          ← applies CSS vars
      <LandingIntro />           ← 3D globe overlay
      <LenisScroll>              ← smooth scroll
        <main>{children}</main>  ← page content
        <SettingsPanel />        ← theme UI
      </LenisScroll>
    </NextIntlClientProvider>
  </body>
</html>
```

### 6. UI Components (Shadcn/UI)

All UI primitives follow the **CVA (Class Variance Authority)** pattern:

```typescript
// Example: Button variants
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "...", ghost: "..." },
    size: { default: "...", sm: "...", lg: "...", icon: "..." }
  }
});
```

Components use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) to merge classes without conflicts.

### 7. Data Management

**All portfolio content** lives in `lib/constants.ts` as a single `RESUME_DATA` object:

```typescript
RESUME_DATA = {
  name, location, about, summary, avatarUrl,
  contact: { email, social: [{ name, url, icon }] },
  education: [{ school, degree, start, end }],
  work: [{ company, title, start, end, description, badges }],
  skills: ["Next.js", "React", ...],
  projects: [{ title, description, techStack, link }]
}
```

To update content, only edit this one file. All sections consume it dynamically.

### 8. Styling System

**CSS Variables** (defined in `globals.css`) power dynamic theming:

```css
:root        → light mode defaults
.dark        → dark mode overrides
[data-theme] → accent color overrides (blue, green, violet)
```

**Tailwind** references these via `hsl(var(--primary))` in `tailwind.config.ts`, making all utility classes theme-aware automatically.

---

## Key Files Quick Reference

| What you want to change | File to edit |
|--------------------------|-------------|
| Personal info, projects, skills | `lib/constants.ts` |
| English text | `messages/en.json` |
| Hindi text | `messages/hi.json` |
| Spanish text | `messages/es.json` |
| Theme colors | `app/globals.css` (CSS variables) |
| Landing globe behavior | `components/landing/LandingIntro.tsx` |
| Section animations | Individual `components/sections/*.tsx` |
| Theme options (colors, radius) | `components/theme/SettingsPanel.tsx` + `lib/store.ts` |
| Supported languages | `middleware.ts` + `lib/i18n/request.ts` |
| Fonts | `app/[locale]/layout.tsx` |
| Tailwind extensions | `tailwind.config.ts` |

---

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```
