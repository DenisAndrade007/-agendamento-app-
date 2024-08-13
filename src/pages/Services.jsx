import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  padding: 2rem;
`;

const ServicesTitle = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  background-color: #f8f9fa;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesTitle>Nossos Serviços</ServicesTitle>
      <ServicesList>
        <ServiceItem>Academias</ServiceItem>
        <ServiceItem>Personal Trainers</ServiceItem>
        <ServiceItem>Consultas de Saúde</ServiceItem>
      </ServicesList>
    </ServicesWrapper>
  );
};

export default Services;