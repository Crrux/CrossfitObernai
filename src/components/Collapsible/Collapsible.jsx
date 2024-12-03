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
      <bouton
        className={`collapsible-divbutton ${!isFirstClick ? (isActive ? "active" : "inactive") : ""
          }`} onClick={handleClick} type="button"
      >
        <p>{titre}</p>
        <div
          className={`collapsible-button ${isActive ? "active" : ""}`}
        >
          <i
            id="icon"
            className={`fa-solid fa-chevron-up ${!isFirstClick
              ? isActive
                ? "icon-down-rotated"
                : "icon-up-rotated"
              : ""
              }`}
          ></i>
        </div>
      </bouton>

      <div
        className={`collapsible-content ${!isFirstClick ? (isActive ? "active" : "inactive") : ""
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
