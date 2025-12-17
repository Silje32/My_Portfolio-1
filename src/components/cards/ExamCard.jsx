import { Link } from "react-router-dom";
import Screenshot from "../../images/website_project-exam.png";
import { StyledExamCard, StyledLink } from "./StyledCard.styles";
import ExamButton from "../buttons/ExamButton";
import styles from "../header/Heading.module.css";

function ExamCard() {
  return (
    <>
      <StyledExamCard>
        <div>
          <h2>PROJECT EXAM 1:</h2>
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
        <StyledLink>
          <Link to={"https://github.com/Silje32/Project_Exam_SpaceX"}>
            VIEW GITHUB REPOSITORY
          </Link>
        </StyledLink>
        <div>
          <ExamButton />
        </div>
      </StyledExamCard>
    </>
  );
}

export default ExamCard;
