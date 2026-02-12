import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ar'); // Default to Arabic

    useEffect(() => {
        document.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    const t = (path) => {
        return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || path;
    };

    // Helper for arrays (testimonials)
    const getList = (path) => {
        return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || [];
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, getList }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
