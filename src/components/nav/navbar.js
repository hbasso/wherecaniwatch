import './navbar.css';
import { Link } from "react-router-dom"

function Nav() {
  return (
<>
    <nav class="navMenu">
      <Link to="Home">Home</Link>
      <Link to="Work">Work</Link>
      <Link to="Social">Social</Link>
      <div class="dot"></div>
    </nav>
</>
  );
}

export default Nav;
