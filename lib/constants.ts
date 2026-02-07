export const RESUME_DATA = {
    name: "Nitin Verma",
    initials: "NV",
    location: "Self-driven, Remote-capable",
    locationLink: "https://www.google.com/maps/place/Noida",
    about:
        "Software Development Engineer with 2.5+ years of experience in full stack development, proficient in building scalable and responsive web applications. Skilled in both front-end and back-end technologies including React, Angular, Node.js, and databases like PostgreSQL and MongoDB. Successfully contributed to 5+ industry-grade projects. Committed to writing clean, modular code and continually improving system efficiency and reliability.",
    summary:
        "Full-Stack Software Development Engineer focused on building scalable, production-grade applications. I specialize in the JavaScript ecosystem (Next.js, Node.js, TypeScript) and have a strong foundation in database architecture and system design.",
    avatarUrl: "https://github.com/nitin5september.png",
    personalWebsiteUrl: "https://nitin.dev",
    contact: {
        email: "nitin5september@gmail.com",
        tel: "+919415056824",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/nitin0409sep", // Placeholder based on email
                icon: "github",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/nitin0409sep", // Placeholder based on common pattern, will update if user provides
                icon: "linkedin",
            },
        ],
    },
    education: [
        {
            school: "IMS Engineering College",
            degree: "B.Tech (Computer Science and Engineering)",
            start: "2019",
            end: "2023",
            grade: "71.2%",
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
            end: "Current",
            description:
                "Contributed to 3 industry-grade projects across various domains, delivering modular, reusable code for 80+ workflows. Developed responsive UIs using Angular, React, Tailwind CSS, and Material Design. Designed secure RESTful services using Next.js, Drizzle ORM, and PostgreSQL. Implemented RBAC, digital signatures, and automated email campaigns.",
        },
    ],
    skills: [
        "Next.js",
        "React",
        "Angular",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "AWS",
        "Tailwind CSS",
        "Framer Motion",
        "Zustand",
        "Drizzle ORM",
        "Socket.io",
    ],
    projects: [
        {
            title: "Cab Buddy",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Google Maps API"],
            description:
                "Real-time ride-hailing application with live tracking, route optimization, and secure JWT authentication. Features instant ride updates via WebSockets and role-based access for users and drivers.",
            link: {
                label: "GitHub",
                href: "#", // Placeholder
            },
        },
        {
            title: "Blogify",
            techStack: ["React", "Redux Toolkit", "Node.js", "PostgreSQL", "Docker", "AWS S3"],
            description:
                "Full-stack blogging platform with containerized database, secure authentication, and social features like comments and likes. content management with role-based permissions.",
            link: {
                label: "GitHub",
                href: "#", // Placeholder
            },
        },
        {
            title: "Book Nexus",
            techStack: ["Angular", "Node.js", "Express", "MongoDB", "Bootstrap"],
            description:
                "Library Management System with robust security, session management, and admin controls for managing books and user profiles.",
            link: {
                label: "GitHub",
                href: "#", // Placeholder
            },
        },
    ],
} as const;
