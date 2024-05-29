import { Link } from "react-router-dom";
import { StyledExamButton } from "./Buttons.styles";

function ExamButton() {

    function onButtonClick() {
        
      }
    

    return ( 
         <>
           <StyledExamButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"h.p://www.dreambuilder.cloud/Project_Exam/"}>
                   Go To Website
               </Link>
            </StyledExamButton>
         </>
    );
}

export default ExamButton;