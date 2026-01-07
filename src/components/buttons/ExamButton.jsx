import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

function ExamButton() {
  return (
    <>
      <button
        className={`${styles.mybutton} ${styles.exambutton}`}
        onClick={(event) => onButtonClick()}
      >
        <Link
          to={"https://master--exam1-spacex.netlify.app"}
          className={styles.buttonlink}
        >
          Go To Website
        </Link>
      </button>
    </>
  );
}

export default ExamButton;
