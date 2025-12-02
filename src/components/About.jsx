import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();
    const [hoveredWord, setHoveredWord] = React.useState(null);

    const description = t('about.description');
    const words = description.split(' ');

    return (
        <section id="about" className="min-h-screen flex items-center bg-dark py-32">
            <div className="max-w-5xl mx-auto px-6 w-full">
                {/* Large Centered Text with Interactive Words */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center font-light"
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className="inline-block mr-2 md:mr-3 cursor-default transition-all duration-300"
                            onMouseEnter={() => setHoveredWord(index)}
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
                </motion.div>
            </div>
        </section>
    );
};

export default About;
