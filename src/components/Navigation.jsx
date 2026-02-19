import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import heiniLogo from '../assets/heini-coro-logo.png';

const Navigation = () => {
    const { t, i18n } = useTranslation();
    const [showLangMenu, setShowLangMenu] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const languages = [
        { code: 'es', label: 'ES' },
        { code: 'ca', label: 'CA' },
        { code: 'en', label: 'EN' },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on ESC key
    React.useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setMobileMenuOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false); // Close menu after navigation
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLangMenu(false);
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5 md:pt-6">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`max-w-7xl mx-auto transition-all duration-300 ${scrolled
                        ? 'bg-black/40 shadow-lg backdrop-blur-2xl border border-white/10'
                        : 'bg-transparent border border-transparent'
                        } rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4`}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                        >
                            <img
                                src={heiniLogo}
                                alt="Heini Coro"
                                className="h-6 sm:h-7 md:h-8 w-auto"
                            />
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            <div className="flex items-center gap-6">
                                {['about', 'projects'].map((item, index) => (
                                    <motion.button
                                        key={item}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        onClick={() => scrollToSection(item)}
                                        whileHover={{ y: -2, scale: 1.05 }}
                                        className="text-gray-300 hover:text-primary transition-all duration-300 font-medium uppercase text-xs tracking-wider relative group"
                                    >
                                        {t(`nav.${item}`)}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                                    </motion.button>
                                ))}
                            </div>

                            <motion.button
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => scrollToSection('contact')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary hover:bg-yellow-500 text-dark px-6 py-2.5 rounded-full font-semibold transition-all duration-300 uppercase text-xs shadow-glow hover:shadow-strong"
                            >
                                {t('nav.contact')}
                            </motion.button>

                            {/* Language Selector - Desktop */}
                            <div className="relative">
                                <motion.button
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    onClick={() => setShowLangMenu(!showLangMenu)}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all duration-300"
                                >
                                    <Globe size={16} className="text-primary" />
                                    <span className="text-xs font-semibold text-white">{i18n.language.toUpperCase()}</span>
                                </motion.button>

                                {showLangMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        className="absolute right-0 mt-3 bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-strong overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <motion.button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                whileHover={{ x: 5 }}
                                                className={`block w-full px-6 py-3 text-left transition-all duration-300 ${i18n.language === lang.code
                                                    ? 'bg-primary/20 text-primary font-bold'
                                                    : 'text-gray-300 hover:bg-primary/10 hover:text-primary'
                                                    }`}
                                            >
                                                {lang.label}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden p-1.5 sm:p-2 text-white hover:text-primary transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu size={24} className="sm:w-7 sm:h-7" />
                        </motion.button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-gray-900/95 backdrop-blur-2xl z-[70] shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <img src={heiniLogo} alt="Heini Coro" className="h-8 w-auto" />
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 text-white hover:text-primary transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={28} />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 px-6 py-8 space-y-2">
                                    {['about', 'projects', 'contact'].map((item, index) => (
                                        <motion.button
                                            key={item}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            onClick={() => scrollToSection(item)}
                                            className="w-full text-left px-6 py-4 text-lg font-medium text-white hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-300 uppercase tracking-wide"
                                        >
                                            {t(`nav.${item}`)}
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Language Selector - Mobile */}
                                <div className="px-6 py-6 border-t border-white/10">
                                    <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Language</p>
                                    <div className="flex gap-2">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    changeLanguage(lang.code);
                                                    setMobileMenuOpen(false);
                                                }}
                                                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${i18n.language === lang.code
                                                    ? 'bg-primary text-dark'
                                                    : 'bg-white/5 text-white hover:bg-white/10'
                                                    }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
