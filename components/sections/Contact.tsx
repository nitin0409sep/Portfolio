"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { MailIcon, LinkedinIcon, GithubIcon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const socialVariant: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: 0.2 + i * 0.1,
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    }),
};

export function Contact() {
    const t = useTranslations("Contact");

    const socialLinks = [
        {
            key: "email",
            href: `mailto:${RESUME_DATA.contact.email}`,
            icon: <MailIcon className="w-5 h-5" />,
            label: RESUME_DATA.contact.email,
            sublabel: "Email",
        },
        {
            key: "GitHub",
            href: RESUME_DATA.contact.social[0]?.url ?? "#",
            icon: <GithubIcon className="w-5 h-5" />,
            label: "GitHub",
            sublabel: "nitin0409sep",
            external: true,
        },
        {
            key: "LinkedIn",
            href: RESUME_DATA.contact.social[1]?.url ?? "#",
            icon: <LinkedinIcon className="w-5 h-5" />,
            label: "LinkedIn",
            sublabel: "nitin0409sep",
            external: true,
        },
    ];

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
                    {/* Left - Social Links */}
                    <div className="space-y-4">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.key}
                                href={link.href}
                                target={"external" in link ? "_blank" : undefined}
                                rel={"external" in link ? "noopener noreferrer" : undefined}
                                custom={i}
                                variants={socialVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                className="flex items-center gap-4 p-4 rounded-xl border bg-card/50 hover:border-primary/30 hover:shadow-md transition-all group cursor-pointer"
                            >
                                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                                    {link.icon}
                                </div>
                                <div>
                                    <p className="font-medium text-sm group-hover:text-primary transition-colors">
                                        {link.label}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {link.sublabel}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right - Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-4 p-6 rounded-xl border bg-card/50"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium"
                                >
                                    {t("name_label")}
                                </label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    {t("email_label")}
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium"
                            >
                                {t("message_label")}
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                className="min-h-[140px] resize-none"
                            />
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button className="w-full gap-2" type="submit">
                                <SendIcon className="w-4 h-4" />
                                {t("send_button")}
                            </Button>
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
