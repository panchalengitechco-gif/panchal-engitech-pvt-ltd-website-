import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // Replace with the actual WhatsApp number (include country code, without + or spaces)
    const phoneNumber = '918460554268';
    const message = 'Hello! I am interested in your services. Can you please provide more information?';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="whatsapp-tooltip">Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;
