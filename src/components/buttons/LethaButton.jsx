import { Link } from "react-router-dom";
import { StyledLethaButton } from "./Buttons.styles";

function LethaButton() {

    function onButtonClick() {
        
    }
    

    return ( 
         <>
           <StyledLethaButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"www.dreambuilder.cloud/Inter_CA/index.html"}>
                   Go To Website
               </Link>
            </StyledLethaButton>
         </>
    );
}

export default LethaButton;