
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LenisScroll } from '@/components/theme/LenisScroll';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { SettingsPanel } from '@/components/theme/SettingsPanel';
import { LandingIntro } from '@/components/landing/LandingIntro';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

export const metadata: Metadata = {
    title: 'Nitin Verma | Senior Full-Stack SDE',
    description: 'Portfolio of Nitin Verma, a Senior Full-Stack Software Development Engineer specializing in Scalable Systems, Next.js, and Cloud Architecture.',
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20`}
            >
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider />
                    <LandingIntro />
                    <LenisScroll>
                        <main className="flex min-h-screen flex-col items-center justify-between">
                            {children}
                        </main>
                        <SettingsPanel />
                    </LenisScroll>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
