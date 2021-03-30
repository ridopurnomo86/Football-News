import React from 'react';
import Head from 'next/head';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <>
    <Head>
      <title>Homepage</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />

      <div className="flex flex-col flex-wrap items-center mt-10">
        <h1 className="font-bold text-5xl text-blue-400 border-b-2 border-gray-300">Football News App</h1>
        <p className="text-xl mt-5">See more the news & articles about football</p>
      </div>

    </>
  );
}
