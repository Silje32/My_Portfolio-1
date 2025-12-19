import { Link } from "react-router-dom";
import styles from "../buttons/Buttons.module.css";

function LethaButton() {
  function onButtonClick() {}

  return (
    <>
      <button
        className={styles.lethabutton}
        onClick={(event) => onButtonClick()}
      >
        <Link to={"https://master--lethashoes.netlify.app/"}>
          Go To Website
        </Link>
      </button>
    </>
  );
}

export default LethaButton;
