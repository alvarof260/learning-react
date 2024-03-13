import { useState, useRef, useMemo } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const latestSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      try {
        if (latestSearch.current === search) return;
        setLoading(true);
        setError(null);
        latestSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  /*  const getSortedMovies = () => {
    const moviesSorted = sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
    return moviesSorted;
  }; */

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return {
    movies: sortedMovies,
    getMovies,
    loading,
    error,
  };
}
