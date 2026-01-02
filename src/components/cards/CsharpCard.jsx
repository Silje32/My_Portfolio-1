import { Link } from "react-router-dom";
import styles from "../cards/StyledCard.module.css";

function CsharpCard() {
  return (
    <>
      <div className={styles.CsharpCard}>
        <div>
          <h2 className={styles.heading}>MY FIRST LIBRARY:</h2>
        </div>
        <div>
          <p>
            Imagine that you work at a library and people are there to loan
            books from you. Create an application that manages the loans of the
            books.
          </p>
        </div>
        <Link
          className={styles.link}
          to={"https://github.com/Silje32/Library.git"}
        >
          VIEW GITHUB REPOSITORY
        </Link>
      </div>
    </>
  );
}

export default CsharpCard;
