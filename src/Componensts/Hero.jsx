import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1140px] mx-auto p-4 ">
      {/*overlay */}
      <div className=" max-h-[500px] relative  ">
        <div className="absolute text-gray-200 flex bg-black/30 flex-col h-full w-full  max-h-[500px] justify-center ">
          {" "}
          <h1 className="px-4 text-4xl md:5xl sm:6xl ">
            The <span className="text-orange-500  font-bold">BEST</span>
          </h1>
          <h2 className="px-4 text-4xl md:5xl sm:6xl">
            Food <span className="text-orange-500 font-bold">Delivery</span>
          </h2>
        </div>
        <img
          className="w-full max-h-[500px] object-cover  "
          src="https://images.pexels.com/photos/2874979/pexels-photo-2874979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
