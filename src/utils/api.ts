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



}
