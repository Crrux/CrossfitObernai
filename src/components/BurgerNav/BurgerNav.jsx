import { useState } from "react";
import { Link } from "react-router-dom";

function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleShowLinks = () => setIsOpen(!isOpen);
  return (
    <nav className={`navbar ${isOpen ? "show-nav" : "hide-nav"}`}>
      <div className="navbar__logo">
        <ul className="navbar__links">
          <li className="navbar__item">
            <Link to={"/"} className={`navbar__link`} onClick={handleShowLinks}>
              Acceuil
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"class"}
              className={`navbar__link`}
              onClick={handleShowLinks}
            >
              Nos Cours
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"planning"}
              className={`navbar__link`}
              onClick={handleShowLinks}
            >
              Planning
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"offres"}
              className={`navbar__link`}
              onClick={handleShowLinks}
            >
              Les offres
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"contact"}
              className={`navbar__link`}
              onClick={handleShowLinks}
            >
              Contact
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"events"}
              className={`navbar__link`}
              onClick={handleShowLinks}
            >
              Evenements
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"testerreur"}
              className={`navbar__link`}
              onClick={handleShowLinks}
            >
              Test erreur
            </Link>
          </li>
        </ul>
        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default BurgerNav;
