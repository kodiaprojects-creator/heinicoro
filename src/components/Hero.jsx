import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedGradient from './AnimatedGradient';
import project1 from '../assets/WhatsApp Image 2025-11-26 at 17.53.32.jpeg';
import project2 from '../assets/WhatsApp Image 2025-11-26 at 17.54.46.jpeg';
import project3 from '../assets/WhatsApp Image 2025-11-26 at 18.04.13.jpeg';
import project4 from '../assets/WhatsApp Image 2025-11-26 at 18.04.17.jpeg';

const Hero = () => {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const projects = [
        { id: 1, image: project1, title: 'Project 1' },
        { id: 2, image: project2, title: 'Project 2' },
        { id: 3, image: project3, title: 'Project 3' },
        { id: 4, image: project4, title: 'Project 4' },
    ];

    return (
        <section className="min-h-screen flex items-center bg-dark pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 relative overflow-hidden">
            <AnimatedGradient />
            <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-10 xl:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center lg:items-stretch justify-between">
                    {/* Left Column - 4 Images Grid (2x2) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-[48%] order-2 lg:order-1 mt-4 md:mt-0"
                    >
                        <div className="flex gap-4 md:gap-5 lg:gap-6">
                            {/* Columna esquerra (més amunt i més alta) */}
                            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 flex-1">
                                {[projects[0], projects[2]].map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            zIndex: 10,
                                        }}
                                        className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-lg shadow-2xl cursor-pointer group w-full"
                                    >
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Columna dreta, desplaçada cap avall (més petita) */}
                            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 translate-y-6 md:translate-y-8 lg:translate-y-12 xl:translate-y-16 flex-1">
                                {[projects[1], projects[3]].map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            zIndex: 10,
                                        }}
                                        className="relative aspect-[5/6] lg:aspect-[6/7] overflow-hidden rounded-lg shadow-2xl cursor-pointer group w-full"
                                    >
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full lg:w-[42%] flex flex-col justify-center lg:pl-4 xl:pl-8 order-1 lg:order-2 text-center lg:text-left"
                    >
                        <motion.h1
                            className="font-montserrat font-bold mb-3 md:mb-4 lg:mb-2 leading-tight group cursor-default"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            style={{
                                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                                transition: 'transform 0.3s ease-out',
                            }}
                        >
                            <motion.span
                                className="text-white block text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 lg:mb-2 font-normal transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-300 group-hover:to-white uppercase"
                            >
                                {(() => {
                                    const title = t('hero.title1');
                                    const text = title.replace(/[,!]/g, '');
                                    const punctuation = title.match(/[,!]/)?.[0] || '';
                                    return (
                                        <>
                                            {text}
                                            {punctuation && <span className="text-primary">{punctuation}</span>}
                                        </>
                                    );
                                })()}
                            </motion.span>
                            <motion.span
                                className="text-white block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mr-0 md:mr-4 lg:mr-10 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                {(() => {
                                    const title = t('hero.title2');
                                    const text = title.replace(/[!]/g, '');
                                    const punctuation = title.match(/[!]/)?.[0] || '';
                                    return (
                                        <>
                                            {text}
                                            {punctuation && <span className="text-primary">{punctuation}</span>}
                                        </>
                                    );
                                })()}
                            </motion.span>
                        </motion.h1>

                        <div className="mt-4 md:mt-6 lg:mt-0">
                            <p className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl font-sans leading-relaxed">
                                {t('hero.subtitle')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
