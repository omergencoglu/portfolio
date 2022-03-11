import Card from "../UI/Card";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 id="projects">PROJECTS</h2>
      <div className={styles.cardsWrapper}>
        <Card img="/logo.png" keywords="React Next.js">
          Card1
        </Card>
        <Card img="/placeholder.jpg" keywords="React Next.js">
          Card1
        </Card>
        <Card img="/placeholder.jpg" keywords="React Next.js">
          Card1
        </Card>
        <Card img="/placeholder.jpg" keywords="React Next.js">
          Card1
        </Card>
        <Card img="/placeholder.jpg" keywords="React Next.js">
          Card1
        </Card>
        <Card img="/placeholder.jpg" keywords="React Next.js">
          Card1
        </Card>
      </div>
    </section>
  );
}
export default Projects;
