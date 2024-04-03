import MovieCard from "../components/MovieCard";

export default async function Home() {
  const items = (await import(`../../data.js`)).default;
  return (
    <>
      <div className='content'>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
          {items.results.map((item) => (
            <MovieCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
