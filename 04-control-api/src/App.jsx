/* eslint-disable react/no-unescaped-entities */
import { useCatImage } from "../hooks/useCatImage";
import { useCatFact } from "../hooks/useCatFact";

function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { image } = useCatImage({ fact });

  const handleClick = () => {
    refreshRandomFact();
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
