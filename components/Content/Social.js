import Github from "../UI/Icons/Social/Github";
import Linkedin from "../UI/Icons/Social/Linkedin";
import Twitter from "../UI/Icons/Social/Twitter";

import styles from "./Social.module.css";

function Social() {
  return (
    <section className={styles.social}>
      <div className={styles.icons_wrapper}>
        <Github />
        <Linkedin />
        <Twitter />
      </div>
    </section>
  );
}

export default Social;
