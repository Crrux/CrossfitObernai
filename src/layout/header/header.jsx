import { Link, useLocation } from "react-router-dom";
import Logo from "/assets/Header_logo.png";

import BurgerNav from "../../components/BurgerNav/BurgerNav";

function Header() {
  const location = useLocation();
  let isTabletorAbove = false;
  const { innerWidth: width } = window;

  if (width <= 767.97) {
    isTabletorAbove = true;
  }

  const HandleRedirectDisplay = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <div className="logo">
        <Link to={"/"} onClick={HandleRedirectDisplay}>
          <img src={Logo} alt="Logo CrossFit Obernai" id="Header_Logo" />
        </Link>
      </div>

      {isTabletorAbove ? (
        <BurgerNav />
      ) : (
        <>
          <nav id="NavPc">
            <Link
              to={"class"}
              className={location.pathname === "/class" ? "activeNavLink" : ""}
              onClick={HandleRedirectDisplay}
            >
              Nos cours
            </Link>
            <Link
              to={"planning"}
              className={
                location.pathname === "/planning" ? "activeNavLink" : ""
              }
              onClick={HandleRedirectDisplay}
            >
              Planning
            </Link>
            <Link
              to={"offres"}
              className={location.pathname === "/offres" ? "activeNavLink" : ""}
              onClick={HandleRedirectDisplay}
            >
              Les offres
            </Link>
            <Link
              to={"contact"}
              className={
                location.pathname === "/contact" ? "activeNavLink" : ""
              }
              onClick={HandleRedirectDisplay}
            >
              Contact
            </Link>
            <Link
              to={"events"}
              className={location.pathname === "/events" ? "activeNavLink" : ""}
              onClick={HandleRedirectDisplay}
            >
              Evenements
            </Link>
            <Link to={"testerreur"} onClick={HandleRedirectDisplay}>
              Test erreur
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
