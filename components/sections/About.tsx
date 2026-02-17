
"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const statCard: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: 0.3 + i * 0.15,
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    }),
};

export function About() {
    const t = useTranslations('About');

    const stats = [
        { value: "2.5+", label: t('stats.experience') },
        { value: "5+", label: t('stats.projects') },
        { value: "500+", label: t('stats.contributions') },
    ];

    return (
        <section id="about" className="py-24 bg-background z-20 relative">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        className="space-y-4"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed text-justify"
                        >
                            {t('description')}
                        </motion.p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        className="grid gap-4 sm:grid-cols-2 md:gap-8"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.value}
                                custom={i}
                                variants={statCard}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`flex flex-col items-center justify-center p-8 border rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-shadow ${i === 2 ? "sm:col-span-2" : ""}`}
                            >
                                <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
