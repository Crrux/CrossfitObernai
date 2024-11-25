import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PopupImagePc from "/assets/popup/Popup_pc.png";
import PopupImageTel from "/assets/popup/Popup_tel.png";
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions.js";

function Popup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [isTabletorAbove, setIsTabletorAbove] = useState();
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 1024) {
      setIsTabletorAbove(false);
    } else setIsTabletorAbove(true);
  }, [isTabletorAbove, height, width]);

  const handleClosePopup = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsOpen(false), 0);
  };

  return (
    <>
      {/* Tel popup */}

      {isOpen && !isTabletorAbove && (
        <aside className={`PopupTel`}>
          <div>
            <Link to={"/contact"} onClick={handleClosePopup}>
              <img src={PopupImageTel} alt="" id="PopupImageTel" />
            </Link>

            <button className={`close-button`} onClick={handleClosePopup}>
              X
            </button>
          </div>
        </aside>
      )}

      {/* Pc popup */}

      {isOpen && isTabletorAbove && (
        <aside
          className={`PopupPC ${isButtonClicked ? "close-animation-pc" : ""}`}
        >

          <div>
            <button className={`close-button`} onClick={handleClosePopup}>
              X
            </button>
          </div>
          <Link to={"contact"} onClick={handleClosePopup}>
            <div>
              <img src={PopupImagePc} alt="" />
            </div>
          </Link>
        </aside>
      )}
    </>
  );
}

export default Popup;
