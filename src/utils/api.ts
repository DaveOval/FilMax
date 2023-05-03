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
 
export const getPopularSeries = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/tv/popular`,{
            params: {
                api_key: API_KEY
            }
        });
        return response.data.results;
    }catch (error){
        console.error("Error al obtener series: ", error);
        return [];
    };
};

export const getComingSoon = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/movie/upcoming`,{
            params: {
                api_key: API_KEY
            }
        });
        return response.data.results;
    }catch (error){
        console.error("Error al obtener series: ", error);
        return [];
    };
};

export const getMovieById = async (id: string, type: string) =>{
    try{
        const response = await axios.get(`${BASE_URL}/${type}/${id}`,{
            params: {
                api_key: API_KEY,
                append_to_response: "credits, videos, images, similar, recommendations, keywords"

            }
        });
        console.log(response.data);
        return response.data;
    }catch (error){
        console.error("Error al obtener series: ", error);
        return [];
    };
}
