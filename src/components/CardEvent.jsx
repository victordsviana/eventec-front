import React from 'react'

const CardEvent = ({ eventTitle, eventDescription, eventCategory, eventAddress, eventDate, distance, onSubscribe}) => {

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
        <span>Distância: {typeof distance === 'number' ? distance.toFixed(2) : 'N/A'} km</span>
        <input type="datetime-local" value={eventDate} disabled />
        <br />
        <button className="btn btn-primary" onClick={(e) => {
            e.preventDefault(); // Evitar a ação padrão do link
            onSubscribe(); // Chamar a função passada como prop
          }}>
            Inscrever-se
          </button>
          
      </div>
    </div>
  );
};

export default CardEvent;