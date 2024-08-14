import React, { useState } from 'react';
import styled from 'styled-components';

const BookingWrapper = styled.div`
  padding: 4rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1rem;
`;

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.service) newErrors.service = 'Por favor, selecione um serviço';
    if (!formData.date) newErrors.date = 'Por favor, selecione uma data';
    if (!formData.time) newErrors.time = 'Por favor, selecione um horário';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Agendamento:', formData);
      // Aqui você pode adicionar a lógica para processar o agendamento
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <BookingWrapper>
        <Title>Agendamento Confirmado</Title>
        <SuccessMessage>Seu agendamento foi realizado com sucesso!</SuccessMessage>
      </BookingWrapper>
    );
  }

  return (
    <BookingWrapper>
      <Title>Agendar Serviço</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="service">Serviço</Label>
        <Select 
          id="service" 
          name="service" 
          value={formData.service} 
          onChange={handleChange}
        >
          <option value="">Selecione um serviço</option>
          <option value="academia">Academia</option>
          <option value="personal">Personal Trainer</option>
          <option value="consulta">Consulta de Saúde</option>
        </Select>
        {errors.service && <ErrorMessage>{errors.service}</ErrorMessage>}

        <Label htmlFor="date">Data</Label>
        <Input 
          type="date" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
        />
        {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}

        <Label htmlFor="time">Hora</Label>
        <Input 
          type="time" 
          id="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
        />
        {errors.time && <ErrorMessage>{errors.time}</ErrorMessage>}

        <Button type="submit">Confirmar Agendamento</Button>
      </Form>
    </BookingWrapper>
  );
};

export default Booking;