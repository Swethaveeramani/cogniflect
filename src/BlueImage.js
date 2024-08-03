import React, { useState, useEffect } from 'react';

const BlurredBackground = () => {
  // State to handle the animated numbers
  const [experience, setExperience] = useState(0);
  const [growth, setGrowth] = useState(0);

  // Function to animate numbers
  const animateNumbers = (target, setter) => {
    let start = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      if (start >= target) {
        clearInterval(interval);
      } else {
        start += increment;
        setter(start);
      }
    }, 30);
  };

  // Run animation when component mounts
  useEffect(() => {
    animateNumbers(90, setExperience);
    animateNumbers(25, setGrowth);
  }, []);

  return (
    <div className="entrySpace">
      <div className="container">
        <div className="imageContainer">
          <img
            src="https://www.cogniflect.com/wp-content/uploads/2023/09/Captivating-Tales-3d-Cogniflect-2.jpg"
            alt="AI Robot"
            className="imgStyle"
          />
        </div>
        <div className="textContainer">
          <h2 className="h2Style">Why Us</h2>
          <h1 className="h1Style">Elevating Your Unique Path to Success</h1>
          <p>Experience unrivaled expertise, innovative solutions, and a dedication to your digital success.</p>
          <p><strong>{experience}+</strong> Hours of experience</p>
          <p><strong>{growth}%</strong> Recent growth</p>
        </div>
      </div>
      <style jsx>{`
        .entrySpace {
          background-color: black;
          padding: 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          height: auto;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
          overflow: hidden;
          color: white;
        }

        .textContainer {
          color: white;
          max-width: 50%;
          text-align: left;
          animation: fadeIn 2s ease-in-out;
          font-size: 18px;
          margin-right: 20px;
        }

        .imageContainer {
          width: 60%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .imgStyle {
          width: 100%;
          height: auto; /* Ensure height adjusts automatically */
          max-width: 500px; /* Maximum width to prevent image from being too large */
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          animation: slideIn 2s ease-in-out;
        }

        .h2Style {
          font-size: 2.5rem;
          font-weight: bold;
          color: #e0e0e0;
          margin-bottom: 15px;
        }

        .h1Style {
          font-size: 3rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        /* Media Queries for responsiveness */
        @media (max-width: 1024px) {
          .textContainer {
            font-size: 16px;
          }
          .imageContainer {
            width: 50%;
          }
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .textContainer {
            max-width: 90%;
            font-size: 15px;
            margin-bottom: 20px;
          }
          .imageContainer {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .textContainer {
            font-size: 14px;
          }
          .imgStyle {
            max-width: 100%; /* Ensure image does not exceed container width */
          }
          .h2Style, .h1Style {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlurredBackground;
