import Link from "next/link";

import styles from "./MenuItems.module.css";

function MenuItems() {
  return (
    <ul className={styles.links}>
      <li>
        <Link href="#projects">Projects</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
}

export default MenuItems;
