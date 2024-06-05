import { Link } from "react-router-dom";
import { StyledExamButton } from "./Buttons.styles";

function ExamButton() {

    function onButtonClick() {
        
      }
    

    return ( 
         <>
           <StyledExamButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"https://master--exam1-spacex.netlify.app"}>
                   Go To Website
               </Link>
            </StyledExamButton>
         </>
    );
}

export default ExamButton;