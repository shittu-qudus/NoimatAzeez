import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const HeroSection: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const handleGetInTouch = (): void => {
        console.log('Get in touch clicked');
    };

    const handleDownloadResume = (): void => {
        console.log('Download resume clicked');
    };

    return (
        <>
            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#d4a574] origin-left z-[60]"
                style={{ scaleX }}
            />

            <section
                id="home"
                className="w-full bg-[#f5f3f0] px-6 py-12 md:py-16 lg:py-20 md:px-12 lg:px-16"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* Left Content */}
                        <motion.div
                            className="flex flex-col"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.12 },
                                },
                            }}
                        >
                            {/* Greeting */}
                            <motion.p
                                className="text-[#3A3A4A] font-Inter text-lg md:text-xl mb-4 md:mb-6"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                Hi, I'm Noimot
                            </motion.p>

                            {/* Hero Heading */}
                            <motion.h1
                                className="font-playfair text-[#5A3E6B] font-bold leading-tight
                           text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                {[
                                    'Product Designer',
                                    'crafting',
                                    'thoughtful,',
                                    'secure, and user-',
                                    'centered digital',
                                    'experiences.',
                                ].map((line, i) => (
                                    <motion.span
                                        key={i}
                                        className="block"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        {line}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Subheading */}
                            <motion.p
                                className="text-[#5a5a5a] font-Inter text-base md:text-lg lg:text-xl
                           mt-6 mb-8 md:mb-10"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                From Product Design to
                                <br />
                                Cybersecurity Awareness.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <button
                                    onClick={handleGetInTouch}
                                    className="inline-flex items-center justify-center gap-2
                             bg-[#5A3E6B] text-white px-6 py-3 rounded-lg
                             font-medium hover:bg-[#3a3a58] transition group"
                                >
                                    Get in touch
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button><a
                                    href="https://drive.google.com/file/d/1dgonCdIMbuctD8EFM9lIWb6gHjj6CRA4/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className="inline-flex items-center justify-center gap-2
               border-2 border-[#4a4a68] text-[#4a4a68]
               px-6 py-3 rounded-lg font-medium
               hover:bg-[#4a4a68] hover:text-white transition"
                                    >
                                        <Download size={18} />
                                        Download Resume
                                    </button>
                                </a>

                            </motion.div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="flex justify-center lg:justify-end"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <div className="w-full max-w-md lg:max-w-lg">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="bola.png"
                                        alt="Noimot - Product Designer"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
