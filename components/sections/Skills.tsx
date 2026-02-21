"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import {
    Code2,
    Layout,
    Server,
    Database,
    Cloud,
    Shield,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    code: Code2,
    layout: Layout,
    server: Server,
    database: Database,
    cloud: Cloud,
    shield: Shield,
};

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const categoryCard: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    },
};

const skillTag: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 20 },
    },
};

export function Skills() {
    const t = useTranslations("Skills");

    return (
        <section id="skills" className="py-24 bg-muted/30 relative">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-lg">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                >
                    {RESUME_DATA.skillCategories.map((category) => {
                        const Icon = iconMap[category.icon] || Code2;
                        return (
                            <motion.div
                                key={category.name}
                                variants={categoryCard}
                                whileHover={{
                                    y: -4,
                                    transition: { duration: 0.2 },
                                }}
                                className="group rounded-xl border bg-card/50 p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                                        <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-sm">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <motion.div
                                    variants={container}
                                    className="flex flex-wrap gap-2"
                                >
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={skillTag}
                                            whileHover={{ scale: 1.05 }}
                                            className="inline-flex items-center rounded-md border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-all cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
