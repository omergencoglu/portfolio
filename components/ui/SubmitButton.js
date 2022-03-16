import styles from "./SubmitButton.module.css";

function SubmitButton(props) {
  const classes =
    props.buttonState === "pending"
      ? styles.pending
      : props.buttonState === "success"
      ? styles.success
      : props.buttonState === "error"
      ? styles.error
      : null;

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${classes}`}
        disabled={props.disabled}
      >
        <span className={styles.buttonText}>Send</span>
      </button>
    </div>
  );
}

export default SubmitButton;
