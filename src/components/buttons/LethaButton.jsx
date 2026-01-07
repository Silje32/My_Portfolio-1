import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

function LethaButton() {
  function onButtonClick() {}

  return (
    <>
      <button
        className={`${styles.mybutton} ${styles.lethabutton}`}
        onClick={(event) => onButtonClick()}
      >
        <Link
          to={"https://master--lethashoes.netlify.app/"}
          className={styles.buttonlink}
        >
          Go To Website
        </Link>
      </button>
    </>
  );
}

export default LethaButton;
