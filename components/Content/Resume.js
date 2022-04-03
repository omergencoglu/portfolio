import DownloadButton from "../UI/DownloadButton";

import styles from "./Resume.module.css";

function Resume() {
  return (
    <div className={styles.wrapper} data-aos="fade-right">
      <h2>My Resume</h2>
      <object
        data="/OmerGencogluResume.pdf"
        type="application/pdf"
        className={styles.resume}
      >
        <p>
          Your web browser doesn&apos;t have a PDF plugin. Instead you can click{" "}
          <a href="/OmerGencogluResume.pdf" target="_blank">
            here
          </a>{" "}
          to download my resume.
        </p>
      </object>
      <DownloadButton />
    </div>
  );
}

export default Resume;
