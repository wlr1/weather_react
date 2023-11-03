import React from "react";
import { PiWindBold } from "react-icons/pi";
import { WiWindDeg } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";

import { BsFillCloudDrizzleFill } from "react-icons/bs";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { BsFillCloudSnowFill } from "react-icons/bs";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsCloudy } from "react-icons/bs";

const WeatherInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl text-white text-center mt-12">City</h1>

      <div className="grid grid-cols-3 gap-20 mt-16">
        {/*Desc*/}
        <div className="w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg transition-all delay-75 hover:scale-110">
          <h1 className="text-white text-center font-bold mt-6">Status</h1>
          <div className=" text-white flex flex-col text-center mt-12">
            <BsCloudy size={33} className="w-full " />
            <span className="mt-2">Clear sky</span>
          </div>
        </div>
        {/*Temp*/}
        <div className="w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg transition-all delay-75 hover:scale-110 ">
          <h1 className="text-white text-center font-bold mt-6">Temperature</h1>

          {/*temp*/}
          <div className="text-white flex space-x-7 justify-center mt-5 ">
            <FaTemperatureLow size={33} />
            <span className="">28.93°</span>
          </div>
          {/*max temp*/}
          <div className="text-white flex space-x-7 justify-center mt-5 ">
            <FaTemperatureArrowUp size={33} />
            <span className="">28.19°</span>
          </div>
          {/*min temp*/}
          <div className="text-white flex space-x-7 justify-center mt-5 ">
            <FaTemperatureArrowDown size={33} />
            <span className="">28.11°</span>
          </div>
        </div>
        {/*Wind*/}
        <div className="w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg transition-all delay-75 hover:scale-110">
          <h1 className="text-white text-center font-bold mt-6 ">Wind</h1>
          <div className="text-white flex space-x-7 justify-center mt-5">
            <PiWindBold size={33} />
            <span>111 km/h</span>
          </div>
          <div className="text-white flex space-x-7 justify-center mt-5 mr-8">
            <WiWindDeg size={33} />
            <span>130°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
