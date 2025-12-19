import { Link } from "react-router-dom";
import styles from "../buttons/Buttons.module.css";

function ExamButton() {
  return (
    <>
      <button
        className={styles.exambutton}
        onClick={(event) => onButtonClick()}
      >
        <Link to={"https://master--exam1-spacex.netlify.app"}>
          Go To Website
        </Link>
      </button>
    </>
  );
}

export default ExamButton;
