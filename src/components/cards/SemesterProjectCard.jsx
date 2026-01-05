import { Link } from "react-router-dom";
import ProjectButton from "../buttons/ProjectButton";
import Screenshot from "../../images/website_semester-project1.png";
import styles from "./StyledCard.module.css";

function SemesterProjectCard() {
  return (
    <>
      <div className={styles.SemesterProjectCard}>
        <div>
          <h2 className={styles.heading}>SEMESTER PROJECT 1:</h2>
        </div>
        <div>
          <img src={Screenshot} alt="Screenshot" />
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
            be informative and engaging, but should encourage viewers to visit
            the museum itself. The website should be responsive and be easy to
            use on a variety of devices.
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
      </div>
    </>
  );
}

export default SemesterProjectCard;
