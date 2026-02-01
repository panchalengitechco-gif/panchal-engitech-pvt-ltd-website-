import React, { useEffect } from 'react';
import { FileText, Award, BarChart2, Users, Info } from 'lucide-react';
import './Investors.css';

const Investors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            id: 'overview',
            title: 'Investor Overview',
            icon: <Info size={32} />,
            content: 'Panchal Engitech Pvt Ltd is committed to creating long-term value for our shareholders through sustainable growth and excellence in the construction and fabrication industry.'
        },
        {
            id: 'governance',
            title: 'Corporate Governance',
            icon: <Award size={32} />,
            content: 'Our corporate governance framework is designed to promote transparency, accountability, and ethical conduct across all operations.'
        },
        {
            id: 'financials',
            title: 'Financial Reports',
            icon: <BarChart2 size={32} />,
            content: 'We maintain high standards of financial reporting. Our annual reports and quarterly results provide detailed insights into our performance.'
        },
        {
            id: 'shareholding',
            title: 'Shareholding Pattern',
            icon: <Users size={32} />,
            content: 'Panchal Engitech maintains a stable shareholding structure, reflective of our long-term vision and commitment to stakeholders.'
        },
        {
            id: 'notices',
            title: 'Public Notices',
            icon: <FileText size={32} />,
            content: 'Stay updated with our latest public announcements, statutory advertisements, and other important notices for the public and shareholders.'
        }
    ];

    return (
        <div className="investors-page">
            <section className="investors-hero">
                <div className="container">
                    <h1>Investor Relations</h1>
                    <p>Transparent alignment with our stakeholders for a sustainable future.</p>
                </div>
            </section>

            <section className="investors-content">
                <div className="container">
                    <div className="investors-grid">
                        {sections.map((section) => (
                            <div key={section.id} id={section.id} className="investor-card">
                                <div className="card-icon">{section.icon}</div>
                                <h3>{section.title}</h3>
                                <p>{section.content}</p>
                                <button className="btn-secondary">Download Details</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="investors-contact">
                <div className="container">
                    <div className="contact-card">
                        <h2>Investor Support</h2>
                        <p>For any queries related to shareholding, financial results, or corporate governance, please contact our investor relations team.</p>
                        <div className="contact-details">
                            <p><strong>Email:</strong> investors@panchalengitech.com</p>
                            <p><strong>Compliance Officer:</strong> compliance@panchalengitech.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investors;
