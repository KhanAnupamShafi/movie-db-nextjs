import Image from "next/image";
import Link from "next/link";
import { getAllGenres } from "../[lang]/dynamic-import";
import { renderStars } from "./Star";
const MovieCard = async ({ data, dictionary }) => {
  const { title, backdrop_path, id, vote_average, genre_ids } = data || {};
  const genres = await getAllGenres(...genre_ids);
  return (
    <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
      <Image
        src={backdrop_path}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: "100%", height: "auto" }}
      />
      <figcaption className='pt-4'>
        <h3 className='text-xl mb-1'>{title}</h3>
        <p className='text-[#575A6E] text-sm mb-2'>{genres?.join("/")}</p>
        <div className='flex items-center space-x-1 mb-5'>
          {renderStars(vote_average)}
        </div>
        <Link
          className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
          href={`/movies/${id}`}>
          <Image src='/tag.svg' alt='' width='14' height='14' />
          <span>{dictionary.detail}</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
