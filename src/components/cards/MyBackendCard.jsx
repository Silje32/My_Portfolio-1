import { Link } from "react-router-dom";
import styles from "./StyledCard.module.css";

function MyBackendCard() {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.Card}`}>
        <div>
          <h2 className="h2">MOVIE REVIEW API:</h2>
        </div>
        <div>
          <p>
            Create a Movie Review API so movie lovers and critics can find,
            share and review movies.
          </p>
        </div>
        <Link
          className={styles.link}
          to={"https://github.com/Silje32/Movie_Review_Api.git"}
        >
          VIEW GITHUB REPOSITORY
        </Link>
      </div>
    </div>
  );
}
export default MyBackendCard;
