import React from 'react';
import { Lightbulb, ShieldCheck, Paintbrush } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

interface FeatureCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// Typed variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const ClientLanguageSection: React.FC = () => {
    const features: FeatureCard[] = [
        {
            icon: <Lightbulb size={48} strokeWidth={1.5} />,
            title: 'Product & UI/UX Design',
            description:
                'Creating intuitive digital products that solve real problems and delight users through thoughtful research and design.'
        },
        {
            icon: <ShieldCheck size={48} strokeWidth={1.5} />,
            title: 'Web & Mobile UI Design',
            description:
                'Designing clean and user-friendly UI design for web and mobile applications, focused on clarity, usability, and consistency.'
        },
        {
            icon: <Paintbrush size={48} strokeWidth={1.5} />,
            title: 'Visual & Interface Design',
            description:
                'Crafting beautiful, accessible interfaces with cohesive design systems that elevate brand identity and user experience.'
        }
    ];

    return (
        <section
            id="language"
            className="w-full bg-[#f5f3f0] px-6 py-16 md:py-20 lg:py-24 md:px-12 lg:px-16"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    className="text-center text-[#4a4a68] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-16 md:mb-20 lg:mb-24 tracking-tight uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Client-Friendly Language
                </motion.h2>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants} // ✅ No underline now
                            whileHover={{ y: -6 }}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <motion.div
                                className="bg-[#E8D5E8] rounded-3xl w-32 h-32 flex items-center justify-center mb-8 text-[#5a5a72]"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 120 }}
                            >
                                {feature.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className=" text-[#5A3E6B] font-playfair text-xl md:text-2xl font-bold mb-4 tracking-tight uppercase">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#3A3A4A] font-poppins text-sm md:text-base leading-relaxed max-w-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientLanguageSection;
