import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-2xl">Home Page</h1>
        <div className="flex justify-center items-center flex-row gap-10 mt-4">
          <Link href={'/page-1'} className="text-xl">
            Page 1
          </Link>
          <Link href={'/page-2'} className="text-xl">
            Page 2
          </Link>
          <Link href={'/props'} className="text-xl">
            Props
          </Link>
          <Link href={'/fetch'} className="text-xl">
            Fetching Data
          </Link>
          <Link href={'/forms'} className="text-xl">
            Forms
          </Link>
        </div>
      </div>
    </main>
  );
}
