import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom'; // For navigation

const InspireSection = () => {
  const [text] = useTypewriter({
    words: ['Let’s Make It Happen', 'Ready to Excel Digitally'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to contact section
  };

  // Inline styles
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    height: '500px',
    margin: '0',
    overflow: 'hidden',
    fontFamily: 'Arial, Helvetica, sans-serif',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    zIndex: '1',
    width: '80%',
    maxWidth: '600px',
    height: 'auto',
    minHeight: '200px',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const subheadingStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#f1f1f1',
    color: '#000',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ddd',
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-77134.jpg"
        alt="Inspire"
        style={imageStyle}
      />
      <div style={overlayStyle}>
        <h1 style={headingStyle}>Inspire to Take Action 
        Ready to excel digitally?
        </h1>
        <p style={subheadingStyle}>{text}</p>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
      <style>
        {`
          /* Responsive styles */
          @media (max-width: 768px) {
            ${Object.keys(headingStyle).map(
              (key) => `.headingStyle { ${key}: ${headingStyle[key]}; }`
            )}
            ${Object.keys(subheadingStyle).map(
              (key) => `.subheadingStyle { ${key}: ${subheadingStyle[key]}; }`
            )}
            ${Object.keys(buttonStyle).map(
              (key) => `.buttonStyle { ${key}: ${buttonStyle[key]}; }`
            )}
            .overlayStyle {
              width: 90%;
              min-height: 150px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InspireSection;
