import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.portfolio'), href: '#portfolio' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#" className="logo-container">
                    <img src="/logo-brand.png" alt="BloomsGala Logo" className="logo-image" />
                </a>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <button onClick={toggleLanguage} className="lang-btn">
                        <Globe size={18} />
                        <span>{language === 'ar' ? 'English' : 'عربي'}</span>
                    </button>
                </div>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ x: language === 'ar' ? '-100%' : '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: language === 'ar' ? '-100%' : '100%' }}
                            transition={{ type: 'tween' }}
                        >
                            <div className="mobile-links">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="lang-btn mobile-lang-btn">
                                    <Globe size={20} />
                                    <span>{language === 'ar' ? 'English' : 'عربي'}</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
