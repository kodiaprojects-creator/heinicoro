import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import rumateLogo from '../assets/rumate-logo.png';
import kodiLogo from '../assets/kodi-logo.png';
import ejerciciosLogo from '../assets/logo ejercicios.png';
import eleusLogo from '../assets/logo eleus.png';
import heiniLogo from '../assets/heini-coro-logo.png';
import financeLogo from '../assets/finance-tracker-logo.png';

const Projects = () => {
    const { t } = useTranslation();







    const projectsRow1 = [
        {
            id: 1,
            title: 'Eleus Brand',
            descriptionKey: 'projects.cards.eleus',
            image: eleusLogo,
            bgColor: 'bg-dark',
            link: 'https://eleusbrand.com/',
        },
        {
            id: 2,
            title: 'Kodi Comunicació',
            descriptionKey: 'projects.cards.kodi',
            image: kodiLogo,
            bgColor: 'bg-dark',
            link: 'https://kodi.cat/',
        },
        {
            id: 3,
            title: 'Ejercicios de baloncesto',
            descriptionKey: 'projects.cards.ejercicios',
            image: ejerciciosLogo,
            bgColor: 'bg-dark',
            link: 'https://www.ejerciciosdebaloncesto.com/',
        },
    ];



    const projectsRow2 = [
        {
            id: 4,
            title: 'Easy Finance Tracker',
            descriptionKey: 'projects.cards.finance',
            image: financeLogo,
            bgColor: 'bg-dark',
        },
        {
            id: 5,
            title: 'Rumate App',
            descriptionKey: 'projects.cards.rumate',
            image: rumateLogo,
            bgColor: 'bg-dark',
            link: 'https://www.rumateapp.com/',
        },
        {
            id: 6,
            title: 'Heini Coro Web',
            descriptionKey: 'projects.cards.heini',
            image: heiniLogo,
            bgColor: 'bg-dark',
        },
    ];

    // Duplicate for infinite loop
    const duplicatedRow1 = [...projectsRow1, ...projectsRow1, ...projectsRow1];
    const duplicatedRow2 = [...projectsRow2, ...projectsRow2, ...projectsRow2];

    return (
        <section id="projects" className="min-h-screen flex items-center bg-dark py-32">
            <div className="w-full">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <motion.span
                                className="text-primary text-sm font-bold uppercase tracking-widest"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                {t('projects.subtitle')}
                            </motion.span>
                        </div>
                        <motion.h2
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {t('projects.title')}
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-3xl text-xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {t('projects.description')}
                        </motion.p>
                    </motion.div>
                </div>

                {/* First Carousel Row - Moving Left - Full Width */}
                <div className="relative w-full overflow-x-hidden overflow-y-visible mb-8 py-4">
                    <motion.div
                        className="flex gap-8"
                        animate={{
                            x: [0, -1896],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 50,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedRow1.map((project, index) => (
                            <motion.div
                                key={`row1-${project.id}-${index}`}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="flex-shrink-0 cursor-pointer"
                                style={{ width: '600px' }}
                            >
                                <div
                                    className={`${project.bgColor} rounded-3xl p-10 transition-all duration-500 hover:shadow-strong relative overflow-hidden group h-full border border-white/10`}
                                    onClick={() => project.link && window.open(project.link, '_blank')}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-yellow-500/0 group-hover:from-primary/5 group-hover:to-yellow-500/5 transition-all duration-500 rounded-3xl"></div>

                                    <div className="flex items-start gap-8 relative z-10">
                                        {/* Icon Circle */}
                                        <motion.div
                                            className="flex-shrink-0"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center text-4xl shadow-medium group-hover:shadow-glow transition-all duration-300 overflow-hidden p-2">
                                                {project.image ? (
                                                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                                                ) : (
                                                    project.icon
                                                )}
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-base">
                                                {t(project.descriptionKey)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Second Carousel Row - Moving Right */}
                <div className="relative w-full overflow-x-hidden overflow-y-visible mb-16 py-4">
                    <motion.div
                        className="flex gap-8"
                        animate={{
                            x: [-1896, 0],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 50,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedRow2.map((project, index) => (
                            <motion.div
                                key={`row2-${project.id}-${index}`}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="flex-shrink-0 cursor-pointer"
                                style={{ width: '600px' }}
                            >
                                <div
                                    className={`${project.bgColor} rounded-3xl p-10 transition-all duration-500 hover:shadow-strong relative overflow-hidden group h-full border border-white/10`}
                                    onClick={() => project.link && window.open(project.link, '_blank')}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-yellow-500/0 group-hover:from-primary/5 group-hover:to-yellow-500/5 transition-all duration-500 rounded-3xl"></div>

                                    <div className="flex items-start gap-8 relative z-10">
                                        {/* Icon Circle */}
                                        <motion.div
                                            className="flex-shrink-0"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center text-4xl shadow-medium group-hover:shadow-glow transition-all duration-300 overflow-hidden p-2">
                                                {project.image ? (
                                                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                                                ) : (
                                                    project.icon
                                                )}
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-base">
                                                {t(project.descriptionKey)}
                                            </p>
                                        </div>
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

export default Projects;
