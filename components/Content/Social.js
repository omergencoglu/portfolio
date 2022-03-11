import Github from "../UI/Icons/Social/Github";
import Linkedin from "../UI/Icons/Social/Linkedin";
import Twitter from "../UI/Icons/Social/Twitter";

import styles from "./Social.module.css";

function Social() {
  return (
    <section className={styles.social}>
      <div className={styles.iconsWrapper}>
        <a
          href="https://github.com/omergencoglu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/omer-sait-gencoglu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://twitter.com/omergencogludev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
    </section>
  );
}

export default Social;
