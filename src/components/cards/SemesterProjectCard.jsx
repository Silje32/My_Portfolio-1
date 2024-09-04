import { Link } from "react-router-dom";
import ProjectButton from "../buttons/ProjectButton";
import { StyledH2 } from "../header/Heading.styles";
import Screenshot from "../../images/website_semester-project1.png";
import { StyledSemesterProjectCard, StyledLink } from "./StyledCard.styles";
import { StyledImage } from "../../images/Image.styles";


function SemesterProjectCard() {

    return (  
        <>
          <StyledSemesterProjectCard>
              <div>
                <StyledH2>
                    SEMESTER PROJECT 1:
                </StyledH2>
              </div>
                <StyledImage>
                   <img src={Screenshot}  alt="Screenshot" />;
                </StyledImage>
              <div>
                <p>
                An interactive science museum called the Community Science Museum is opening in your 
                town/city. Its core target audience is primary and middle school children (7-15) 
                and families with young children. The museum wants a website that is informative and 
                appealing, that will attract both middle school pupils and their parents. The site 
                should appeal to youngsters without pandering; it should take for granted that the 
                audience is inquisitive and intelligent. The website should be informative and 
                engaging, but should encourage viewers to visit the museum itself. 
                The website should be responsive and be easy to use on a variety of devices.
                </p>
              </div>
              <StyledLink>
                  <Link to={"https://github.com/Silje32/Semester_project.git"}>
                     VIEW GITHUB REPOSITORY
                  </Link>
              </StyledLink>
              <div>
              <ProjectButton />
              </div> 
          </StyledSemesterProjectCard>
        </>
    );
}

export default SemesterProjectCard;