import styles from "./StyledCard.module.css";

function MyAboutCard() {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.Card}`}>
        <h2>Hi!</h2>
        <p>I´m Silje Heldal Monsen.</p>
        <p>I´m a fullstack developer who can turn your ideas into reality.</p>
        <p>I LOVE life and everything it has to offer me.</p>
        <p>At the age of 18, I built my own computer.</p>
        <p>
          In my twenties, I experimented with Linux and went to Linux meetings
          in Bergen "BLUG".{" "}
        </p>
        <p>I have even tried out the Linux cellphone "Sailfish".</p>
        <p>Today, I am a big Mac fan! </p>
      </div>

      <div className={`${styles.item} ${styles.Card}`}>
        <div>
          <h2 className="h2">MY SKILLS</h2>
          <p>I have experience in both frontend and backend development.</p>
          <p>
            I have worked with HTML, CSS, JavaScript, DOM Manipulation, React +
            Vite, Node.js, Node Express, CSS modules, Figma, SQL, SQLite, DB
            Browser for SQLite, SQLite3 editor in Visual Studio Code,
            ThunderClient, Visual Studio Code, GitHub, Git, GitHub pages,
            Netlify and Vercel.
          </p>
          <p>
            I LOVE to write in the terminal and I can promise you MANY commits!
          </p>
        </div>
      </div>

      <div className={`${styles.item} ${styles.Card}`}>
        <div>
          <h2 className="h2">MY HOBBIES</h2>
          <ul>
            <li>Swimming</li>
            <li>Dancing</li>
            <li>Going to the cinema</li>
            <li>Hiking</li>
            <li>Playing board games</li>
            <li>Going for walks</li>
            <li>Sci-fi and Fantasy movies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyAboutCard;
