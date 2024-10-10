import { useState } from "react";
import { Link } from "react-router-dom";

function PopupTel() {
  const [isOpen, setIsOpen] = useState(true);
  // const [isButtonClicked, setIsButtonClicked] = useState(false);
  let isTabletorAbove = false;
  const { innerWidth: width } = window;
  if (width <= 767.97) {
    isTabletorAbove = true;
  }

  const handleClosePopup = () => {
    // setIsButtonClicked(true);
    setTimeout(() => setIsOpen(false), 0);
  };

  return (
    <>
      {isOpen && isTabletorAbove && (
        <aside
          className={`PopupTel`} /* ${isButtonClicked ? "close-animation-tel" : ""} */
        >
          <div>
            <Link to={"/contact"} onClick={handleClosePopup}>
              <p>popup reservation tel</p>
            </Link>

            <button className={`close-button`} onClick={handleClosePopup}>
              X
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

export default PopupTel;
