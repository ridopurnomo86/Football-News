import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Navbar } from '../components/navbar';

const Profile = () => {
  return (
    <>

    <Head>
      <title>Profile</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Navbar />

      <div className="page-container grid justify-items-center m-10">
        <h1 className="font-bold text-5xl text-blue-400 border-b-2 border-gray-300 mb-5">Profile Pages</h1>
          <Image src="/photos.jpg" className="inline-block mt-5 rounded-3xl" alt="Picture of the Author" width={250} height={280} />
          <p className="mt-5 font-semibold text-2xl text-black">Ridho Purnomo</p>
          <p className="font-medium text-xl text-gray-800">Junior Software Developer</p>
      </div>

    </>
  );
}

export default Profile;
