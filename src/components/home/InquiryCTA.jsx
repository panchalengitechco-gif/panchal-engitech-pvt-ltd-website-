import React from 'react';
import { Link } from 'react-router-dom';
import './InquiryCTA.css';

const InquiryCTA = () => {
    return (
        <section className="inquiry-cta">
            <div className="container cta-content">
                <div>
                    <h2>Ready to Start Your Project?</h2>
                    <p>Get a free consultation and quote for your next fabrication or construction requirement.</p>
                </div>
                <Link to="/contact" className="btn btn-primary cta-btn">
                    Send Inquiry
                </Link>
            </div>
        </section>
    );
};

export default InquiryCTA;
