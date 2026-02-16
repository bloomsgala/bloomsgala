import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t, getList } = useLanguage();
    const projects = getList('about.projects');

    return (
        <section className="section-padding about-section" id="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t('about.title')}</h2>
                    <p className="subtitle">{t('about.subtitle')}</p>
                </motion.div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={project.id || index} className="project-row">
                            <motion.div
                                className="project-image-box"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img src={project.image} alt={project.title} />
                            </motion.div>

                            <motion.div
                                className="project-details"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3>{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="info-groups">
                                    <div className="info-group">
                                        <h4>{project.experience_title}</h4>
                                        <p><strong>{project.experience_text}</strong></p>
                                        <p>{project.team_text}</p>
                                    </div>

                                    <div className="info-group">
                                        <h4>{project.services_title}</h4>
                                        <p>{project.services_text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
