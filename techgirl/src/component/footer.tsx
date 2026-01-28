import React from 'react';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface NavLink {
    label: string;
    href: string;
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const Footer: React.FC = () => {
    const quickLinks: NavLink[] = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
    ];

    const socialLinks: SocialLink[] = [
        { icon: <Linkedin size={20} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: 'https://x.com/pearlLami', label: 'Twitter' },
        { icon: <Dribbble size={20} />, href: 'https://dribbble.com', label: 'Dribbble' }
    ];

    // Variants for container and items
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.15,
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <motion.footer
            className="w-full bg-[#f5f3f0] px-6 py-12 md:py-16 md:px-12 lg:px-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
                    {/* Brand Section */}
                    <motion.div className="flex flex-col" variants={itemVariants}>
                        <h3 className="text-[#5A3E6B] text-2xl md:text-3xl font-bold mb-4">
                            Noimot Azeez
                        </h3>
                        <p className="text-[#5A3E6B] text-sm md:text-base leading-relaxed">
                            Product & UI/UX Designer with a growing focus on security-aware design.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="flex flex-col" variants={itemVariants}>
                        <h4 className="text-[#5A3E6B] text-xl md:text-2xl font-bold mb-4">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {quickLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="text-[#5a5a5a] text-sm md:text-base hover:text-[#4a4a68] transition-colors duration-200"
                                    whileHover={{ x: 4 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div className="flex flex-col" variants={itemVariants}>
                        <h4 className="text-[#5A3E6B] text-xl md:text-2xl font-bold mb-4">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border-2 border-[#5a5a5a] text-[#5a5a5a] flex items-center justify-center transition-all duration-200"
                                    whileHover={{ scale: 1.2, backgroundColor: '#4a4a68', color: '#fff', borderColor: '#4a4a68' }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div className="border-t border-[#d4d2cf] pt-6 flex flex-col md:flex-row justify-between items-center gap-4" variants={itemVariants}>
                    <p className="text-[#5a5a5a] text-xs md:text-sm">
                        © 2026 Noimot Azeez. All rights reserved.
                    </p>
                    <p className="text-[#5a5a5a] text-xs md:text-sm">
                        Designed with care and intention.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
