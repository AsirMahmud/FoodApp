import React from "react";

const HeadLineCard = () => {
  return (
    <div
      className="max-w-[1140px] mx-auto p-4 py-12
     grid  md:grid-cols-3 gap-6"
    >
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl flex flex-col justify-center px-3  ">
          <h1 className="text-white font-bold">Have Some Crisp</h1>
          <p className="text-white">Through 16/18</p>
          <button className="hover:bg-white hover:text-black  bg-gray-700 text-white  text-xs items-center p-1 rounded-full max-w-[100px] ">
            Order Now
          </button>
        </div>
        <img
          className="object-cover max-h-[160px] md:max-h-[200px] w-full rounded-2xl"
          src="https://images.pexels.com/photos/14994658/pexels-photo-14994658/free-photo-of-a-plate-of-cheeseburger-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl flex flex-col justify-center px-3 ">
          <h1 className="text-white font-bold">Have Some Crisp</h1>
          <p className="text-white">Through 16/18</p>
          <button className="hover:bg-white hover:text-black  bg-gray-700 text-white  text-xs items-center p-1 rounded-full max-w-[100px] ">
            Order Now
          </button>
        </div>
        <img
          className="object-cover max-h-[160px] md:max-h-[200px] w-full rounded-xl"
          src="https://images.pexels.com/photos/15532964/pexels-photo-15532964/free-photo-of-photo-of-a-chicken-breast-meal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl flex flex-col justify-center px-3 ">
          <h1 className="text-white font-bold">Have Some Crisp</h1>
          <p className="text-white">Through 16/18</p>
          <button className="hover:bg-white hover:text-black  bg-gray-700 text-white  text-xs items-center p-1 rounded-full max-w-[100px] ">
            Order Now
          </button>
        </div>
        <img
          className="object-cover max-h-[160px] md:max-h-[200px] w-full rounded-xl"
          src="https://images.pexels.com/photos/8112967/pexels-photo-8112967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
    </div>
  );
};

export default HeadLineCard;
