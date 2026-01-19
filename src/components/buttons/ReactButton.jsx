import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

function ReactButton() {
  function onButtonClick() {}

  return (
    <>
      <div className={styles.buttoncontainer}>
        <button
          className={`${styles.mybutton} ${styles.reactbutton}`}
          onClick={(event) => onButtonClick()}
        >
          <Link
            to={"https://cat-facts-one-ashen.vercel.app/"}
            className={styles.buttonlink}
          >
            Go To Website
          </Link>
        </button>
      </div>
    </>
  );
}

export default ReactButton;
