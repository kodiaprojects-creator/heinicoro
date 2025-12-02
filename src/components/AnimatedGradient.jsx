import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradient = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Blob 1 - Primary Orange */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(252, 163, 17, 0.15) 0%, rgba(252, 163, 17, 0) 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: ['-20%', '200%', '-20%'],
                    y: ['-10%', '10%', '-10%'],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                initial={{ x: '-20%', y: '-10%' }}
            />

            {/* Gradient Blob 2 - Yellow/Orange Mix */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 193, 7, 0.12) 0%, rgba(255, 193, 7, 0) 70%)',
                    filter: 'blur(70px)',
                }}
                animate={{
                    x: ['10%', '200%', '10%'],
                    y: ['20%', '-10%', '20%'],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
                initial={{ x: '60%', y: '20%' }}
            />

            {/* Gradient Blob 3 - Subtle Primary */}
            <motion.div
                className="absolute w-[700px] h-[700px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(252, 163, 17, 0.08) 0%, rgba(252, 163, 17, 0) 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: ['-10%', '200%', '-10%'],
                    y: ['40%', '60%', '40%'],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 6
                }}
                initial={{ x: '30%', y: '40%' }}
            />
        </div>
    );
};

export default AnimatedGradient;
