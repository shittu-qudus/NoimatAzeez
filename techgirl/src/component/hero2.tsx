import React from 'react';
import { Palette, Layers, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCard {
    icon: React.ReactNode;
    title: string;
}

const ServicesSection: React.FC = () => {
    const services: ServiceCard[] = [
        {
            icon: <Palette size={40} strokeWidth={1.5} />,
            title: 'Product Designer'
        },
        {
            icon: <Layers size={40} strokeWidth={1.5} />,
            title: 'UI/UX Designer'
        },
        {
            icon: <Smartphone size={40} strokeWidth={1.5} />,
            title: 'Web & Mobile App Designer'
        },
        {
            icon: <Sparkles size={40} strokeWidth={1.5} />,
            title: 'Visual Designer'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.5, 
                ease: "easeOut" as any // Quick fix using type assertion
            }
        }
    };

    return (
        <section
            id="services"
            className="w-full bg-[#e8e6e3] px-6 py-16 md:py-20 lg:py-24 md:px-12 lg:px-16"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.h2
                    className="text-center text-[#4a4a68] text-2xl md:text-3xl lg:text-4xl font-normal mb-12 md:mb-16 lg:mb-20 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    I design products that balance usability, clarity, and trust.
                </motion.h2>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center border border-[#d4d2cf] transition-shadow hover:shadow-xl"
                        >
                            {/* Icon */}
                            <motion.div
                                className="text-[#5a5a72] mb-6"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {service.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-[#4a4a68] text-lg md:text-xl font-medium leading-snug">
                                {service.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;