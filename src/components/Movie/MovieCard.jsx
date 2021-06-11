import React from 'react';
import './MovieCard.component.css';

function MovieCard({ title, poster, director, year, rated }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '26.5rem',
        marginTop: '1rem',
      }}
    >
      <div
        style={{
          width: '19rem',
          height: '27.8rem',
          backgroundImage: `url(${poster}) `,
          backgroundRepeat: 'no-repeat',
          backgrounSize: 'center',
          backgroundPosition: 'center center',
        }}
      >
        <div
          className="card-container"
          style={{
            height: '26.5rem',
            background: 'linear-gradient(0deg, #00000099 60%, #ffffff11 100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '0.5rem',
          }}
        >
          <div>
            <h3>{title}</h3>
            <h4>{year}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
