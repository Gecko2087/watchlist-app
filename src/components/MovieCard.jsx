// src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie, onAdd }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded p-4 m-4 flex flex-col items-center transition transform hover:scale-105">
      <img 
        src={movie.image} 
        alt={movie.title} 
        className="w-full h-96 object-contain rounded" 
      />
      <h3 className="mt-4 font-bold text-xl text-center">{movie.title}</h3>
      <button 
        onClick={() => onAdd(movie)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition block mx-auto"
      >
        Agregar a mi lista
      </button>
    </div>
  );
};

export default MovieCard;
