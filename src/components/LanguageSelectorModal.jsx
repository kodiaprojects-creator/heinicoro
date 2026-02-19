import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LanguageSelectorModal = () => {
    const { t, i18n } = useTranslation();
    const [showModal, setShowModal] = React.useState(false);

    const languages = [
        { code: 'ca', label: 'Català' },
        { code: 'es', label: 'Español' },
        { code: 'en', label: 'English' },
    ];

    React.useEffect(() => {
        // Comprovar si ja s'ha mostrat el pop-up abans O si ja hi ha una preferència d'idioma guardada
        const hasSeenLanguageSelector = localStorage.getItem('hasSeenLanguageSelector');
        const hasLanguagePreference = localStorage.getItem('i18nextLng');
        
        // Si no s'ha mostrat mai i no hi ha preferència d'idioma guardada, mostrar el pop-up
        if (!hasSeenLanguageSelector && !hasLanguagePreference) {
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 500); // Delay de 500ms perquè la pàgina carregui primer
            
            return () => clearTimeout(timer);
        }
    }, []);

    const handleLanguageSelect = (langCode) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem('hasSeenLanguageSelector', 'true');
        setShowModal(false);
    };

    const handleClose = () => {
        localStorage.setItem('hasSeenLanguageSelector', 'true');
        setShowModal(false);
    };

    return (
        <AnimatePresence>
            {showModal && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-dark rounded-3xl shadow-2xl border border-white/10 max-w-md w-full p-8 relative">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <motion.h2
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl font-bold text-white mb-2"
                                >
                                    {t('languageSelector.title')}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-400 text-sm"
                                >
                                    {t('languageSelector.subtitle')}
                                </motion.p>
                            </div>

                            {/* Language Options */}
                            <div className="space-y-3">
                                {languages.map((lang, index) => (
                                    <motion.button
                                        key={lang.code}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        onClick={() => handleLanguageSelect(lang.code)}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                                            i18n.language === lang.code
                                                ? 'bg-primary text-dark font-bold shadow-glow'
                                                : 'bg-white/5 text-white hover:bg-white/10 hover:text-primary'
                                        }`}
                                    >
                                        <span className="flex-1 text-left font-semibold">{lang.label}</span>
                                        {i18n.language === lang.code && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-2 h-2 rounded-full bg-dark"
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Footer Note */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="text-center text-xs text-gray-500 mt-6"
                            >
                                {t('languageSelector.footer')}
                            </motion.p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LanguageSelectorModal;
