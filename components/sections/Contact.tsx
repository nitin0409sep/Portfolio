
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { MailIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="max-w-2xl mx-auto space-y-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('title')}</h2>
                    <p className="text-muted-foreground">{t('subtitle')}</p>
                </div>

                <div className="max-w-2xl mx-auto mt-12 space-y-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                            <a href={`mailto:${RESUME_DATA.contact.email}`}>
                                <MailIcon className="w-4 h-4" />
                                {RESUME_DATA.contact.email}
                            </a>
                        </Button>

                        {RESUME_DATA.contact.social.map((social) => (
                            <Button key={social.name} variant="outline" size="lg" className="w-full gap-2" asChild>
                                <a href={social.url} target="_blank">
                                    {social.name === "GitHub" ? <GithubIcon className="w-4 h-4" /> : <LinkedinIcon className="w-4 h-4" />}
                                    {social.name}
                                </a>
                            </Button>
                        ))}
                    </div>

                    <form className="space-y-4 text-left">
                        <div className="grid grid-cols-2 gap-4">
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
                        <Button className="w-full" type="submit">{t('send_button')}</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
