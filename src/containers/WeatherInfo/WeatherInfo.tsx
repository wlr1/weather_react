import React from "react";

const WeatherInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl text-white text-center mt-12">City</h1>
      <div className="grid grid-cols-3 gap-20 mt-16">
        <div className="w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white">weather</h1>
        </div>
        <div className="w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white">weather</h1>
        </div>
        <div className="w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white">weather</h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
