import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((prev) => !prev);
    const close = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-black/60 backdrop-blur relative">
            {" "}
            {/* Added relative positioning */}
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-foreground">
                <a
                    href="#home"
                    className="flex items-center gap-2"
                    onClick={close}
                >
                    <span className="text-3xl font-bold text-primary">YH</span>
                </a>

                {/* Desktop menu */}
                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-accent transition-colors"
                            onClick={close}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-accent transition-colors"
                            onClick={close}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-accent transition-colors"
                            onClick={close}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-accent transition-colors"
                            onClick={close}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a href="#contact" onClick={close}>
                        <Button size="sm" variant="default">
                            Hire Me
                        </Button>
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    aria-label="Toggle Menu"
                    aria-expanded={open}
                    className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent/10 md:hidden"
                    onClick={toggle}
                >
                    {open ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </nav>
            {/* Mobile menu panel with smooth transition */}
            <div
                className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
                    open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-full pointer-events-none"
                } border-t border-border bg-black/80 backdrop-blur md:hidden`}
            >
                <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
                    <a
                        href="#about"
                        className="py-2 hover:text-accent transition-colors"
                        onClick={close}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="py-2 hover:text-accent transition-colors"
                        onClick={close}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="py-2 hover:text-accent transition-colors"
                        onClick={close}
                    >
                        Contact
                    </a>
                    <div className="pt-2">
                        <a href="#contact" onClick={close}>
                            <Button
                                className="w-full"
                                size="md"
                                variant="default"
                            >
                                Hire Me
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
