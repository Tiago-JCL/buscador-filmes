import { Link } from "react-router-dom";

// Definindo o tipo para os filmes
interface MovieProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gray-900 text-white">
      {/* Imagem do filme */}
      <img src={movie.Poster} alt={movie.Title} className="w-full h-[350px] object-cover" />

      {/* Informações sempre visíveis */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-sm text-gray-400">{movie.Year}</p>
      </div>

      {/* Botão de detalhes */}
      <Link
        to={`/movie/${movie.imdbID}`}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Ver Detalhes
      </Link>
    </div>
  );
};

export default MovieCard;
