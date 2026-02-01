import React from 'react';
import { ShieldCheck, Clock, Users, Award } from 'lucide-react';
import './WhyUs.css';

const features = [
    {
        icon: <ShieldCheck size={40} />,
        title: 'Safety First',
        desc: 'We adhere to the strictest safety protocols on all our sites.'
    },
    {
        icon: <Award size={40} />,
        title: 'Quality Assurance',
        desc: 'Premium materials and precision engineering in every project.'
    },
    {
        icon: <Clock size={40} />,
        title: 'On-Time Delivery',
        desc: 'Respect for timelines without compromising on workmanship.'
    },
    {
        icon: <Users size={40} />,
        title: 'Experienced Team',
        desc: 'Skilled workforce and engineers with years of expertise.'
    }
];

const WhyUs = () => {
    return (
        <section className="section-padding why-us-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">WHY CHOOSE US</span>
                    <h2 className="section-title">We Build Trust</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
