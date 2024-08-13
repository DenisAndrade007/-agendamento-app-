import React from 'react';
import styled from 'styled-components';
import Features from '../components/Features';

const HeroSection = styled.section`
  background-color: #007bff;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  background-color: white;
  color: #007bff;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>Agende seu bem-estar com facilidade</HeroTitle>
        <HeroSubtitle>Academias, Personal Trainers e Consultas de Saúde em um só lugar</HeroSubtitle>
        <CTAButton href="#agendar">Agende Agora</CTAButton>
      </HeroSection>
      <Features />
    </>
  );
};

export default Home;