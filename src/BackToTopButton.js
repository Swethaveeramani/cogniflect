// src/BackToTopButton.js
import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; // Import the CSS file

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
                <i className="fa fa-arrow-up"></i>
            </button>
        )
    );
};

export default BackToTopButton;
