import styles from "./SubmitButton.module.css";

function SubmitButton(props) {
  const classes =
    props.state === "pending"
      ? styles.pending
      : props.state === "success"
      ? styles.success
      : props.state === "failed"
      ? styles.failed
      : null;

  console.log(classes);

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.button} ${classes} ${styles.pending}`}>
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
