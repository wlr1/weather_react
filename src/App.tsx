import React from "react";
import homeGif from "./assets/video/home.gif";

const App = () => {
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
      <div className="grid space-y-3">
        <div className="bg-opacity-90 bg-neutral-800 w-[1180px] h-[95px] rounded-lg shadow-md shadow-neutral-900">
          <h1 className="text-white">search bar</h1>
        </div>
        <div className="bg-neutral-800 w-[1180px] h-[675px] rounded-lg shadow-2xl shadow-neutral-900 bg-opacity-90">
          <h1 className="text-4xl text-white ">sdas</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
