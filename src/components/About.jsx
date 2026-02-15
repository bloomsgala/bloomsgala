import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t, language } = useLanguage();

    return (
        <section className="section-padding about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/HERO PICTURES/corporate-meeting.jpg" alt="Executive Event Production" />
                        <div className={`experience-badge ${language === 'ar' ? 'badge-rtl' : ''}`}>
                            <span className="years">{t('about.years')}</span>
                            <span className="text">{t('about.years_text')}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>{t('about.title')}</h2>
                        <p className="subtitle">{t('about.subtitle')}</p>
                        <p>
                            {t('about.p1')}
                        </p>
                        <p>
                            {t('about.p2')}
                        </p>
                        {/* CTA Removed as per user request */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
