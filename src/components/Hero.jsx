import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div
                    className="hero-image"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop')` }}
                ></div>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content container">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {t('hero.title_prefix')} <br />
                    <span className="text-gold">{t('hero.title_accent')}</span>
                </motion.h1>

                <motion.p
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
