import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link>
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
