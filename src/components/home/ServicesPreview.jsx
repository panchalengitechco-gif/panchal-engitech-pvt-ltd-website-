import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './ServicesPreview.css';
const ServicesPreview = () => {
    const [services, setServices] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('/data/services-preview.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load services preview:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return null;
    return (
        <section className="section-padding bg-gray">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">WHAT WE DO</span>
                    <h2 className="section-title">Our Core Services</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="service-img-wrapper">
                                <img src={service.img} alt={service.title} className="service-img" />
                                <div className="service-overlay">
                                    <Link to={service.link} className="service-btn">
                                        View Details <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to={service.link} className="read-more">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
