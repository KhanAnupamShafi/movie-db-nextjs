import { getAllMovies, getMovieById } from "@/app/[lang]/dynamic-import";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  const photoId = params?.id;

  const data = await getMovieById(photoId);

  return NextResponse.json(data);
}

export async function PATCH(request, { params }) {
  const movie = await request.json();
  const movies = await getAllMovies();

  const movieId = params.id;
  const movieIndex = movies.findIndex((m) => m.id === parseInt(movieId));
  movies[movieIndex].title = movie.title;

  return NextResponse.json(movies[movieIndex]);
}

export async function DELETE(_request, { params }) {
  const movieId = params.id;
  const movies = await getAllMovies();

  const movieIndex = movies.findIndex((m) => m.id === parseInt(movieId));
  const commentToDelete = movies[movieIndex];
  movies.splice(movieIndex, 1);
  const title = commentToDelete.title;

  return NextResponse.json(
    {
      message: `Deleted Movie: ${title}`,
    },
    {
      status: 202,
    }
  );
}
