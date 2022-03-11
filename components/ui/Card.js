import Image from "next/image";

import Github from "../UI/Icons/Social/Github";
import ExternalLink from "./Icons/ExternalLink";

import styles from "./Card.module.css";

const Card = (props) => {
  const classes = `${styles.card} ${props.className}`;
  return (
    <div className={classes}>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image src={props.img} alt={props.alt} layout="fill" />
      </div>
      <p>{props.children}</p>
      <div className={styles.card_footer}>
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
