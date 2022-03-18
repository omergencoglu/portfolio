import { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";

import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

import styles from "./ToggleSwitch.module.css";

function ToggleSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themeChanger = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Fragment>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={themeChanger}
          checked={theme === "dark" ? "checked" : ""}
        />
        <span className={`${styles.slider} ${styles.round}`}>
          <MoonIcon />
          <SunIcon />
        </span>
      </label>
    </Fragment>
  );
}

export default ToggleSwitch;
