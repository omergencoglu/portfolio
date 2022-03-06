import Image from "next/image";

import styles from "./NameArea.module.css";

function NameArea() {
  return (
    <div className={styles.name_area}>
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
      <div className={styles.paragraph}>
        <p>Hi, my name is</p>
        <p>Omer Gencoglu</p>
        <p>I am a front-end web developer in Canada</p>
      </div>
    </div>
  );
}

export default NameArea;
