import React, { useState } from 'react';
import { ArrowRight, Download, X, Send, Mail, User, MessageSquare } from 'lucide-react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// For Vite, use import.meta.env
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const ContactSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleGetInTouch = (): void => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
        setFormStatus('idle');
        setErrorMessage('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setFormStatus('sending');
        setErrorMessage('');

        try {
            if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
                throw new Error('EmailJS configuration is missing. Please check your environment variables.');
            }

            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'noimotazee147@gmail.com'
                },
                EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    handleCloseModal();
                }, 2000);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setFormStatus('error');
            setErrorMessage('Failed to send message. Please try again or email directly.');
        }
    };

    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    };

    const overlayVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <>
            <section
                className="w-full bg-[#5A3E6B] px-6 py-20 md:py-24 lg:py-32 md:px-12 lg:px-16"
                id="contact"
            >
                <motion.div
                    className="max-w-5xl mx-auto flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Main Heading */}
                    <motion.h2
                        className="text-center text-white font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight uppercase tracking-tight"
                        variants={itemVariants}
                    >
                        Let's build thoughtful digital experiences together.
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        className="text-center text-white/90 text-base md:text-lg lg:text-xl mb-10 md:mb-12"
                        variants={itemVariants}
                    >
                        Open to freelance projects, contract roles, and collaborations.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16 lg:mb-20"
                        variants={itemVariants}
                    >
                        {/* Get in Touch */}
                        <motion.button
                            onClick={handleGetInTouch}
                            className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3 rounded-lg font-medium border-2 border-white hover:bg-white hover:text-[#5a5073] transition-colors duration-200 group min-w-[180px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in touch
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform duration-200"
                            />
                        </motion.button>

                        {/* Download Resume */}
                        <a
                            href="https://drive.google.com/file/d/1dgonCdIMbuctD8EFM9lIWb6gHjj6CRA4/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="inline-flex  bg-[#FDFCFA] items-center justify-center gap-2
                                           border-2 border-[#4a4a68] text-[#4a4a68]
                                           px-6 py-3 rounded-lg font-medium
                                           hover:bg-[#4a4a68] hover:text-white transition"
                            >
                                <Download size={18} />
                                Download Resume
                            </button>
                        </a>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12"
                        variants={itemVariants}
                    >
                        {/* Email */}
                        <div className="flex flex-col items-center text-center">
                            <p className="text-white/80 text-sm md:text-base mb-1">Email</p>
                            <a
                                href="mailto:noimotazee147@gmail.com"
                                className="text-white text-base md:text-lg hover:text-white/80 transition-colors duration-200"
                            >
                                noimotazee147@gmail.com
                            </a>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-white/30" />

                        {/* Location */}
                        <div className="flex flex-col items-center text-center">
                            <p className="text-white/80 text-sm md:text-base mb-1">Location</p>
                            <p className="text-white text-base md:text-lg">Available Remotely</p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={handleCloseModal}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-br from-[#5A3E6B] to-[#4a2e5b] px-6 py-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X size={24} />
                                </button>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">
                                    Get in Touch
                                </h3>
                                <p className="text-white/90 text-sm md:text-base relative z-10">
                                    Let's discuss your project or opportunity
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Your Name *
                                    </label>
                                    <div className="relative">
                                        <User
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A3E6B] focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Your Email *
                                    </label>
                                    <div className="relative">
                                        <Mail
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A3E6B] focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Your Message *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare
                                            className="absolute left-3 top-3 text-gray-400"
                                            size={18}
                                        />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A3E6B] focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                {/* Status Messages */}
                                {formStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm"
                                    >
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}

                                {formStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"
                                    >
                                        {errorMessage}
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={formStatus === 'sending' || formStatus === 'success'}
                                    className="w-full bg-gradient-to-r from-[#5A3E6B] to-[#4a2e5b] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                                    whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                                >
                                    {formStatus === 'sending' ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : formStatus === 'success' ? (
                                        <>✓ Sent!</>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactSection;
