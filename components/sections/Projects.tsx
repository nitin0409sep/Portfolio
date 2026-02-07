
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

export function Projects() {
    const t = useTranslations('Projects');

    return (
        <section id="projects" className="py-24 bg-muted/40">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">{t('title')}</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {RESUME_DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-center text-xl">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 border-t border-border">
                                    <Button variant="outline" size="sm" className="w-full gap-2 group" asChild>
                                        <a href={project.link.href} target="_blank">
                                            <GithubIcon className="w-4 h-4 group-hover:text-primary transition-colors" />
                                            {t('source_code')}
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
