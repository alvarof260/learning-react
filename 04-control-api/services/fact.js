import { FACTAPI_URL } from "../src/constants";

export const getRandomFact = () => {
    return fetch(FACTAPI_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        return data.fact;
      })
      .catch((error) => console.error(error));
  };