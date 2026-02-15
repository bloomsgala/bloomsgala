import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Partners.css';

const Partners = () => {
    const { t, getList } = useLanguage();
    const sectors = getList('partners.sectors');

    if (!sectors || sectors.length === 0) return null;

    return (
        <section className="partners-section">
            <div className="container">
                <div className="partners-grid">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            className="partner-item"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h4>{sector.name}</h4>
                            <p>{sector.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
