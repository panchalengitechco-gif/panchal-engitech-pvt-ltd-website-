import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            // Reset status after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-shape"></div>
            <div className="container newsletter-container">
                <div className="newsletter-content">
                    <h2>Get our insights delivered straight to your inbox!</h2>
                    <p>
                        Subscribe now to get the latest information about construction trends,
                        innovations and best practices from Panchal Engitech.
                    </p>
                </div>
                <div className="newsletter-form-wrapper">
                    {status === 'success' ? (
                        <div className="newsletter-success">
                            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                Thank you for subscribing!
                            </p>
                        </div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="newsletter-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'submitting'}
                            />
                            <button
                                type="submit"
                                className="newsletter-submit"
                                disabled={status === 'submitting'}
                                style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
                            >
                                {status === 'submitting' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
