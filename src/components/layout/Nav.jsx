import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav>
        <NavLink to="/" className={styles.navlink}>
          Frontend Projects
        </NavLink>
        <NavLink to="/backend" className={styles.navlink}>
          Backend Projects
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
