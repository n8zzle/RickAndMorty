import Head from "next/head";
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
    <div className="w-1/2 flex flex-col  max-w-7xl mx-auto space-y-10 p-10">
      <Head>
        <title>{name}</title>
      </Head>
      {/*Character & Picture*/}
      <div className="flex flex-col  justify-center items-center space-y-5 ">
        <img src={image} className="rounded-full h-80 w-80" />
        <h1 className="text-4xl font-extrabold">{name}</h1>
      </div>
      {/*Information*/}
      <div className="flex flex-col space-y-5">
        <h3 className="flex text-xl font-bold text-gray-600  items-center justify-center">
          Information
        </h3>
        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Gender</h4>
          <p className="text-md text-gray-600">{gender}</p>
          <hr />
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Status</h4>
          <p className="text-md text-gray-600">{status}</p>
          <hr />
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Specie</h4>
          <p className="text-md text-gray-600">{species}</p>
          <hr />
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Origin</h4>
          <p className="text-md text-gray-600">{origin.name}</p>
          <hr />
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Location</h4>
          <p className="text-md text-gray-600">{location.name}</p>
          <hr />
        </div>

        <Link href="../">
          <button className="p-5 rounded-lg shadow-md bg-[#65cde1]">
            Back to main menu
          </button>
        </Link>
      </div>
    </div>
  );
}
