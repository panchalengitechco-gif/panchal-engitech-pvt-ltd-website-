import React, { useState } from 'react';
import './About.css';
import { Users, Briefcase, Ruler } from 'lucide-react';

const About = () => {
    const [activeTab, setActiveTab] = useState('leadership');

    const leadership = [
        { name: 'Bhupendrakumar M. Panchal', role: 'Director', description: 'Expert in civil construction and fabrication with 15+ years experience.', icon: 'DP' },
    ];

    const officeTeam = {
        construction: [
            { name: 'Mahesh K. Prajapati', role: 'Project Head', description: 'Leading civil construction projects with expert execution.', icon: 'MP' },
            { name: 'Bakul Prajapti', role: 'Sr. Project Manager & Site Engineer', description: 'Civil engineering specialist for industrial projects. & On-site execution and quality control lead.', icon: 'AP' },
        ],
        fabrication: [
            { name: 'Kalpesh D. Panchal', role: 'Technical Lead', description: 'Precision fabrication and steel structure expert.', icon: 'RM' },
        ],
        interior: [
            { name: 'Pravin C. Mevada', role: 'Interior Designer', description: 'Creative lead for corporate and industrial interiors.', icon: 'PJ' },
        ]
    };

    const executionTeam = {
        construction: {
            total: "150+",
            types: [
                { role: "Site Supervisors", count: "12+", icon: "SS" },
                { role: "Skilled Masons", count: "45+", icon: "SM" },
                { role: "Shuttering Experts", count: "35+", icon: "SE" },
                { role: "Concrete Specialists", count: "30+", icon: "CS" },
                { role: "Machinery Operators", count: "15+", icon: "MO" },
                { role: "General Labor Force", count: "50+", icon: "LF" }
            ]
        },
        fabrication: {
            total: "100+",
            types: [
                { role: "Certified Welders (6G/4G)", count: "35+", icon: "CW" },
                { role: "Skilled Fabricators", count: "25+", icon: "SF" },
                { role: "Structural Fitters", count: "20+", icon: "SF" },
                { role: "Erection Crew", count: "25+", icon: "EC" },
                { role: "Quality Inspectors", count: "8+", icon: "QI" },
                { role: "Riggers & Helpers", count: "30+", icon: "RH" }
            ]
        },
        interior: {
            total: "80+",
            types: [
                { role: "Master Carpenters", count: "25+", icon: "MC" },
                { role: "Polishers & Painters", count: "20+", icon: "PP" },
                { role: "MEP Technicians", count: "12+", icon: "MT" },
                { role: "False Ceiling Experts", count: "10+", icon: "FC" },
                { role: "Flooring Specialists", count: "10+", icon: "FS" },
                { role: "Assistant Crew", count: "15+", icon: "AC" }
            ]
        }
    };

    const renderTeamGrid = (members) => (
        <div className="team-grid">
            {members.map((member, index) => (
                <div key={index} className="team-card">
                    <div className="team-image-container">
                        <div className="team-image-placeholder">
                            <span>{member.icon || 'PE'}</span>
                        </div>
                    </div>
                    <div className="team-info">
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-500)', marginTop: '15px' }}>
                            {member.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderManpowerGrid = (data) => (
        <div className="manpower-container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span style={{ color: 'var(--color-gold-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Resource Strength</span>
                <h3 style={{ color: 'white', fontSize: '1.8rem', marginTop: '10px' }}>Workforce Distribution</h3>
                <div style={{ width: '40px', height: '3px', background: 'var(--color-orange)', margin: '15px auto' }}></div>
            </div>

            <div className="manpower-total-badge">
                Total Team: <span>{data.total} Skilled Personnel</span>
            </div>

            <div className="manpower-grid">
                {data.types.map((item, index) => (
                    <div key={index} className="manpower-item">
                        <div className="manpower-icon-circle">
                            {/* We can use specific icons here if we want, or keep the codes */}
                            {item.icon === "SS" && <Users size={32} />}
                            {item.icon === "SM" && <Briefcase size={32} />}
                            {item.icon === "SE" && <Ruler size={32} />}
                            {item.icon === "CS" && <Users size={32} />}
                            {item.icon === "CW" && <Briefcase size={32} />}
                            {(!["SS", "SM", "SE", "CS", "CW"].includes(item.icon)) && <span>{item.icon}</span>}
                        </div>
                        <div className="manpower-details">
                            <h4 className="manpower-count">{item.count}</h4>
                            <p className="manpower-role">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="page-wrapper">
            <div className="page-header" style={{
                backgroundColor: 'var(--color-navy-900)',
                color: 'white',
                padding: '100px 0 60px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>About Us</h1>
                    <p style={{ color: 'var(--color-gold-light)', fontSize: '1.2rem', fontWeight: '500' }}>Building Trust Through Quality & Integrity Since 2017</p>
                </div>
            </div>

            <div className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                        <div>
                            <span style={{ color: 'var(--color-gold-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Our History</span>
                            <h2 style={{ color: 'var(--color-navy-900)', fontSize: '2.5rem', marginTop: '10px', marginBottom: '25px', fontFamily: 'var(--font-heading)' }}>Company Profile</h2>
                            <p style={{ color: 'var(--color-gray-500)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                <strong>Panchal Engitech Pvt Ltd</strong> is a premier construction and fabrication company based in Surat, Gujarat.
                                Established in 2017, we have rapidly grown to become a trusted partner for industrial clients across the region.
                            </p>
                            <p style={{ color: 'var(--color-gray-500)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                We specialize in delivering structural steel solutions, heavy fabrication, civil construction, and specialized interior design services.
                                Our team comprises skilled engineers, designers, and certified workers who ensure every project meets the highest standards of safety and quality.
                            </p>
                            <p style={{ color: 'var(--color-gray-500)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                With a state-of-the-art workshop and modern equipment, we are capable of handling large-scale government and private sector projects with precision and efficiency.
                            </p>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ border: '10px solid var(--color-gold-light)', position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', zIndex: -1 }}></div>
                            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                                <img src="/assets/about-branding.png" alt="Panchal Engitech Branding" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '100px' }}>
                        <div style={{ background: 'var(--color-gray-100)', padding: '50px', borderRadius: '15px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '10rem', color: 'rgba(0,0,0,0.03)', fontWeight: '900' }}>M</div>
                            <h3 style={{ color: 'var(--color-navy-900)', fontSize: '1.8rem', marginBottom: '20px', position: 'relative' }}>Our Mission</h3>
                            <p style={{ color: 'var(--color-gray-500)', fontSize: '1.1rem', lineHeight: '1.7', position: 'relative' }}>
                                "To deliver superior construction, fabrication, and design solutions that empower clients to grow, ensuring safety, sustainability, and complete satisfaction in every project."
                            </p>
                        </div>
                        <div style={{ background: 'var(--color-navy-900)', padding: '50px', borderRadius: '15px', color: 'white', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '10rem', color: 'rgba(255,255,255,0.03)', fontWeight: '900' }}>V</div>
                            <h3 style={{ color: 'var(--color-gold-primary)', fontSize: '1.8rem', marginBottom: '20px', position: 'relative' }}>Our Vision</h3>
                            <p style={{ color: 'var(--color-gray-300)', fontSize: '1.1rem', lineHeight: '1.7', position: 'relative' }}>
                                "To be a reliable and innovative infrastructure and design partner in India, known for our technical excellence and ethical business practices."
                            </p>
                        </div>
                    </div>

                    <div className="team-section">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <span style={{ color: 'var(--color-gold-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Our Organization</span>
                            <h2 style={{ color: 'white', fontSize: '2.5rem', marginTop: '10px', fontFamily: 'var(--font-heading)' }}>Team & Workforce</h2>
                            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-gold-light)', margin: '20px auto' }}></div>
                            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-gray-300)', fontSize: '1.1rem' }}>
                                A synergy of strategic leadership, professional engineers, and expert manpower across all departments.
                            </p>
                        </div>

                        <div className="team-tabs">
                            <button
                                className={`team-tab ${activeTab === 'leadership' ? 'active' : ''}`}
                                onClick={() => setActiveTab('leadership')}
                            >
                                <Users size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                Leadership
                            </button>
                            <button
                                className={`team-tab ${activeTab === 'office' ? 'active' : ''}`}
                                onClick={() => setActiveTab('office')}
                            >
                                <Briefcase size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                Office Team
                            </button>
                            <button
                                className={`team-tab ${activeTab === 'execution' ? 'active' : ''}`}
                                onClick={() => setActiveTab('execution')}
                            >
                                <Ruler size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                Execution & Manpower
                            </button>
                        </div>

                        <div className="section-divider"></div>

                        {activeTab === 'leadership' && (
                            <div className="team-sub-section">
                                <h3 className="team-category-title">Executive Management</h3>
                                {renderTeamGrid(leadership)}
                            </div>
                        )}

                        {activeTab === 'office' && (
                            <>
                                <div className="team-sub-section">
                                    <h3 className="team-category-title">Construction Engineering</h3>
                                    {renderTeamGrid(officeTeam.construction)}
                                </div>
                                <div className="section-divider"></div>
                                <div className="team-sub-section">
                                    <h3 className="team-category-title">Fabrication & Design</h3>
                                    {renderTeamGrid(officeTeam.fabrication)}
                                </div>
                                <div className="section-divider"></div>
                                <div className="team-sub-section">
                                    <h3 className="team-category-title">Interior Design Studio</h3>
                                    {renderTeamGrid(officeTeam.interior)}
                                </div>
                            </>
                        )}

                        {activeTab === 'execution' && (
                            <>
                                <div className="team-sub-section">
                                    <h3 className="team-category-title">Construction Manpower</h3>
                                    {renderManpowerGrid(executionTeam.construction)}
                                </div>
                                <div className="section-divider"></div>
                                <div className="team-sub-section">
                                    <h3 className="team-category-title">Fabrication Specialists</h3>
                                    {renderManpowerGrid(executionTeam.fabrication)}
                                </div>
                                <div className="section-divider"></div>
                                <div className="team-sub-section">
                                    <h3 className="team-category-title">Interior Execution Team</h3>
                                    {renderManpowerGrid(executionTeam.interior)}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
