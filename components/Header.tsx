import { motion } from "framer-motion";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="sticky max-w-7xl  mx-auto top-0 p-5 flex items-start justify-between   z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=""
      >
        <Link href="#ontop">
          <Image src={"/logo.png"} height={49} width={46} />
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=""
      >
        <Link href="#characters">
          <button className="navButton ">Characters</button>
        </Link>
        <button className="navButton ">Locations</button>
        <button className="navButton ">Episodes</button>
        <IconButton
          className="inline-flex md:hidden"
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          id="navbar-button"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="navbar-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <button>Characters</button>
          </MenuItem>
          <MenuItem>
            <button>Locations</button>
          </MenuItem>
          <MenuItem>
            <button>Episodes</button>
          </MenuItem>
        </Menu>
      </motion.div>
    </header>
  );
};

export default Header;
