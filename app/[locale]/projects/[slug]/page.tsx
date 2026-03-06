"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RESUME_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowLeftIcon,
    GithubIcon,
    ExternalLinkIcon,
    PlayIcon,
} from "lucide-react";

export default function ProjectDetailPage() {
    const params = useParams();
    const router = useRouter();
    const t = useTranslations("ProjectDetail");

    const project = RESUME_DATA.projects.find(
        (p) => p.slug === params.slug
    );

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">{t("not_found")}</h1>
                    <Button onClick={() => router.back()} variant="outline">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        {t("go_back")}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Button
                        onClick={() => router.back()}
                        variant="ghost"
                        className="mb-8 gap-2 text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        {t("go_back")}
                    </Button>
                </motion.div>

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted/50 border border-border/60 mb-12"
                >
                    {project.videoUrl ? (
                        <video
                            src={project.videoUrl}
                            controls
                            className="w-full h-full object-cover"
                            poster=""
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <PlayIcon className="w-7 h-7 text-primary" />
                            </div>
                            <p className="text-sm font-medium">{t("video_coming_soon")}</p>
                        </div>
                    )}
                </motion.div>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                        {project.title}
                    </h1>
                    <p className="text-lg text-primary font-medium mb-4">
                        {project.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base">
                        {project.description}
                    </p>
                </motion.div>

                {/* Details Section */}
                {project.details && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full" />
                            {t("about_project")}
                        </h2>
                        <div className="bg-card border border-border/60 rounded-xl p-6">
                            <p className="text-muted-foreground leading-relaxed">
                                {project.details}
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Highlights Section */}
                {project.highlights && project.highlights.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full" />
                            {t("what_we_built")}
                        </h2>
                        <div className="bg-card border border-border/60 rounded-xl p-6">
                            <ul className="space-y-3">
                                {project.highlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.4 + index * 0.08,
                                        }}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="leading-relaxed">{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        {t("tech_stack")}
                    </h2>
                    <div className="bg-card border border-border/60 rounded-xl p-6">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.5 + index * 0.05,
                                    }}
                                >
                                    <Badge
                                        variant="secondary"
                                        className="px-3 py-1.5 text-sm font-medium"
                                    >
                                        {tech}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Source Code Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap gap-3"
                >
                    {project.links && project.links.length > 1 ? (
                        project.links.map((link) => (
                            <Button
                                key={link.label}
                                variant="outline"
                                size="lg"
                                className="gap-2"
                                asChild
                            >
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.label === "GitHub" ? (
                                        <GithubIcon className="w-4 h-4" />
                                    ) : (
                                        <ExternalLinkIcon className="w-4 h-4" />
                                    )}
                                    {link.label}
                                </a>
                            </Button>
                        ))
                    ) : (
                        <Button
                            variant="outline"
                            size="lg"
                            className="gap-2"
                            asChild
                        >
                            <a
                                href={project.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="w-4 h-4" />
                                {t("source_code")}
                            </a>
                        </Button>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
