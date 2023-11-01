import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page 2',
  description: 'Second Pages',
};

export default function Page2() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-2xl">Page 2</h1>
        <div className="mt-5">
          <Link href={'/'} className="text-xl">
            Back to Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}
