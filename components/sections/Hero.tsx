"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadIcon, ChevronDown, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";

const roles = [
    "Full-Stack Engineer",
    "React & Angular Developer",
    "Node.js Backend Engineer",
];

export function Hero() {
    const t = useTranslations("Hero");
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="hero-grid-pattern" />

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,90vw)] h-[min(700px,90vw)] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 px-4 py-1.5 rounded-full text-sm text-muted-foreground"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    {t("status")}
                </motion.div>

                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-muted-foreground font-mono"
                >
                    {t("greeting")}
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50">
                        {RESUME_DATA.name}
                    </span>
                </motion.h1>

                {/* Rotating Role */}
                <div className="h-10 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={roleIndex}
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                            transition={{ duration: 0.35 }}
                            className="text-xl md:text-2xl text-primary font-medium"
                        >
                            {roles[roleIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
                >
                    <MapPin className="w-3.5 h-3.5" />
                    {RESUME_DATA.location}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                    <motion.a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                    >
                        {t("cta_primary")}
                    </motion.a>
                    <motion.a
                        href="/Nitin_Verma_Resume.pdf"
                        download="Nitin_Verma_Resume.pdf"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                        <DownloadIcon className="w-4 h-4" />
                        {t("cta_secondary")}
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
