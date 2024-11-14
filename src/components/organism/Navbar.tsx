import { Saira } from 'next/font/google';
import React from 'react';

const saira = Saira({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Navbar() {
  return (
    <nav className={`fixed z-50 top-0 px-6 py-8 w-full flex justify-between items-center ${saira.className}`}>
      <div className=''>
        <h4 className='text-white font-semibold text-2xl'>FurniShop</h4>
      </div>
      <div className=''>
        <div className='flex flex-col items-end space-y-1'>
          <div className='bg-white h-1 w-7'></div>
          <div className='bg-white h-1 w-5'></div>
          <div className='bg-white h-1 w-7'></div>
        </div>
      </div>
    </nav>
  );
}
