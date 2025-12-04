import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import heiniLogo from '../assets/heini-coro-logo.png';

const Navigation = () => {
    const { t, i18n } = useTranslation();
    const [showLangMenu, setShowLangMenu] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

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

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`max-w-7xl mx-auto transition-all duration-300 ${scrolled
                    ? 'bg-black/40 shadow-lg backdrop-blur-2xl border border-white/10'
                    : 'bg-transparent border border-transparent'
                    } rounded-full px-8 py-4`}
            >
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center"
                    >
                        <img
                            src={heiniLogo}
                            alt="Heini Coro"
                            className="h-8 w-auto"
                        />
                    </motion.div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6">
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
                                            onClick={() => {
                                                i18n.changeLanguage(lang.code);
                                                setShowLangMenu(false);
                                            }}
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
                </div>
            </motion.nav>
        </div>
    );
};

export default Navigation;
