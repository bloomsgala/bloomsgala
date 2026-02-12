import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if EmailJS is configured
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Fallback to mailto if EmailJS is not configured
        if (!serviceId || !templateId || !publicKey) {
            const subject = `Contact Form Submission: ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            window.location.href = `mailto:info@bloomsgala.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            return;
        }

        // Use EmailJS if configured
        setIsSubmitting(true);
        setSubmitStatus(null);

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'info@bloomsgala.net'
        };

        try {
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            setSubmitStatus('success');
            e.target.reset();

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');

            // Clear error message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder={t('contact.form.name')}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder={t('contact.form.email')}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder={t('contact.form.message')}
                                rows="5"
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>

                        {submitStatus === 'success' && (
                            <div style={{
                                padding: '12px',
                                marginBottom: '16px',
                                backgroundColor: '#10b981',
                                color: 'white',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                ✓ Message sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div style={{
                                padding: '12px',
                                marginBottom: '16px',
                                backgroundColor: '#ef4444',
                                color: 'white',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                ✗ Failed to send message. Please try again or email us directly.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : t('contact.form.btn')}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
