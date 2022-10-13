import Image from "next/image";
import Link from "next/link";
import React from "react";

const CharacterCard = ({ id, name, image, species, status, gender }) => {
  return (
    <Link href="/character/[id]" as={`/character/${id}`}>
      <article className="flex  items-center flex-col md:flex-row bg-gray-600 hover:bg-[#65cde1] text-white hover:text-black mb-5  rounded-lg shadow-lg cursor-pointer">
        <img
          src={image}
          className="md:h-64 md:w-64 w-full h-full   object-cover rounded-t-lg md:rounded-md md:rounded-r-none "
        />

        <div className="flex flex-col mx-auto p-5 md:p-0">
          <h1 className="text-lg md:text-2xl font-bold">{name}</h1>
          <p className="text-sm md:text-md">
            Species: <b>{species}</b>
          </p>
          <p className="text-sm md:text-md">
            Status: <b>{status}</b>
          </p>
          <p className="text-sm md:text-md">
            Gender: <b>{gender}</b>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CharacterCard;
