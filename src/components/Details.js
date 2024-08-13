import React from "react";
import '../style/App.css'

const Details = ({ pais, onClose }) => {

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={pais.flags.png} />
                <h2>{pais.name.common}</h2>
                <p>Nome Oficial: {pais.name.official}</p>
                <p>Capital: {pais.capital}</p>
                <p>Região: {pais.region}</p>
                <p>Sub-região: {pais.subregion}</p>
                <p>População: {pais.population}</p>
                <a href={pais.maps.googleMaps}>Google Maps</a>

            </div>
        </div>
    )
}

export default Details;