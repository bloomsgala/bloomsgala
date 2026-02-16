import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Promo.css';

const Promo = () => {
    const { t, getList } = useLanguage();
    const stats = getList('promo.stats');

    return (
        <section className="section-padding promo-section">
            <div className="container">
                <div className="promo-grid">
                    <motion.div
                        className="promo-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/our project/1j-mxB7Z7Kkr8u2MaXo.avif"
                            alt="Making Your Events Unforgettable"
                        />
                    </motion.div>

                    <motion.div
                        className="promo-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>{t('promo.title')}</h2>
                        <p className="promo-text">{t('promo.text')}</p>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Promo;
