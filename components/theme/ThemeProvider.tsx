
"use client";

import { useEffect } from 'react';
import { useThemeStore } from '@/lib/store';

export function ThemeProvider() {
    const { mode, color, radius } = useThemeStore();

    useEffect(() => {
        const root = window.document.documentElement;

        // Mode
        root.classList.remove('light', 'dark');
        root.classList.add(mode);

        // Color Theme
        root.setAttribute('data-theme', color);

        // Radius
        root.style.setProperty('--radius', `${radius}rem`);
    }, [mode, color, radius]);

    return null;
}
