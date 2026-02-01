import React from 'react';
import '../styles/variables.css';

const PrivacyPolicy = () => {
    return (
        <div className="page-wrapper">
            <div className="page-header" style={{
                backgroundColor: 'var(--color-navy-900)',
                color: 'white',
                padding: '60px 0 40px',
                textAlign: 'center'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Privacy Policy</h1>
                    <p style={{ color: 'var(--color-gold-light)' }}>Panchal Engitech Private Limited</p>
                </div>
            </div>

            <div className="section-padding">
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--color-gray-500)', lineHeight: '1.8' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--color-navy-900)', fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '10px' }}>
                            Panchal Engitech Private Limited
                        </h2>
                        <p style={{ fontWeight: 'bold', color: 'var(--color-navy-900)' }}>
                            Effective as of: 01-01-2026
                        </p>
                    </div>

                    <div style={{ textAlign: 'justify', marginBottom: '40px' }}>
                        <p style={{ marginBottom: '20px' }}>
                            This Privacy Policy governs the collection, use, storage, transfer, disclosure, and protection of information that you (“You”) may provide when using the website and services of Panchal Engitech Private Limited (“Panchal Engitech”, “we”, “our”, or “us”). By accessing or using our website or services, you consent to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use or access our website or services.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            During your use of the Panchal Engitech website and services, you may provide certain personal information. “Personal Information” refers to any data that can be used to identify you or is personally linked to you, including but not limited to your name, contact number, email address, mailing address, age, payment details, IP address, and any other details you voluntarily submit in connection with inquiries, projects, quotes, registrations, bookings, or communications.
                        </p>
                        <p>
                            You have the right to decline to provide any Personal Information. However, if you choose not to provide required Personal Information, you may not be able to access or use certain features of our services or receive full support or responses from Panchal Engitech.
                        </p>
                    </div>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Collection and Use of Personal Information:
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            When you interact with our website, submit forms, request quotations, or engage with our services, we may collect and store your Personal Information in our database. We collect this information for the purpose of providing you with the requested services, processing queries, responding to communications, delivering project updates, preparing estimates or proposals, administering your account, and improving our services and user experience.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Consent:
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            By using the Panchal Engitech website and related services, you expressly consent to the collection, transfer, use, storage, disclosure, and sharing of your Personal Information in accordance with this Privacy Policy. If you do not agree with any part of this Privacy Policy, you should discontinue using the website and services immediately.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Protection of Information, Storage & Cookies:
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            Panchal Engitech strives to implement reasonable safeguards to protect your Personal Information, but we cannot guarantee complete security. Our systems may place small text files called “cookies” on your device. Cookies do not inherently contain Personal Information but allow our website to recognize your browser and remember your preferences. These cookies may help streamline your experience and pre-fill certain data fields when using our services.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Sharing of Personal Information:
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            We may share your Personal Information with our service providers, partners, consultants, or business associates to provide you with the services you request, process project details, or facilitate communication. We may also share Personal Information to send you newsletters, updates, offers, or information about new services if you opt in for such communications.
                        </p>
                        <p style={{ textAlign: 'justify', marginTop: '15px' }}>
                            We disclose your Personal Information when required by law, to comply with a legal process, to protect the rights of Panchal Engitech, to enforce our Terms & Conditions, or to respond to government or court directives.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Links to Other Websites:
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            Our Privacy Policy applies only to the Panchal Engitech website and services. The website may contain links to external or third-party websites that are not owned or controlled by us. We are not responsible for the content, privacy practices, or policies of those sites. You should review the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    <section style={{ marginBottom: '35px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '15px', borderLeft: '4px solid var(--color-gold-primary)', paddingLeft: '15px' }}>
                            Changes to Privacy Policy:
                        </h4>
                        <p style={{ textAlign: 'justify' }}>
                            Panchal Engitech reserves the right to modify, update, or change this Privacy Policy at any time. Your Personal Information will be used in accordance with the Privacy Policy in effect at the time it was collected. You are encouraged to check this page frequently for changes. Continued use of the website after changes are posted constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section style={{ background: 'var(--color-gray-100)', padding: '30px', borderRadius: '8px', marginTop: '40px' }}>
                        <h4 style={{ color: 'var(--color-navy-900)', fontSize: '1.2rem', marginBottom: '20px' }}>
                            Contact Information:
                        </h4>
                        <p style={{ marginBottom: '10px' }}>
                            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with us, please contact:
                        </p>
                        <p style={{ fontWeight: 'bold', color: 'var(--color-navy-900)', marginBottom: '5px' }}>
                            Panchal Engitech Private Limited
                        </p>
                        <p style={{ marginBottom: '5px' }}>
                            📧 Email: <a href="mailto:panchalengitech.co@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>panchalengitech.co@gmail.com</a>
                        </p>
                        <p style={{ marginBottom: '5px' }}>
                            📞 Phone: +91 8460554268
                        </p>
                        <p>
                            📍 Address: 307, GIDC Ichchhapore Bhatpore, Surat, Gujarat, India, 394510
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
