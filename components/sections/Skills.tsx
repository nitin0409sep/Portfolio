
"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.2,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 20,
        },
    },
};

export function Skills() {
    const t = useTranslations('Skills');

    return (
        <section id="skills" className="py-24 bg-muted/40">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('title')}</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {RESUME_DATA.skills.map((skill) => (
                        <motion.div
                            key={skill}
                            variants={item}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-md cursor-default">
                                {skill}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
