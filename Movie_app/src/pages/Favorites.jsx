import React from 'react';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const [favorites, setFavorites] = React.useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(m => m.imdbID === movie.imdbID);
      const updated = exists ? prev.filter(m => m.imdbID !== movie.imdbID) : [...prev, movie];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="row">
      {favorites.length === 0 ? (
        <p className="text-muted">No favorites yet.</p>
      ) : (
        favorites.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))
      )}
    </div>
  );
}

export default Favorites;