import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedGradient from './AnimatedGradient';
import AnimatedBackground from './AnimatedBackground';
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

    // Duplicate projects for seamless infinite loop
    const duplicatedProjects = [...projects, ...projects, ...projects];

    const words = React.useMemo(() =>
        t('hero.subtitle').split('.').filter(w => w.trim()).map(w => w.trim()),
        [t]);

    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <section className="min-h-screen flex flex-col justify-center bg-dark pt-48 pb-16 relative overflow-hidden">
            <AnimatedGradient />
            <div className="w-full relative z-10">
                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center mb-24 px-6"
                >
                    <motion.h1
                        className="font-montserrat font-bold mb-8 leading-tight group cursor-default"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                            transition: 'transform 0.3s ease-out',
                        }}
                    >
                        <motion.span
                            className="text-white block text-6xl md:text-7xl lg:text-8xl mb-4 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-300 group-hover:to-white"
                            whileHover={{ scale: 1.02 }}
                        >
                            {t('hero.title1')}
                        </motion.span>
                        <motion.span
                            className="text-primary block text-6xl md:text-7xl lg:text-8xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {t('hero.title2')}
                        </motion.span>
                    </motion.h1>

                    <div className="h-12 relative flex justify-center items-center mt-8">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentWordIndex}
                                className="text-gray-100 text-2xl md:text-3xl font-sans absolute"
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {words[currentWordIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Infinite Horizontal Carousel */}
                <div className="relative w-full overflow-x-hidden overflow-y-visible group/carousel py-6">
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: [0, -2100], // Adjust based on card width * number of original items
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 35,
                                ease: "linear",
                            },
                        }}
                        whileHover={{ animationPlayState: 'paused' }}
                    >
                        {duplicatedProjects.map((project, index) => (
                            <motion.div
                                key={`${project.id}-${index}`}
                                whileHover={{
                                    scale: 1.08,
                                    y: -15,
                                    rotateY: 5,
                                    rotateX: -5,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="flex-shrink-0 cursor-pointer perspective-1000"
                                style={{ width: '420px' }}
                            >
                                <div className="h-80 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden relative group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,165,0,0.3)]">
                                    {/* Image Background */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Overlay - Reduced opacity */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
