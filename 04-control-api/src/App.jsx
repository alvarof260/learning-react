import { useState, useEffect } from "react";

const FACTAPI_URL = "https://catfact.ninja/fact";
const IMAGEAPI_URL = "https://cataas.com";

function App() {
  const [fact, setFact] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch(FACTAPI_URL)
      .then((response) => response.json())
      .then((data) => {
        setFact(data.fact);
        const word = data.fact.split(" ")[0];
        fetch(`${IMAGEAPI_URL}/cat/says/${word}?size=50&color=red&json=true`)
          .then((response) => response.json())
          .then((data) => {
            const { _id } = data;
            const url = `${IMAGEAPI_URL}/cat/${_id}/says/${word}`;
            setImage(url);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <main className="pt-4 ">
        <header className="grid place-items-center">
          <h1 className="text-4xl font-bold text-fuchsia-600">Control API'S</h1>
        </header>
        <section className="flex flex-col justify-center items-center p-8 h-full gap-4">
          <p className="text-slate-400 text-lg">{fact}</p>
          <figure className=" max-w-96">
            <img className="w-full" src={image} alt={fact} />
          </figure>
        </section>
      </main>
    </>
  );
}

export default App;
