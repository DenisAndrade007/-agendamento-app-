import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    transition: all 0.3s ease-in-out;
    padding: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  transition: all 0.3s ease;

  &:hover, &.active {
    color: ${props => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.2rem;
  margin-left: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <Nav>
      <Logo to="/">AgendaFácil</Logo>
      <MenuIcon onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={location.pathname === "/" ? "active" : ""}>Home</NavLink>
        <NavLink to="/servicos" onClick={() => setIsOpen(false)} className={location.pathname === "/servicos" ? "active" : ""}>Serviços</NavLink>
        <NavLink to="/agendar" onClick={() => setIsOpen(false)} className={location.pathname === "/agendar" ? "active" : ""}>Agendar</NavLink>
        <SocialLinks>
          <SocialIcon href="https://wa.me/seunumerodowhatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </SocialIcon>
        </SocialLinks>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;