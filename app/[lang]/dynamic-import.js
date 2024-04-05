import "server-only";

const getAllMovies = async () => {
  const movies = await import("../../movies.json").then(
    (module) => module.default.results
  );

  return movies;
};
const getAllGenres = async (...genreIds) => {
  const genreData = await import("../../genre.json").then(
    (module) => module.default
  );
  const genres = genreIds.map((id) => genreData[id]).filter(Boolean);

  return genres;
};

const getMovieById = async (id) => {
  const data = await getAllMovies();
  return data.find((Movie) => Movie.id === parseInt(id));
};

export { getAllGenres, getAllMovies, getMovieById };
