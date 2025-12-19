import { Link } from "react-router-dom";
import styles from "./buttons/Buttons.module.css";

function ProjectButton() {
  function onButtonClick() {}

  return (
    <>
      <button
        className={styles.projectbutton}
        onClick={(event) => onButtonClick()}
      >
        <Link
          to={"https://master--semesterproject1-community-museum.netlify.app"}
        >
          Go To Website
        </Link>
      </button>
    </>
  );
}

export default ProjectButton;
