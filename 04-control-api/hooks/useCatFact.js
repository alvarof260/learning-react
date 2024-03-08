import { useState, useEffect } from "react";
import { getRandomFact } from "../services/fact";

export const useCatFact = () => {
  const [fact, setFact] = useState(null);

  const refreshRandomFact = () => {
    getRandomFact()
      .then((fact) => setFact(fact))
      .catch((error) => console.error(error));
  };

  useEffect(refreshRandomFact, []);

  return { fact, refreshRandomFact };
};
