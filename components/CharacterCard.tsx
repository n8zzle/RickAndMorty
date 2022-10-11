import Image from "next/image";
import React from "react";

const CharacterCard = ({ name, image, species, status, gender }) => {
  return (
    <article className="flex items-center flex-row space-x-5 bg-gray-600 hover:bg-[#65cde1] text-white hover:text-black mb-5 p-5 md:p-0 rounded-lg shadow-lg">
      <img
        src={image}
        className="md:h-64 md:w-64 w-16 h-16   object-cover rounded-full md:rounded-md md:rounded-r-none "
      />
      <div className="flex flex-col">
        <h1 className="text-lg md:text-2xl font-bold ">{name}</h1>
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
  );
};

export default CharacterCard;
