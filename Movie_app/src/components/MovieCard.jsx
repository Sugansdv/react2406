import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, toggleFavorite, isFavorite }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400'} className="card-img-top" alt={movie.Title} />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/movie/${movie.imdbID}`} className="btn btn-outline-primary btn-sm">Details</Link>
            <button className="btn btn-outline-warning btn-sm" onClick={() => toggleFavorite(movie)}>
              {isFavorite ? '★' : '☆'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;