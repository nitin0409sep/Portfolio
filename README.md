
# Nitin Verma - Senior Full-Stack SDE Portfolio

A high-performance, engineering-first portfolio website built with Next.js 16, Tailwind CSS, Framer Motion, and TypeScript.

## 🚀 Key Features

-   **Deep Theming Engine**: Switch between Light/Dark modes, choose accent colors (Blue, Green, Violet, Orange), and adjust UI radius/spacing live.
-   **Internationalization (i18n)**: Built-in support for English, Hindi, and Spanish.
-   **Smooth Animations**: Physics-based layout transitions using `Framer Motion` and momentum scrolling with `Lenis`.
-   **Resume-Driven Content**: All sections (Experience, Projects, Skills) are dynamically rendered from `lib/constants.ts` (Single Source of Truth).
-   **Modern Stack**: Next.js App Router (Turbopack), Zustand for state, Shadcn/UI for accessible component primitives.

## 🛠️ Tech Stack

-   **Framework**: Next.js 16 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS + CSS Variables
-   **Motion**: Framer Motion + GSAP
-   **State**: Zustand (Persisted to LocalStorage)
-   **I18n**: next-intl
-   **Icons**: Lucide React

## 🏃‍♂️ Running Locally

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## 📂 Project Structure

-   `app/[locale]`: localized pages and layout.
-   `components/sections`: Feature-rich sections (Hero, About, etc.).
-   `components/theme`: Theme provider and Settings panel.
-   `lib/constants.ts`: **EDIT THIS FILE** to update your resume data.
-   `messages/`: Translation files for i18n (`en.json`, etc.).

## 🎨 Customization

open the **Settings Gear** (bottom-right) to toggle themes and languages.
