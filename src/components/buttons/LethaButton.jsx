import { Link } from "react-router-dom";
import { StyledLethaButton } from "./Buttons.styles";

function LethaButton() {

    function onButtonClick() {
        
    }
    

    return ( 
         <>
           <StyledLethaButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"https://master--lethashoes.netlify.app/"}>
                   Go To Website
               </Link>
            </StyledLethaButton>
         </>
    );
}

export default LethaButton;