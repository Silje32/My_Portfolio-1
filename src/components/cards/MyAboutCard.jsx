import styles from "./StyledCard.module.css";

function MyAboutCard() {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
      <p>Hi!</p>
      <p>I´m Silje Heldal Monsen</p>
      <p>I´m a fullstack developer who can turn your ideas into reality.</p>
    </div>
  );
}

export default MyAboutCard;
