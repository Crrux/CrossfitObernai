import { useState } from "react";
import PropTypes from "prop-types";

function Collapsible({ titre, text, string }) {
  const [isActive, setIsActive] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
    if (isFirstClick) {
      setIsFirstClick(false);
    }
  };
  return (
    <div className="collapsible">
      <div
        className={`collapsible-divbutton ${
          !isFirstClick ? (isActive ? "active" : "inactive") : ""
        }`}
      >
        <p>{titre}</p>
        <button
          type="button"
          className={`collapsible-button ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <i
            id="icon"
            className={`fa-solid fa-chevron-up ${
              !isFirstClick
                ? isActive
                  ? "icon-down-rotated"
                  : "icon-up-rotated"
                : ""
            }`}
          ></i>
        </button>
      </div>

      <div
        className={`collapsible-content ${
          !isFirstClick ? (isActive ? "active" : "inactive") : ""
        }`}
      >
        {string ? (
          <>
            <p>{string}</p>
          </>
        ) : (
          ""
        )}

        {text ? (
          <>
            <ul>
              {text.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

Collapsible.propTypes = {
  titre: PropTypes.string,
  string: PropTypes.string,
  text: PropTypes.array,
};

export default Collapsible;
