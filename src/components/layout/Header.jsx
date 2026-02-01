import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>


            <div className="container header-content">
                <Link to="/" className="logo-container" onClick={closeMobileMenu}>
                    <img src="/favicon.png" alt="Panchal Engitech Logo" className="logo-img" />
                    <div className="logo-text">
                        <span className="company-name">Panchal Engitech</span>
                        <span className="company-suffix">Pvt Ltd.</span>
                    </div>
                </Link>

                <nav className={`desktop-nav`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="header-right">
                    <Link to="/contact" className="cta-button">
                        Get a Quote
                    </Link>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="mobile-nav-link"
                        onClick={closeMobileMenu}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link to="/contact" className="mobile-cta-button" onClick={closeMobileMenu}>
                    Get a Quote
                </Link>
            </div>
        </header>
    );
};

export default Header;
