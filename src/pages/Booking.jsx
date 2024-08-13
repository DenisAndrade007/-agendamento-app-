import React, { useState } from 'react';
import styled from 'styled-components';

const BookingWrapper = styled.div`
  padding: 2rem;
`;

const BookingTitle = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const BookingForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Aqui você adicionaria a lógica para processar o agendamento
  };

  return (
    <BookingWrapper>
      <BookingTitle>Agende seu Horário</BookingTitle>
      <BookingForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="service">Serviço</Label>
          <Select id="service" name="service" value={formData.service} onChange={handleChange}>
            <option value="">Selecione um serviço</option>
            <option value="academia">Academia</option>
            <option value="personal">Personal Trainer</option>
            <option value="consulta">Consulta de Saúde</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Data</Label>
          <Input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time">Horário</Label>
          <Input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
        </FormGroup>
        <SubmitButton type="submit">Agendar</SubmitButton>
      </BookingForm>
    </BookingWrapper>
  );
};

export default Booking;