import { useEffect, useState } from "react";

import { PiWindBold } from "react-icons/pi";
import { WiWindDeg } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";

import { BsCloudy } from "react-icons/bs"; //clear sky
import { BsFillCloudRainFill } from "react-icons/bs"; //rain
import { BsSnow } from "react-icons/bs"; //snow
import { TbMist } from "react-icons/tb"; //mist

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const WeatherInfo = () => {
  const weatherData = useSelector((state: RootState) => state.data);

  const [key, setKey] = useState(0);

  //info blocks animation
  const [infoAnimation, setInfoAnimation] = useState(false);

  //!weatherData text animation
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    setTextAnimation(true);
  }, []);

  useEffect(() => {
    setInfoAnimation(true);
  }, [key]);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [weatherData]);

  if (!weatherData) {
    return (
      <div
        className={`text-white flex justify-center text-center font-bold text-2xl mt-56 ${
          textAnimation ? "fadeIn" : ""
        }`}
      >
        Enter a city into input field higher
      </div>
    );
  }

  const {
    weather: [{ main: WeatherMain, description: WeatherDescription }],
    main: { temp, temp_min, temp_max },
    wind: { speed, deg },
    name,
  } = weatherData;

  const windSpeedMetersPerSecond = speed;
  const windSpeedKilometersPerHour = windSpeedMetersPerSecond * 3.6;

  //displays icon for weatherMain status
  const iconMapping: Record<string, JSX.Element> = {
    Clouds: <BsCloudy size={33} className="w-full" />,
    Rain: <BsFillCloudRainFill size={33} className="w-full" />,
    Mist: <TbMist size={33} className="w-full" />,
    Snow: <BsSnow size={33} className="w-full" />,
  };

  const selectedIcon = iconMapping[WeatherMain] || iconMapping[0];

  return (
    <div
      key={key}
      className={`flex flex-col items-center justify-center  ${
        infoAnimation ? "fade-in-up" : ""
      }`}
    >
      <h1 className="text-4xl text-white text-center mt-12">{name}</h1>

      <div className="grid grid-cols-3 gap-20 mt-16">
        {/*Desc*/}
        <div
          className={`w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg transition-all delay-75 hover:scale-110 `}
        >
          <h1 className="text-white text-center font-bold mt-6">Status</h1>
          <div className=" text-white flex flex-col text-center mt-12">
            {selectedIcon}
            <span className="mt-2 font-bold">{WeatherMain}</span>
            <span className="mt-2 text-sm font-semibold text-neutral-400">
              {WeatherDescription}
            </span>
          </div>
        </div>
        {/*Temp*/}
        <div className="w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg transition-all delay-75 hover:scale-110">
          <h1 className="text-white text-center font-bold mt-6">Temperature</h1>

          {/*temp*/}
          <div className="text-white flex space-x-7 justify-center mt-5 ">
            <FaTemperatureLow size={33} />
            <span className="">{Math.round(temp)} C°</span>
          </div>
          {/*max temp*/}
          <div className="text-white flex space-x-7 justify-center mt-5 ">
            <FaTemperatureArrowUp size={33} />
            <span className="">{Math.round(temp_max)} C°</span>
          </div>
          {/*min temp*/}
          <div className="text-white flex space-x-7 justify-center mt-5 ">
            <FaTemperatureArrowDown size={33} />
            <span className="">{Math.round(temp_min)} C°</span>
          </div>
        </div>
        {/*Wind*/}
        <div
          className={`w-[232px] h-[262px] bg-black bg-opacity-50 rounded-lg transition-all delay-75 hover:scale-110 ${
            infoAnimation ? "fade-in-up" : ""
          }`}
        >
          <h1 className="text-white text-center font-bold mt-6 ">Wind</h1>
          <div className="text-white flex space-x-7 justify-center mt-5">
            <PiWindBold size={33} />
            <span>{windSpeedKilometersPerHour.toFixed(1)} km/h</span>
          </div>
          <div className="text-white flex space-x-7 justify-center mt-5 mr-8">
            <WiWindDeg size={33} />
            <span>{deg}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
