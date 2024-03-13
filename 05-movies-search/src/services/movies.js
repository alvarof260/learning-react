import { API_KEY } from "../constants";

export async function searchMovies({search}) {
    if(search === "") return null;

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
        const data = await response.json();

        const movies = data.Search

        return movies?.map((movie) => {
            return {
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster,
            };
          }); 
    } catch (error) {
        throw new Error("Error fetching movies");
    }
}