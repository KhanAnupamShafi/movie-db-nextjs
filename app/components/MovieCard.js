const { default: Image } = require("next/image");

const MovieCard = ({ data }) => {
  const { title, vote_average, backdrop_path } = data || {};
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
        <p className='text-[#575A6E] text-sm mb-2'>Action/Adventure/Sci-fi</p>
        <div className='flex items-center space-x-1 mb-5'>
          <Image src='/star.svg' width='14' height='14' alt='' />
          <Image src='/star.svg' width='14' height='14' alt='' />
          <Image src='/star.svg' width='14' height='14' alt='' />
          <Image src='/star.svg' width='14' height='14' alt='' />
          <Image src='/star.svg' width='14' height='14' alt='' />
        </div>
        <a
          className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
          href='./modal.html'>
          <Image src='/tag.svg' alt='' width='14' height='14' />
          <span>Details</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
