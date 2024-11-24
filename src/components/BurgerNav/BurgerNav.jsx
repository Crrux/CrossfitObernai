import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "/assets/Header_logo.png";
import { LinksLocal } from "../../layout/header/links";

function BurgerNav() {
  let isTabletorAbove = false;
  const { innerWidth: width } = window;

  if (width <= 767.97) {
    isTabletorAbove = true;
  }
  const [isOpen, setIsOpen] = useState(false);
  const handleShowLinks = () => setIsOpen(!isOpen);
  const handleShowLinksRedirect = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar__button ${isOpen ? "show-nav" : ""}`}>
        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </div>

      <nav className={`navbar ${isOpen ? "show-nav" : "hide-nav"}`}>
        <ul className="navbar__links">
          <li className="navbar__logo">
            <Link to={"/"} onClick={handleShowLinksRedirect}>
              <img src={Logo} id="navburger-logo" />
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"/"}
              className={`navbar__link`}
              onClick={handleShowLinksRedirect}
            >
              Acceuil
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={LinksLocal.class}
              className={`navbar__link ${
                location.pathname === LinksLocal.class && !isTabletorAbove
                  ? "activeNavLink"
                  : ""
              }`}
              onClick={handleShowLinksRedirect}
            >
              Nos Cours
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={LinksLocal.planning}
              className={`navbar__link ${
                location.pathname === LinksLocal.planning && !isTabletorAbove
                  ? "activeNavLink"
                  : ""
              }`}
              onClick={handleShowLinksRedirect}
            >
              Planning
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={LinksLocal.offers}
              className={`navbar__link ${
                location.pathname === LinksLocal.offers && !isTabletorAbove
                  ? "activeNavLink"
                  : ""
              }`}
              onClick={handleShowLinksRedirect}
            >
              Les offres
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={LinksLocal.contact}
              className={`navbar__link ${
                location.pathname === LinksLocal.contact && !isTabletorAbove
                  ? "activeNavLink"
                  : ""
              }`}
              onClick={handleShowLinksRedirect}
            >
              Contact
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={LinksLocal.events}
              className={`navbar__link ${
                location.pathname === LinksLocal.events && !isTabletorAbove
                  ? "activeNavLink"
                  : ""
              }`}
              onClick={handleShowLinksRedirect}
            >
              Evenements
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"testerreur"}
              className={`navbar__link`}
              onClick={handleShowLinksRedirect}
            >
              Test erreur
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default BurgerNav;
