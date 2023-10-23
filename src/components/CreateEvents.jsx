import React, { useState } from 'react';
import axios from 'axios';

const CreateEvents = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [dateEvent, setDateEvent] = useState('');
  const [addressLat, setAddressLat] = useState(null);
  const [addressLng, setAddressLng] = useState(null);

  const addressCoordinates = {
    "Fatec Diadema - Luigi Papaiz - Endereço: Av. Luiz Merenda, 443 - Campanário, Diadema - SP, 09931-390": {
      lat: "-23.673137600203077",
      lng: "-46.618749338635425"
    },
    
    "Fatec São Bernardo do Campo – Adib Moises Dib - Endereço: Av. Pereira Barreto, 400 - Vila Baeta Neves - Centro, São Bernardo do Campo - SP, 09751-000": {
      lat: "-23.694777324719173",
      lng: "-46.54586438522398"
    },
  };

  const handleAddressChange = (e) => {
    const selectedAddress = e.target.value;
    setAddress(selectedAddress);

    const coords = addressCoordinates[selectedAddress];
    if (coords) {
      setAddressLat(coords.lat);
      setAddressLng(coords.lng);
    }
  };

  const handleFormEventSubmit = async (event) => {
    event.preventDefault();

    const userid = localStorage.getItem('userid')
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');

    try {
      const response = await axios.post('http://localhost:8080/event', {
        title,
        description,
        category,
        address,
        addressLat,
        addressLng,
        dateEvent,
        user: {
          email: userEmail,
          password: userPassword
        }
      });
      console.log('Registration Successful', response.data);
      //location.reload()
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  }

  return (
    <>
      <form action="" className="d-grid gap-3">
        <h1>Crie um novo evento</h1>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" className="form-control" id="title" placeholder="Digite o título" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea className="form-control" id="description" rows="3" placeholder="Digite a descrição" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="tecnologia">Tecnologia</option>
            <option value="financas">Finanças</option>
            <option value="comunicacao">Comunicação</option>
          </select>
        </div>

        <div className="row">
          <div className="col-6 form-group">
            <label htmlFor="data">Data e hora do evento</label>
            <input type="datetime-local" className="form-control" id="data" value={dateEvent}  onChange={(e) => setDateEvent(e.target.value)}/>
          </div>
          <div className="col-6 openEventInput">
            <div className="form-check form-switch open">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Aberto ao público?</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="endereço">Endereço</label>
          <select type="text" className="form-control" id="address" value={address} onChange={handleAddressChange}>
            <option value="" disabled>Selecione uma Fatec</option>
            <option value="Fatec Diadema - Luigi Papaiz - Endereço: Av. Luiz Merenda, 443 - Campanário, Diadema - SP, 09931-390">
              Fatec Diadema - Luigi Papaiz - Endereço: Av. Luiz Merenda, 443 - Campanário, Diadema - SP, 09931-390
            </option>
            <option value="Fatec São Bernardo do Campo – Adib Moises Dib - Endereço: Av. Pereira Barreto, 400 - Vila Baeta Neves - Centro, São Bernardo do Campo - SP, 09751-000">
              Fatec São Bernardo do Campo – Adib Moises Dib - Endereço: Av. Pereira Barreto, 400 - Vila Baeta Neves - Centro, São Bernardo do Campo - SP, 09751-000
            </option>
          </select>
        </div>
        <br />
        <div className="row justify-content-center">
          <button type="submit" className="col-4 btn btn-primary" onClick={handleFormEventSubmit}>Enviar</button>
        </div>
      </form>
    </>
  );
}

export default CreateEvents;
