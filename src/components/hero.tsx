import { Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
        >
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="mb-8">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                        <span className="text-foreground">Daniel</span>{" "}
                        <span className="text-primary">Tan</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                        Full-Stack Developer
                    </p>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Building modern web applications with Next.js, React, and Node.js
                    </p>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Integrating modern technologies to build scalable and efficient web applications with passion and precision.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <Button variant="default" size="lg" className="group">
                        <a href="https://github.com/bughuntr7" className="flex">
                            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            GitHub
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="group">
                        <a
                            href="https://www.linkedin.com/in"
                            className="flex"
                        >
                            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            LinkedIn
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="group">
                        <a
                            href="mailto:cipherwolf007@gmail.com"
                            className="flex"
                        >
                            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            Contact
                        </a>
                    </Button>
                </div>

                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        Scroll to explore my work
                    </p>
                    <div className="mt-4 animate-bounce">
                        <div className="w-1 h-8 bg-primary mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Hero;
