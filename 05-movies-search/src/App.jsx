import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";

import responseJSON from "./mocks/response.json";
import noResponse from "./mocks/error-response.json";

import { Movies } from "./components/Movies";

function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ search });
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    if (newSearch.startsWith(" ")) {
      return;
    }
    setSearch(newSearch);
  };

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
      <main>
        <Movies response={responseJSON} />
      </main>
    </>
  );
}

export default App;
