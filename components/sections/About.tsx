
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";

export function About() {
    const t = useTranslations('About');

    return (
        <section id="about" className="py-24 bg-background z-20 relative">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('title')}</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
                            {t('description')}
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid gap-4 sm:grid-cols-2 md:gap-8"
                    >
                        <div className="flex flex-col items-center justify-center p-8 border rounded-lg bg-card text-card-foreground shadow-sm">
                            <h3 className="text-4xl font-bold text-primary">2.5+</h3>
                            <p className="text-sm text-muted-foreground">{t('stats.experience')}</p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-8 border rounded-lg bg-card text-card-foreground shadow-sm">
                            <h3 className="text-4xl font-bold text-primary">5+</h3>
                            <p className="text-sm text-muted-foreground">{t('stats.projects')}</p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-8 border rounded-lg bg-card text-card-foreground shadow-sm col-span-2">
                            <h3 className="text-4xl font-bold text-primary">500+</h3>
                            <p className="text-sm text-muted-foreground">{t('stats.contributions')}</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
