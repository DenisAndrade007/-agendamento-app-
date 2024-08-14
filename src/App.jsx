import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Footer from './components/Footer'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/agendar" element={<Booking />} />
        </Routes>
        <Footer /> {/* Adicione o Footer aqui */}
      </Router>
    </ThemeProvider>
  );
}

export default App;