import Link from "next/link";
import { CSSTransition } from "react-transition-group";

import styles from "./MenuItems.module.css";
import slideTransition from "../UI/Transitions/slide.module.css";

function MenuItems(props) {
  return (
    <CSSTransition
      in={props.onItemsVisible}
      timeout={400}
      classNames={slideTransition}
      unmountOnExit
    >
      <ul className={styles.links}>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </CSSTransition>
  );
}

export default MenuItems;
