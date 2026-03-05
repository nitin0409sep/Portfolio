"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";

const navLinks = [
    { href: "#about", key: "about" },
    { href: "#skills", key: "skills" },
    { href: "#experience", key: "experience" },
    { href: "#projects", key: "projects" },
    { href: "#contact", key: "contact" },
];

export function Navbar() {
    const t = useTranslations("Navigation");
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const isProjectDetail = pathname.includes("/projects/");
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        if (sections.length === 0) {
            setActiveSection("");
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [pathname]);

    const handleClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        setMobileOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={isProjectDetail ? () => router.push(`/${locale}`) : scrollToTop}
                        className="relative text-xl font-bold font-mono tracking-tighter group"
                    >
                        <span className="text-primary transition-colors">
                            {RESUME_DATA.initials}
                        </span>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </button>

                    {!isProjectDetail && (
                        <>
                            <div className="hidden md:flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.key}
                                        onClick={() => handleClick(link.href)}
                                        className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                            activeSection === link.key
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {t(link.key)}
                                        {activeSection === link.key && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute inset-0 rounded-lg bg-primary/10"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <button
                                className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </>
                    )}
                </div>
            </div>

            {!isProjectDetail && (
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-3 space-y-1">
                                {navLinks.map((link, i) => (
                                    <motion.button
                                        key={link.key}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => handleClick(link.href)}
                                        className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                            activeSection === link.key
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                        }`}
                                    >
                                        {t(link.key)}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </motion.nav>
    );
}
