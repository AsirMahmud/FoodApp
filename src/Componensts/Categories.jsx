import React from "react";
import { categories } from "../data/data";

const Categories = () => {
  return (
    <div className="p-4 max-w-[1124px] m-auto pt-8 mt-4">
      <h1 className="text-center text-4xl">
        Top Rated Menu <span className="text-orange-500">Items</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 m-4 gap-6 ">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 rounded-lg  flex justify-between p-2 items-center text-white"
          >
            <h2>{item.name}</h2>
            <img className="w-20" src={item.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
