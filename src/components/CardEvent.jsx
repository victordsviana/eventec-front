import React from 'react'

const CardEvent = ({ eventTitle, eventDescription, eventCategory, eventAddress, eventDate }) => {
  return (
    <div className="card text-start" style={{ width: "100%" }}>
      <div className="card-body cardEvent">
        <h4 className="card-title">{eventTitle}</h4>
        <p className="card-text">{eventDescription}</p>
        <div className="d-flex">
          <p>Categoria: </p>
          <span>{eventCategory}</span>
        </div>

        <span>Localização: </span>
        <span>{eventAddress}</span>

        <input type="datetime-local" value={eventDate} disabled />
        <br />
        <a href="#" className="btn btn-primary">
          Inscrever-se
        </a>
      </div>
    </div>
  );
};

export default CardEvent;