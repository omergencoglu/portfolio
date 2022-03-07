import Link from "next/link";
import { CSSTransition } from "react-transition-group";

import styles from "./MenuItems.module.css";
import slideTransition from "../UI/transitions/slide.module.css";

function MenuItems(props) {
  return (
    <CSSTransition
      in={props.onItemsVisible}
      timeout={1000}
      classNames={slideTransition}
      unmountOnExit
    >
      <ul className={styles.links}>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </CSSTransition>
  );
}

export default MenuItems;
