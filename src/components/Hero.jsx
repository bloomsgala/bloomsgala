import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: '/HERO%20PICTURES/20x30-Trade-Show-Booth-at-NYSCC-Suppliers-Day-Wilmar.webp', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/PXL_20211012_151827214-1024x768.jpg', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/corporate-event-1200-x-630-wallpaper-7tr5tk9afg40420t.jpg', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/corporate-event-1920-x-960-wallpaper-kxfymzln0ikz8pp7.jpg', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/corporate-event-999-x-526-wallpaper-i6lqdu6swt4el4af.jpg', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/corporate-meeting.jpg', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/diverse-crowd-exploring-interactive-tech-conference-expo-hall-innovative-exhibits-409010868.webp', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/modern-led-laser-lighting-equipment-illuminating-outdoor-concert-stage-modern-led-laser-lighting-equipment-illuminating-403599790.webp', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/pexels-photo-8694375.jpeg', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/surco-lima-peru-may-16-600nw-2628958535.webp', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') },
        { image: '/HERO%20PICTURES/trade-show-booth.jpg', title_prefix: t('hero.title_prefix'), title_accent: t('hero.title_accent') }
    ];

    useEffect(() => {
        // Preload all images
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero" id="home" style={{ backgroundColor: '#000' }}>
            <div className="hero-background">
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        key={currentSlide}
                        className="hero-image"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1.000] }}
                        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
                    />
                </AnimatePresence>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content container">
                <motion.h1
                    key={`title-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {slides[currentSlide].title_prefix} <br />
                    <span style={{ color: 'var(--color-white)' }}>{slides[currentSlide].title_accent}</span>
                </motion.h1>

                <motion.p
                    key={`subtitle-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#contact" className="btn-primary">{t('hero.cta')}</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
