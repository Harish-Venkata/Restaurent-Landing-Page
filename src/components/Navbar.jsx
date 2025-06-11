import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav className="flex items-center space-y-4 ">
      <div>
        <img src={Logo} alt="" className="md:max-w-lg h-auto mr-80 mt-0" />
      </div>
      <div className=" flex mt-5">
        <a
          href="#"
          className="mr-12 no-underline text-black text-[1.1rem] font-semibold"
        >
          Home
        </a>
        <a
          href="#"
          className="mr-12 no-underline text-black text-[1.1rem] font-semibold"
        >
          About
        </a>
        <a
          href="#"
          className="mr-12 no-underline text-black text-[1.1rem] font-semibold"
        >
          Testimonials
        </a>
        <a
          href="#"
          className="mr-12 no-underline text-black text-[1.1rem] font-semibold"
        >
          Contact
        </a>
        <a
          href="#"
          className="mr-12 no-underline text-black text-[1.1rem] font-semibold text-2xl mt-2"
        >
          {" "}
          <BsCart2 />{" "}
        </a>
        <button className="bg-white outline-0 border-none rounded-3xl p-4 pt-2 pr-4 cursor-pointer duration-75 mt-0 text-black font-bold">
          Bookings Now
        </button>
      </div>
      <div className="hidden">
        <HiOutlineBars3
          onClick={() => setOpenMenu(true)}
          className="rounded-2xl cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
