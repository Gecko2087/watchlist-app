// src/components/WatchlistModal.jsx
import React from 'react';

const WatchlistModal = ({ watchlist, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity">
      <div className="bg-white text-gray-900 p-6 rounded shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl mb-4 font-bold">Mi Watchlist</h2>
        {watchlist.length === 0 ? (
          <p className="text-lg">No tienes películas en la lista.</p>
        ) : (
          <ul>
            {watchlist.map(movie => (
              <li key={movie.id} className="flex justify-between items-center my-2">
                <span className="text-lg">{movie.title}</span>
                <button 
                  onClick={() => onRemove(movie.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
        <button 
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default WatchlistModal;
