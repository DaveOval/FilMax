import React, { useEffect, useState } from "react";
import NavbarBootstrap from "../../components/Navbar";
import { getComingSoon, getPopularMovies, getPopularSeries } from '../../utils/api';
import MovieCard from "../../components/MovieCard";
import "./Browse.css";

interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    original_language: string;
    poster_path: string;
    name: string;
    first_air_date: string;
}

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [series, setSeries] = useState<Movie[]>([]);

  const [comingSoon, setCommingSoon] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const popularSeries = await getPopularSeries();
      setSeries(popularSeries);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const comingSoon = await getComingSoon();
      setCommingSoon(comingSoon);
    };
    fetchData();
  }, []);
  

  return (
    <>
      <NavbarBootstrap />

      <header className="header">
        <div className="header__title">
          <p className="header__title--secondary">Welcome my child</p>
          <h1 className="header__title--main">FilmMax</h1>
        </div>
      </header>

      <main className="main">
        <div className="popular-movies">
          <h1 className="popular-movies__title">Popular Movies</h1>
          <div className="movies">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                date={movie.release_date}
                votes={movie.vote_average}
                lang={movie.original_language}
                id={movie.id}
                imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                type="movie"
              />
            ))}
          </div>
        </div>
        <div className="popular-series">
          <h1 className="popular-series__title">Popular Series</h1>
          <div className="series">
            {series.map((serie) => (
              <MovieCard
                key={serie.id}
                title={serie.name}
                date={serie.first_air_date}
                votes={serie.vote_average}
                lang={serie.original_language}
                id={serie.id}
                imageUrl={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                type="tv"
              />
            ))}
          </div>
        </div>

        <div className="coming-soon">
          <h1 className="coming-soon__title">Coming Soon</h1>
          <div className="soon">
            {comingSoon.map((soon) => (
              <MovieCard
                key={soon.id}
                title={soon.title}
                date={soon.release_date}
                votes={soon.vote_average}
                lang={soon.original_language}
                id={soon.id}
                imageUrl={`https://image.tmdb.org/t/p/original${soon.poster_path}`}
                type={"movie"}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
