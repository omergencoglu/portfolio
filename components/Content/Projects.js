import Card from "../UI/Card";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 id="projects">PROJECTS</h2>
      <div className={styles.cards_wrapper}>
        <Card img="/placeholder.jpg">Card1</Card>
        <Card img="/placeholder.jpg">Card12</Card>
        <Card img="/placeholder.jpg">Card13</Card>
        <Card img="/placeholder.jpg">Card14</Card>
        <Card img="/placeholder.jpg">Card15</Card>
        <Card img="/placeholder.jpg">Card16</Card>
      </div>
    </section>
  );
}
export default Projects;
