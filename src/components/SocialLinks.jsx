import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SocialIcon = styled.a`
  color: #495057;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <SocialIcon href="https://wa.me/seunumerodowhatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FaWhatsapp />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook />
      </SocialIcon>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;