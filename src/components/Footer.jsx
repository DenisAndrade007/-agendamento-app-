import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #ffffff;
  padding: 1rem 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 AgendaFácil. Todos os direitos reservados.</p>
    </FooterWrapper>
  );
};

export default Footer;