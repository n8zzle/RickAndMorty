import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const defaultEndpoint = "https://rickandmortyapi.com/api/character";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Character({ data }) {
  const { name, image, gender, location, origin, species, status } = data;
  return (
    <div className="h-screen  snap-y snap-mandatory overflow-x-hidden z-0">
      <Head>
        <title>{name}</title>
      </Head>

      <div className="h-screen w-screen flex flex-col items-center justify-center max-w-7xl mx-auto ">
        <h1 className="text-6xl font-extrabold mb-10 tracking-[15px] text-[#65cde1]">
          {name}
        </h1>
        <div className="flex flex-row max-w-5xl mx-auto bg-slate-300 rounded-lg shadow-lg mb-10">
          <div className="w-[600px] h-[350px] flex">
            <img src={image} className="w-full h-full rounded-lg" />
          </div>
          <div className=" flex flex-col w-full justify-center items-center space-y-5">
            <h1 className="text-4xl font-extrabold">Details:</h1>
            <h3 className="text-lg ">Status: {status}</h3>
            <h3 className="text-lg ">Gender: {gender}</h3>
            <h3 className="text-lg ">Spacies: {species}</h3>
          </div>
        </div>
        <Link href="../">
          <div className="bg-[#65cde1] px-40 py-5 rounded-lg shadow-lg cursor-pointer">
            <p className="font-bold">Back to main menu</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
