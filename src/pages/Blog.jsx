import React from 'react';
import '../styles/variables.css';

const Blog = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header" style={{
                backgroundColor: 'var(--color-navy-900)',
                color: 'white',
                padding: '60px 0 40px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Blog</h1>
                    <p style={{ color: 'var(--color-gold-light)' }}>Latest updates, technical insights, and project highlights.</p>
                </div>
            </div>

            <div className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ fontSize: '4rem', color: 'var(--color-gray-200)', marginBottom: '20px' }}>
                            ✍️
                        </div>
                        <h2 style={{ color: 'var(--color-navy-900)', marginBottom: '15px' }}>Coming Soon</h2>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: '1.1rem' }}>
                            We are currently preparing informative articles about industrial construction, fabrication trends, and interior design.
                        </p>
                        <p style={{ color: 'var(--color-gray-500)', marginTop: '20px' }}>
                            Stay tuned for regular updates from our team of experts!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
