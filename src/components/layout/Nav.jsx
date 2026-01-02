import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/" className={styles.navlink}>
          Frontend Projects
        </Link>
        <Link to="/backend" className={styles.navlink}>
          Backend Projects
        </Link>
      </nav>
    </>
  );
}

export default Nav;
