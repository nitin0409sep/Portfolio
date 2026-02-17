
"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { MailIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const socialVariant: Variants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            delay: 0.3 + i * 0.1,
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    }),
};

export function Contact() {
    const t = useTranslations('Contact');

    const socialLinks = [
        {
            key: "email",
            href: `mailto:${RESUME_DATA.contact.email}`,
            icon: <MailIcon className="w-4 h-4" />,
            label: RESUME_DATA.contact.email,
        },
        ...RESUME_DATA.contact.social.map((social) => ({
            key: social.name,
            href: social.url,
            icon: social.name === "GitHub" ? <GithubIcon className="w-4 h-4" /> : <LinkedinIcon className="w-4 h-4" />,
            label: social.name,
            external: true,
        })),
    ];

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                    className="max-w-2xl mx-auto space-y-8 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('title')}</h2>
                    <p className="text-muted-foreground">{t('subtitle')}</p>
                </motion.div>

                <div className="max-w-2xl mx-auto mt-12 space-y-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        {socialLinks.map((link, i) => (
                            <motion.div
                                key={link.key}
                                custom={i}
                                variants={socialVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full"
                            >
                                <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                                    <a href={link.href} target={"external" in link ? "_blank" : undefined}>
                                        {link.icon}
                                        {link.label}
                                    </a>
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                        className="space-y-4 text-left"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('name_label')}</label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('email_label')}</label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('message_label')}</label>
                            <Textarea id="message" placeholder="Type your message here." className="min-h-[120px]" />
                        </div>
                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                            <Button className="w-full" type="submit">{t('send_button')}</Button>
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
