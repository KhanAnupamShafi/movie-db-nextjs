import "server-only";

const getAllMovies = async () => {
  const movies = await import("../../movies.json").then(
    (module) => module.default.results
  );

  return movies;
};

const getMovieById = async (id) => {
  const data = await getAllMovies();
  return data.find((Movie) => Movie.id === parseInt(id));
};

export { getAllMovies, getMovieById };
