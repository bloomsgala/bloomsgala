import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section className="section-padding contact-section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.subtitle')}</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>{t('contact.info_title')}</h3>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <p>{t('contact.address')}</p>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <p>
                                <a
                                    href="https://wa.me/966538402532"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    +966 53 840 2532
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <Mail className="icon" />
                            <p>
                                <a href="mailto:info@bloomsgala.net" className="contact-link">
                                    info@bloomsgala.net
                                </a>
                            </p>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const name = formData.get('name');
                            const email = formData.get('email');
                            const message = formData.get('message');

                            const subject = `Contact Form Submission: ${name}`;
                            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

                            window.location.href = `mailto:info@bloomsgala.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder={t('contact.form.name')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder={t('contact.form.email')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder={t('contact.form.message')}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary">{t('contact.form.btn')}</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
