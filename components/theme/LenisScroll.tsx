
"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export function LenisScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.8, smoothWheel: true, wheelMultiplier: 0.9 }}>
            {children as any}
        </ReactLenis>
    );
}
