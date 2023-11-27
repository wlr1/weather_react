import { ReactEventHandler, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../../redux/Weather/asyncActions";

const WeatherSearch = () => {
  const dispatch = useDispatch();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [city, setCity] = useState("");

  //some errors?
  const handleSearch = (e) => {
    dispatch(fetchWeatherData(city));
    setIsButtonClicked(true);

    setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);
  };

  //some errors?
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative m-6 flex items-center">
      <input
        type="text"
        value={city}
        className="bg-neutral-800 rounded-l-lg p-3 pl-12 border-0 w-[333px] transition-all duration-300   focus:outline-none focus:ring-2 focus:ring-cobalt focus:text-white text-white"
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className={`bg-neutral-800 ml-2  rounded-r-lg p-3 pl-12 border-0 w-[90px] transition-all duration-300 text-white  ${
          isButtonClicked ? "button-clicked" : ""
        }`}
      >
        <span className="text-center justify-center flex align-middle mr-11 ">
          Search
        </span>
      </button>
      <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white focus:text-black transition-all">
        <BiSearchAlt />
      </i>
    </div>
  );
};

export default WeatherSearch;
