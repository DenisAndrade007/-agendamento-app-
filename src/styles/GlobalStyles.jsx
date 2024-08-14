import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }

  /* Adicione mais estilos globais conforme necessário */
`;

export default GlobalStyles;