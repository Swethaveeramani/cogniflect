import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isOpen, toggleNavbar, handleLinkClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">Cogniflect.</div>
      <div className="menu-icon" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#learn" onClick={handleLinkClick}>Learn</a></li>
        <li><a href="#blog" onClick={handleLinkClick}>Blog</a></li>
        <li><a href="#hire" onClick={handleLinkClick}>Hire Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
