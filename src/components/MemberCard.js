import React, { useEffect } from 'react';

const MemberCard = ({ name, role, imageUrl }) => {
  // Use as props 'name', 'role' e 'imageUrl' conforme necessário no seu componente

  useEffect(() => {
    // Seu código aqui
  }, [name, role, imageUrl]);

  return (

      <div className="cardContent">
        <div className="cardImage">
          <img src={imageUrl} alt={name} />
        </div>
        <p className="cardName">{name}</p>
        <p className="cardRole">{role}</p>
      </div>
  );
}

export default MemberCard;
