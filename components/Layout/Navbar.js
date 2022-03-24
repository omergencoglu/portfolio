import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import MenuIcon from "../UI/Icons/MenuIcon";
import ToggleSwitch from "../UI/ToggleSwitch";
import MenuItems from "./MenuItems";

import styles from "./Navbar.module.css";

function Navbar() {
  const [itemsVisible, setItemsVisible] = useState(false);
  const isDesktop = useMediaQuery({ query: `(min-width: 700px)` });

  const responsiveNavbarHandler = () => {
    setItemsVisible(itemsVisible ? false : true);
  };

  if (isDesktop === true && itemsVisible === true) {
    setItemsVisible(false);
  }

  return (
    <header className={`${styles.header} ${itemsVisible && styles.menuOpen}`}>
      <nav className={`${styles.navbar} ${itemsVisible && styles.menuOpen}`}>
        <h1 className={styles.logo}>
          <Link href="/">OMER</Link>
        </h1>

        <ul>
          <li className={styles.navLinks}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={styles.navLinks}>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <ToggleSwitch />
          </li>
          <li className={styles.hideIcon}>
            <MenuIcon
              onClick={responsiveNavbarHandler}
              onItemsVisible={itemsVisible}
            />
          </li>
        </ul>
      </nav>
      <MenuItems onItemsVisible={itemsVisible} />
    </header>
  );
}

export default Navbar;
