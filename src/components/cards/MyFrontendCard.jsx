import { Link } from "react-router-dom";
import Screenshot1 from "../../images/website_project-exam.png";
import Screenshot2 from "../../images/website_semester-project1.png";
import ExamButton from "../buttons/ExamButton";
import ProjectButton from "../buttons/ProjectButton";
import styles from "./StyledCard.module.css";

function MyFrontendCard() {
  return (
    <div className={styles.container}>
      <div>
        <div className={"${styles.item} ${styles.ExamCard}"}>
          Rovers on Mars
        </div>
        <div>
          <h2 className="h2">PROJECT EXAM 1:</h2>
        </div>

        <div>
          <img src={Screenshot1} alt="Screenshot" />
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
      <div className={"${styles.item} ${styles.SemesterProjectCard}"}>
        Community Science Museum
      </div>
      <div>
        <h2 className="h2">SEMESTER PROJECT 1:</h2>
      </div>
      <div>
        <img src={Screenshot2} alt="Screenshot" />
      </div>
      <div>
        <p>
          An interactive science museum called the Community Science Museum is
          opening in your town/city. Its core target audience is primary and
          middle school children (7-15) and families with young children. The
          museum wants a website that is informative and appealing, that will
          attract both middle school pupils and their parents. The site should
          appeal to youngsters without pandering; it should take for granted
          that the audience is inquisitive and intelligent. The website should
          be informative and engaging, but should encourage viewers to visit the
          museum itself. The website should be responsive and be easy to use on
          a variety of devices.
        </p>
      </div>
      <Link
        className={styles.link}
        to={"https://github.com/Silje32/Semester_project.git"}
      >
        VIEW GITHUB REPOSITORY
      </Link>
      <div>
        <ProjectButton />
      </div>
      <div className={styles.item}>Interaction Design CA</div>
    </div>
  );
}
export default MyFrontendCard;
