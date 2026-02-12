import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

const Gallery = () => {
    const { t, getList } = useLanguage();
    const items = getList('gallery.items');
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section className="section-padding gallery-section" id="portfolio">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>{t('gallery.title')}</h2>
                    <p>{t('gallery.subtitle')}</p>
                </motion.div>

                <div className="gallery-grid">
                    {items.map((item, index) => (
                        <div key={index} className="gallery-wrapper">
                            <motion.div
                                className="gallery-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedItem(item)}
                            >
                                <img src={item.img} alt={item.title} />
                                <div className="gallery-overlay">
                                    <span>{t('gallery.view')}</span>
                                </div>
                            </motion.div>
                            <motion.h3
                                className="gallery-title"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                            >
                                {item.title}
                            </motion.h3>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={() => setSelectedItem(null)}>×</button>
                            <img src={selectedItem.img} alt={selectedItem.title} />
                            <h3>{selectedItem.title}</h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};

export default Gallery;
