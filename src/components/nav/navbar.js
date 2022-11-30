import './navbar.css';
import { Link } from "react-router-dom"

function Nav() {
  return (
<>
    <nav className="navMenu">
      <Link to="/">Home</Link>
      <Link to="About">About</Link>
      <Link to="Work">Work</Link>
      <Link to="Social">Social</Link>
    </nav>
</>
  );
}

export default Nav;
