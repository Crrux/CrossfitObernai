import { useState } from "react";
import { Link } from "react-router-dom";
import PopupImagePc from "/assets/popup/Popup_pc.png";
import PopupImageTel from "/assets/popup/Popup_tel.png";

function Popup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  let isTabletorAbove = false;
  const { innerWidth: width } = window;
  if (width <= 767.97) {
    isTabletorAbove = true;
  }

  const handleClosePopup = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsOpen(false), 0);
  };

  return (
    <>
      {/* Tel popup */}

      {isOpen && isTabletorAbove && (
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

      {isOpen && !isTabletorAbove && (
        <aside
          className={`PopupPC ${isButtonClicked ? "close-animation-pc" : ""}`}
        >
          <div>
            <header>
              <button className={`close-button`} onClick={handleClosePopup}>
                X
              </button>
            </header>
            <main>
              <Link to={"contact"} onClick={handleClosePopup}>
                <img src={PopupImagePc} alt="" />
              </Link>
            </main>
          </div>
        </aside>
      )}
    </>
  );
}

export default Popup;
