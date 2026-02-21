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
    const t = useTranslations("Projects");

    return (
        <section id="projects" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {RESUME_DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            custom={index}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.25 },
                            }}
                            className="group"
                        >
                            <Card className="h-full flex flex-col overflow-hidden border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                                {/* Gradient top border */}
                                <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        {project.subtitle}
                                    </p>
                                </CardHeader>

                                <CardContent className="flex-grow space-y-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {project.techStack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-xs font-normal"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-4 border-t border-border/50">
                                    {project.links && project.links.length > 1 ? (
                                        <div className="flex gap-2 w-full">
                                            {project.links.map((link) => (
                                                <Button
                                                    key={link.label}
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1 gap-2 group/btn"
                                                    asChild
                                                >
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <GithubIcon className="w-3.5 h-3.5 group-hover/btn:text-primary transition-colors" />
                                                        {link.label}
                                                    </a>
                                                </Button>
                                            ))}
                                        </div>
                                    ) : (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full gap-2 group/btn"
                                            asChild
                                        >
                                            <a
                                                href={project.link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <GithubIcon className="w-3.5 h-3.5 group-hover/btn:text-primary transition-colors" />
                                                {t("source_code")}
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
