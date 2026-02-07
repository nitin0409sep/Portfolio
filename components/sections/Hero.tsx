
"use client";

import { motion } from 'framer-motion';
import { RocketIcon, CodeIcon, ServerIcon, DatabaseIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { RESUME_DATA } from '@/lib/constants';

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
            {/* Background Gradient */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="z-10 text-center space-y-8 px-4">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl font-medium_ text-muted-foreground"
                    >
                        {t('greeting')}
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                    >
                        {RESUME_DATA.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
                    >
                        {t('role')}
                    </motion.p>
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex justify-center gap-6 text-muted-foreground/40"
                >
                    <CodeIcon className="w-8 h-8 hover:text-primary transition-colors duration-300" />
                    <ServerIcon className="w-8 h-8 hover:text-primary transition-colors duration-300" />
                    <DatabaseIcon className="w-8 h-8 hover:text-primary transition-colors duration-300" />
                    <RocketIcon className="w-8 h-8 hover:text-primary transition-colors duration-300" />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                >
                    <a href="#projects" className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                        {t('cta_primary')}
                    </a>
                    <a href="/resume.pdf" target="_blank" className="px-8 py-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                        {t('cta_secondary')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
