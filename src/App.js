import { useState } from "react";
import "./App.css";

// import LifeCycle from "./components/1LifeCycle/LifeCycleApp";
// import FetchCardApp from "./components/2FetchCard/FetchCardApp";
import ResizeApp from "./components/3Resize/ResizeApp";

// import WeatherApp from "./components/widget/WeatherApp";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show / Hide</button>

      {/* {show && <LifeCycle />} */}
      {/* <FetchCardApp /> */}

      {show && <ResizeApp />}

      {/* <WeatherApp/> */}
    </div>
  );
}

export default App;
