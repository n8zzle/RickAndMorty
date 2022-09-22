import Image from "next/image";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden space-y-8">
      <BackgroundCircles />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          src={"/Hero.svg"}
          width={482}
          height={140}
          className="animate-pulse"
        />
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="uppercase tracking-[15px]"
      >
        Swipe down
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <ArrowDownwardIcon className="w-8 h-8 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
