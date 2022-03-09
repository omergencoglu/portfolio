import Card from "../UI/Card";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projects}>
      <h2 id="projects">PROJECTS</h2>
      <div className={styles.cards_wrapper}>
        <Card img="/placeholder.jpg">Hiiii</Card>
      </div>
    </div>
  );
}

export default Projects;
