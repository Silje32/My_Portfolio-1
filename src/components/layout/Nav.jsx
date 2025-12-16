import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
