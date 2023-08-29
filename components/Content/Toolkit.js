import Html5 from "../UI/Icons/Toolkit/Html5";
import Css3 from "../UI/Icons/Toolkit/Css3";
import JavaScript from "../UI/Icons/Toolkit/JavaScript";
import Reactjs from "../UI/Icons/Toolkit/Reactjs";
import Expressjs from "../UI/Icons/Toolkit/Expressjs";
import Git from "../UI/Icons/Toolkit/Git";
import MongoDB from "../UI/Icons/Toolkit/MongoDB";
import Nextjs from "../UI/Icons/Toolkit/Nextjs";
import Node from "../UI/Icons/Toolkit/Node";
import TypeScript from "../UI/Icons/Toolkit/TypeScript";
import Sass from "../UI/Icons/Toolkit/Sass";
import TailwindCSS from "../UI/Icons/Toolkit/TailwindCSS";

import styles from "./Toolkit.module.css";

function Toolkit() {
  return (
    <section className={styles.toolkit}>
      <h2 className={styles.title}>TOOLKIT</h2>
      <div className={styles.iconsWrapper}>
        <Html5 />
        <Css3 />
        <JavaScript />
        <TypeScript />
        <Reactjs />
        <Nextjs />
        <Node />
        <Expressjs />
        <MongoDB />
        <Sass />
        <TailwindCSS />
        <Git />
      </div>
    </section>
  );
}

export default Toolkit;
