import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1140px] mx-auto flex p-4 justify-between items-center ">
      <div className="flex justify-between items-center">
        <div>
          <AiOutlineMenu
            size={30}
            className="cursor-pointer m-3"
            onClick={() => setNav(!nav)}
          ></AiOutlineMenu>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl p-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1  text-[14px]">
          <p className="bg-black rounded-full text-white p-2">Delivery</p>
          <p>Pickups</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] justify-between">
        <AiOutlineSearch></AiOutlineSearch>
        <input
          className="bg-transparent p-2 w-full  rounded-full"
          type="text"
          placeholder="Search "
        ></input>
      </div>
      <div>
        <button className="bg-black text-white hidden md:flex items-center p-3 rounded-full ">
          <BsFillCartFill className="mr-3"></BsFillCartFill>Cart
        </button>
        {/*Mobile Menu */}
        {/*overlay */}
      </div>
      {nav && (
        <div className="bg-black/80 fixed top-0 left-0 w-full z-10 h-screen   "></div>
      )}

      {/*side drawer menu*/}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
        }
      >
        <AiOutlineClose
          size={30}
          className="right-4 top-4 absolute"
          onClick={() => setNav(!nav)}
        ></AiOutlineClose>
        <h2 className="text-2xl p-4">
          Best<span className="font-bold">Eat</span>
        </h2>
        <nav>
          <ul className="p-4 flex flex-col ">
            <li className="flex py-4 text-xl items-center">
              <TbTruckDelivery size={25} className="mr-4"></TbTruckDelivery>
              Orders
            </li>

            <li className="flex py-4 text-xl items-center">
              <MdFavorite size={25} className="mr-4"></MdFavorite>
              Favourites
            </li>

            <li className="flex py-4 text-xl items-center">
              <FaWallet size={25} className="mr-4"></FaWallet>
              Wallet
            </li>

            <li className="flex py-4 text-xl items-center">
              <MdHelp size={25} className="mr-4"></MdHelp>
              Help
            </li>

            <li className="flex py-4 text-xl items-center">
              <BsFillSaveFill size={25} className="mr-4"></BsFillSaveFill>
              Best Ones
            </li>
            <li className="flex py-4 text-xl items-center">
              <FaUserFriends size={25} className="mr-4"></FaUserFriends>
              Orders
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
