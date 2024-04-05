"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
const NotFoundPage = () => {
  const pathname = useParams();
  return (
    <div className='min-h-svh flex flex-col items-center justify-start  space-y-4 mt-[200px]'>
      <div className='space-y-5 text-center'>
        <h1 className='text-6xl font-extrabold tracking-tighter/none'>404</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          This movie with{" "}
          <span className='font-bold italic'>
            &ldquo;{pathname?.id}&rdquo;{" "}
          </span>{" "}
          id was not found!{" "}
        </p>
      </div>
      <Link
        className='flex h-11 items-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
        href={"/"}>
        <Image
          width={50}
          height={50}
          sizes='100vw'
          style={{ width: "10%", height: "auto" }}
          src={"/icons/trending.svg"}
          alt=''
          className='mr-2'
        />
        Go back to the initial page
      </Link>
    </div>
  );
};

export default NotFoundPage;
