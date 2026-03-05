"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { MapPin, GraduationCap } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const statCard: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: 0.2 + i * 0.12,
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    }),
};

export function About() {
    const t = useTranslations("About");

    const stats = [
        { value: "3+", label: t("stats.experience") },
        { value: "5+", label: t("stats.projects") },
        { value: "500+", label: t("stats.contributions") },
    ];

    return (
        <section id="about" className="py-24 bg-background relative">
            <div className="container px-4 md:px-6">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h2>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Left - Avatar + Info */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2 flex flex-col items-center gap-6"
                    >
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                                <img
                                    src={RESUME_DATA.avatarUrl}
                                    alt={RESUME_DATA.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
                        </div>

                        {/* Quick info */}
                        <div className="space-y-3 text-center">
                            <h3 className="text-xl font-semibold">{RESUME_DATA.name}</h3>
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground justify-center">
                                <MapPin className="w-3.5 h-3.5" />
                                {RESUME_DATA.location}
                            </div>
                        </div>

                        {/* Education */}
                        {RESUME_DATA.education.map((edu) => (
                            <div
                                key={edu.school}
                                className="flex items-start gap-3 p-4 rounded-xl border bg-card/50 w-full"
                            >
                                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                                    <GraduationCap className="w-4 h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium leading-snug">
                                        {edu.degree}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {edu.school}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {edu.start} - {edu.end}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right - Summary + Stats */}
                    <div className="lg:col-span-3 space-y-8">
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted-foreground md:text-lg leading-relaxed text-justify"
                        >
                            {t("description")}
                        </motion.p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.value}
                                    custom={i}
                                    variants={statCard}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -4,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="flex flex-col items-center justify-center p-6 rounded-xl border bg-card/50 hover:border-primary/30 hover:shadow-md transition-all"
                                >
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-1 text-center">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
