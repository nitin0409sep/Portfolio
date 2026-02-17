
"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    }),
};

export function Projects() {
    const t = useTranslations('Projects');

    return (
        <section id="projects" className="py-24 bg-muted/40">
            <div className="container px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16"
                >
                    {t('title')}
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {RESUME_DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            custom={index}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        >
                            <Card className="h-full flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300">
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
