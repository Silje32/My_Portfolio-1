import { Link } from "react-router-dom";
import Screenshot from "../../images/website_project-exam.png";
import ExamButton from "../buttons/ExamButton";
import styles from "../cards/StyledCard.module.css";

function ExamCard() {
  return (
    <>
      <div className={styles.ExamCard}>
        <div>
          <h2 className={styles.heading}>PROJECT EXAM 1:</h2>
        </div>
        <div>
          <img src={Screenshot} alt="Screenshot" />
        </div>
        <div>
          <p>
            Create a microsite for SpaceX / NASA that focuses on space
            technology to raise awareness about space program activity around
            the world.
          </p>
        </div>
        <Link
          className={styles.link}
          to={"https://github.com/Silje32/Project_Exam_SpaceX"}
        >
          VIEW GITHUB REPOSITORY
        </Link>
        <div>
          <ExamButton />
        </div>
      </div>
    </>
  );
}

export default ExamCard;
