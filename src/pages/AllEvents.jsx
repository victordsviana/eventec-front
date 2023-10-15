import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNavbar from '../components/HomeNavbar';
import CardEvent from '../components/CardEvent';

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allEvents');
        setAllEvents(response.data);
      } catch (error) {
        console.error('Error fetching all events', error);
      }
    }

    fetchAllEvents();
  }, []);

  return (
    <>
      <HomeNavbar />
      <div className="container">
        <div className="d-flex justify-content-">
          <h2>Esses são todos os eventos disponiveis</h2>
        </div>
      </div>
      <br /><br /><br />
      <div className='container'>
        <div className="row">
          <div className="col-3">
            <h4>Filtrar</h4>
            <input type="text" />
            <button type='submit'>buscar cep</button>
          </div>
          <div className="col-9 d-grid gap-4">
            {allEvents.map(event => (
              <CardEvent 
              key={event.id}
              eventTitle={event.title}
              eventDescription={event.description}
              eventCategory={event.category}
              eventAddress={event.address}
              eventDate={event.dateEvent}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllEvents;