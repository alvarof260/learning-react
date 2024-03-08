import { useState, useEffect } from "react";

const FACTAPI_URL = "https://catfact.ninja/fact";
const IMAGEAPI_URL = "https://cataas.com";

function App() {
  const [fact, setFact] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch(FACTAPI_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        response.json();
      })
      .then((data) => {
        setFact(data.fact);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!fact) return;
    const word = fact.split(" ")[0];
    fetch(`${IMAGEAPI_URL}/cat/says/${word}?size=50&color=red&json=true`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        response.json();
      })
      .then((data) => {
        const { _id } = data;
        const url = `${IMAGEAPI_URL}/cat/${_id}/says/${word}`;
        setImage(url);
      })
      .catch((error) => console.error(error));
  }, [fact]);

  return (
    <>
      <main className="pt-4 ">
        <header className="grid place-items-center">
          <h1 className="text-4xl font-bold text-fuchsia-600">Control API'S</h1>
        </header>
        <section className="flex flex-col justify-center items-center p-8 h-full gap-4">
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
