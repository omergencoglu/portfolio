import Card from "../UI/Card";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 id="projects">PROJECTS</h2>
      <div className={styles.cardsWrapper}>
        <Card
          img="/weather-app.png"
          keywords="React Next.js"
          title="Test Project"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          eligendi porro officia dignissimos natus?
        </Card>
        <Card
          img="/weather-app.png"
          keywords="React Next.js"
          title="Test Project"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          eligendi porro officia dignissimos natus?
        </Card>
        <Card
          img="/weather-app.png"
          keywords="React Next.js"
          title="Test Project"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          eligendi porro officia dignissimos natus?
        </Card>
        <Card
          img="/weather-app.png"
          keywords="React Next.js"
          title="Test Project"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          eligendi porro officia dignissimos natus?
        </Card>
        <Card
          img="/weather-app.png"
          keywords="React Next.js"
          title="Test Project"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          eligendi porro officia dignissimos natus?
        </Card>
        <Card
          img="/weather-app.png"
          keywords="React Next.js"
          title="Test Project"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          eligendi porro officia dignissimos natus?
        </Card>
      </div>
    </section>
  );
}
export default Projects;
