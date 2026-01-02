import { Link } from "react-router-dom";
import styles from "../cards/StyledCard.module.css";

function NodeCard() {
  return (
    <>
      <div className={styles.NodeCard}>
        <div>
          <h2 className={styles.heading}>MOVIE REVIEW API:</h2>
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
    </>
  );
}

export default NodeCard;
