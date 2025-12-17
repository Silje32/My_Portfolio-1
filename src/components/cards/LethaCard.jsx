import { Link } from "react-router-dom";
import Screenshot from "../../images/website_letha.png";
import LethaButton from "../buttons/LethaButton";
import styles from "../header/Heading.module.css";
import styles from "../cards/StyledCards.module.css";

function LethaCard() {
  return (
    <>
      <div className={styles.LethaCard}>
        <div>
          <h2>INTERACTION DESIGN CA:</h2>
        </div>
        <div>
          <img src={Screenshot} alt="Screenshot" />
        </div>
        <div>
          <p>
            Create the final version of the Letha website and upload it to your
            web host.
          </p>
        </div>
        <Link
          className={styles.link}
          to={"https://github.com/Silje32/Leatha_CA.git"}
        >
          VIEW GITHUB REPOSITORY
        </Link>
        <div>
          <LethaButton />
        </div>
      </div>
    </>
  );
}

export default LethaCard;
