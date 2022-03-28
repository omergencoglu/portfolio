import DownloadIcon from "./Icons/DownloadIcon";

import styles from "./DownloadButton.module.css";

function DownloadButton() {
  return (
    <a href="/OmerGencogluResume.pdf" target="_blank" download>
      <button className={styles.button}>
        <DownloadIcon />
        <span>Download</span>
      </button>
    </a>
  );
}

export default DownloadButton;
