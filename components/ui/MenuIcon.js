import { useState, Fragment } from "react";

import styles from "./MenuIcon.module.css";

function MenuIcon() {
  const [iconChange, setIconChange] = useState(false);

  const menuIconHandler = () => {
    console.log(iconChange);
    setIconChange(iconChange ? false : true);
    console.log(`${iconChange ? styles.change : ""} ${styles.bar1}`);
  };

  return (
    <Fragment>
      <div
        className={`${iconChange ? styles.change : ""} ${styles.container}`}
        onClick={menuIconHandler}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </Fragment>
  );
}

export default MenuIcon;
