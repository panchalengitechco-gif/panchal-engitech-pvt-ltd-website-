import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Cog, HardHat, FileText, CheckCircle } from 'lucide-react';
import './ConstructionProcess.css';

const Fabrication = () => {
    const [steps, setSteps] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('/data/fabrication-steps.json')
            .then(res => res.json())
            .then(data => {
                // Add icons back to steps
                const iconMap = {
                    2: <Cog size={32} />,
                    3: <Hammer size={32} />,
                    4: <HardHat size={32} />,
                    5: <CheckCircle size={32} />
                };
                setSteps(data.map(s => ({ ...s, icon: iconMap[s.id] || <FileText size={32} /> })));
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load fabrication steps:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return null;

    return (
        <div className="process-page">
            <section className="process-hero">
                <div className="container">
                    <h1>Fabrication Services</h1>
                    <p>Precision Engineering, Robust Structures, and High-Quality Metalwork tailored for Industrial Needs.</p>
                </div>
            </section>

            {/* Fabrication Service Section */}
            <div className="process-service-section">
                <div className="container">
                    <div className="service-content-wrapper">
                        <div className="service-text">
                            <h2>Fabrication Products & Services</h2>
                            <p>We are known for our precision and quality in structural fabrication. From heavy steel structures to custom architectural metalwork, our skilled technicians deliver high-quality solutions for all industrial needs.</p>
                            <ul className="service-list">
                                <li>Structural Steel & PEB Fabrication</li>
                                <li>Heavy Industrial Tanks & Vessels</li>
                                <li>General MS Fabrication (Gates, Railings)</li>
                                <li>Industrial Roofing & Cladding</li>
                            </ul>
                            <Link to="/contact" className="inquiry-btn">SEND INQUIRY</Link>
                        </div>
                        <div className="service-image">
                            <img src="/assets/fab-heavy.png" alt="Fabrication Services" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="how-it-works-header">
                    <h2>How It <span className="highlight-text">Works</span></h2>
                    <p>From design to installation, we follow a systematic approach to ensure strength, durability, and precision in every structure.</p>
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
                    <p style={{ marginBottom: '20px', color: 'var(--color-black)' }}>Looking for a custom fabrication solution?</p>
                    <Link to="/contact" className="cta-button">
                        Start Your Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Fabrication;
