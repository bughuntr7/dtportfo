import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    );
}
