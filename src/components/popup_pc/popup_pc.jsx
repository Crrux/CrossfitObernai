import { useState } from "react";

function PopupPC() {
  const [isOpen, setIsOpen] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  let isTabletorAbove = false;
  const { innerWidth: width } = window;
  if (width > 768) {
    isTabletorAbove = true;
  }

  const handleClosePopup = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsOpen(false), 1000);
  };

  return (
    <>
      {isOpen && isTabletorAbove && (
        <aside
          className={`PopupPC ${isButtonClicked ? "close-animation-pc" : ""}`}
        >
          <div>
            <button className={`close-button`} onClick={handleClosePopup}>
              X
            </button>
            <p>popup reservation PC</p>
          </div>
        </aside>
      )}
    </>
  );
}

export default PopupPC;
