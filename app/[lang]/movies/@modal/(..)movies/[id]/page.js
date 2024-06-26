import { getDictionary } from "@/app/[lang]/dictionaries";
import { getMovieById } from "@/app/[lang]/dynamic-import";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import { notFound } from "next/navigation";
export default async function MoviePage({ params }) {
  const { id } = params;
  const movie = await getMovieById(id);
  const dictionary = await getDictionary(params.lang);
  if (!movie) {
    notFound();
  }

  return (
    <Modal>
      <section>
        <div>
          <Image
            className='w-full object-cover max-h-[300px] lg:max-h-[500px]'
            src={movie?.backdrop_path}
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className='grid grid-cols-12 py-12 gap-8'>
          <div className='col-span-2'>
            <Image
              src={movie?.poster_path}
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className='col-span-7'>
            <h2 className='font-bold text-slate-300 text-2xl'>
              {movie?.original_title}
            </h2>
            <p className='my-2 text-slate-400 italic'>{movie?.overview}</p>
            <ul className='text-slate-300 space-y-2 my-8'>
              <li>
                {dictionary.release}: {movie?.release_date}
              </li>
              <li>
                {dictionary.rating} : {movie?.vote_average}
              </li>
              <li>
                {dictionary.vote} : {movie?.vote_count}
              </li>
              <li>
                {dictionary.popularity} : {movie?.popularity}
              </li>
            </ul>
          </div>
          <div className='col-span-3 space-y-4'>
            <button className='py-2 w-full bg-primary font-medium text-slate-800 rounded-md whitespace-normal'>
              {dictionary.stream} <br />
            </button>
            <button className='py-2 w-full bg-primary font-medium text-slate-800 rounded-md whitespace-normal'>
              {dictionary.download} <br />
            </button>
          </div>
        </div>
      </section>
    </Modal>
  );
}
