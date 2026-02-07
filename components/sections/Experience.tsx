
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
    const t = useTranslations('Experience');

    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">{t('title')}</h2>

                <div className="relative max-w-4xl mx-auto pl-8 sm:pl-0">

                    {/* Vertical Line */}
                    <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2" />

                    {RESUME_DATA.work.map((role, index) => (
                        <motion.div
                            key={role.company}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`relative flex items-center mb-12 flex-col sm:flex-row ${index % 2 === 0 ? "justify-end sm:text-right" : "justify-start sm:text-left"}`}
                        >

                            {/* Timeline Dot */}
                            <div className="absolute left-0 sm:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center -translate-x-1/2 z-10 sm:transform-none transform translate-x-[-1px]">
                                <BriefcaseIcon className="w-5 h-5 text-primary" />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full sm:w-[calc(50%-40px)] ml-12 sm:ml-0 ${index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                                <Card className="hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <div className={`flex flex-col gap-1 ${index % 2 === 0 ? "sm:items-end" : "sm:items-start"} items-start`}>
                                            <h3 className="text-xl font-bold">{role.company}</h3>
                                            <p className="text-sm text-muted-foreground font-medium">{role.title}</p>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <CalendarIcon className="w-3 h-3" />
                                                <span>{role.start} - {role.end === "Current" ? t('present') : role.end}</span>
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                {role.badges.map((badge) => (
                                                    <Badge key={badge} variant="secondary" className="text-xs">{badge}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                                            {role.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
