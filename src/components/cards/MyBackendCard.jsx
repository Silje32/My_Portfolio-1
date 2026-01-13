import styles from "./StyledCard.module.css";

function MyBackendCard() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>Node.JS Project</div>
      <div className={styles.item}>Next.JS Project</div>
      <div className={styles.item}>Csharp Project</div>
    </div>
  );
}
export default MyBackendCard;
