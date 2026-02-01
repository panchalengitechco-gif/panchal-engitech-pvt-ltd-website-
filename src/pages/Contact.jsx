import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FAQ from '../components/common/FAQ';
import '../styles/variables.css';

const Contact = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header" style={{
                backgroundColor: 'var(--color-navy-900)',
                color: 'white',
                padding: '60px 0 40px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Contact Us</h1>
                    <p style={{ color: 'var(--color-gold-light)' }}>Get in touch for quotes, inquiries, and collaboration.</p>
                </div>
            </div>

            <div className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>

                    <div className="contact-info">
                        <h2 style={{ marginBottom: '30px', color: 'var(--color-navy-900)' }}>Get In Touch</h2>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--color-navy-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy-900)' }}>
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, color: 'var(--color-navy-900)' }}>Email</h4>
                                <p style={{ margin: 0 }}>
                                    <a href="mailto:panchalengitech.co@gmail.com" style={{ color: 'var(--color-gray-500)', textDecoration: 'none' }}>
                                        panchalengitech.co@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--color-navy-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy-900)' }}>
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, color: 'var(--color-navy-900)' }}>Address</h4>
                                <p style={{ margin: 0, color: 'var(--color-gray-500)' }}>307, GIDC, Ichchhapore Bhatpore, Surat, Gujarat</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--color-navy-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy-900)' }}>
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, color: 'var(--color-navy-900)' }}>Phone</h4>
                                <p style={{ margin: 0 }}>
                                    <a href="tel:+918460554268" style={{ color: 'var(--color-gray-500)', textDecoration: 'none' }}>
                                        +91 8460554268
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '40px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Location</h3>
                            {/* Embed Google Map via Iframe - using a generic Surat GIDC location as placeholder or trying to look up address if possible. 
                   User provided specific address. I will use a generic map query. */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.6929973666142!2d72.7383906!3d21.1646125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s7JHJ5P7Q%2BR9R!5e0!3m2!1sen!2sin!4v1766631308191!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '4px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map"
                            ></iframe>
                        </div>
                    </div>

                    <div className="contact-form" style={{ background: 'var(--color-navy-900)', padding: '40px', borderRadius: '8px', color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                        <h2 style={{ marginBottom: '20px', color: 'var(--color-gold-primary)' }}>Send Inquiry</h2>
                        <form
                            action="https://formspree.io/f/mvzpwgrp" // Placeholder - user needs to replace this
                            method="POST"
                        >
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: 'white' }}>Name</label>
                                <input type="text" name="name" placeholder="Your Name" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', background: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-sans)' }} required />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: 'white' }}>Email</label>
                                <input type="email" name="email" placeholder="Your Email" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', background: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-sans)' }} required />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: 'white' }}>Phone</label>
                                <input type="tel" name="phone" placeholder="Your Phone Number" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', background: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-sans)' }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: 'white' }}>Service Required</label>
                                <select name="service" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', background: 'white', fontFamily: 'var(--font-sans)' }} required>
                                    <option value="">Select a service</option>
                                    <option value="Civil & Industrial Construction">Civil & Industrial Construction</option>
                                    <option value="Fabrication Products & Services">Fabrication Products & Services</option>
                                    <option value="Interior Design">Interior Design</option>
                                    <option value="Industrial Maintenance">Industrial Maintenance</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: 'white' }}>Requirement</label>
                                <textarea name="message" rows="4" placeholder="Describe your requirement (Project type, location, etc.)" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', background: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-sans)', resize: 'vertical' }} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', cursor: 'pointer', background: 'var(--color-gold-primary)', color: 'var(--color-navy-900)', border: 'none', padding: '12px', fontWeight: 'bold', borderRadius: '4px', fontFamily: 'var(--font-heading)' }}>
                                Send Inquiry
                            </button>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-300)', marginTop: '10px', textAlign: 'center' }}>
                                We'll get back to you within 24 hours.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
            <FAQ />
        </div>
    );
};

export default Contact;
