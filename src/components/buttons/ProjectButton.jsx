import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

function ProjectButton() {
  function onButtonClick() {}

  return (
    <>
      <button
        className={`${styles.mybutton} ${styles.projectbutton}`}
        onClick={(event) => onButtonClick()}
      >
        <Link
          to={"https://master--semesterproject1-community-museum.netlify.app"}
          className={styles.buttonlink}
        >
          Go To Website
        </Link>
      </button>
    </>
  );
}

export default ProjectButton;
