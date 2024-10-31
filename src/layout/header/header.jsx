import { Link } from "react-router-dom";
import Logo from "/assets/Header_logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" id="Header_Logo" />
        </Link>
      </div>
      <nav>
        <Link to={"class"}>Class</Link>
        <Link to={"planning"}>Planning</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"events"}>Events</Link>
        <Link to={"testerreur"}>Test erreur</Link>
      </nav>
    </header>
  );
}

export default Header;
