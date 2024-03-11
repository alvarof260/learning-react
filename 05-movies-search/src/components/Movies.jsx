function ListOfMovies({ responseMovies }) {
  return (
    <ul className=" grid grid-cols-1 place-items-center w-full gap-10">
      {responseMovies.map((movie) => {
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
  );
}

function NotFoundMovies() {
  return (
    <>
      <h2>Movies not found</h2>
    </>
  );
}

export function Movies({ response }) {
  const responseMovie = response?.Search;
  const isMovies = responseMovie?.length > 0;
  return (
    <section className="w-full pt-6 px-4">
      {isMovies ? (
        <ListOfMovies responseMovies={responseMovie} />
      ) : (
        <NotFoundMovies />
      )}
    </section>
  );
}
