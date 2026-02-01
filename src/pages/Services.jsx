import React from 'react';
import { Link } from 'react-router-dom';

// Actually standard vite react project doesn't include react-helmet by default, I won't use it to avoid install errors.
// I'll just build the page.

import '../styles/variables.css';

const Services = () => {
    const [services, setServices] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('/data/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load services:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading">Loading services...</div>;

    return (
        <div className="page-wrapper">
            <div className="page-header" style={{
                backgroundColor: 'var(--color-navy-900)',
                color: 'white',
                padding: '60px 0 40px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Services</h1>
                    <p style={{ color: 'var(--color-gold-light)' }}>Expertise in Construction, Fabrication, and Interior Design</p>
                </div>
            </div>

            {services.map((service, index) => (
                <div
                    key={service.id}
                    className={`section-padding ${index % 2 !== 0 ? 'bg-gray-100' : ''}`}
                    id={service.id}
                    style={index % 2 !== 0 ? { backgroundColor: 'var(--color-gray-100)' } : {}}
                >
                    <div className="container">
                        <h2 style={{
                            color: 'var(--color-navy-900)',
                            marginBottom: '20px',
                            borderLeft: `4px solid ${service.borderColor}`,
                            paddingLeft: '15px'
                        }}>
                            {service.title}
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '40px',
                            alignItems: 'center'
                        }}>
                            <div style={{ order: index % 2 !== 0 ? 1 : 0 }}>
                                <p style={{ marginBottom: '15px', color: 'var(--color-gray-500)' }}>
                                    {service.description}
                                </p>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--color-navy-700)', lineHeight: '2', marginBottom: '20px' }}>
                                    {service.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                                <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                                    <Link to={service.link} className="btn" style={{
                                        textAlign: 'center',
                                        padding: '12px 25px',
                                        backgroundColor: 'var(--color-orange)',
                                        color: 'white',
                                        borderRadius: '4px',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        flex: '1',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(255, 107, 0, 0.2)'
                                    }}>
                                        View Details
                                    </Link>
                                    <Link to="/contact" className="btn" style={{
                                        textAlign: 'center',
                                        padding: '12px 25px',
                                        border: '1px solid var(--color-gray-300)',
                                        color: 'var(--color-navy-900)',
                                        backgroundColor: 'var(--color-gray-100)',
                                        borderRadius: '4px',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        flex: '1',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        Send Inquiry
                                    </Link>
                                </div>
                            </div>
                            <div style={{
                                backgroundColor: '#eee',
                                height: '400px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                order: index % 2 !== 0 ? 0 : 1,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}>
                                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
