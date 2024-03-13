import { clsx } from "clsx";

import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(search);
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    if (newSearch.startsWith(" ")) {
      return;
    }
    setSearch(newSearch);
  };

  console.log("rendering App");
  return (
    <>
      <header className="flex flex-col justify-center items-center py-4 gap-3 border border-solid border-b-slate-700 border-opacity-10">
        <h1 className=" text-4xl font-bold text-viking-600">Movie Search</h1>
        <form
          className="flex justify-center items-center gap-6"
          onSubmit={handleSubmit}
        >
          <input
            className={clsx(
              "bg-slate-50 border-2 border-solid border-viking-600 rounded-md px-2 py-1 placeholder:text-viking-600 text-viking-800 active:border-viking-800 focus:border-viking-800 focus:outline-none transition-all duration-300 ease-in-out",
              { "border-red-500 focus:border-red-500 text-red-500": error }
            )}
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
            placeholder="Avengers, Flash, Matrix..."
          />
          <button
            disabled={error !== null || search === ""}
            className="bg-viking-600 px-4 py-1 rounded-md text-viking-50 hover:bg-viking-800 transition-colors duration-300 ease-in"
          >
            Search
          </button>
        </form>
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </header>
      <main className="flex justify-center items-center w-full h-full  overflow-auto">
        {loading ? <p>Loading...</p> : <Movies response={movies} />}
      </main>
    </>
  );
}

export default App;
