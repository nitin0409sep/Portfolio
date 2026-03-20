import { ResumeData } from "@/types";

export const RESUME_DATA: ResumeData = {
  name: "Nitin Verma",
  initials: "NV",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/Noida",
  about:
    "Product-oriented Full Stack Engineer with 3 years of experience designing and delivering scalable SaaS systems using TypeScript, Angular, React, and Node.js. Experienced in building modular frontend architectures, secure RESTful APIs, role-based access control systems, and real-time event-driven workflows.",
  summary:
    "Strong focus on clean architecture, performance optimization, and production-grade engineering standards.",
  avatarUrl: "/nitin.jpeg",
  personalWebsiteUrl: "#",
  contact: {
    email: "nitin5september@gmail.com",
    tel: "+919415056824",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nitin0409sep",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nitin0409sep",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "IMS Engineering College, Ghaziabad",
      degree: "B.Tech - Computer Science & Engineering",
      start: "2019",
      end: "2023",
      grade: "",
    },
  ],
  work: [
    {
      company: "RemoteState",
      link: "https://remotestate.com",
      badges: ["Full-Time"],
      title: "Software Development Engineer",
      logo: "/remotestate-logo.png",
      start: "June 2023",
      end: "Present",
      description:
        "Owned end-to-end development of full-stack SaaS modules used in production across multi-role user environments.",
      highlights: [
        "Architected modular Angular and React frontend systems enabling reusable components and scalable state management",
        "Designed and implemented RESTful APIs using Node.js, PostgreSQL, and Drizzle ORM with strong typing and validation layers",
        "Engineered JWT-based authentication and fine-grained RBAC to enforce secure access across complex workflows",
        "Integrated WebSocket-driven real-time updates to support synchronized dashboards and event-based interactions",
        "Deployed frontend applications on Vercel and integrated Firebase services for hosting and cloud-based functionality",
        "Refactored legacy features into structured, maintainable modules reducing technical debt and improving code clarity",
      ],
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React",
    "Angular",
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "GCP",
    "Firebase",
    "Tailwind CSS",
    "Redux Toolkit",
    "Zustand",
    "RxJS",
    "Socket.io",
    "Drizzle ORM",
  ],
  skillCategories: [
    {
      name: "Languages",
      icon: "code",
      skills: ["TypeScript", "JavaScript", "Go"],
    },
    {
      name: "AI / LLM",
      icon: "layout",
      skills: [
        "Generative AI",
        "Prompt Engineering",
        "LLM API Integration",
        "AI Agents",
        "LangChain",
        "Retrieval-Augmented Generation (RAG)",
        "Vector Embeddings",
        "Semantic Search",
        "Vercel AI SDK",
      ],
    },
    {
      name: "Frontend",
      icon: "layout",
      skills: [
        "React",
        "Next.js",
        "Angular",
        "Redux Toolkit",
        "NgRx",
        "Zustand",
        "RxJS",
        "React Query",
        "Tailwind CSS",
        "Material UI",
        "ShadCN UI",
      ],
    },
    {
      name: "Backend",
      icon: "server",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets", "Redis"],
    },
    {
      name: "Databases",
      icon: "database",
      skills: ["PostgreSQL", "MongoDB", "Turso (LibSQL)"],
    },
    {
      name: "Cloud & DevOps",
      icon: "cloud",
      skills: ["Docker", "AWS", "Firebase", "Vercel"],
    },
    {
      name: "Auth & Tooling",
      icon: "shield",
      skills: ["JWT", "RBAC", "Zod", "Joi", "Drizzle ORM", "Sequelize", "Git"],
    },
    {
      name: "Developer Tools",
      icon: "wrench",
      skills: ["Git", "GitHub", "Docker", "Postman"],
    },
    {
      name: "AI Tools",
      icon: "brain",
      skills: ["Claude", "Cursor", "Gemini", "Antigravity"],
    },
  ],
  projects: [
    {
      title: "SQL Agent",
      slug: "sql-agent",
      subtitle: "Natural Language to SQL Query Agent",
      techStack: [
        "Next.js",
        "TypeScript",
        "Turso (LibSQL)",
        "Drizzle ORM",
        "Groq API",
        "AI SDK",
        "Tailwind CSS",
        "Zod",
      ],
      description:
        "An AI-powered SQL agent built with Next.js that translates natural language questions into SQL queries. Uses Groq API (Llama 3.3-70B) with a tool-calling architecture where the AI autonomously fetches database schema and executes read-only SQL queries. Features real-time streaming responses, query sanitization to prevent destructive operations, and session-based message persistence.",
      link: {
        label: "GitHub",
        href: "https://github.com/nitin0409sep/sql-agent",
      },
      links: [
        { label: "GitHub", href: "https://github.com/nitin0409sep/sql-agent" },
        { label: "Live Demo", href: "https://sql-agent-beta-eight.vercel.app/" },
      ],
      videoUrl: "",
      details:
        "A conversational AI agent that lets users query databases using plain English. Built with Next.js and the Vercel AI SDK, the agent uses Groq's Llama 3.3-70B model with a tool-calling workflow — it first introspects the database schema, then generates and executes SQL queries autonomously. The backend uses Turso (LibSQL) as the database with Drizzle ORM for schema management and migrations. Query execution is secured with multi-layer sanitization: only SELECT statements are allowed, forbidden keywords (INSERT, DROP, DELETE, etc.) are blocked, and multi-statement queries are rejected. The chat UI streams responses in real-time, displays SQL queries with syntax highlighting alongside tabular results, and persists conversation history in session storage for continuity across page refreshes.",
      highlights: [
        "Built an agentic tool-calling workflow where the AI autonomously fetches schema and executes SQL queries",
        "Integrated Groq API (Llama 3.3-70B) with Vercel AI SDK for real-time streaming responses",
        "Implemented multi-layer query sanitization — SELECT-only enforcement, forbidden keyword blocking, and multi-statement prevention",
        "Used Turso (LibSQL) with Drizzle ORM for type-safe schema management and migrations",
        "Designed a chat UI with live SQL query display, tabular result rendering, and loading state indicators",
        "Added session storage-based message persistence for conversation continuity across page refreshes",
      ],
    },
    {
      title: "AI Chat Web App",
      slug: "ai-chat-web-app",
      subtitle: "AI-Powered Conversational Chat Platform",
      techStack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Drizzle ORM",
        "Groq API",
        "Zustand",
        "TanStack Query",
        "Docker",
        "Tailwind CSS",
      ],
      description:
        "Full-stack AI chat application built with Next.js and PostgreSQL, featuring JWT-based authentication with secure httpOnly cookies. Integrates Groq API (Llama 3.3-70B) for intelligent responses, with a two-tier memory system using Redis for short-term context and automatic summarization for long-term recall. Supports multi-chat management with persistent message history and soft-delete architecture.",
      link: {
        label: "GitHub",
        href: "https://github.com/nitin0409sep/ai-chat-app",
      },
      videoUrl: "",
      details:
        "A full-stack AI chat application that provides an intelligent conversational experience. Built with Next.js for the frontend and PostgreSQL for persistent storage, the app features secure JWT-based authentication using httpOnly cookies. It integrates the Groq API with the Llama 3.3-70B model for generating intelligent, context-aware responses. The app implements a two-tier memory system - Redis handles short-term conversational context while automatic summarization enables long-term recall across sessions. Users can manage multiple chat conversations with persistent message history and a soft-delete architecture for data safety.",
      highlights: [
        "Implemented JWT-based authentication with secure httpOnly cookie storage",
        "Integrated Groq API (Llama 3.3-70B) for AI-powered conversational responses",
        "Built a two-tier memory system using Redis for short-term context and automatic summarization for long-term recall",
        "Designed multi-chat management with persistent message history",
        "Implemented soft-delete architecture for safe data management",
        "Containerized the application using Docker for consistent deployment",
      ],
    },
    {
      title: "Company Chat Bot",
      slug: "company-chat-bot",
      subtitle: "AI-Powered Company Policy Q&A System",
      techStack: ["Node.js", "LangChain", "Pinecone", "HuggingFace", "Groq", "pdf-parse", "RAG"],
      description:
        "Node.js-based RAG (Retrieval-Augmented Generation) chatbot that answers employee questions using company policy documents. Loads PDFs, splits them into chunks, generates vector embeddings via HuggingFace, stores them in Pinecone, and uses Groq's Llama 3.3 70B model to provide context-aware answers through an interactive CLI.",
      link: {
        label: "GitHub",
        href: "https://github.com/nitin0409sep/rag-chat-bot",
      },
      videoUrl: "",
      details:
        "A Node.js-based RAG (Retrieval-Augmented Generation) chatbot designed to answer employee questions using company policy documents. The system loads PDF documents, splits them into manageable chunks, and generates vector embeddings using HuggingFace models. These embeddings are stored in Pinecone for efficient similarity search. When a user asks a question, the system retrieves the most relevant document chunks and feeds them as context to Groq's Llama 3.3 70B model, which generates accurate, context-aware answers through an interactive CLI interface.",
      highlights: [
        "Built a complete RAG pipeline from document ingestion to answer generation",
        "Implemented PDF parsing and intelligent text chunking for optimal retrieval",
        "Generated vector embeddings using HuggingFace transformer models",
        "Integrated Pinecone vector database for efficient similarity search",
        "Used Groq's Llama 3.3 70B model for context-aware answer generation",
        "Created an interactive CLI interface for real-time Q&A",
      ],
    },
    {
      title: "Figma Extractor",
      slug: "figma-extractor",
      subtitle: "Design to Code Token Extraction Tool",
      techStack: ["Next.js", "TypeScript", "Figma API", "Tailwind CSS"],
      description:
        "A Next.js web app that extracts structured design data from Figma files — colors, typography, spacing tokens, CSS properties, Tailwind classes, and component mappings. Paste a Figma URL with your personal access token, and get a full breakdown of your design system in seconds.",
      link: {
        label: "GitHub",
        href: "https://github.com/nitin0409sep/figma-extractor",
      },
      links: [
        { label: "GitHub", href: "https://github.com/nitin0409sep/figma-extractor" },
        { label: "Live Demo", href: "https://figma-extractor-zeta.vercel.app/" },
      ],
      videoUrl: "",
      details:
        "A Next.js tool that connects to the Figma REST API to extract design tokens and structured data from any Figma file or specific node. The app parses the full node tree recursively — collecting solid fill colors, typography styles (font family, size, weight, line height, letter spacing), and spacing values from auto-layout gaps and padding. Each node is mapped to CSS properties and corresponding Tailwind utility classes, with semantic HTML tag inference for component suggestions. Features rate limiting, input validation, theme toggling (light/dark/system), syntax-highlighted JSON preview with multi-tab views (Full JSON, CSS, Tailwind, Components), and one-click JSON download.",
      highlights: [
        "Built a recursive Figma node parser that extracts fills, strokes, effects, typography, and auto-layout properties",
        "Implemented CSS and Tailwind mappers that convert Figma styles to usable code with closest-match algorithms",
        "Designed a design token collector that deduplicates colors, typography, and spacing across the entire node tree",
        "Integrated Figma REST API with support for full file and specific node extraction via URL parsing",
        "Created expandable stat cards with slide animations showing extracted colors, typography, spacing, and components",
        "Added syntax-highlighted JSON preview with multi-tab views for Full JSON, CSS, Tailwind, and Components",
      ],
    },
    {
      title: "Cab Buddy",
      slug: "cab-buddy",
      subtitle: "Real-Time Ride Matching System",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Google Maps API"],
      description:
        "MERN-based ride booking system supporting User and Captain roles with separate authentication flows. Features real-time ride updates via Socket.io, Google Maps integration for route visualization and fare estimation, and structured MongoDB schema models for ride lifecycle management.",
      link: {
        label: "GitHub",
        href: "https://github.com/nitin0409sep/Cab-Buddy",
      },
      videoUrl: "",
      details:
        "A MERN-based ride booking system that supports both User and Captain roles with separate authentication flows. The platform features real-time ride updates powered by Socket.io, enabling instant communication between riders and drivers. Google Maps API integration provides route visualization, distance calculation, and fare estimation. The backend uses structured MongoDB schema models to manage the complete ride lifecycle from booking to completion.",
      highlights: [
        "Built separate authentication flows for User and Captain roles",
        "Implemented real-time ride updates using Socket.io WebSockets",
        "Integrated Google Maps API for route visualization and fare estimation",
        "Designed structured MongoDB schemas for ride lifecycle management",
        "Created a responsive React frontend with role-based dashboards",
        "Built RESTful APIs with Express.js for ride CRUD operations",
      ],
    },
    {
      title: "Blogify",
      slug: "blogify",
      subtitle: "Role-Based Content Platform",
      techStack: ["React", "Redux Toolkit", "Node.js", "PostgreSQL", "Docker", "JWT"],
      description:
        "Full-stack blogging platform with secure JWT authentication and permission-driven content access. Features layered backend architecture with validation, containerized PostgreSQL database, and role-based content management.",
      link: {
        label: "Frontend",
        href: "#",
      },
      links: [
        { label: "Frontend", href: "https://github.com/nitin0409sep/Blog-Website-Frontend" },
        { label: "Backend", href: "https://github.com/nitin0409sep/Blog-Website-Backend" },
      ],
      videoUrl: "",
      details:
        "A full-stack blogging platform with secure JWT authentication and permission-driven content access. The frontend is built with React and Redux Toolkit for state management, providing a smooth user experience for creating, editing, and reading blog posts. The backend features a layered architecture with proper validation at each level. PostgreSQL serves as the database, containerized with Docker for consistent environments. Role-based content management ensures users can only access and modify content based on their permissions.",
      highlights: [
        "Implemented secure JWT authentication with role-based access control",
        "Built frontend with React and Redux Toolkit for centralized state management",
        "Designed layered backend architecture with validation middleware",
        "Containerized PostgreSQL database using Docker",
        "Created permission-driven content access system",
        "Separated frontend and backend into independent repositories",
      ],
    },
    {
      title: "Book Nexus",
      slug: "book-nexus",
      subtitle: "Library Workflow Management",
      techStack: ["Angular", "Node.js", "Express", "MongoDB", "Bootstrap"],
      description:
        "Angular-based administrative dashboard with backend APIs using Node.js. Features authentication flows, structured database models, component-driven UI architecture, and maintainable backend services.",
      link: {
        label: "GitHub",
        href: "https://github.com/nitin0409sep/Book-Nexus",
      },
      videoUrl: "",
      details:
        "An Angular-based administrative dashboard for library workflow management, backed by Node.js APIs. The application features comprehensive authentication flows, structured MongoDB database models for books, users, and transactions, and a component-driven UI architecture built with Angular and Bootstrap. The backend services are designed for maintainability with clean separation of concerns.",
      highlights: [
        "Built a component-driven UI with Angular and Bootstrap",
        "Implemented authentication flows for admin and user roles",
        "Designed structured MongoDB models for library data management",
        "Created RESTful APIs with Express.js for CRUD operations",
        "Implemented search and filter functionality for book catalog",
        "Built maintainable backend services with clean architecture",
      ],
    },
  ],
} as const;
