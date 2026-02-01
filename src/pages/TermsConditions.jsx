import React from 'react';
import '../styles/variables.css';

const TermsConditions = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header" style={{
                backgroundColor: 'var(--color-navy-900)',
                color: 'white',
                padding: '60px 0 40px',
                textAlign: 'center'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Terms & Conditions</h1>
                    <p style={{ color: 'var(--color-gold-light)' }}>Panchal Engitech Private Limited</p>
                </div>
            </div>

            <div className="section-padding">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--color-gray-500)', lineHeight: '1.8' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--color-navy-900)', fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '10px' }}>
                            Terms & Conditions
                        </h2>
                        <p style={{ fontWeight: 'bold', color: 'var(--color-navy-900)' }}>
                            Effective Date: 01-01-2026
                        </p>
                    </div>

                    <div style={{ textAlign: 'justify', marginBottom: '40px' }}>
                        <p style={{ marginBottom: '20px' }}>
                            These Terms & Conditions (“Terms”) constitute a legally binding agreement between you (“User”, “you”, or “your”) and Panchal Engitech Private Limited, including its affiliates and assigns (collectively “Panchal Engitech”, “we”, “us”, or “our”), with respect to your access to, use of, or participation in our website, mobile applications, services, products, estimates, designs, consultations, and any related offerings (collectively, the “Services”).
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            By accessing or using our Services in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with these Terms, please do not access or use our Services. Continued access or use of the Services constitutes acceptance of and agreement to these Terms.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            Panchal Engitech reserves the right to update or modify these Terms at any time without prior notice. You should review these Terms each time you access or use the Services as your continued use after any such changes will constitute acceptance of and agreement to the modifications.
                        </p>
                        <p>
                            These Terms include disclaimers of warranties, limitations of liabilities, and indemnity provisions, among others.
                        </p>
                    </div>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Consent and Eligibility
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            You affirm that you are at least 18 years of age and are fully able and competent to enter into and comply with these Terms. If you access or use the Services on behalf of a company, organization, or legal entity, you represent that you have the authority to bind that entity to these Terms, and references to “you” shall include that entity.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Use of Services
                        </h4>
                        <p style={{ textAlign: 'justify', marginBottom: '15px' }}>
                            Our Services are made available to connect you to information about construction, fabrication, interior design, project management, estimates, and related services offered by Panchal Engitech. We may provide information, project proposals, design concepts, cost estimates, and other related materials for your consideration.
                        </p>
                        <p style={{ textAlign: 'justify', marginBottom: '15px' }}>
                            You understand that any information, designs, estimates, or related materials provided through the Services are intended for general informational and planning purposes only and do not replace a formal contract, detailed project agreement, or professional advice unless otherwise expressly agreed in writing.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Your interactions with Panchal Engitech or third parties accessed through the Services, including any engagements, payments, or contractual agreements, are solely between you and the respective party. Panchal Engitech is not responsible or liable for any failure or breach of such contracts, engagements, or agreements.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Accuracy of Information
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            You agree to provide accurate, complete, and current information when required to use the Services. You understand that you are responsible for maintaining the confidentiality of any account credentials and for all activities conducted under your account.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Intellectual Property
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            All content, materials, designs, graphics, logos, text, trademarks, and other intellectual property available through the Services are the property of Panchal Engitech or its licensors, suppliers, or partners, and are protected under trademark, copyright, and other applicable intellectual property laws. You agree not to copy, reproduce, modify, distribute, or create derivative works of any content without our prior written permission.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            No Warranty
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            The Services provided are offered “as is,” without warranties of any kind, whether express or implied. Panchal Engitech does not warrant the accuracy, completeness, reliability, or suitability of information or Services provided. You agree that any reliance on such Services is at your own risk.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Limitation of Liability
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            To the fullest extent permitted by applicable law, Panchal Engitech and its officers, directors, employees, agents, suppliers, and affiliates shall not be liable for any direct, indirect, incidental, special, punitive, or consequential damages arising from your use of, or inability to use, the Services, including but not limited to damages for loss of profits, loss of data, business interruption, or other pecuniary loss, whether in contract, tort, negligence, or otherwise.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Indemnification
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            You agree to indemnify, defend, and hold harmless Panchal Engitech and its officers, directors, employees, agents, suppliers, and affiliates from and against any and all claims, losses, liabilities, damages, costs, and expenses (including reasonable attorney’s fees) arising out of or in connection with your use of the Services, violation of these Terms, or infringement of any third-party rights.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Third-Party Services and Links
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            The Services may contain links to third-party websites, services, or content that are not owned or controlled by Panchal Engitech. These links are provided solely as a convenience. Panchal Engitech is not responsible for the content, accuracy, policies, or practices of third-party services, and inclusion of such links does not imply endorsement.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Termination
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            Panchal Engitech may, in its sole discretion, suspend or terminate your access to all or part of the Services at any time, with or without notice, for any reason, including for violation of these Terms.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Governing Law
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            These Terms shall be governed by and interpreted in accordance with the laws of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat.
                        </p>
                    </section>

                    <section style={{ background: 'var(--color-gray-100)', padding: '30px', borderRadius: '8px', marginTop: '40px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px' }}>
                            Entire Agreement
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            These Terms, together with the Privacy Policy and any other legal notices published by Panchal Engitech on the Services, constitute the entire agreement between you and Panchal Engitech relating to your use of the Services and supersede all prior or contemporaneous agreements, representations, and understandings.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
