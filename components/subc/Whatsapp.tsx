import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Whatsapp() {
    return (
        <a
            href="https://wa.me/5599999999999" // Substitua pelo seu número com DDI
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="Fale conosco no WhatsApp"
        >
            <FaWhatsapp size={24} />
        </a>
    );
}
