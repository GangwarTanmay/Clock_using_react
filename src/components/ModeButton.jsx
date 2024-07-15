import { CiLight } from "react-icons/ci";
import PropTypes from "prop-types";
import { MdNightlightRound } from "react-icons/md";
import "../App.css";

export default function ModeButton(props) {
  return (
    <div className="modeDiv d-flex justify-content-end mt-4">
      <button
        className={`mode-button-${props.mode} me-4 d-flex align-items-center justify-content-center`}
        onClick={props.changeMode}
      >
        {props.mode === "light" ? <CiLight /> : <MdNightlightRound />}
      </button>
    </div>
  );
}

ModeButton.propTypes = {
  changeMode: PropTypes.func,
  mode: PropTypes.string,
};
