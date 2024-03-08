/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { getRandomFact } from "../services/fact";
import { IMAGEAPI_URL } from "./constants";

function App() {
  const [fact, setFact] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getRandomFact()
      .then((fact) => setFact(fact))
      .catch((error) => console.error(error));
  }, []);

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

  const handleClick = () => {
    getRandomFact()
      .then((fact) => setFact(fact))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <main className="pt-4 ">
        <header className="grid place-items-center">
          <h1 className="text-4xl font-bold text-fuchsia-600">Control API'S</h1>
        </header>
        <section className="flex flex-col justify-center items-center p-8 h-full gap-4">
          <button
            onClick={handleClick}
            className="bg-fuchsia-600 px-4 py-2 rounded-md font-bold text-slate-200 focus:outline-2 focus:outline focus:outline-slate-200"
          >
            Get new fact
          </button>
          {fact && <p className="text-slate-400 text-lg">{fact}</p>}
          <figure className=" max-w-96">
            {image && <img className="w-full" src={image} alt={fact} />}
          </figure>
        </section>
      </main>
    </>
  );
}

export default App;
