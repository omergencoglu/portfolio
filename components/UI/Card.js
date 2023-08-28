import Image from "next/image";

import Github from "../UI/Icons/Social/Github";
import ExternalLink from "./Icons/ExternalLink";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card} data-aos="fade-up">
      <a
        href={props.githubLink ? props.githubLink : props.previewLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardHeader}
      >
        <Image
          src={props.img}
          alt={props.title}
          placeholder="blur"
          width={1080}
          height={608}
          layout="responsive"
        />
        <h3>{props.title}</h3>
      </a>
      <p className={styles.cardMain}>{props.children}</p>
      <div className={styles.cardFooter}>
        <span>{props.keywords}</span>
        <div className={styles.links}>
          {props.githubLink && (
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          )}
          {props.previewLink && (
            <a
              href={props.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
