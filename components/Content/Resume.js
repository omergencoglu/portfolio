import styles from "./Resume.module.css";

function Resume() {
  return (
    <div className={styles.wrapper}>
      <embed src="/OmerGencogluResume.pdf" className={styles.resume} />
    </div>
  );
}

export default Resume;
