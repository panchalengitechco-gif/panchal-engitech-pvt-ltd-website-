import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ClipboardCheck, Compass, HardHat, Key } from 'lucide-react';
import './ConstructionProcess.css';

const ConstructionProcess = () => {
    const [steps, setSteps] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('/data/construction-steps.json')
            .then(res => res.json())
            .then(data => {
                // Add icons back to steps
                const iconMap = {
                    1: <FileText size={32} />,
                    2: <ClipboardCheck size={32} />,
                    3: <Compass size={32} />,
                    4: <HardHat size={32} />,
                    5: <Key size={32} />
                };
                setSteps(data.map(s => ({ ...s, icon: iconMap[s.id] })));
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load construction steps:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return null;

    return (
        <div className="process-page">
            <section className="process-hero">
                <div className="container">
                    <h1>Our Construction Process</h1>
                    <p>From the first sketch to the final brick, we ensure a seamless and transparent journey to your dream structure.</p>
                </div>
            </section>

            {/* Civil & Industrial Section */}
            <div className="process-service-section">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-text">
                            <h2>Civil & Industrial Construction</h2>
                            <p>We provide comprehensive civil construction services for industrial and commercial projects. Our team specializes in RCC work, site development, and factory building construction.</p>
                            <ul className="service-list">
                                <li>Industrial Factory Sheds (RCC & PEB)</li>
                                <li>Commercial Building Construction</li>
                                <li>Machine Foundations & Flooring</li>
                                <li>Road Work and Site Development</li>
                            </ul>
                            <Link to="/contact" className="inquiry-btn">SEND INQUIRY</Link>
                        </div>
                        <div className="service-image">
                            <img src="/assets/architecture pics.jpeg" alt="Civil Construction Architecture" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="how-it-works-header">
                    <h2>How It <span className="highlight-text">Works</span></h2>
                    <p>With simple building construction steps, we ensure transparent and hassle free experience during your home construction. Book- Track & Monitor - Settle.</p>
                </div>

                <div className="process-timeline">
                    {steps.map((step) => (
                        <div key={step.id} className="process-step">
                            <div className="step-number">{step.id}</div>
                            <div className="step-content">
                                <div className="step-header">
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>
                                    <div className="step-title">
                                        <span>{step.subtitle}</span>
                                        <h3>{step.title}</h3>
                                    </div>
                                </div>
                                <p className="step-description">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="process-cta">
                    <p style={{ marginBottom: '20px', color: 'var(--color-black)' }}>Ready to start your project with us?</p>
                    <Link to="/contact" className="cta-button">
                        Start Your Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ConstructionProcess;
