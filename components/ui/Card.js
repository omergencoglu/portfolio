import Image from "next/image";

import styles from "./Card.module.css";

const Card = (props) => {
  const classes = `${styles.card} ${props.className}`;
  return (
    <div className={classes}>
      <Image src={props.img} alt={props.alt} width={500} height={500} />
      <p>{props.children}</p>
    </div>
  );
};

export default Card;
