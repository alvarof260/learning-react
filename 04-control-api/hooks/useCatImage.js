import { useEffect, useState } from "react";
import { IMAGEAPI_URL } from "../src/constants";

export const useCatImage = ({fact}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!fact) return;
    const word = fact.split(" ")[0];
    fetch(`${IMAGEAPI_URL}/cat/says/${word}?size=50&color=red&json=true`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const { _id } = data;
        const url = `${IMAGEAPI_URL}/cat/${_id}/says/${word}`;
        setImage(url);
      })
      .catch((error) => console.error(error));
  }, [fact]);

  return { image }
};
