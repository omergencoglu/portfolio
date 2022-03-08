import styles from "./MenuIcon.module.css";

function MenuIcon(props) {
  return (
    <div
      className={`${props.onItemsVisible ? styles.change : ""} ${
        styles.container
      }`}
      onClick={props.onClick}
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
}

export default MenuIcon;
