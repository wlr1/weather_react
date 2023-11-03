import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const WeatherSearch = () => {
  return (
    <div className="relative m-6">
      <input
        type="text"
        className="bg-neutral-800 rounded-lg p-3 pl-12 border-0 w-[333px] transition-all duration-300  focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        placeholder="Enter a city..."
      />
      <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white focus:text-black transition-all">
        <BiSearchAlt />
      </i>
    </div>
  );
};

export default WeatherSearch;
