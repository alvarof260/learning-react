import { useState, useRef } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const latestSearch = useRef(search);

  const getMovies = async () => {
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

  return {
    movies,
    getMovies,
    loading,
    error,
  };
}
