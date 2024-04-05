import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../[lang]/dictionaries";

const Aside = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return (
    <aside>
      <ul className='space-y-2'>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black'
            href='#'>
            <Image src='/icons/trending.svg' width='24' height='24' alt='' />
            <span>{dictionary.trending}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'>
            <Image src='/icons/newRelease.svg' width='24' height='24' alt='' />
            <span>{dictionary.new}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'>
            <Image src='/icons/commingSoon.svg' width='24' height='24' alt='' />
            <span>{dictionary.soon}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'>
            <Image src='/icons/favourite.svg' width='24' height='24' alt='' />
            <span>{dictionary.favourites}</span>
          </Link>
        </li>
        <li>
          <Link
            className='flex items-center space-x-2 px-5 py-3.5 rounded-lg'
            href='#'>
            <Image src='/icons/watchLater.svg' width='24' height='24' alt='' />
            <span>{dictionary.later}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
