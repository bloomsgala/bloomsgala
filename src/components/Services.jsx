import { motion } from 'framer-motion';
import { Crown, Heart, Mic2, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: <Heart size={40} />,
            title: t('services.weddings.title'),
            description: t('services.weddings.desc')
        },
        {
            icon: <Crown size={40} />,
            title: t('services.corporate.title'),
            description: t('services.corporate.desc')
        },
        {
            icon: <Star size={40} />,
            title: t('services.exhibitions.title'),
            description: t('services.exhibitions.desc')
        },
        {
            icon: <Mic2 size={40} />,
            title: t('services.sound.title'),
            description: t('services.sound.desc')
        }
    ];

    return (
        <section className="section-padding services-section" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>{t('services.title')}</h2>
                    <p>{t('services.subtitle')}</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
