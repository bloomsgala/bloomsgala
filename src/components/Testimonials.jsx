import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
    const { t, getList } = useLanguage();
    const reviews = getList('testimonials.reviews');

    return (
        <section className="section-padding testimonials-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t('testimonials.title')}</h2>
                    <p>{t('testimonials.subtitle')}</p>
                </motion.div>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <motion.div
                            className="testimonial-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="reviewer-info">
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
