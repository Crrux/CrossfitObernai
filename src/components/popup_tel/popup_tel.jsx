import { useState } from "react";

function PopupTel() {
  const [isOpen, setIsOpen] = useState(true);
  // const [isButtonClicked, setIsButtonClicked] = useState(false);
  let isTabletorAbove = false;
  const { innerWidth: width } = window;
  if (width < 767.97) {
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
            <p>popup reservation tel</p>
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
