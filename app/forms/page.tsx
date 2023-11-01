// 'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import FormsComponent from '../components/forms';

export const metadata: Metadata = {
  title: 'Forms Validation',
};



export default function Forms() {
  // const [formInput, setFormInput] = useState<formData>();

  return (
    <main>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-2xl">Forms Validation</h1>
        <div className="mt-4">
          <Link href={'/'} className="text-xl">
            Back to Home Page
          </Link>
        </div>
        <FormsComponent />
      </div>
    </main>
  );
}
