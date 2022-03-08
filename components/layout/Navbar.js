import Link from "next/link";
import { useState } from "react";

import MenuIcon from "../UI/Icons/MenuIcon";
import ToggleSwitch from "../UI/ToggleSwitch";
import MenuItems from "./MenuItems";

import styles from "./Navbar.module.css";

function Navbar() {
  const [itemsVisible, setItemsVisible] = useState(false);

  const responsiveNavbarHandler = () => {
    setItemsVisible(itemsVisible ? false : true);
    console.log(itemsVisible);
  };

  return (
    <header className={`${styles.header} ${itemsVisible && styles.menu_open}`}>
      <nav className={`${styles.navbar} ${itemsVisible && styles.menu_open}`}>
        <h1 className={styles.logo}>OMER</h1>
        <ul>
          <li className={styles.hide_items}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={styles.hide_items}>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <ToggleSwitch />
          </li>
          <li className={styles.hide_icon}>
            <MenuIcon onClick={responsiveNavbarHandler} />
          </li>
        </ul>
      </nav>
      <MenuItems onItemsVisible={itemsVisible} />
    </header>
  );
}

export default Navbar;
