import React from 'react';
import './MovieCard.component.css';

function MovieCard({ title, poster }) {
  return (
    <div
      style={{
        backgroundImage: `url(${poster}) `,
        backgroundRepeat: 'no-repeat',
        backgrounSize: 'cover',
        backgroundPosition: 'center',
        width: '18.5rem',
      }}
    >
      <div
        className="card-container"
        style={{
          height: '27rem',
          background: 'linear-gradient(0deg, #00000088 60%, #ffffff11 100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '0.5rem',
        }}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
