import Link from "next/link";

import ToggleSwitch from "../ui/ToggleSwitch";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>OMER</div>
      <nav>
        <ul>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <ToggleSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
