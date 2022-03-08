import Image from "next/image";

import styles from "./NameArea.module.css";

function NameArea() {
  return (
    <section className={styles.name_area}>
      <div className={styles.image_div}>
        <Image
          src="/logo.png"
          alt="Omer Gencoglu"
          width={100}
          height={100}
          className={styles.image}
          layout="responsive"
        />
      </div>
      <div className={styles.text}>
        <p className={styles.my_name}>Hi, my name is</p>
        <p className={styles.name}>OMER GENCOGLU.</p>
        <p className={styles.paragraph}>
          I am a front-end web developer in Canada.
        </p>
      </div>
    </section>
  );
}

export default NameArea;
