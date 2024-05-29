import ExamCard from "../components/cards/ExamCard";
import SemesterProjectCard from "../components/cards/SemesterProjectCard";
import LeathaCard from "../components/cards/LethaCard";
import { StyledCard } from "../components/cards/StyledCard.styles"

function Home() {

    return (
       <>
         <StyledCard>
             <ExamCard />
             <SemesterProjectCard />
             <LeathaCard />
         </StyledCard>
       </>
    );       
}

export default Home;  