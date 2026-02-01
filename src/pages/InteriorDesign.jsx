import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Layers, Layout, Palette, Home } from 'lucide-react';
import './ConstructionProcess.css';

const InteriorDesign = () => {
    const [steps, setSteps] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('/data/interior-steps.json')
            .then(res => res.json())
            .then(data => {
                // Add icons back to steps
                const iconMap = {
                    1: <PenTool size={32} />,
                    2: <Layout size={32} />,
                    3: <Layers size={32} />,
                    4: <Palette size={32} />,
                    5: <Home size={32} />
                };
                setSteps(data.map(s => ({ ...s, icon: iconMap[s.id] })));
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load interior steps:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return null;

    return (
        <div className="process-page">
            <section className="process-hero">
                <div className="container">
                    <h1>Interior Design</h1>
                    <p>Transforming spaces with creative designs, functional layouts, and premium aesthetics.</p>
                </div>
            </section>

            {/* Interior Design Section (Reverse Layout) */}
            <div className="process-service-section">
                <div className="container">
                    <div className="service-content-wrapper reverse">
                        <div className="service-text">
                            <h2>Interior Design Consultancy</h2>
                            <p>Our expert consultancy services bridge the gap between imagination and reality. We work closely with you to curate personalized design strategies that reflect your unique taste and functional needs.</p>
                            <ul className="service-list">
                                <li>Bespoke Mood Boards & Themes</li>
                                <li>3D Design Rendering & Layouts</li>
                                <li>Material, Furniture & Decor Selection</li>
                                <li>Strategic Space Planning</li>
                            </ul>
                            <Link to="/contact" className="inquiry-btn">SEND INQUIRY</Link>
                        </div>
                        <div className="service-image">
                            <img src="/assets/Instagram.jpeg" alt="Interior Design" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="how-it-works-header">
                    <h2>How It <span className="highlight-text">Works</span></h2>
                    <p>From concept to creation, we craft spaces that tell your story. Our design process is collaborative, transparent, and focused on you.</p>
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
                    <p style={{ marginBottom: '20px', color: 'var(--color-black)' }}>Ready to transform your space?</p>
                    <Link to="/contact" className="cta-button">
                        Start Your Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InteriorDesign;
