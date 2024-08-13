import React from "react";
import '../style/App.css'

const Card = ({ pais, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(pais)} style={{ cursor: 'pointer' }}>
      <img src={pais.flags.png} />
      <h3>{pais.name.common}</h3>
    </div>
  );
};

export default Card;
