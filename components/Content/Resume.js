import DownloadButton from "../UI/DownloadButton";

import styles from "./Resume.module.css";

function Resume() {
  return (
    <div className={styles.wrapper} data-aos="zoom-in">
      <DownloadButton />
      <embed src="/OmerGencogluResume.pdf" className={styles.resume} />
      <DownloadButton />
    </div>
  );
}

export default Resume;
