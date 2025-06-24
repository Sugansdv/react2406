import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'thewdb';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400'} className="img-fluid" alt={movie.Title} />
      </div>
      <div className="col-md-8">
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <a href={`https://www.youtube.com/results?search_query=${movie.Title}+trailer`} target="_blank" rel="noreferrer">
          🎞️ Watch Trailer on YouTube
        </a>
      </div>
    </div>
  );
}

export default MovieDetail;