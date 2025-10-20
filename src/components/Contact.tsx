import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-4">
                                    Let's work together
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    I'm always interested in new opportunities
                                    and exciting projects. Whether you have a
                                    question, project idea, or just want to say
                                    hello, feel free to reach out!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">
                                            Email
                                        </p>
                                        <p className="text-muted-foreground">
                                            cipherwolf007@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">
                                            Phone
                                        </p>
                                        <p className="text-muted-foreground">
                                            +44 79 5859 4480
                                        </p>
                                    </div>
                                </div> */}
                            </div>

                            <div className="pt-6">
                                <h4 className="text-lg font-medium text-foreground mb-4">
                                    Follow me
                                </h4>
                                <div className="flex space-x-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="hover:bg-primary hover:text-primary-foreground"
                                    >
                                        <a href="https://github.com/bughuntr7">
                                            <Github className="h-5 w-5" />
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="hover:bg-primary hover:text-primary-foreground"
                                    >
                                        <a href="https://www.linkedin.com/in/">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border">
                            <form
                                action="https://formspree.io/f/xvgbjege"
                                method="POST"
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            First Name
                                        </label>
                                        <Input
                                            name="firstName"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">
                                            Last Name
                                        </label>
                                        <Input
                                            name="lastName"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Subject
                                    </label>
                                    <Input
                                        name="subject"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Message
                                    </label>
                                    <Textarea
                                        name="message"
                                        placeholder="Tell me about your project or just say hello!"
                                        className="min-h-[120px]"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    size="lg"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
