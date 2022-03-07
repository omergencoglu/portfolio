import Link from "next/link";

import MenuIcon from "../UI/MenuIcon";
import ToggleSwitch from "../UI/ToggleSwitch";

import styles from "./Navbar.module.css";

function Navbar() {
  const responsiveNavbarHandler = () => {};

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
          <li>
            <MenuIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
