import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

function LethaButton() {
  function onButtonClick() {}

  return (
    <>
      <div className={styles.buttoncontainer}>
        <button
          className={`${styles.mybutton} ${styles.pokebutton}`}
          onClick={(event) => onButtonClick()}
        >
          <Link
            to={"https://silje32.github.io/Pokedex-Api/"}
            className={styles.buttonlink}
          >
            Go To Website
          </Link>
        </button>
      </div>
    </>
  );
}

export default LethaButton;
