import React, { useEffect, useState } from "react";
import NavbarBootstrap from "../../components/Navbar";
import { getPopularMovies } from "../../utils/api";
import MovieCard from "../../components/MovieCard";
import "./Browse.css";

interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    original_language: string;
    poster_path: string;
  }

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      console.log(popularMovies);
    };
    fetchData();
  }, []);

  

  return (
    <>
      <NavbarBootstrap />
      <img src="">

      </img>

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
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
