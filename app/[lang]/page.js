import MovieCard from "../components/MovieCard";
import { getAllMovies } from "./dynamic-import";

export default async function Home() {
  const items = await getAllMovies();
  return (
    <>
      <div className='content'>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
          {items.map((item) => (
            <MovieCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
