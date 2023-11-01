import { Metadata } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '47bff3f9a4msh6f898d3f29cb513p17865fjsn2e8764d5dfda',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};

async function getData() {
  const res = await fetch(url, options);
  const result = await res.json();
  return result;
}

export const metadata: Metadata = {
  title: 'Fetching Data',
};

export default async function Fetch() {
  // useEffect(() => {
  //   getData();
  // }, []);

  const data = await getData();

  return (
    <main>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-2xl">Fetching Data</h1>
        <div className="mt-4">
          <Link href={'/'} className="text-xl">
            Back to Home Page
          </Link>
        </div>
        <div>
          <h2>Upcoming Movies:</h2>

          <div>
            {data?.results.map((res: any) => {
              const { day, month, year } = res.releaseDate;
              return (
                <p>
                  {res.titleText.text}
                  <span className="ml-5">
                    (Release on: {day}-{month}-{year})
                  </span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
