import React, { useState, useEffect } from 'react';

const images = [
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Cogniflect-digital-marketing-agency.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Captivating-Tales-3d-Cogniflect-2.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Voice-Amplifiers-3d-Cogniflect-2-scaled.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Strategic-Brilliance-3D-Cogniflect-scaled.jpg",
  "https://www.cogniflect.com/wp-content/uploads/2023/09/Aesthetic-Mastery-3d-Cogniflect.jpg",
];

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2000ms = 2 seconds

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: 'black',
    textAlign: 'center',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1200px',
    textAlign: 'left',
    flexWrap: 'wrap',
  };

  const contentStyle = {
    flex: 1,
    padding: '20px',
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    order: -1, // Moves image to the left side
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    marginRight: '20px', // Add space to the right of the image if needed
    
  };

  const titleStyle = {
    fontSize: isMobile ? '1.4rem' : '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '20px',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1.1rem' : '1.8rem',
    color: '#007BFF',
    marginBottom: '20px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
  };

  const textStyle = {
    fontSize: isMobile ? '0.89rem' : '1.3rem',
    color: 'white',
    lineHeight: '1.6',
  };

  const imageHoverStyle = {
    transform: 'scale(1.05)',
  };

  const svgStyle = {
    width: '24px',
    height: '24px',
    marginRight: '10px',
    verticalAlign: 'middle',
    fill: '#007BFF',
  };
  

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <div style={imageContainerStyle}>
          <img
            src={images[currentImageIndex]}
            alt={`Cogniflect Image ${currentImageIndex + 1}`}
            style={imageStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = imageHoverStyle.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          />
        </div>
        <div style={contentStyle}>
          <h1 style={titleStyle}>About Us</h1>
          <h2 style={subtitleStyle}>Your Trusted Partner in Digital Excellence</h2>
          <p style={textStyle}>
            At Cogniflect, we are the architects of digital transformation. Our multidimensional expertise spans product strategy, market analysis, UX enhancement, engaging content creation, and powerful digital solutions. As your trusted partners, we invite you to explore the limitless possibilities of success with us.
          </p>
          <h2 style={subtitleStyle}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
              <path d="M16,31c-0.305,0-0.611-0.093-0.872-0.279l-4.774-3.407C5.906,24.14,3.25,18.983,3.25,13.517V5.417c0-0.672,0.447-1.263,1.095-1.444l9.581-2.687c1.356-0.381,2.791-0.381,4.148,0l9.581,2.687c0.647,0.182,1.095,0.772,1.095,1.444v8.101c0,5.465-2.656,10.623-7.104,13.796l-4.774,3.407C16.611,30.907,16.305,31,16,31z M6.25,6.554v6.963c0,4.498,2.186,8.743,5.846,11.355L16,27.657l3.903-2.785l0,0c3.661-2.612,5.847-6.857,5.847-11.355V6.554l-8.486-2.38c-0.826-0.232-1.701-0.232-2.527,0L6.25,6.554z M14.5,19.349c-0.384,0-0.768-0.146-1.061-0.439l-3-3c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0l1.939,1.939l4.939-4.939c0.586-0.586,1.535-0.586,2.121,0c0.586,0.585,0.586,1.536,0,2.121l-6,6C15.267,19.202,14.884,19.349,14.5,19.349z"/>
            </svg>
            Mission
          </h2>
          <p style={textStyle}>
            Cogniflect’s mission is to guide your digital journey to excellence, amplifying your brand’s success with innovative strategies and unwavering passion.
          </p>
          <h2 style={subtitleStyle}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
              <path d="M16.009,28.015c-4.512,0-8.619-2.226-10.987-5.954c-0.296-0.466-0.158-1.084,0.308-1.38c0.466-0.299,1.084-0.158,1.38,0.308c1.999,3.147,5.475,5.026,9.299,5.026c0.003,0,0.006,0,0.009,0c3.816-0.003,7.282-1.882,9.271-5.025c0.296-0.467,0.912-0.606,1.38-0.31c0.467,0.295,0.605,0.913,0.31,1.38c-2.357,3.725-6.454,5.951-10.959,5.955C16.016,28.015,16.012,28.015,16.009,28.015z M16,20.861c-2.787,0-5.054-2.267-5.054-5.053s2.267-5.054,5.054-5.054c2.787,0,5.054,2.267,5.054,5.054S18.787,20.861,16,20.861z M16,12.754c-1.684,0-3.054,1.37-3.054,3.054c0,1.683,1.37,3.053,3.054,3.053s3.054-1.37,3.054-3.053C19.054,14.124,17.684,12.754,16,12.754z M2.499,13.298c-0.183,0-0.369-0.05-0.535-0.156c-0.466-0.296-0.604-0.914-0.308-1.38c3.093-4.871,8.459-7.777,14.356-7.777c0.004,0,0.009,0,0.014,0c5.887,0.004,11.239,2.912,14.319,7.778c0.296,0.466,0.157,1.084-0.31,1.379c-0.466,0.298-1.084,0.157-1.38-0.31c-2.712-4.284-7.434-6.844-12.631-6.848c-0.004,0-0.008,0-0.012,0c-5.209,0-9.943,2.56-12.667,6.85C3.154,13.134,2.83,13.298,2.499,13.298z"/>
            </svg>
            Vision
          </h2>
          <p style={textStyle}>
            Our vision is to be the leading catalyst for digital innovation, empowering businesses with cutting-edge solutions and unparalleled expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
