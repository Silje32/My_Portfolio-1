import styles from "./StyledCard.module.css";

function MyAboutCard() {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.Card}`}>
        <h2>Hi!</h2>
        <p>I´m Silje Heldal Monsen</p>
        <p>I´m a fullstack developer who can turn your ideas into reality.</p>
      </div>
    </div>
  );
}

export default MyAboutCard;
