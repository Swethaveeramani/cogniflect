import React from 'react';

const Review1 = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '20px',
    color: 'white',
   marginbottom:'30px',
  };
  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    animation: 'fadeInDown 2s ease-in-out',
    textAlign: 'center', 
  };

  const reviewsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    fontSize: '1.4rem',
    flexWrap: 'wrap', 
  };

  const reviewStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    border: '2px solid #f1f1f1',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    width: '30%',
    minWidth: '250px', 
    animation: 'fadeInUp 2s ease-in-out',
    color: 'white',
    boxSizing: 'border-box', 
  };

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes fadeInUp {
      from { 
        transform: translateY(20px); 
        opacity: 0; 
      }
      to { 
        transform: translateY(0); 
        opacity: 1; 
      }
    }
    @keyframes fadeInDown {
      from { 
        transform: translateY(-20px); 
        opacity: 0; 
      }
      to { 
        transform: translateY(0); 
        opacity: 1; 
      }
    }

    @media (max-width: 768px) {
      .reviewsContainer {
        flex-direction: column;
        align-items: center;
      }
      .reviewBox {
        width: 90%;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 480px) {
      .headerStyle {
        font-size: 1.8rem;
      }
      .reviewBox {
        font-size: 1rem; 
      }
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <>
    <div style={containerStyle}>
      <h2 style={headerStyle} className="headerStyle">Some Love From Our Clients</h2>
      <div style={reviewsContainerStyle} className="reviewsContainer">
        <div style={reviewStyle} className="reviewBox">
          <p>“Exceptional service! Cogniflect transformed my business. Highly recommend for digital success.”</p>
          <p><strong>Emily Johnson</strong></p>
          <p>From Rating</p>
        </div>
        <div style={reviewStyle} className="reviewBox">
          <p>“Cogniflect delivers results! Outstanding team, exceeded all expectations.”</p>
          <p><strong>Daniel Anderson</strong></p>
          <p>From Testimonials</p>
        </div>
        <div style={reviewStyle} className="reviewBox">
          <p>“Incredible digital partner! Cogniflect’s strategies changed the game for my brand.”</p>
          <p><strong>Jayashankar Kannan</strong></p>
          <p>From Reviews</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Review1;
