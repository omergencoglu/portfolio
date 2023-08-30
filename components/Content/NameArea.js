import Image from "next/image";

import logo from "../../public/logo.png";

import styles from "./NameArea.module.css";

function NameArea() {
  return (
    <section className={styles.nameArea} data-aos="zoom-in">
      <div className={styles.imageDiv}>
        <Image
          src={logo}
          alt="Omer Gencoglu"
          placeholder="blur"
          priority={true}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.myName}>Hi, my name is</p>
        <p className={styles.name}>OMER GENCOGLU.</p>
        <p className={styles.paragraph}>
          {"I'm a front-end web developer in Canada."}
        </p>
      </div>
    </section>
  );
}

export default NameArea;
