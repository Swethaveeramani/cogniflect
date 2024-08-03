import React, { useState } from 'react';

const Promo = ({ text, cta, color, src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const size = '30vmin'; 
  const fontSize = `calc(${size} / 6)`;
  const duration = '300ms';
  const easeOut = 'cubic-bezier(0.25, 1, 0.5, 1)';

  const promoStyle = {
    position: 'relative',
    cursor: 'pointer',
    width: size,
    height: size,
  };

  const imageWrapperStyle = {
    width: size,
    height: size,
    overflow: 'hidden',
    clipPath: isHovered ? 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)' : 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%)',
    transform: isHovered ? 'translateX(25%)' : 'translateX(0)',
    transition: `transform ${duration} ${easeOut}, clip-path ${duration} ${easeOut}`,
  };

  const imageStyle = {
    position: 'relative',
    width: '215px',
    height: '300px',
    objectFit: 'cover',
    transform: isHovered ? 'translateX(0)' : 'translateX(-10%)',
    transition: `transform ${duration} ${easeOut}`,
  };

  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '900px',
    height: '900px',
    backgroundColor: color,
    mixBlendMode: 'multiply',
    opacity: isHovered ? 1 : 0,
    transform: 'translateZ(0)',
    transition: `opacity ${duration} ${easeOut}`,
  };

  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontSize: fontSize,
    fontWeight: 700,
    lineHeight: 1.2,
    whiteSpace: 'nowrap',
    transform: isHovered ? 'translate(5%, -50%)' : 'translate(-10%, -50%)',
    transition: `transform ${duration} ${easeOut}`,
    pointerEvents: 'none',
  };

  const titleAfterStyle = {
    content: `attr(data-cta)`,
    display: 'inline-block',
    marginLeft: '1.5vmin',
    fontSize: `calc(${fontSize} / 3.25)`,
    fontWeight: 400,
    letterSpacing: '0.125vmin',
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'translateX(0)' : 'translateX(-25%)',
    transition: `transform ${duration} ${easeOut}, opacity ${duration} ${easeOut}`,
  };

  return (
    <div
      style={promoStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div style={imageWrapperStyle}>
        <img src={src} alt={text} style={imageStyle} />
        <div style={overlayStyle}></div>
      </div>
      <h2
        style={titleStyle}
        data-cta={cta}
      >
        {text}
        <span style={titleAfterStyle}>{cta}</span>
      </h2>
    </div>
  );
};

const Gallery = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '15vmin', 
      margin: '0 auto',
      padding: '2vmin', 
      fontFamily: '"Sura", sans-serif',
      color: 'white',
      backgroundColor: 'black',

    }}>
      <Promo
        text="Nightlife"
        cta="Get out there →"
        color="hotpink"
        src="https://images.unsplash.com/photo-1554620121-59e7f3f6e3a4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
      <Promo
        text="Quiet Time"
        cta="Find yours →"
        color="#f29698"
        src="https://images.unsplash.com/photo-1523806762236-1d3a6b7eb3fd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
      <Promo
        text="Surf's Up!"
        cta="Grab a board →"
        color="#b8f4f5"
        src="https://images.unsplash.com/photo-1548008116-bcfec1f4c812?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
      <Promo
        text="Day Hikes"
        cta="Take a walk →"
        color="#b8f5bd"
        src="https://images.unsplash.com/photo-1569335048491-5fb94951e885?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      />
    </div>
  );
};

export default Gallery;
