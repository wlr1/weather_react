import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const WeatherSearch = () => {
  return (
    <div className="relative m-6">
      <input
        type="text"
        className="bg-neutral-800 rounded-lg p-3 pl-12 border-0 w-full transition-all duration-300 hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
      <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-all">
        <BiSearchAlt />
      </i>
    </div>
  );
};

export default WeatherSearch;
