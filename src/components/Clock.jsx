import { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Clock(props) {
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      time = new Date();
      setTime(time);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={`clock-div-${props.mode} d-flex align-items-center justify-content-center`}
    >
      <h1 className={`clock-digits-${props.mode}`}>
        {time.toLocaleTimeString()}
      </h1>
    </div>
  );
}

Clock.propTypes = {
  changeMode: PropTypes.func,
  mode: PropTypes.string,
};
