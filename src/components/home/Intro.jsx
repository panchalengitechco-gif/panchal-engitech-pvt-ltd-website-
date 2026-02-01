import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'framer-motion';
import './Intro.css';

const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: duration });
            return controls.stop;
        }
    }, [isInView, count, value, duration]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const Intro = () => {
    return (
        <section className="section-padding intro-section">
            <div className="container">
                <div className="intro-grid">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-subtitle">WHO WE ARE</span>
                        <h2 className="section-title">Panchal Engitech Pvt Ltd</h2>
                        <h3 className="intro-headline">Excellence in Fabrication & Construction Since 2017</h3>
                        <p className="intro-text">
                            Based in the industrial hub of Surat, Gujarat, Panchal Engitech Pvt Ltd has established itself as a trusted name in high-quality structural fabrication, civil construction, and interior design.
                        </p>
                        <p className="intro-text">
                            From heavy industrial sheds to modern interior spaces, our team of skilled engineers and designers delivers projects with unwavering commitment to safety, timeline, and quality. We serve factories, homeowners, and businesses with the same level of dedication.
                        </p>

                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-number">
                                    <AnimatedCounter value={15} suffix="+" />
                                </span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">
                                    <AnimatedCounter value={6} suffix="+" />
                                </span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">
                                    <AnimatedCounter value={100} suffix="%" />
                                </span>
                                <span className="stat-label">Safety Record</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="intro-image-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* We can use a pattern or just a solid color block with text/logo if we don't want another heavy image. 
               Or use a collage. For now, a stylized box with the vision. */}
                        <div className="vision-box">
                            <h4>Our Vision</h4>
                            <p>"To be the most preferred partner for industrial infrastructure and interior development, known for integrity, innovation, and strength."</p>

                            <h4>Our Mission</h4>
                            <p>"Building sustainable structures and spaces through transparency and superior workmanship."</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
