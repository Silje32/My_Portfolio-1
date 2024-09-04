import { Link } from "react-router-dom";
import Screenshot from "../../images/website_letha.png";
import { StyledH2 } from "../header/Heading.styles";
import LethaButton from "../buttons/LethaButton";
import { StyledLethaCard, StyledLink } from "./StyledCard.styles";
import { StyledImage } from "./Image.styles";


function LethaCard() {

    return (  
        <>
          <StyledLethaCard>
              <div>
                <StyledH2>
                    INTERACTION DESIGN CA:
                </StyledH2>
              </div>
                <StyledImage>
                   <img src={Screenshot} alt="Screenshot" />;
                </StyledImage>
              <div>
                  <p>
                    Create the final version of the Letha website and upload it to your web host.
                  </p>
                </div>
              <StyledLink>     
                <Link to={"https://github.com/Silje32/Leatha_CA.git"}>
                   VIEW GITHUB REPOSITORY
                </Link>
              </StyledLink> 
              <div> 
              <LethaButton />
              </div>  
          </StyledLethaCard>
        </>
    );
}

export default LethaCard;