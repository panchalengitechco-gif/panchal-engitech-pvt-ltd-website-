import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Star, ShieldCheck, Phone } from 'lucide-react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <img src="/favicon.png" alt="Panchal Engitech" />
                        <div>
                            <h3>Panchal Engitech</h3>
                            <p>Pvt Ltd</p>
                        </div>
                    </div>
                    <p className="footer-tagline">Building the Future, Restoring the Past.</p>
                    <p className="footer-desc">
                        Leading construction and fabrication services in Surat, Gujarat. Committed to quality, safety, and excellence since 2017.
                    </p>
                    <div className="footer-rating">
                        <div className="rating-stars">
                            <Star size={16} fill="var(--color-gold-primary)" color="var(--color-gold-primary)" />
                            <Star size={16} fill="var(--color-gold-primary)" color="var(--color-gold-primary)" />
                            <Star size={16} fill="var(--color-gold-primary)" color="var(--color-gold-primary)" />
                            <Star size={16} fill="var(--color-gold-primary)" color="var(--color-gold-primary)" />
                            <Star size={16} fill="var(--color-gold-primary)" color="var(--color-gold-primary)" />
                            <span className="rating-num">4.9/5</span>
                        </div>
                        <p className="rating-text">
                            <ShieldCheck size={14} className="shield-icon" />
                            Trusted by 500+ Clients
                        </p>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col services-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li><Link to="/services#construction">Civil Construction</Link></li>
                        <li><Link to="/services#fabrication">Structural Fabrication</Link></li>
                        <li><Link to="/services#fabrication">Industrial Sheds</Link></li>
                        <li><Link to="/services#interior-design">Interior Design</Link></li>
                        <li><Link to="/services#fabrication">PEB Structures</Link></li>
                    </ul>
                </div>

                {/* <div className="footer-col investor-col">
                    <h4>Investor Relations</h4>
                    <ul>
                        <li><Link to="/investors#overview">Investor Overview</Link></li>
                        <li><Link to="/investors#governance">Corporate Governance</Link></li>
                        <li><Link to="/investors#financials">Financial Reports</Link></li>
                        <li><Link to="/investors#shareholding">Shareholding Pattern</Link></li>
                        <li><Link to="/investors#notices">Public Notices</Link></li>
                    </ul>
                </div> */}

                <div className="footer-col contact-col">
                    <h4>Contact Us</h4>
                    <div className="contact-row">
                        <MapPin size={28} className="icon" />
                        <span>307, GIDC, Ichchhapore Bhatpore, Surat, Gujarat</span>
                    </div>
                    <div className="contact-row">
                        <Mail size={20} className="icon" />
                        <a href="mailto:panchalengitech.co@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            panchalengitech.co@gmail.com
                        </a>
                    </div>
                    <div className="contact-row">
                        <Phone size={20} className="icon" />
                        <a href="tel:+918460554268" style={{ color: 'inherit', textDecoration: 'none' }}>
                            +91 8460554268
                        </a>
                    </div>
                    <div className="gst-row">
                        <strong>GSTIN:</strong> 24AAJCP2157R12V
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; {new Date().getFullYear()} Panchal Engitech Pvt Ltd. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span className="separator">|</span>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
