import Html5 from "../UI/Icons/Toolkit/Html5";
import Css3 from "../UI/Icons/Toolkit/Css3";
import JavaScript from "../UI/Icons/Toolkit/JavaScript";
import Reactjs from "../UI/Icons/Toolkit/Reactjs";
import Expressjs from "../UI/Icons/Toolkit/Expressjs";
import Git from "../UI/Icons/Toolkit/Git";
import MongoDB from "../UI/Icons/Toolkit/MongoDB";
import Nextjs from "../UI/Icons/Toolkit/Nextjs";
import Node from "../UI/Icons/Toolkit/Node";
import VSCode from "../UI/Icons/Toolkit/VSCode";

import styles from "./Toolkit.module.css";

function Toolkit() {
  return (
    <section className={styles.toolkit}>
      <h2>Toolkit</h2>
      <div className={styles.icons_wrapper}>
        <Html5 className={styles.icon} />
        <Css3 className={styles.icon} />
        <JavaScript className={styles.icon} />
        <Reactjs className={styles.icon} />
        <Nextjs className={styles.icon} />
        <Node className={styles.icon} />
        <Expressjs className={styles.icon} />
        <MongoDB className={styles.icon} />
        <Git className={styles.icon} />
        <VSCode className={styles.icon} />
      </div>
    </section>
  );
}

export default Toolkit;
