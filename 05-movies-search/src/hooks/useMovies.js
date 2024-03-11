import responseJSON from "../mocks/response.json";
import noResponse from "../mocks/error-response.json";

export function useMovies() {
    const movies = responseJSON.Search;

    const mappedMovies = movies.map((movie)=>{
        return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }
    })

    return { movies: mappedMovies }
}