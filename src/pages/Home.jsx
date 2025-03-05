// src/pages/Home.jsx
import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import WatchlistModal from '../components/WatchlistModal';
import useWatchlist from '../hooks/useWatchlist';

// Importar las imágenes locales
import inception from '../assets/images/inception.jpg';
import interstellar from '../assets/images/interstellar.jpg';
import darkknight from '../assets/images/darkknight.jpg';
import fightclub from '../assets/images/fightclub.jpg';
import pulpfiction from '../assets/images/pulpfiction.jpg';
import forrestgump from '../assets/images/forrestgump.jpg';
import thematrix from '../assets/images/thematrix.jpg';
import goodfellas from '../assets/images/goodfellas.jpg';
import shawshank from '../assets/images/shawshank.jpg';
import godfather from '../assets/images/godfather.jpg';
import lotr from '../assets/images/lotr.jpg';
import starwars from '../assets/images/starwars.jpg';
import jurassicpark from '../assets/images/jurassicpark.jpg';
import titanic from '../assets/images/titanic.jpg';
import avatar from '../assets/images/avatar.jpg';
import avengers from '../assets/images/avengers.jpg';
import ironman from '../assets/images/ironman.jpg';
import deadpoolwolverine from '../assets/images/deadpoolwolverine.jpg';
import daredevil from '../assets/images/daredevil.jpg';
import spiderman from '../assets/images/spiderman.jpg';

// Iconos para el botón de "My Watchlist"
const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const FilledListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 6h16v2H4zM4 12h16v2H4zM4 18h16v2H4z" />
  </svg>
);

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const isEmpty = watchlist.length === 0;

  // Array de 20 películas con imágenes locales
  const movies = [
    { id: 1, title: "Inception", image: inception },
    { id: 2, title: "Interstellar", image: interstellar },
    { id: 3, title: "The Dark Knight", image: darkknight },
    { id: 4, title: "Fight Club", image: fightclub },
    { id: 5, title: "Pulp Fiction", image: pulpfiction },
    { id: 6, title: "Forrest Gump", image: forrestgump },
    { id: 7, title: "The Matrix", image: thematrix },
    { id: 8, title: "Goodfellas", image: goodfellas },
    { id: 9, title: "Shawshank Redemption", image: shawshank },
    { id: 10, title: "The Godfather", image: godfather },
    { id: 11, title: "The Lord of the Rings", image: lotr },
    { id: 12, title: "Star Wars", image: starwars },
    { id: 13, title: "Jurassic Park", image: jurassicpark },
    { id: 14, title: "Titanic", image: titanic },
    { id: 15, title: "Avatar", image: avatar },
    { id: 16, title: "The Avengers", image: avengers },
    { id: 17, title: "Iron-Man", image: ironman },
    { id: 18, title: "Deadpool & Wolverine", image: deadpoolwolverine },
    { id: 19, title: "Daredevil", image: daredevil },
    { id: 20, title: "Spider-Man", image: spiderman },
  ];

  const handleAddToWatchlist = (movie) => {
    addToWatchlist(movie);
    // Activar animación en el botón al agregar una película
    setAnimateButton(true);
    setTimeout(() => setAnimateButton(false), 1000);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold">Watchlist</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className={`px-4 py-2 rounded flex items-center transition transform duration-300 ${
            isEmpty ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
          } ${animateButton ? 'animate-bounce scale-110' : ''}`}
        >
          {isEmpty ? (animateButton ? <FilledListIcon /> : <ListIcon />) : <FilledListIcon />}
          <span className="ml-2">{isEmpty ? "Ver mi Watchlist" : "Mi Watchlist"}</span>
        </button>
      </header>
      <MovieList movies={movies} onAdd={handleAddToWatchlist} />
      
      {isModalOpen && (
        <WatchlistModal 
          watchlist={watchlist} 
          onClose={() => setIsModalOpen(false)} 
          onRemove={removeFromWatchlist} 
        />
      )}
    </div>
  );
};

export default Home;
