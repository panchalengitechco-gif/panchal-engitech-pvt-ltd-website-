import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
const Hero = () => {
    return (
        <section className="hero-section" style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-content"
                >
                    <motion.span
                        className="hero-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        ESTABLISHED 2017
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Building the Future,<br />
                        <span className="text-highlight">Restoring the Past</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        We deliver top-tier Industrial Fabrication, Civil Construction, and Interior Design services across Gujarat.
                        Trust Panchal Engitech for safety, quality, and precision.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <Link to="/contact" className="btn btn-primary">
                            Get a Quote <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" className="btn btn-outline">
                            Explore Services
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
