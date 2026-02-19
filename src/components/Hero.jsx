import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero" id="home" style={{ backgroundColor: '#000' }}>
            <div className="hero-background">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src="/HERO PICTURES/herovideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
            </div>

            <motion.div
                className="hero-content container" // Kept 'container' as it's likely for styling
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {t('hero.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
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

                <motion.div
                    className="hero-social-icons"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <a href="https://www.instagram.com/blooms_gala/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@blooms_gala?_r=1&_t=ZS-93rd5UPzCY0" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                    </a>
                    <a href="https://www.snapchat.com/@bloomsgala?share_id=n4lDWKueARk&locale=en-GB" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.005 0C8.303 0 5.483 2.058 5.483 5.378c0 .878.225 1.62.593 2.275.295.52.502.95.502 1.353 0 .428-.216.732-1.076 1.096C3.996 10.78 3 11.536 3 12.822c0 .903.62 1.48 1.554 1.956.404.18.66.33.66.52 0 .15-.178.272-1.082.903-.79.55-1.922 1.34-1.922 2.76 0 2.264 4.31 3.038 9.8 3.038 5.61 0 9.805-.615 9.805-3.04 0-1.42-1.134-2.208-1.924-2.76-.902-.63-1.08-.752-1.08-.902 0-.214.28-.35.666-.527.934-.44 1.523-1.028 1.523-1.95 0-1.31-1.01-2.05-2.522-2.72-.862-.366-1.078-.67-1.078-1.097 0-.404.207-.833.502-1.353.37-.655.594-1.397.594-2.275C20.528 2.058 17.708 0 14.008 0h-2.003z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/blooms-gala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
