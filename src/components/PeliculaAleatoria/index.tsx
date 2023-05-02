import { getOneMovie } from "../../utils/api";
import "./PeliculaAleatoria.css";
import React, { useEffect, useState } from "react";

interface Pelicula {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  original_language: string;
  poster_path: string;
}

const PeliculaAleatoria = () => {
  const [pelicula, setPelicula] = useState<Pelicula[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const peliculaAleatoria = await getOneMovie();
      setPelicula(peliculaAleatoria);
      console.log(peliculaAleatoria);
    };
    fetchData();
  }, []);

  return (
    <div className="pelicula__aleatoria">
      {/* <div className="pelicula__aleatoria-properties">
        <h1 className="pelicula__aleatoria-title">{pelicula.title}</h1>
        <h2 className="pelicula__aleatoria-subtitle">
          {pelicula.release_date}
        </h2>
        <h3 className="pelicula__aleatoria-subtitle">
          {pelicula.vote_average}
        </h3>
        <h4 className="pelicula__aleatoria-subtitle">
          {pelicula.original_language}
        </h4>
      </div>

      <img
        className="pelicula__aleatoria-img"
        src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
        alt=""
      /> */}
    </div>
  );
};

export default PeliculaAleatoria;
