import React, { useState } from "react";
import { data } from "./../data/data";

const Food = () => {
  console.log(data);
  const [food, setFood] = useState(data);
  return (
    <div className="max-w-[1140px] m-auto py-12 p-4 ">
      <h1 className="text-orange-500 font-bold text-center text-4xl ">
        Top Rated Menu Items
      </h1>
      {/*row flex */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/*Filter type */}
        <div>
          <p>Select type</p>
          <div className="flex justify-between flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              All
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Burger
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Sandwich
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Pizza
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Hamburger
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold sm:my-2 py-2 px-4 rounded-full">
              Steak
            </button>
          </div>
        </div>
        {/*Filter by price*/}
        <div>
          <p>Select Prize</p>
          <div className="flex justify-between flex-wrap ">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              $
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              $$
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              $$$
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/*Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((items) => (
          <div key={items.id}>
            <img src={items.image} alt={items.name}></img>
            <div>
              <p>{items.name}</p>
              <p>
                <span>{items.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
