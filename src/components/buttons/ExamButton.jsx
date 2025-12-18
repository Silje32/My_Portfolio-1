import { Link } from "react-router-dom";
import styles from "./buttons/Buttons.module.css";

function ExamButton() {

    function onButtonClick() {
        
      }
    

    return ( 
         <>
           <button className={styles.exambutton} onClick={() => onButtonClick()}>
               <Link to={"https://master--exam1-spacex.netlify.app"}>
                   Go To Website
               </Link>
         </>
    );
}

export default ExamButton;