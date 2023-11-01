import React from 'react';
import Link from 'next/link';

import ListItem from '../components/list-item';
import Item from '../components/item';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Props Component',
};

const Props = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <h1 className="text-2xl">Props</h1>
      <Link href={'/'} className="mt-5 text-xl">
        Back to Home Page
      </Link>

      <div className="mt-5">
        <ListItem />
      </div>
    </div>
  );
};

export default Props;
