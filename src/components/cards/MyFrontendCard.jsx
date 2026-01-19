import { Link } from "react-router-dom";
import Screenshot1 from "../../images/website-dom-manipulation.png";
import Screenshot2 from "../../images/website-catfacts.png";
import Screenshot3 from "../../images/website-pokedex.png";
import DomButton from "../buttons/DomButton";
import ReactButton from "../buttons/ReactButton";
import PokedexButton from "../buttons/PokedexButton";
import styles from "./StyledCard.module.css";

function MyFrontendCard() {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.Card}`}>
        <div>
          <h2 className="h2">DOM MANIPULATION</h2>
        </div>
        <div>
          <h2 className="h2">JavaScript Basic</h2>
        </div>

        <div>
          <img src={Screenshot1} alt="Screenshot" />
        </div>

        <div>
          <p>
            Use DOM manipulation to change content on the page. Begin with one
            function and keep building.
          </p>
        </div>
        <Link
          className={styles.link}
          to={"https://github.com/Silje32/Javascript_basic_oppgave_4.git"}
        >
          VIEW GITHUB REPOSITORY
        </Link>
        <div>
          <DomButton />
        </div>
      </div>

      <div className={`${styles.item} ${styles.Card}`}>
        <div>
          <h2 className="h2">REACT PROJECT</h2>
        </div>

        <div>
          <img src={Screenshot2} alt="Screenshot" />
        </div>
        <div>
          <p>
            Make a component that fetches and displays random cat facts from an
            API.
          </p>
        </div>
        <Link
          className={styles.link}
          to={"https://github.com/Silje32/CatFacts.git"}
        >
          VIEW GITHUB REPOSITORY
        </Link>
        <div>
          <ReactButton />
        </div>
      </div>

      <div className={`${styles.item} ${styles.Card}`}>
        <div>
          <h2 className="h2">VANILLA JAVASCRIPT AND FIGMA</h2>
        </div>
        <div>
          <h2 className="h2">Pokedex</h2>
        </div>

        <div>
          <img src={Screenshot3} alt="Screenshot" />
        </div>

        <div>
          <p>
            A Pokedex website that uses an external API to fetch data about
            various Pokémon. The website is built using Vanilla JavaScript and
            the design is made in Figma.
          </p>
        </div>
        <Link
          className={styles.link}
          to={"https://github.com/Silje32/Pokedex-Api.git"}
        >
          VIEW GITHUB REPOSITORY
        </Link>
        <div>
          <PokedexButton />
        </div>
      </div>
    </div>
  );
}
export default MyFrontendCard;
