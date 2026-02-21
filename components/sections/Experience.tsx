"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { BriefcaseIcon, CalendarIcon, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const cardVariant: Variants = {
    hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    }),
};

const dotVariant: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: i * 0.2 + 0.1,
            type: "spring" as const,
            stiffness: 300,
            damping: 20,
        },
    }),
};

const listItem: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3 + i * 0.06,
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    }),
};

export function Experience() {
    const t = useTranslations("Experience");

    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h2>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent origin-top"
                    />

                    <div className="space-y-8">
                        {RESUME_DATA.work.map((role, index) => (
                            <div
                                key={role.company}
                                className="relative pl-12 sm:pl-20"
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    custom={index}
                                    variants={dotVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="absolute left-0 sm:left-4 top-6 flex items-center justify-center"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/10">
                                        <BriefcaseIcon className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    custom={index}
                                    variants={cardVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="group relative rounded-xl border bg-card p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                                >
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                                {role.company}
                                            </h3>
                                            <p className="text-sm font-medium text-primary/80">
                                                {role.title}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap shrink-0">
                                            <CalendarIcon className="w-3 h-3" />
                                            <span>
                                                {role.start} -{" "}
                                                {role.end === "Present"
                                                    ? t("present")
                                                    : role.end}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {role.description}
                                    </p>

                                    {/* Highlights */}
                                    {role.highlights.length > 0 && (
                                        <ul className="space-y-2 mb-4">
                                            {role.highlights.map(
                                                (highlight, i) => (
                                                    <motion.li
                                                        key={i}
                                                        custom={i}
                                                        variants={listItem}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                                    >
                                                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                        <span>{highlight}</span>
                                                    </motion.li>
                                                )
                                            )}
                                        </ul>
                                    )}

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {role.badges.map((badge) => (
                                            <Badge
                                                key={badge}
                                                variant="secondary"
                                                className="text-xs px-2.5 py-0.5"
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
