import { useState } from "react";
import { Link } from "react-router-dom";

function PopupPC() {
  const [isOpen, setIsOpen] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  let isTabletorAbove = false;
  const { innerWidth: width } = window;
  if (width >= 768) {
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
            <header>
              <button className={`close-button`} onClick={handleClosePopup}>
                X
              </button>
            </header>
            <main>
              <Link to={"contact"} onClick={handleClosePopup}>
                Lien contact
              </Link>
              <p>popup reservation PC</p>
            </main>
          </div>
        </aside>
      )}
    </>
  );
}

export default PopupPC;
