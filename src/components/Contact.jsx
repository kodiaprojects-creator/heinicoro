import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { useRipple } from '../hooks/useRipple';

const Contact = () => {
    const { t } = useTranslation();
    const createRipple = useRipple();

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/enric-corominas-gratac%C3%B3s-b83437127/', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/heinicoro/', label: 'Instagram' },
        { icon: Mail, href: `mailto:${t('contact.email')}`, label: 'Email' },
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center bg-dark pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-6 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Subtitle */}
                    <motion.p
                        className="text-primary text-sm font-bold uppercase tracking-widest mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t('contact.subtitle')}
                    </motion.p>

                    {/* Main Title */}
                    <motion.h2
                        className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-16 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {t('contact.title')}
                    </motion.h2>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-8 mb-16">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                onClick={createRipple}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all duration-500 relative overflow-hidden"
                                aria-label={social.label}
                                target={social.href.startsWith('http') ? "_blank" : undefined}
                                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.a
                            href={`mailto:${t('contact.email')}`}
                            className="text-gray-400 hover:text-primary transition-colors text-lg font-medium"
                            whileHover={{ scale: 1.05 }}
                        >
                            {t('contact.email')}
                        </motion.a>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent my-16"
                    />

                    {/* Footer */}
                    <motion.footer
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="text-gray-500 text-sm"
                    >
                        © 2025 Heini Coro. All rights reserved.
                    </motion.footer>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
