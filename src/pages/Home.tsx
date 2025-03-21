import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../services/api";
import "./Home.css";

// Definição do tipo para os filmes
interface MovieType {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setError(null);
    setLoading(true);

    try {
      const data = await fetchMovies(query);
      if (data.Response === "False") {
        setMovies([]);
        setError("Nenhum filme encontrado.");
      } else {
        setMovies(data.Search);
      }
    } catch {
      setError("Erro ao buscar filmes. Verifique sua conexão.");
      setMovies([]);
    }

    setLoading(false);
  };

  return (
    <div className="home">
      <h1 className="title-box">Explore o Mundo do Cinema</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="loading">Carregando...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          !loading && !error && <p className="no-movies">Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
