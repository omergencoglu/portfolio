import { Fragment } from "react/cjs/react.development";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

import styles from "./ToggleSwitch.module.css";

function ToggleSwitch() {
  return (
    <Fragment>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}>
          <MoonIcon />
          <SunIcon />
        </span>
      </label>
    </Fragment>
  );
}

export default ToggleSwitch;
