import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex h-14 items-center max-w-7xl mx-auto p-5 justify-between">
      <div className="">
        <Image src={"/logo.png"} height={49} width={46} />
      </div>
      <div className="">
        <button className="navButton">Characters</button>
        <button className="navButton">Locations</button>
        <button className="navButton">Episodes</button>
      </div>
    </header>
  );
};

export default Header;
