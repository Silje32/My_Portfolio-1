import ExamButton from "../buttons/ExamButton";
import { Link } from "react-router-dom";
import { StyledH2 } from "../header/Heading.styles";
import { StyledExamCard, StyledLink } from "./StyledCard.styles";


function ExamCard() {

    return (  
        <>
          <StyledExamCard>
              <div>
                <StyledH2>
                    PROJECT EXAM 1:
                </StyledH2>
              </div>
              <div>
                <p>
                  Create a microsite for SpaceX / NASA that focuses on space technology to raise awareness about 
                  space program activity around the world.
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