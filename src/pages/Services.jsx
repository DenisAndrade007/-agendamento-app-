import React, { useState, lazy, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Lazy load icons
const FaDumbbell = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaDumbbell })));
const FaUserFriends = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaUserFriends })));
const FaHeartbeat = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHeartbeat })));

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ServicesWrapper = styled.div`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
`;

const LearnMoreButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  float: right;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 'academias',
      icon: <FaDumbbell />,
      title: "Academias",
      description: "Encontre e agende horários em academias próximas a você.",
      category: 'fitness'
    },
    {
      id: 'personal-trainers',
      icon: <FaUserFriends />,
      title: "Personal Trainers",
      description: "Conecte-se com os melhores personal trainers da sua região.",
      category: 'fitness'
    },
    {
      id: 'consultas-saude',
      icon: <FaHeartbeat />,
      title: "Consultas de Saúde",
      description: "Agende consultas com nutricionistas e outros profissionais de saúde.",
      category: 'health'
    },
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <ServicesWrapper>
      <Title>Nossos Serviços</Title>
      <CategoryFilter>
        <CategoryButton 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')}
        >
          Todos
        </CategoryButton>
        <CategoryButton 
          active={activeCategory === 'fitness'} 
          onClick={() => setActiveCategory('fitness')}
        >
          Fitness
        </CategoryButton>
        <CategoryButton 
          active={activeCategory === 'health'} 
          onClick={() => setActiveCategory('health')}
        >
          Saúde
        </CategoryButton>
      </CategoryFilter>
      <ServiceList>
        {filteredServices.map((service) => (
          <ServiceCard 
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Suspense fallback={<div>Carregando...</div>}>
              <ServiceIcon>{service.icon}</ServiceIcon>
            </Suspense>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <LearnMoreButton onClick={() => handleLearnMore(service)}>
              Saiba Mais
            </LearnMoreButton>
          </ServiceCard>
        ))}
      </ServiceList>
      {selectedService && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            {/* Adicione mais detalhes do serviço aqui */}
          </ModalContent>
        </Modal>
      )}
    </ServicesWrapper>
  );
};

export default Services;

/* import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaSearch } from 'react-icons/fa';

// Lazy load icons
const FaDumbbell = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaDumbbell })));
const FaUserFriends = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaUserFriends })));
const FaHeartbeat = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHeartbeat })));

const ServicesWrapper = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  flex-grow: 1;
`;

const ActionButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  width: 300px;
  max-width: 100%;
`;

const SearchIcon = styled(FaSearch)`
  margin-left: -30px;
  align-self: center;
  color: ${props => props.theme.colors.primary};
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Star = styled(FaStar)`
  color: ${props => props.filled ? 'gold' : 'gray'};
  cursor: pointer;
`;

const services = [
  {
    id: 1,
    title: 'Treinamento Personalizado',
    description: 'Planos de exercícios adaptados às suas necessidades e objetivos.',
    icon: FaDumbbell,
    rating: 4.8
  },
  {
    id: 2,
    title: 'Aulas em Grupo',
    description: 'Participe de aulas energizantes e motivadoras com outros membros.',
    icon: FaUserFriends,
    rating: 4.6
  },
  {
    id: 3,
    title: 'Avaliação de Saúde',
    description: 'Avaliações completas para monitorar seu progresso e saúde geral.',
    icon: FaHeartbeat,
    rating: 4.9
  }
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ServicesWrapper>
      <Title>Nossos Serviços</Title>
      
      <SearchBar>
        <SearchInput 
          type="text" 
          placeholder="Buscar serviços..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar serviços"
        />
        <SearchIcon />
      </SearchBar>

      <ServiceList>
        <AnimatePresence>
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceIcon>
                <Suspense fallback={<div>Carregando...</div>}>
                  <service.icon />
                </Suspense>
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <Rating>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} filled={index < Math.floor(service.rating)} />
                ))}
              </Rating>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Agora
              </ActionButton>
            </ServiceCard>
          ))}
        </AnimatePresence>
      </ServiceList>
    </ServicesWrapper>
  );
};

export default Services; */