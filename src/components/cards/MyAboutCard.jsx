import styles from "./StyledCard.module.css";

function MyAboutCard() {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.Card}`}>
        <h2>Hi!</h2>
        <p>I´m Silje Heldal Monsen</p>
        <p>I´m a fullstack developer who can turn your ideas into reality.</p>
      </div>

      <div className={`${styles.item} ${styles.Card}`}>
        <div>
          <h2 className="h2">MY SKILLS</h2>
        </div>
      </div>
    </div>
  );
}

export default MyAboutCard;
