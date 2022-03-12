import Image from "next/image";

import Github from "../UI/Icons/Social/Github";
import ExternalLink from "./Icons/ExternalLink";

import styles from "./Card.module.css";

const Card = (props) => {
  const classes = `${styles.card} ${props.className}`;
  return (
    <div className={classes}>
      <div className={styles.imageContainer}>
        <Image
          src={props.img}
          alt={props.alt}
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
      <p>{props.children}</p>
      <div className={styles.cardFooter}>
        <span>{props.keywords}</span>
        <div className={styles.links}>
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href={props.previewLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
