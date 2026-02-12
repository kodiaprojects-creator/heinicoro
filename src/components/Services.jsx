import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        { key: 'projectManagement' },
        { key: 'webDesign' },
        { key: 'appCreation' },
        { key: 'saasCreation' },
        { key: 'seoConsulting' },
    ];

    return (
        <section id="services" className="min-h-screen flex items-center bg-dark py-32">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Layout: left title + description, right list */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left column - Title + description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <motion.span
                                className="text-primary text-sm font-bold uppercase tracking-widest"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                {t('services.subtitle')}
                            </motion.span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            {(() => {
                                const title = t('services.title');
                                const text = title.replace('?', '');
                                return (
                                    <>
                                        {text}
                                        <span className="text-primary">?</span>
                                    </>
                                );
                            })()}
                        </h2>
                    </motion.div>

                    {/* Right column - Service list */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.key}
                                className="group relative rounded-xl p-6 cursor-pointer transition-all duration-300 border bg-white/5 border-white/10 hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/10 hover:to-primary/5 hover:border-primary/50"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-lg font-bold font-mono text-primary/60 group-hover:text-primary transition-colors duration-300">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-white font-bold text-lg uppercase">
                                            {t(`services.items.${service.key}`)}
                                        </span>
                                    </div>
                                    <div className="w-8 h-8 rounded flex items-center justify-center transition-all duration-300 bg-white/5 group-hover:bg-primary/20">
                                        <Plus className="w-4 h-4 text-white group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
