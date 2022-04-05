import { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";

import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

import styles from "./ToggleSwitch.module.css";

function ToggleSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  const themeChanger = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Fragment>
      <label className={styles.switch}>
        <input
          id="themeChanger"
          type="checkbox"
          onChange={themeChanger}
          checked={resolvedTheme === "dark" ? "checked" : ""}
        />
        <span className={`${styles.slider} ${styles.round}`}>
          <MoonIcon />
          <SunIcon />
        </span>
        <span className={styles.label}>Theme toggler</span>
      </label>
    </Fragment>
  );
}

export default ToggleSwitch;
