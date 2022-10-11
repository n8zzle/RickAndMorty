import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Locations = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      id="locations"
      className="max-w-7xl h-screen mx-auto flex flex-col justify-center text-center"
    >
      <h3 className="relative top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-[#65cde1] font-bold text-xl md:text-2xl">
        Locations
      </h3>
      <div className="w-full my-auto mt-20 md:mt-28 h-[800px] overflow-y-auto p-5">
        test
      </div>
    </motion.div>
  );
};

export default Locations;
