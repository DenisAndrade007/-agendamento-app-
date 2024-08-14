import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid #e9ecef;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const FooterText = styled.p`
  margin: 0.5rem 0 0;
  color: #6c757d;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks />
      <FooterText>&copy; 2024 AgendaFácil. Todos os direitos reservados.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;