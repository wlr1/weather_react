import homeGif from "./assets/video/home.gif";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + homeGif + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div></div>
    </div>
  );
};

export default App;
