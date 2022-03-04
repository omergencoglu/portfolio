import Link from "next/link";

import ToggleSwitch from "../ui/ToggleSwitch";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Omer Gencoglu</div>
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
