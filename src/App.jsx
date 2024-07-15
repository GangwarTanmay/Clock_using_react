import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./components/Clock";
import ModeButton from "./components/ModeButton";
import { useState } from "react";

function App() {
  let [mode, setMode] = useState("light");

  let changeMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  return (
    <>
      <div className={`container-fluid container-${mode}`}>
        <ModeButton mode={mode} changeMode={changeMode}></ModeButton>
        <div className="clock-outer-div d-flex align-items-center justify-content-center mt-4">
          <Clock mode={mode}></Clock>
        </div>
      </div>
    </>
  );
}

export default App;
