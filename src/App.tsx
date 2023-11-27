import homeGif from "./assets/video/home.gif";
import cloudyGif from "./assets/video/cloudy.gif";
import rainGif from "./assets/video/rain.gif";
import snowGif from "./assets/video/snow.gif";
import mistGif from "./assets/video/mist.gif";
import clearGif from "./assets/video/clear.gif";
import drizzleGif from "./assets/video/drizzle.gif";

import WeatherSearch from "./containers/WeatherSearch/WeatherSearch.tsx";
import WeatherInfo from "./containers/WeatherInfo/WeatherInfo.tsx";

import { useEffect, useState } from "react";

const App = () => {
  const [containerAnimation, setContainerAnimation] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(homeGif);

  useEffect(() => {
    setContainerAnimation(true);
  }, []);

  const handleWeatherChange = (WeatherMain: string) => {
    switch (WeatherMain) {
      case "Clouds":
        setBackgroundImage(cloudyGif);
        break;
      case "Rain":
        setBackgroundImage(rainGif);
        break;
      case "Snow":
        setBackgroundImage(snowGif);
        break;
      case "Mist":
        setBackgroundImage(mistGif);
        break;
      case "Clear":
        setBackgroundImage(clearGif);
        break;
      case "Drizzle":
        setBackgroundImage(drizzleGif);
        break;
      default:
        setBackgroundImage(homeGif);
        break;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-image 0.5s ease",
      }}
    >
      <div className="grid space-y-3 ">
        <div
          className={`bg-opacity-90 bg-neutral-800 w-[1180px] h-[95px] rounded-lg shadow-md shadow-neutral-900 ${
            containerAnimation ? "slideRight" : ""
          }`}
        >
          <div className="flex justify-center items-center ">
            <WeatherSearch />
          </div>
        </div>
        <div
          className={`bg-neutral-800 w-[1180px] h-[675px] rounded-lg shadow-2xl shadow-neutral-900 bg-opacity-90 ${
            containerAnimation ? "slideUp" : ""
          }`}
        >
          <WeatherInfo onWeatherChange={handleWeatherChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
