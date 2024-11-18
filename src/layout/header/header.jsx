import { Link, useLocation } from "react-router-dom";
import Logo from "/assets/Header_logo.png";

import BurgerNav from "../../components/BurgerNav/BurgerNav";
import { LinksLocal as Links } from "./links.js";

function Header() {
  const location = useLocation();
  let isTabletorAbove = false;
  const { innerWidth: width } = window;
  console.log(location.pathname);
  console.log(Links.class);

  if (width <= 767.97) {
    isTabletorAbove = true;
  }

  const HandleRedirectDisplay = () => {
    window.scrollTo(0, 0);
  };

  const renderNavigation = () => {
    if (Links) {
      return (
        <>
          {isTabletorAbove ? (
            <BurgerNav />
          ) : (
            <>
              <nav id="NavPc">
                <Link
                  to={Links.class}
                  className={
                    location.pathname === Links.class ? "activeNavLink" : ""
                  }
                  onClick={HandleRedirectDisplay}
                >
                  Nos cours
                </Link>
                <Link
                  to={Links.planning}
                  className={
                    location.pathname === Links.planning ? "activeNavLink" : ""
                  }
                  onClick={HandleRedirectDisplay}
                >
                  Planning
                </Link>
                <Link
                  to={Links.offers}
                  className={
                    location.pathname === Links.offers ? "activeNavLink" : ""
                  }
                  onClick={HandleRedirectDisplay}
                >
                  Les offres
                </Link>
                <Link
                  to={Links.contact}
                  className={
                    location.pathname === Links.contact ? "activeNavLink" : ""
                  }
                  onClick={HandleRedirectDisplay}
                >
                  Contact
                </Link>
                <Link
                  to={Links.events}
                  className={
                    location.pathname === Links.events ? "activeNavLink" : ""
                  }
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
        </>
      );
    }
    return null;
  };

  return (
    <header>
      <div className="logo">
        <Link to={"/"} onClick={HandleRedirectDisplay}>
          <img src={Logo} alt="Logo CrossFit Obernai" id="Header_Logo" />
        </Link>
      </div>
      {renderNavigation()}
    </header>
  );
}

export default Header;
