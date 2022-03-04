import { Fragment } from "react/cjs/react.development";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

import classes from "./ToggleSwitch.module.css";

function ToggleSwitch() {
  return (
    <Fragment>
      <label className={classes.switch}>
        <input type="checkbox" />
        <span className={classes.slider + " " + classes.round}>
          <MoonIcon />
          <SunIcon />
        </span>
      </label>
    </Fragment>
  );
}

export default ToggleSwitch;
