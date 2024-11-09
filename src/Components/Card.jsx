import React from 'react'

const Card = ({ submittedData }) => {
    return (
      <div className="card">
        <h2>Recibimos tu canción:</h2>
        {submittedData && (
          <div>
            <p>Tu artista es: {submittedData.firstField}</p>
            <p>Tu canción es: {submittedData.secondField}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Card;
