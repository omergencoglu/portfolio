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
    console.log(itemsVisible);
  };

  if (isDesktop === true && itemsVisible === true) {
    setItemsVisible(false);
  }

  return (
    <header className={`${styles.header} ${itemsVisible && styles.menu_open}`}>
      <nav className={`${styles.navbar} ${itemsVisible && styles.menu_open}`}>
        <h1 className={styles.logo}>OMER</h1>
        <ul>
          <li className={styles.nav_links}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={styles.nav_links}>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <ToggleSwitch />
          </li>
          <li className={styles.hide_icon}>
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
