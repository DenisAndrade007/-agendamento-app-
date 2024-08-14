import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

// const NavBar = styled.nav`...`;
// const NavLinks = styled.div`...`;
// const NavLink = styled(Link)`...`;
// const SocialLinks = styled.div`...`;
// const SocialIcon = styled.a`...`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 60px 0;
`;

const HeroSection = styled(Section)`
  background-color: ${props => props.theme.colors.background};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Button = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const ServicesSection = styled(Section)`
  background-color: white;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <>
      {/* <NavBar>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/servicos">SERVIÇOS</NavLink>
          <NavLink to="/agendar">AGENDAR</NavLink>
        </NavLinks>
        <SocialLinks>
          <SocialIcon href="https://wa.me/seunumerodowhatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIcon>
        </SocialLinks>
      </NavBar> */}

      <HeroSection>
        <Container>
          <Title>Agende seu bem-estar com facilidade</Title>
          <Subtitle>Academias, Personal Trainers e Consultas de Saúde em um só lugar</Subtitle>
          <Button to="/agendar">Agende Agora</Button>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <Title>Nossos Serviços</Title>
          <ServiceGrid>
            <ServiceCard>
              <ServiceTitle>Academias</ServiceTitle>
              <p>Encontre e agende horários em academias próximas a você.</p>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Personal Trainers</ServiceTitle>
              <p>Conecte-se com os melhores personal trainers da sua região.</p>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Consultas de Saúde</ServiceTitle>
              <p>Agende consultas com nutricionistas e outros profissionais de saúde.</p>
            </ServiceCard>
          </ServiceGrid>
        </Container>
      </ServicesSection>
    </>
  );
};

export default Home;