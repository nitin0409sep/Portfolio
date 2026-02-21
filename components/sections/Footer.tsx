"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, MailIcon, HeartIcon } from "lucide-react";

export function Footer() {
    const t = useTranslations("Footer");
    const year = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/20">
            <div className="container px-4 md:px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Logo */}
                    <p className="text-lg font-bold font-mono text-primary tracking-tighter">
                        {RESUME_DATA.initials}
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href={`mailto:${RESUME_DATA.contact.email}`}
                            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                            aria-label="Email"
                        >
                            <MailIcon className="w-4 h-4" />
                        </a>
                        {RESUME_DATA.contact.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                aria-label={social.name}
                            >
                                {social.name === "GitHub" ? (
                                    <GithubIcon className="w-4 h-4" />
                                ) : (
                                    <LinkedinIcon className="w-4 h-4" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-px bg-border" />

                    {/* Info */}
                    <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
                            Built with <HeartIcon className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js, Tailwind CSS & Framer Motion
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                            &copy; {year} {RESUME_DATA.name}. {t("rights")}
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
