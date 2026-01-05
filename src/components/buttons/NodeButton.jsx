import styles from "./Buttons.module.css";

function NodeButton() {
  return (
    <>
      <button
        className={styles.nodebutton}
        onClick={(event) => onButtonClick()}
      ></button>
    </>
  );
}

export default NodeButton;
