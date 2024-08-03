import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
    <div className="contact-info">
        <div className="contact-item email-phone">
            <i className="fa fa-envelope"></i>
            <a href="mailto:example@example.com">hello@company.com</a>
        </div>
        <div className="contact-item">
            <i className="fa fa-phone"></i>
            <a href="tel:+1234567890">+77  700 877 39</a>
        </div>
    </div>
</div>


  );
};

export default ContactPage;
