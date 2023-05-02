import axios from "axios";
import { API_KEY } from "./config";


const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY
            }
        });
        return response.data.results;
    }catch (error){
        console.error("Error al obtener peliculas: ", error);
        return [];
    }

};

export const getOneMovie = async () =>{
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie`,{
            params: {
                api_key: API_KEY
            }
        });
        const peliculas = response.data.results;
        const inidiceAleatorio = Math.floor(Math.random() * peliculas.length);
        const peliculaAleatoria = peliculas[inidiceAleatorio];
        return peliculaAleatoria
    }catch(error){
        console.log('Error al obtener pelicula o serie aletoria', error)

    }
};

export const getPopularSeries = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/tv/popular`,{
            params: {
                api_key: API_KEY
            }
        });
        console.log(response.data.results);
        return response.data.results;
    }catch (error){
        console.error("Error al obtener series: ", error);
        return [];
    }
};
