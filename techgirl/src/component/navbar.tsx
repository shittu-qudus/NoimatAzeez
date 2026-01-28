import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll for shadow/backdrop
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active nav link on scroll
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled ? 'bg-[#f5f3f0]/90 backdrop-blur shadow-md' : 'bg-[#f5f3f0]'}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 lg:px-16 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl md:text-3xl font-IrishGrover font-bold text-[#5A3E6B] tracking-tight
                       -translate-x-2 md:-translate-x-4 lg:-translate-x-6">
                    Thetechgirl
                </h1>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {navLinks.map((link) => {
                        const section = link.href.replace('#', '');
                        const isActive = activeSection === section;

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`relative text-sm lg:text-base font-medium transition-colors
                  ${isActive ? 'text-[#d4a574]' : 'text-[#6b6b85] hover:text-[#d4a574]'}`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#d4a574] rounded-full" />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-[#4a4a68] p-2 hover:bg-[#e8e6e3] rounded-lg transition"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-4 pt-2 border-t border-[#e8e6e3] flex flex-col gap-4">
                    {navLinks.map((link) => {
                        const section = link.href.replace('#', '');
                        const isActive = activeSection === section;

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-base font-medium transition-colors
                  ${isActive ? 'text-[#d4a574]' : 'text-[#6b6b85] hover:text-[#d4a574]'}`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
