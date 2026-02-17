
"use client";

import { motion, Variants } from 'framer-motion';
import { RocketIcon, CodeIcon, ServerIcon, DatabaseIcon, DownloadIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { RESUME_DATA } from '@/lib/constants';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const iconFloat: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.7 + i * 0.1,
            type: "spring" as const,
            stiffness: 200,
            damping: 15,
        },
    }),
};

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
            {/* Background Gradient */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="z-10 text-center space-y-8 px-4">

                {/* Animated Badge */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-border px-3 py-1 rounded-full text-sm font-mono text-muted-foreground"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span>Open to remote opportunities</span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-4">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        className="text-lg md:text-xl font-medium_ text-muted-foreground"
                    >
                        {t('greeting')}
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                    >
                        {RESUME_DATA.name}
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
                    >
                        {t('role')}
                    </motion.p>
                </div>

                {/* Floating Tech Icons */}
                <div className="flex justify-center gap-6 text-muted-foreground/40">
                    {[CodeIcon, ServerIcon, DatabaseIcon, RocketIcon].map((Icon, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={iconFloat}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ y: -4, scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Icon className="w-8 h-8 hover:text-primary transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                        {t('cta_primary')}
                    </motion.a>
                    <motion.a
                        href="/Nitin_Verma_Resume.pdf"
                        download="Nitin_Verma_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        <DownloadIcon className="w-4 h-4" />
                        {t('cta_secondary')}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
