import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

function DomButton() {
  function onButtonClick() {}
  return (
    <>
      <div className={styles.buttoncontainer}>
        <button
          className={`${styles.mybutton} ${styles.dombutton}`}
          onClick={(event) => onButtonClick()}
        >
          <Link
            to={"https://silje32.github.io/Javascript_basic_oppgave_4/"}
            className={styles.buttonlink}
          >
            Go To Website
          </Link>
        </button>
      </div>
    </>
  );
}

export default DomButton;
