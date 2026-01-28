import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

interface Tag {
    text: string;
    color: string;
}

interface Project {
    title: string;
    description: string;
    tags: Tag[];
    caseStudyUrl: string;
    imageUrl: string;
    layout: 'left' | 'right';
}

interface WebProject {
    title: string;
    imageUrl: string;
    caseStudyUrl: string;
}

// Motion Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const FeaturedWorkSection: React.FC = () => {
    const featuredProjects: Project[] = [
        {
            title: 'ChowNow',
            description: 'Improve ordering experience for local restaurants',
            tags: [
                { text: 'Product Designer', color: '#d4a574' },
                { text: 'Mobile & Web', color: '#d4a574' }
            ],
            caseStudyUrl: '#chownow-case-study',
            imageUrl: 'chopnow.png',
            layout: 'right'
        },
        {
            title: 'Energo',
            description: 'Building a sustainable energy management platform',
            tags: [
                { text: 'UI/UX Designer', color: '#d4a574' },
                { text: 'Mobile & Web', color: '#d4a574' }
            ],
            caseStudyUrl: '#energo-case-study',
            imageUrl: 'energo.png',
            layout: 'left'
        },
        {
            title: 'MyHouse (Redesign)',
            description: 'Modernizing a real estate platform with security-first design',
            tags: [
                { text: 'Product Designer', color: '#d4a574' },
                { text: 'Mobile & Web', color: '#d4a574' }
            ],
            caseStudyUrl: '#myhouse-case-study',
            imageUrl: 'myhouse.png',
            layout: 'right'
        }
    ];

    const webProjects: WebProject[] = [
        {
            title: 'Lūmora',
            imageUrl: 'lumora.png',
            caseStudyUrl: '#lumora-case-study'
        },
        {
            title: 'Rhy Visuals',
            imageUrl: 'rhy.png',
            caseStudyUrl: '#rhy-visuals-case-study'
        },
        {
            title: 'Workable',
            imageUrl: 'workable.png',
            caseStudyUrl: '#workable-case-study'
        }
    ];

    return (
        <section
            id="projects"
            className="w-full bg-[#e8e6e3] px-6 py-16 md:py-20 lg:py-24 md:px-12 lg:px-16"
        >
            <div className="max-w-7xl mx-auto">
                {/* Featured Work Title */}
                <motion.h2
                    className="text-center font-playfair text-[#4a4a68] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 lg:mb-20 tracking-tight uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Work
                </motion.h2>

                {/* Featured Projects */}
                <motion.div
                    className="space-y-16 md:space-y-20 lg:space-y-24 mb-20 md:mb-24 lg:mb-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={projectVariants}
                            whileHover={{ scale: 1.02 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${project.layout === 'left' ? 'lg:grid-flow-dense' : ''
                                }`}
                        >
                            {/* Project Image */}
                            <div className={`${project.layout === 'left' ? 'lg:col-start-2' : ''}`}>
                                <div className=" rounded-2xl overflow-hidden p-6 md:p-8">
                                    <motion.img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-auto rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div
                                className={`flex flex-col ${project.layout === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''
                                    }`}
                            >
                                <h3 className="text-[#5A3E6B] font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-[#5a5a5a] font-poppins text-base md:text-lg mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="inline-flex items-center gap-2 text-[#5a5a5a] text-sm md:text-base"
                                        >
                                            <span
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: tag.color }}
                                            />
                                            {tag.text}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.caseStudyUrl}
                                    className="inline-flex items-center gap-2 text-[#4a4a68] font-medium hover:text-[#d4a574] transition-colors duration-200 group"
                                >
                                    View Case Study
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform duration-200"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Web Design Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-center text-[#5A3E6B] font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 tracking-tight uppercase">
                        Web Design
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {webProjects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.caseStudyUrl}
                                className="group"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                            >
                                <div className=" flex rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="overflow-hidden">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>


                                </div>
                                <div className=" flex justify-center p-6">
                                    <h3 className="text-[#4a4a68] font-LibreBaskerville text-xl md:text-2xl font-bold uppercase tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedWorkSection;
