import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === "";
      return;
    }

    if (search === "") {
      setError("cannot be empty, please enter a movie name");
      return;
    }

    if (search.length < 3) {
      setError(
        "cannot be less than 3 characters, please enter a valid movie name"
      );
      return;
    }

    setError(null);
  }, [search]);

  return {
    search,
    setSearch,
    error,
  }
}
