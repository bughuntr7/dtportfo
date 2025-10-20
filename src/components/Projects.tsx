import { Button } from "./ui/Button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack MERN e-commerce application with user authentication, payment integration, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            features: [
                "User Authentication",
                "Payment Gateway",
                "Admin Panel",
                "Responsive Design",
            ],
            status: "In Development",
            githubLink: "https://github.com/Yassin-ha/multi-vendor-app",
        },
        {
            title: "Luxury Hotel Booking",
            description:
                "A high-performance, SEO-optimized hotel reservation platform built with Next.js and Tailwind, featuring responsive design and intuitive booking workflows for premium hospitality brands.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            features: [
                "Fully Responsive Hotel Room Gallery",
                "Dynamic Room Filtering System",
                "Integrated Booking Form with Validation",
                "SEO-Optimized Structure & Metadata",
            ],
            status: "Live",
            demoLink: "https://template2.digild.com/",
        },
        {
            title: "Luxery Rental Car App",
            description:
                "Car rental solution built with Next.js and Tailwind CSS, featuring intuitive booking workflows, dynamic fleet management, and responsive design for modern car rental agencies.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            features: [
                "Fully Responsive Design for All Devices",
                "Interactive Team Member Profiles with Hover Animations",
                "SEO-Optimized Structure & Metadata",
            ],
            status: "Live",
            demoLink: "https://gtsport.digild.com/",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-gradient-card p-6 rounded-2xl shadow-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === "Live"
                                                    ? "bg-primary/20 text-primary"
                                                    : "bg-muted text-muted-foreground"
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="text-sm font-medium text-foreground mb-2">
                                                Technologies:
                                            </h4>
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-foreground mb-2">
                                                Key Features:
                                            </h4>
                                            <ul className="text-xs text-muted-foreground space-y-1">
                                                {project.features.map(
                                                    (feature) => (
                                                        <li
                                                            key={feature}
                                                            className="flex items-center"
                                                        >
                                                            <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-4">
                                        {project.status ===
                                            "In Development" && (
                                                <Button
                                                    size="sm"
                                                    variant="default"
                                                    className="flex-1"
                                                >
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex w-full h-full items-center justify-center"
                                                    >
                                                        <Github className="mr-2 h-4 w-4" />
                                                        Code
                                                    </a>
                                                </Button>
                                            )}
                                        {project.status === "Live" && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1"
                                            >
                                                <a
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex w-full h-full items-center justify-center"
                                                >
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button
                            variant="default"
                            size="lg"
                            className="mt-10 group"
                        >
                            <a
                                href="https://github.com/Yassin-ha?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex"
                            >
                                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                                See More Projects
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
