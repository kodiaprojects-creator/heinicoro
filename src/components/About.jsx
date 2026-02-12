import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();
    const [hoveredWord, setHoveredWord] = React.useState(null);

    const description = t('about.description');
    const paragraphs = description.split('\n\n');

    return (
        <section id="about" className="min-h-screen flex items-center bg-dark py-32">
            <div className="max-w-5xl mx-auto px-6 w-full">
                {/* Title */}
                <motion.h2
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    {t('about.title')}
                    <span className="text-primary">.</span>
                </motion.h2>

                {/* Large Centered Text with Interactive Words */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-lg md:text-xl leading-relaxed text-center font-normal space-y-8"
                >
                    {paragraphs.map((paragraph, pIndex) => {
                        const words = paragraph.split(' ');
                        return (
                            <div key={pIndex}>
                                {words.map((word, index) => (
                                    <motion.span
                                        key={`${pIndex}-${index}`}
                                        className="inline-block mr-2 md:mr-3 cursor-default transition-all duration-300"
                                        onMouseEnter={() => setHoveredWord(`${pIndex}-${index}`)}
                                        onMouseLeave={() => setHoveredWord(null)}
                                        whileHover={{
                                            scale: 1.1,
                                            color: '#FFA500',
                                        }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                        style={{
                                            display: 'inline-block',
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
