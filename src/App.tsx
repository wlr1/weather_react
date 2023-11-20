import homeGif from "./assets/video/home.gif";
import WeatherSearch from "./containers/WeatherSearch/WeatherSearch.tsx";
import WeatherInfo from "./containers/WeatherInfo/WeatherInfo.tsx";
import { useEffect, useState } from "react";

const App = () => {
  const [containerAnimation, setContainerAnimation] = useState(false);

  useEffect(() => {
    setContainerAnimation(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url(" + homeGif + ")",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
};

export default App;
