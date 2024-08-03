import React from 'react';
import ContactPage from './ContactPage';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="brand">
          <h1 className="brandName">Cogniflect.</h1>
        </div>
        <ContactPage />
        <div className="socialLinks">
          <a href="https://facebook.com" className="socialIcon facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="socialIcon twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="socialIcon instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="socialIcon linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #1a1a1a; /* Dark gray background for a modern look */
          color: #e0e0e0; /* Light gray text for contrast */
          padding: 40px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #333; /* Subtle top border for separation */
        }

        .footerContent {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .brand {
          margin-bottom: 20px;
          animation: slideInFromLeft 1s ease-in-out;
        }

        .brandName {
          font-size: 2.5rem; /* Larger font size for prominence */
          font-weight: bold;
          color: #fff;
          margin: 0;
          letter-spacing: 1px; /* Add letter spacing for a sleek look */
        }

        .socialLinks {
          display: flex;
          justify-content: center;
          gap: 20px; /* Increased gap between icons for better spacing */
          margin-top: 20px;
        }

        .socialIcon {
          font-size: 28px; /* Larger icon size for better visibility */
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .facebook {
          color: #3b5998; /* Facebook brand color */
        }

        .twitter {
          color: #1da1f2; /* Twitter brand color */
        }

        .instagram {
          color: #e4405f; /* Instagram brand color */
        }

        .linkedin {
          color: #0077b5; /* LinkedIn brand color */
        }

        .socialIcon:hover {
          filter: brightness(1.2); /* Brighten icon color on hover */
          transform: scale(1.3); /* Slightly larger scale effect */
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .footer {
          animation: fadeIn 2s ease-in;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
