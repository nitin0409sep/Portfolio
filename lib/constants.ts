import { ResumeData } from "@/types";

export const RESUME_DATA: ResumeData = {
    name: "Nitin Verma",
    initials: "NV",
    location: "Noida, India",
    locationLink: "https://www.google.com/maps/place/Noida",
    about:
        "Product-oriented Full Stack Engineer with 2.5+ years of experience designing and delivering scalable SaaS systems using TypeScript, Angular, React, and Node.js. Experienced in building modular frontend architectures, secure RESTful APIs, role-based access control systems, and real-time event-driven workflows.",
    summary:
        "Strong focus on clean architecture, performance optimization, and production-grade engineering standards.",
    avatarUrl: "https://github.com/nitin5september.png",
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
            badges: ["Remote", "Full-Time"],
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
            skills: ["TypeScript", "JavaScript"],
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
            skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
        },
        {
            name: "Databases",
            icon: "database",
            skills: ["PostgreSQL", "MongoDB"],
        },
        {
            name: "Cloud & DevOps",
            icon: "cloud",
            skills: ["Docker", "AWS", "GCP", "Firebase", "Vercel"],
        },
        {
            name: "Auth & Tooling",
            icon: "shield",
            skills: ["JWT", "RBAC", "Zod", "Joi", "Drizzle ORM", "Sequelize", "Git"],
        },
    ],
    projects: [
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
                href: "#",
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
                { label: "Frontend", href: "#" },
                { label: "Backend", href: "#" },
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
                href: "#",
            },
        },
    ],
} as const;
