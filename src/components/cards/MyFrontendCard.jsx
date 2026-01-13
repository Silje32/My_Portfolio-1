import styles from "./StyledCard.module.css";

function MyFrontendCard() {
  return (
    <div className={styles.container}>
      <div className={"${styles.item} ${styles.ExamCard}"}>Project Exam 1</div>
      <div className={styles.item}>Semester Project 1</div>
      <div className={styles.item}>Interaction Design CA</div>
    </div>
  );
}
export default MyFrontendCard;
