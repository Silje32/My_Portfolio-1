import styles from "./StyledCard.module.css";

function NextCard() {
  return (
    <>
      <div className={styles.NextCard}>
        <div>
          <h2 className={styles.heading}>NEXT.JS PROJECT</h2>
        </div>
        <div>
          <p>My First Next.js Project.</p>
        </div>
      </div>
    </>
  );
}

export default NextCard;
