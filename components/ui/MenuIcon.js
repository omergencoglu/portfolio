import { useState, Fragment } from "react";

import styles from "./MenuIcon.module.css";

function MenuIcon(props) {
  const [iconChange, setIconChange] = useState(false);

  const menuIconHandler = () => {
    setIconChange(iconChange ? false : true);
    props.onClick();
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
