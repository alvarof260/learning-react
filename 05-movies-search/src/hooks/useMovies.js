import { useEffect, useState } from "react";

/* import responseJSON from "../mocks/response.json";
import noResponse from "../mocks/error-response.json"; */

import { API_KEY } from "../constants";

export function useMovies({ search }) {
  // const movies = responseJSON.Search;
  const [movies, setMovies] = useState([]);


 const mappedMovies = movies?.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
  }); 

  const getMovies = () => {
    if(search) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          setMovies([]);
          return;
        }
        setMovies(data.Search);
      });
    } else {
        setMovies([]);
    }
  }

  return {
    movies: mappedMovies, getMovies
  }
}
