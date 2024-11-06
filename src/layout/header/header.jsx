import { Link, useLocation } from "react-router-dom";
import Logo from "/assets/Header_logo.png";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="Logo CrossFit Obernai" id="Header_Logo" />
        </Link>
      </div>
      <nav>
        <Link
          to={"class"}
          className={location.pathname === "/class" ? "activeNavLink" : ""}
        >
          Nos cours
        </Link>
        <Link
          to={"planning"}
          className={location.pathname === "/planning" ? "activeNavLink" : ""}
        >
          Planning
        </Link>
        <Link
          to={"offres"}
          className={location.pathname === "/offres" ? "activeNavLink" : ""}
        >
          Les offres
        </Link>
        <Link
          to={"contact"}
          className={location.pathname === "/contact" ? "activeNavLink" : ""}
        >
          Contact
        </Link>
        <Link
          to={"events"}
          className={location.pathname === "/events" ? "activeNavLink" : ""}
        >
          Evenements
        </Link>
        <Link to={"testerreur"}>Test erreur</Link>
      </nav>
    </header>
  );
}

export default Header;
