function ListOfMovies({ responseMovies }) {
  return (
    <ul className=" grid grid-cols-1 place-items-center w-full gap-10">
      {responseMovies.map((movie) => {
        return (
          <li key={movie.id} className="flex flex-col items-center">
            <h2 className=" text-xl text-viking-600 font-medium">
              {movie.title}
            </h2>
            <p className="text-viking-400 text-base">{movie.year}</p>
            <img
              className="rounded-md w-48 h-72 object-cover shadow-md"
              src={movie.poster}
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
  const isMovies = response?.length > 0;
  return (
    <section className="w-full pt-6 px-4">
      {isMovies ? (
        <ListOfMovies responseMovies={response} />
      ) : (
        <NotFoundMovies />
      )}
    </section>
  );
}
