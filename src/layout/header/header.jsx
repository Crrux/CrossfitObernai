import { Link } from "react-router-dom";
import Logo from "/assets/Header_logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="Logo CrossFit Obernai" id="Header_Logo" />
        </Link>
      </div>
      <nav>
        <Link to={"class"}>Nos cours</Link>
        <Link to={"planning"}>Planning</Link>
        <Link to={"offers"}>Les offres</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"events"}>Evenements</Link>
        <Link to={"testerreur"}>Test erreur</Link>
      </nav>
    </header>
  );
}

export default Header;
