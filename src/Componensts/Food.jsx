import React from "react";
import { data } from "./../data/data";

const Food = () => {
  console.log(data);
  return (
    <div className="w-[1140px] m-auto py-12 p-4 ">
      <h1 className="text-orange-500 font-bold text-center text-4xl ">
        Top Rated Menu Items
      </h1>
      {/*row flex */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          {/*Filter type */}
          <div>
            <p>Select type</p>
            <div>
              <button>All</button>
              <button>Burger</button>
              <button>Sandwitch</button>
              <button>Pizza</button>
              <button>Hamburger</button>
              <button>Steak</button>
            </div>
          </div>
          {/*Filter by price*/}
          <div>
            <p>Select Prize</p>
            <div>
              <button>$</button>
              <button>$$</button>
              <button>$$$</button>
              <button>$$$$</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
