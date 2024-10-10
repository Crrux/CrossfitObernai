import { useState } from "react";

function PopupPC() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <aside className="PopupPC">
          <div>
            <button className="close-button" onClick={handleClosePopup}>
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
