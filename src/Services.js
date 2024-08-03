import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Styled components
const ServicesSection = styled.section`
  padding: 40px;
  background: #000;
  color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
    flex-direction: column;
  }
`;

const ServiceTop = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column; /* Change to column layout */
  align-items: center;
  flex: 1 1 30%;
  min-width: 250px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }
`;

const Icon = styled.svg`
  width: 100px;
  height: 100px;
  margin-bottom: 20px; /* Adjust margin for space between icon and text */
  fill: #007BFF;
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Content = styled.div`
  text-align: center; /* Center text */
  animation: ${slideUp} 1s ease-out;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.8rem;
  color: #94bbe9;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: white;
  animation: ${fadeIn} 1s 0.5s ease-out; /* Delay animation for a staggered effect */

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Services = () => (
  <ServicesSection>
    <ServiceTop>
      <Service>
        <Content>
          <Title>What we do</Title>
          <Description>We Help Our Clients Spread The Roots</Description>
        </Content>
      </Service>
    </ServiceTop>

    <ServicesContainer>
      <Service>
        <Icon viewBox="0 0 32 32">
          <path d="M16,30.5C8.005,30.5,1.5,23.995,1.5,16S8.005,1.5,16,1.5S30.5,8.005,30.5,16S23.995,30.5,16,30.5z M16,3.5 
          C9.107,3.5,3.5,9.107,3.5,16S9.107,28.5,16,28.5S28.5,22.893,28.5,16S22.893,3.5,16,3.5z M13.705,22.353 
          c-0.339,0-0.674-0.09-0.98-0.267c-0.62-0.357-0.99-0.997-0.99-1.713v-8.746c0-0.716,0.37-1.356,0.99-1.714 
          c0.62-0.358,1.359-0.357,1.978,0.001l7.06,4.382c0.609,0.359,0.973,0.995,0.973,1.704c0,0.715-0.37,1.355-0.989,1.713l-7.016,4.356 
          C14.402,22.259,14.051,22.353,13.705,22.353z M13.674,11.63l0.06,8.743L20.714,16L13.674,11.63z M20.715,15.997 
          c0,0,0,0.001,0.001,0.002l0.002-0.001C20.717,15.997,20.716,15.997,20.715,15.997z"></path>
        </Icon>
        <Content>
          <Title>Strategy Services</Title>
          <Description>We uncover your product’s potential with data-driven strategies, market trend analysis, and user behavior insights, ensuring your products excel in a competitive landscape.</Description>
        </Content>
      </Service>

      <Service>
        <Icon viewBox="0 0 35 35">
          <path d="M20.593,30.5h-9.186c-2.757,0-5-2.243-5-5v-19c0-2.757,2.243-5,5-5h9.186c2.757,0,5,2.243,5,5v19 
          C25.593,28.257,23.35,30.5,20.593,30.5z M11.407,3.5c-1.654,0-3,1.346-3,3v19c0,1.654,1.346,3,3,3h9.186c1.654,0,3-1.346,3-3v-19 
          c0-1.654-1.346-3-3-3H11.407z M15.872,25.805c-0.084,0-0.17-0.011-0.256-0.033c-0.534-0.142-0.852-0.688-0.711-1.223 
          c0.142-0.534,0.694-0.864,1.227-0.728c0.534,0.142,0.856,0.672,0.715,1.206l-0.009,0.033C16.719,25.509,16.314,25.805,15.872,25.805z 
          M17.824,8.001h-3.907c-0.552,0-1-0.448-1-1s0.448-1,1-1h3.907c0.553,0,1,0.448,1,1S18.377,8.001,17.824,8.001z"></path>
        </Icon>
        <Content>
          <Title>Advertising + Branded Content</Title>
          <Description>Engage your audience uniquely with our podcast production and compelling visual storytelling services, giving life to your brand and leaving a lasting impression.</Description>
        </Content>
      </Service>

      <Service>
        <Icon viewBox="0 0 32 32">
          <path d="M23.5,30.5h-6.566c-0.552,0-1-0.447-1-1s0.448-1,1-1H23.5c2.757,0,5-2.243,5-5v-15c0-2.757-2.243-5-5-5h-15 
          c-2.757,0-5,2.243-5,5v6.566c0,0.552-0.448,1-1,1s-1-0.448-1-1V8.5c0-3.86,3.14-7,7-7h15c3.859,0,7,3.14,7,7v15 
          C30.5,27.36,27.359,30.5,23.5,30.5z M7,30.5c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5s5.5,2.468,5.5,5.5S10.033,30.5,7,30.5z 
          M9.433,18.825c-0.313,0-0.616-0.145-0.817-0.395c-0.217-0.293-0.313-0.682-0.26-1.072l1.033-6.566c0.065-0.396,0.374-0.715,0.764-0.715 
          s0.699,0.319,0.764,0.715l1.033,6.566c0.053,0.39-0.043,0.779-0.26,1.072C10.433,18.777,10.13,18.825,9.433,18.825z M10.176,12.846 
          l-0.855-5.339h-1.344l-0.855,5.339H10.176z M16.724,23.067c-0.477,0-0.877-0.323-0.975-0.765l-1.036-5.247c-0.059-0.294-0.305-0.51-0.593-0.51 
          c-0.288,0-0.534,0.217-0.593,0.51l-1.036,5.247c-0.097,0.442-0.497,0.765-0.975,0.765c-0.003,0-0.006,0-0.009,0 
          c-0.596,0-1.084-0.484-1.084-1.084c0-0.003,0-0.007,0-0.01-0.004L11.5,18.358l-0.943-4.979c-0.146-0.782-0.878-1.357-1.662-1.357 
          c-0.896,0-1.629,0.751-1.62,1.645l0.01,0.063l0.971,6.109c0.074,0.472,0.549,0.86,1.051,0.86c0.001,0,0.003,0,0.004,0 
          c0.571,0,1.051-0.435,1.087-1.012l0.243-1.444l1.388,7.207c0.094,0.482,0.547,0.832,1.034,0.832c0.002,0,0.003,0,0.005,0 
          C16.64,23.066,16.724,23.067,16.724,23.067z M13.719,14.701c0.307,0.048,0.635-0.158,0.766-0.471l1.035-3.499c0.115-0.387,0.478-0.646,0.863-0.646 
          c0.389,0,0.749,0.265,0.865,0.646l1.035,3.499c0.107,0.345,0.453,0.557,0.786,0.487C17.77,15.528,17.94,15.221,17.834,14.782 
          l-1.218-4.015c-0.1-0.335-0.406-0.569-0.761-0.569c-0.35,0-0.662,0.228-0.754,0.572l-1.197,4.15c-0.099,0.355-0.443,0.569-0.782,0.471 
          C14.029,14.724,13.71,14.407,13.719,14.701z"></path>
        </Icon>
        <Content>
          <Title>Market Research</Title>
          <Description>Our team employs advanced research techniques and in-depth market analysis to understand your audience’s needs and position your product for success.</Description>
        </Content>
      </Service>
    </ServicesContainer>
  </ServicesSection>
);

export default Services;
