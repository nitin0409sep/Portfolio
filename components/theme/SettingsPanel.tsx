
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Moon, Sun, Palette, Globe } from 'lucide-react';
import { useThemeStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const colors = ['blue', 'green', 'violet', 'orange'];
const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    // { code: 'es', label: 'Spanish' }
];

export function SettingsPanel() {
    const [isOpen, setIsOpen] = useState(false);
    const { mode, setMode, color, setColor, radius, setRadius } = useThemeStore();
    const locale = useLocale();
    const router = useRouter();

    const handleLanguageChange = (newLocale: string) => {
        document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
        router.refresh();
    };

    return (
        <>
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
            >
                <Settings className="w-6 h-6" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-80 bg-card border-l z-50 p-6 shadow-2xl overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <Palette className="w-5 h-5" /> Customize
                                </h2>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="space-y-8">
                                {/* Mode */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-muted-foreground">Mode</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button
                                            variant={mode === 'light' ? 'default' : 'outline'}
                                            onClick={() => setMode('light')}
                                            className="justify-start gap-2"
                                        >
                                            <Sun className="w-4 h-4" /> Light
                                        </Button>
                                        <Button
                                            variant={mode === 'dark' ? 'default' : 'outline'}
                                            onClick={() => setMode('dark')}
                                            className="justify-start gap-2"
                                        >
                                            <Moon className="w-4 h-4" /> Dark
                                        </Button>
                                    </div>
                                </div>

                                {/* Color */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-muted-foreground">Accent Color</h3>
                                    <div className="grid grid-cols-4 gap-2">
                                        {colors.map((c) => (
                                            <button
                                                key={c}
                                                onClick={() => setColor(c as any)}
                                                className={`h-8 w-8 rounded-full transition-all ${color === c ? 'ring-2 ring-primary ring-offset-2' : ''
                                                    }`}
                                                style={{ backgroundColor: `var(--theme-${c})` }} // Placeholder as real vars are needed
                                            >
                                                <div className={`w-full h-full rounded-full bg-${c}-500`} style={{ background: c === 'violet' ? '#7c3aed' : c === 'green' ? '#16a34a' : c === 'orange' ? '#ea580c' : '#2563eb' }}></div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Radius */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-muted-foreground">Radius</h3>
                                    <div className="grid grid-cols-5 gap-1">
                                        {['0', '0.3', '0.5', '0.75', '1.0'].map((r) => (
                                            <Button
                                                key={r}
                                                variant={Number(radius) === Number(r) ? 'default' : 'outline'}
                                                onClick={() => setRadius(Number(r))}
                                                className="text-xs h-8 px-0"
                                            >
                                                {r}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Language */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-muted-foreground">Language</h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {languages.map((lang) => (
                                            <Button
                                                key={lang.code}
                                                variant={locale === lang.code ? 'default' : 'outline'}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className="justify-start gap-2"
                                            >
                                                <Globe className="w-4 h-4" /> {lang.label}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
