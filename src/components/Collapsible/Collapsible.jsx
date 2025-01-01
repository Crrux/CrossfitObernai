import { useState } from "react";
import PropTypes from "prop-types";

function Collapsible({ index, titre, text, string }) {
  titre = titre.toUpperCase();
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
      <button
        className={`collapsible-divbutton ${!isFirstClick ? (isActive ? "active" : "inactive") : ""
          }`} onClick={handleClick} type="button"
      >
        <p className="collapsible-button_title">
          {index}. {titre.split("").map((letter, index) => (
            letter !== " " ? <span key={index}>{letter}</span> : " "
          ))}</p>

        <i
          id="icon"
          className={`fa-solid fa-chevron-up ${!isFirstClick
            ? isActive
              ? "icon-down-rotated"
              : "icon-up-rotated"
            : ""
            }`}
        ></i>
      </button>

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
  index: PropTypes.number,
  titre: PropTypes.string,
  string: PropTypes.string,
  text: PropTypes.array,
};

export default Collapsible;
