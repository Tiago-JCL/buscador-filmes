import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams<{ id?: string }>(); // id pode ser undefined
  const [movie, setMovie] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovie = async () => {
      if (!id) return; // Evita chamar a API se id for undefined

      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch {
        setError("Erro ao carregar detalhes do filme.");
      }
    };

    loadMovie();
  }, [id]);

  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="movie-details">
      {movie ? (
        <>
          <h1>{movie.Title} ({movie.Year})</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          <p><strong>Gênero:</strong> {movie.Genre}</p>
          <p><strong>Diretor:</strong> {movie.Director}</p>
          <p><strong>Avaliação:</strong> {movie.imdbRating}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default MovieDetails;
