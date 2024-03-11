import response from "./mocks/response.json";
import noResponse from "./mocks/error-response.json";

function App() {
  const responseMovie = response?.Search;
  const isMovies = responseMovie?.length > 0;
  return (
    <>
      <header className="flex flex-col justify-center items-center pt-4 gap-3">
        <h1 className=" text-4xl font-bold text-viking-600">Movie Search</h1>
        <form className="flex justify-center items-center gap-6">
          <input
            className=" bg-slate-50 border-2 border-solid border-viking-600 rounded-md px-2 py-1 placeholder:text-viking-600 text-viking-800 active:border-viking-800 focus:border-viking-800 focus:outline-none transition-all duration-300 ease-in-out"
            type="text"
            placeholder="Avengers, Flash, Matrix..."
          />
          <button className="bg-viking-600 px-4 py-1 rounded-md text-viking-50 hover:bg-viking-800 transition-colors duration-300 ease-in">
            Search
          </button>
        </form>
      </header>
      <main>
        <section className="w-full pt-6 px-4">
          {isMovies ? (
            <ul className=" grid grid-cols-1 place-items-center w-full gap-10">
              {responseMovie.map((movie) => {
                return (
                  <li key={movie.imdbID} className="flex flex-col items-center">
                    <h2 className=" text-xl text-viking-600 font-medium">
                      {movie.Title}
                    </h2>
                    <p className="text-viking-400 text-base">{movie.Year}</p>
                    <img
                      className="rounded-md w-48 h-72 object-cover shadow-md"
                      src={movie.Poster}
                      alt={`poster of ${movie.Title}`}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              <h2>Movies not found</h2>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
