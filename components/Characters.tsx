import React from "react";
import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";

function Characters({ results, handleToLoadMore }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      id="characters"
      className="max-w-7xl h-screen  mx-auto flex flex-col  justify-center text-center"
    >
      <h3 className="relative top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-[#65cde1] font-bold text-xl md:text-2xl">
        Characters
      </h3>
      <div className="w-full my-auto mt-20 md:mt-28 h-[800px] overflow-y-auto p-5">
        {results.map((result) => {
          const { id, name, image, species, status, gender } = result;
          return (
            <CharacterCard
              key={id}
              name={name}
              image={image}
              species={species}
              status={status}
              gender={gender}
            />
          );
        })}
        <button
          onClick={handleToLoadMore}
          className=" bg-gray-600 text-white hover:bg-[#65cde1] hover:text-black mb-5 p-5 rounded-lg shadow-lg w-full text-2xl font-extrabold"
        >
          Load More
        </button>
      </div>
    </motion.div>
  );
}

export default Characters;
