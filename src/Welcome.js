import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useTypewriter } from 'react-simple-typewriter'; // Ensure you have this library installed

const images = [
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Cogniflect-digital-marketing-agency.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Captivating-Tales-3d-Cogniflect-2.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Voice-Amplifiers-3d-Cogniflect-2-scaled.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Strategic-Brilliance-3D-Cogniflect-scaled.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Aesthetic-Mastery-3d-Cogniflect.jpg",
];

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [text] = useTypewriter({
    words: ['Cogniflect.', 'Cogniflect.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const [textin] = useTypewriter({
    words: ['web development', 'innovative software solutions','dynamic digital marketing services','Offline Marketing'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const navigate = useNavigate(); // Use the navigate function

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    flexWrap: 'wrap',
  };

  const textContainerStyles = {
    flex: isMobile ? '1 1 100%' : '1 1 60%',
    textAlign: isMobile ? 'center' : 'left',
    marginBottom: '20px',
  };

  const headingStyles = {
    color: 'white',
    fontSize: isMobile ? '1rem' : '2.5rem',
    marginBottom: '10px',
  };

  const paragraphStyles = {
    fontSize: isMobile ? '1rem' : '1.5rem',
    lineHeight: '1.5',
    color: 'white',
    margin: '0 20px 0 0',
  };

  const imageContainerStyles = {
    flexShrink: 0,
    marginBottom: '20px',
  };

  const imageStyles = {
    width: isMobile ? '200px' : '500px',
    height: isMobile ? '200px' : '500px',
    borderRadius: '10px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s', // Add transition for smooth hover effect
  };

  const highlightedTextStyles = {
    fontSize: isMobile ? '1rem' : '1.5rem',
    color: '#94bbe9',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  };

  const buttonStyles = {
    backgroundColor: '#94bbe9',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: isMobile ? '1rem' : '1.2rem',
    cursor: 'pointer',
    textAlign: 'center',
  };

  return (
    <div style={containerStyles}>
      <div style={textContainerStyles}>
        <h1 style={headingStyles}>
          Welcome to <br />
          <span style={{ color: '#94bbe9', fontSize: isMobile ? '1.1rem' : '2rem' }}>{text}</span>
        </h1>
        <p style={paragraphStyles}>
          Your premier partner in <span style={highlightedTextStyles}>AI-integrated digital solutions</span>.<br />
          That's where we come in! 
          At Cogniflect, we specialize <span style={{ color: '#94bbe9', fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 'bold' }}>{textin}</span><br />
          in Leveraging the power of cutting-edge AI technology.
        </p>
        <button style={buttonStyles} onClick={() => navigate('/Services')}>
          Explore Site
        </button>
      </div>
      <div style={imageContainerStyles}>
        <img 
          src={images[currentImageIndex]} 
          alt="Cogniflect" 
          style={imageStyles} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; 
          }}
        />
      </div>
      <p style={paragraphStyles}>
        We ensure your business not only keeps up but thrives in the competitive market. Let us transform your digital presence with our expert, tailored services.
      </p>
    </div>
  );
};

export default WelcomeSection;
