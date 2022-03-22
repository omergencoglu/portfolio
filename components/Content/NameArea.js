import Image from "next/image";

import styles from "./NameArea.module.css";

function NameArea() {
  return (
    <section className={styles.nameArea} data-aos="zoom-in">
      <div className={styles.imageDiv}>
        <Image
          src="/logo.png"
          alt="Omer Gencoglu"
          width={100}
          height={100}
          layout="responsive"
          priority
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
