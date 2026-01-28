import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Then define variants using the type
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface StatItem {
    value: string;
    label: string;
}
const AboutSection: React.FC = () => {
    const stats: StatItem[] = [
        { value: '3+', label: 'Years Experience' },
        { value: '15+', label: 'Projects Completed' },
        { value: '100%', label: 'Client Satisfaction' }
    ];

    return (
        <section
            id="about"
            className="w-full bg-[#e8e6e3] px-6 py-16 md:py-20 lg:py-24 md:px-12 lg:px-16"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Left — Image */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="w-full max-w-md lg:max-w-lg">
                            <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[360px] lg:h-[400px] w-full -translate-y-3 md:-translate-y-6 lg:-translate-y-8">
                                <motion.img
                                    src="bola2.png"
                                    alt="Product Designer"
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                />
                            </div>


                        </div>
                    </motion.div>

                    {/* Right — Content */}
                    <motion.div
                        className="flex flex-col"
                        variants={containerVariants}
                    >
                        {/* Heading */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-[#5A3E6B] font-playfair text-2xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 uppercase tracking-tight"
                        >
                            About Me
                        </motion.h2>

                        {/* Description */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-4 mb-6 text-[#3A3A4A] font-poppins font-thin text-base md:text-lg leading-relaxed"
                        >
                            <p>
                                I'm a Product Designer focused on creating clean, intuitive, and user-friendly digital products.
                            </p>
                            <p>
                                I help startups and growing businesses turn ideas into structured, usable designs through thoughtful user flows, wireframes, and polished interfaces.
                            </p>
                            <p>
                                I work mainly on web and mobile products, designing experiences that are clear, functional, and aligned with user needs and business goals.
                            </p>
                            <p>
                                I collaborate well with developers and stakeholders, communicate clearly, and design with usability and clarity at the core.
                            </p>
                        </motion.div>

                        {/* Goal */}
                        <motion.p
                            variants={itemVariants}
                            className="text-[#d4a574] text-base md:text-lg leading-relaxed mb-10 md:mb-12"
                        >
                            My goal is simple: design products people enjoy using and businesses can grow with.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-3 gap-6 md:gap-8"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex flex-col"
                                >
                                    <div className="text-[#5A3E6B] font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-[#3A3A4A] font-poppins font-thin text-sm md:text-base">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
