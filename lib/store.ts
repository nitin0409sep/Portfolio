import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeColor = 'blue' | 'green' | 'violet' | 'orange';
type ThemeRadius = '0' | '0.3' | '0.5' | '0.75' | '1.0';

interface ThemeState {
    color: ThemeColor;
    mode: 'light' | 'dark';
    radius: number;
    setColor: (color: ThemeColor) => void;
    setMode: (mode: 'light' | 'dark') => void;
    setRadius: (radius: number) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            color: 'blue',
            mode: 'dark',
            radius: 0.5,
            setColor: (color) => set({ color }),
            setMode: (mode) => set({ mode }),
            setRadius: (radius) => set({ radius }),
        }),
        {
            name: 'portfolio-theme-storage',
        }
    )
);
