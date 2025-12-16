import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Frontend Projects</NavLink>
          <NavLink to="/backend">Backend Projects</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
