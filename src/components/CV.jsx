import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const CV = () => {
    const { t } = useTranslation();

    const experience = [
        {
            year: '2020 - Present',
            title: 'Senior Project Manager',
            company: 'Tech Company',
            description: 'Leading multiple high-impact projects and managing cross-functional teams.',
        },
        {
            year: '2018 - 2020',
            title: 'Project Manager',
            company: 'Innovation Hub',
            description: 'Managed digital transformation projects for enterprise clients.',
        },
        {
            year: '2016 - 2018',
            title: 'Junior Project Manager',
            company: 'Startup Inc.',
            description: 'Coordinated agile development teams and stakeholder communication.',
        },
    ];

    const education = [
        {
            year: '2014 - 2016',
            title: 'MBA in Project Management',
            institution: 'Business School',
        },
        {
            year: '2010 - 2014',
            title: 'Bachelor in Business Administration',
            institution: 'University',
        },
    ];

    const skills = [
        'Project Management',
        'Agile & Scrum',
        'Leadership',
        'Strategic Planning',
        'Risk Management',
        'Stakeholder Management',
        'Budget Control',
        'Team Building',
    ];

    return (
        <section id="cv" className="min-h-screen bg-dark py-32">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t('cv.title')}
                    </motion.h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 mb-12">
                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <Briefcase className="text-primary" size={32} />
                            <h3 className="text-4xl font-bold text-white">{t('cv.experience')}</h3>
                        </div>

                        <div className="space-y-8">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.6 }}
                                    className="relative pl-10 pb-8 border-l-4 border-primary/40 last:pb-0 hover:border-primary transition-all duration-300"
                                >
                                    <motion.div
                                        className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full shadow-glow"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{item.year}</div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                                    <div className="text-gray-400 mb-3 font-semibold">{item.company}</div>
                                    <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <GraduationCap className="text-primary" size={32} />
                            <h3 className="text-4xl font-bold text-white">{t('cv.education')}</h3>
                        </div>

                        <div className="space-y-8 mb-16">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.6 }}
                                    className="relative pl-10 pb-8 border-l-4 border-primary/40 last:pb-0 hover:border-primary transition-all duration-300"
                                >
                                    <motion.div
                                        className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full shadow-glow"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    />
                                    <div className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{item.year}</div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                                    <div className="text-gray-400 font-semibold">{item.institution}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="flex items-center gap-4 mb-8">
                            <Award className="text-primary" size={32} />
                            <h3 className="text-4xl font-bold text-white">{t('cv.skills')}</h3>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className="px-6 py-3 bg-gradient-to-r from-primary/20 to-yellow-500/20 text-white rounded-full border-2 border-primary/50 hover:border-primary hover:shadow-glow transition-all duration-300 font-semibold"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CV;
