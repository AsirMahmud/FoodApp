import { data } from "./../data/data";
import { useState } from "react";

const Food = () => {
  const [food, setFood] = useState(data);
  const newList = [...new Set(data.map((item) => item.category))];
  const newList2 = [...new Set(data.map((item) => item.price))];
  const filterType = (category) => {
    const filteredFood = data.filter((item) => item.category === category);
    setFood(filteredFood);
  };
  const filterPrice = (price) => {
    const filteredFood = data.filter((item) => item.price === price);
    setFood(filteredFood);
  };

  return (
    <div className="max-w-[1124px] m-auto">
      <h1 className="text-center text-4xl">
        Top Rated Menu <span className="text-orange-500">Items</span>
      </h1>
      {/* buttons */}
      <div className="p-4 flex flex-col lg:flex-row justify-between">
        {/* type */}
        <div>
          <h1>Filter Items</h1>
          <div>
            <button
              onClick={() => setFood(data)}
              className="p-2 text-white m-2 bg-orange-500 hover:bg-orange-900 rounded-full"
            >
              All
            </button>
            {newList.map((item) => (
              <button
                onClick={() => filterType(item)}
                className="p-2 text-white m-2 bg-orange-500 hover:bg-orange-900 rounded-full"
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* price */}
        <div>
          <h1>Filter Price</h1>
          {newList2.map((item) => (
            <button
              onClick={() => filterPrice(item)}
              className="p-2 text-white m-2 bg-orange-500 hover:bg-orange-900 rounded-full"
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* Show foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {food.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg hover:scale-105 duration-300 rounded-2xl"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-2xl"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between p-4 bg-gray-700 text-white rounded-b-xl">
              <p>{item.name}</p>
              <p>
                <span className="bg-orange-500 p-2 rounded-full m-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
