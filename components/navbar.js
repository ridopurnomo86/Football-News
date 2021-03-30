import React from 'react';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-12 flex justify-center font-bold items-stretch text-xl">
      <div className="mr-8 py-2 cursor-pointer" onClick={() => router.push('/')}>Home</div>
      <div className="mr-8 py-2 cursor-pointer" onClick={() => router.push('/feed/1')}>Feed</div>
      <div className="mr-8 py-2 cursor-pointer" onClick={() => router.push('/profile')}>Profile</div>
      <div className="mr-8 py-2 cursor-pointer" onClick={() => window.open('https://www.instagram.com/ridhopp14/', "_blank")}>Instagram</div>
    </div>
  );

};
