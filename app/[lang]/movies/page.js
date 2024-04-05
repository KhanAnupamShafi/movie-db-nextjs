import MovieCard from "@/app/components/MovieCard";
import { getDictionary } from "../dictionaries";
import { getAllMovies } from "../dynamic-import";

export default async function MoviesPage({ params: { lang } }) {
  const items = await getAllMovies();
  const dictionary = await getDictionary(lang);
  return (
    <>
      <div className='content'>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
          {items.map((item) => (
            <MovieCard key={item.id} data={item} dictionary={dictionary} />
          ))}
        </div>
      </div>
    </>
  );
}
