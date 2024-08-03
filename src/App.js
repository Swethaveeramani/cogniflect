import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import ContactPage from './ContactPage';
import WelcomeSection from './Welcome';
import Services from './Services';
import ImageText from './ImageText';
import ButtonRow from './ButtonRow';
import Aboutus from './Aboutus'
import BlueImage from './BlueImage';
import Reviews from './Reviews';
import Inspire from './Inspire';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Router>
      <div className="App">
        <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} handleLinkClick={handleLinkClick} />
        <header className="hero-section">
          <WelcomeSection />
        </header>
        <Routes>
          
        </Routes>
        <Services/>
        <ButtonRow/>
        <Aboutus/>
        <BlueImage/>
       
        <Reviews/>
        <Inspire/>
        {/* <ImageText/> */}
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;

// <Route path="/" element={<WelcomeSection />} />
//           <Route path="/contact" element={<ContactPage />} /> 