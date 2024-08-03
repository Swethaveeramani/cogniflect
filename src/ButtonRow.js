import React from 'react';

const Button = ({ svgPath, label }) => {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    margin: '10px', // Reduced margin for responsiveness
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
    width: '100%',
    maxWidth: '350px', // Responsive width
    height: '60px',
    fontSize: '20px', // Adjusted font size
  };

  const buttonHoverStyle = {
    backgroundColor: '#94bbe9',
    transform: 'scale(1.05)',
    color:'white',
  };

  const svgStyle = {
    width: '24px', 
    height: '24px',
    marginRight: '10px',
    transition: 'fill 0.3s, transform 0.3s',
    fill: '#007BFF',
  };

  const svgHoverStyle = {
    fill: '#007BFF',
    transform: 'rotate(90deg)',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
        e.currentTarget.style.transform = buttonHoverStyle.transform;
        const svgElement = e.currentTarget.querySelector('svg');
        svgElement.style.fill = svgHoverStyle.fill;
        svgElement.style.transform = svgHoverStyle.transform;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
        e.currentTarget.style.transform = 'none';
        const svgElement = e.currentTarget.querySelector('svg');
        svgElement.style.fill = buttonStyle.fill;
        svgElement.style.transform = 'none';
      }}
    >
      <svg style={svgStyle} viewBox="0 0 32 32">
        <path d={svgPath}></path>
      </svg>
      {label}
    </button>
  );
};

const ButtonRow = () => {
  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'black',
  };

  return (
    <div style={rowStyle}>
      <Button
        svgPath="M2.5,28.524c-0.159,0-0.318-0.038-0.464-0.114C1.707,28.238,1.5,27.896,1.5,27.524V10.476c0-3.86,3.14-7,7-7h15 c3.859,0,7,3.14,7,7v5.5c0,3.859-3.141,7-7,7H10.813l-7.743,5.37C2.899,28.465,2.7,28.524,2.5,28.524z M8.5,5.476 c-2.757,0-5,2.243-5,5v15.139l6.43-4.46c0.167-0.116,0.366-0.179,0.57-0.179h13c2.757,0,5-2.243,5-5v-5.5c0-2.757-2.243-5-5-5H8.5z"
        label="About Company"
      />
      <Button
        svgPath="M19.722,30.139c-0.914,0-1.824-0.271-2.612-0.802c-1.322-0.89-2.111-2.369-2.111-3.957v-2.036 c-2.806-0.477-4.949-2.925-4.949-5.864v-1.246c0-1.107,0.897-2.007,2-2.007h0.232v-3.205c0-0.552,0.448-1,1-1s1,0.448,1,1v3.205 h3.433v-3.205c0-0.552,0.447-1,1-1s1,0.448,1,1v3.205h0.232c1.103,0,2,0.9,2,2.007v1.246c0,2.939-2.144,5.388-4.949,5.864v2.036 c0,0.922,0.459,1.78,1.229,2.298c0.751,0.505,1.652,0.602,2.478,0.269c4.734-1.925,7.794-6.473,7.794-11.584 c0-3.549-1.518-6.944-4.164-9.314c-2.683-2.402-6.154-3.508-9.763-3.106C8.981,4.559,4.375,9.042,3.618,14.601 c-0.623,4.58,1.283,9.113,4.974,11.833c0.444,0.327,0.54,0.953,0.212,1.397c-0.327,0.445-0.953,0.541-1.398,0.212 c-4.281-3.152-6.491-8.407-5.769-13.711C2.515,7.876,7.862,2.67,14.351,1.953c4.185-0.458,8.206,0.818,11.318,3.605 c3.068,2.749,4.829,6.687,4.829,10.804c0,5.929-3.549,11.205-9.041,13.438C20.898,30.026,20.309,30.139,19.722,30.139z M15.998,21.427c0.013,0,0.026,0,0.04,0.001c2.16-0.021,3.91-1.784,3.91-3.948v-1.246l-7.893-0.007l-0.005,1.253 c0,2.164,1.75,3.927,3.909,3.948C15.972,21.427,15.985,21.427,15.998,21.427z M12.049,15.227v1l0,0V15.227z"
        label="Read Reviews"
      />
     
<Button
svgPath="M24.157,30.5c-3.497,0-6.343-2.846-6.343-6.343s2.846-6.343,6.343-6.343S30.5,20.66,30.5,24.157S27.654,30.5,24.157,30.5z M24.157,19.815c-2.395,0-4.343,1.948-4.343,4.343s1.948,4.343,4.343,4.343s4.343-1.948,4.343-4.343S26.552,19.815,24.157,19.815z M7.842,30.5c-3.497,0-6.342-2.846-6.342-6.343s2.845-6.343,6.342-6.343c3.498,0,6.343,2.846,6.343,6.343S11.34,30.5,7.842,30.5z M7.842,19.815c-2.395,0-4.342,1.948-4.342,4.343S5.448,28.5,7.842,28.5s4.343-1.948,4.343-4.343S10.237,19.815,7.842,19.815z M24.157,14.185c-3.497,0-6.343-2.845-6.343-6.343S20.66,1.5,24.157,1.5S30.5,4.345,30.5,7.843S27.654,14.185,24.157,14.185z M24.157,3.5c-2.395,0-4.343,1.948-4.343,4.343s1.948,4.343,4.343,4.343S28.5,10.237,28.5,7.843S26.552,3.5,24.157,3.5z M7.842,14.185c-3.497,0-6.342-2.845-6.342-6.343S4.345,1.5,7.842,1.5c3.498,0,6.343,2.845,6.343,6.343S11.34,14.185,7.842,14.185z M7.842,3.5c-2.395,0-4.342,1.948-4.342,4.343s1.947,4.343,4.342,4.343s4.343-1.948,4.343-4.343S10.237,3.5,7.842,3.5z"
label="How it works"
/>        
      
    </div>
  );
};

export default ButtonRow;
