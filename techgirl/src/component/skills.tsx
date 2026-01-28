import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface SkillCategory {
    title: string;
    skills: string[];
}

// Motion Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const ToolsSkillsSection: React.FC = () => {
    const categories: SkillCategory[] = [
        {
            title: 'Design',
            skills: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'Illustrator', 'Photoshop']
        },
        {
            title: 'Research',
            skills: ['Maze', 'Optimal Workshop', 'UserTesting', 'Hotjar']
        },
        {
            title: 'Documentation',
            skills: ['Notion', 'Confluence', 'Miro', 'FigJam', 'Jira']
        }
    ];

    return (
        <section
            id="skills"
            className="w-full bg-[#f5f3f0] px-6 py-16 md:py-20 lg:py-24 md:px-12 lg:px-16"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    className="text-center font-playfair text-[#5A3E6B] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 lg:mb-20 tracking-tight uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Tools & Skills
                </motion.h2>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={categoryVariants}
                            className="flex flex-col"
                        >
                            {/* Category Title */}
                            <h3 className="text-[#4a4a68] font-playfair text-xl md:text-2xl font-bold mb-6 text-center uppercase tracking-tight">
                                {category.title}
                            </h3>

                            {/* Skills List */}
                            <div className="flex flex-col gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                        className="bg-white font-poppins border border-[#d4d2cf] rounded-full px-6 py-3 text-center text-[#5a5a5a] text-sm md:text-base hover:border-[#4a4a68] hover:shadow-sm transition-all duration-200"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ToolsSkillsSection;
