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
            skills: ["Generative AI", "Prompt Engineering", "LLM API Integration", "LangChain", "Retrieval-Augmented Generation (RAG)", "Vector Embeddings", "Semantic Search"],
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
            skills: ["PostgreSQL", "MongoDB"],
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
            title: "AI Chat Web App",
            subtitle: "AI-Powered Conversational Chat Platform",
            techStack: [
                "Next.js", "TypeScript", "PostgreSQL", "Redis", "Drizzle ORM", "Groq API", "Zustand", "TanStack Query", "Docker", "Tailwind CSS",
            ],
            description: "Full-stack AI chat application built with Next.js and PostgreSQL, featuring JWT-based authentication with secure httpOnly cookies. Integrates Groq API (Llama 3.3-70B) for intelligent responses, with a two-tier memory system using Redis for short - term context and automatic summarization for long - term recall.Supports multi- chat management with persistent message history and soft- delete architecture.",
            link: {
                label: "GitHub",
                href: "https://github.com/nitin0409sep/ai-chat-app",
            },
        },
        {
            title: "Company Chat Bot",
            subtitle: "AI-Powered Company Policy Q&A System",
            techStack: [
                "Node.js",
                "LangChain",
                "Pinecone",
                "HuggingFace",
                "Groq",
                "pdf-parse",
                "RAG",
            ],
            description: "Node.js-based RAG (Retrieval-Augmented Generation) chatbot that answers employee questions using company policy documents. Loads PDFs, splits them into chunks, generates vector embeddings via HuggingFace, stores them in Pinecone, and uses Groq's Llama 3.3 70B model to provide context-aware answers through an interactive CLI",
            link: {
                label: "GitHub",
                href: "https://github.com/nitin0409sep/rag-chat-bot",
            },
        },
        {
            title: "Cab Buddy",
            subtitle: "Real-Time Ride Matching System",
            techStack: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Socket.io",
                "Google Maps API",
            ],
            description:
                "MERN-based ride booking system supporting User and Captain roles with separate authentication flows. Features real-time ride updates via Socket.io, Google Maps integration for route visualization and fare estimation, and structured MongoDB schema models for ride lifecycle management.",
            link: {
                label: "GitHub",
                href: "https://github.com/nitin0409sep/Cab-Buddy",
            },
        },
        {
            title: "Blogify",
            subtitle: "Role-Based Content Platform",
            techStack: [
                "React",
                "Redux Toolkit",
                "Node.js",
                "PostgreSQL",
                "Docker",
                "JWT",
            ],
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
        },
        {
            title: "Book Nexus",
            subtitle: "Library Workflow Management",
            techStack: [
                "Angular",
                "Node.js",
                "Express",
                "MongoDB",
                "Bootstrap",
            ],
            description:
                "Angular-based administrative dashboard with backend APIs using Node.js. Features authentication flows, structured database models, component-driven UI architecture, and maintainable backend services.",
            link: {
                label: "GitHub",
                href: "https://github.com/nitin0409sep/Book-Nexus",
            },
        },
    ],
} as const;
