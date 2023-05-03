import NavbarBootstrap from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getMovieById } from "../../utils/api";
import MoviePage from "../../components/MoviePage/index";


interface Movie {
  key: number;
  title: string;
  date: string;
  votes: number;
  lang: string;
  id: number;
  imageUrl: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  original_language: string;
  adult: boolean;
  budget: number;
  overview: string;
  popularity: number;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  original_title: string;
  original_name: string;
  name: string;
}

const Movie: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null); // Cambiado el tipo a Movie | null

  const movieID = window.location.pathname.split("/")[2];
  const type = window.location.pathname.split("/")[1];

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getMovieById(movieID, type);
      setMovie(movie);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavbarBootstrap />

      {movie && (
        <MoviePage
          key={movie.id}
          original_title={movie.original_title}
          date={movie.release_date}
          votes={movie.vote_average}
          lang={movie.original_language}
          id={movie.id}
          imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          adult={movie.adult}
          budget={movie.budget}
          overview={movie.overview}
          popularity={movie.popularity}
          revenue={movie.revenue}
          runtime={movie.runtime}
          status={movie.status}
          tagline={movie.tagline}
          name={movie.name}
        />
      )}
    </>
  );
};

export default Movie;
