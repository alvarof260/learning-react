import {  useState } from "react";
import { searchMovies } from "../services/movies";

/* import responseJSON from "../mocks/response.json";
import noResponse from "../mocks/error-response.json"; */


export function useMovies({ search }) {
  // const movies = responseJSON.Search;
  const [movies, setMovies] = useState([]);



  const getMovies = async () => {
    console.log("search", search);
    const newMovies = await searchMovies({search});
    setMovies(newMovies);
  }

  return {
    movies, getMovies
  }
}
