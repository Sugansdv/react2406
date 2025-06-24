import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const API_KEY = 'thewdb';

function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(m => m.imdbID === movie.imdbID);
      return exists ? prev.filter(m => m.imdbID !== movie.imdbID) : [...prev, movie];
    });
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={searchMovies} className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>

      <div className="row">
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some(f => f.imdbID === movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
