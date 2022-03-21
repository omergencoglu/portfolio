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
          img="/yelpcamp.png"
          keywords="Node.js Express MongoDB"
          title="YelpCamp"
          previewLink="https://omersyelpcamp.herokuapp.com/"
          githubLink="https://github.com/omergencoglu/yelpcamp"
        >
          Fully functional NodeJs web app - Allows users to view, post, comment
          on campgrounds worldwide.
        </Card>
        <Card
          img="/google-dark.png"
          keywords="HTML CSS"
          title="Google Homepage"
          previewLink="https://omergencoglu.github.io/Google-Homepage-Clone-Darkmode/"
          githubLink="https://github.com/omergencoglu/Google-Homepage-Clone-Darkmode"
        >
          Google homepage dark mode clone - to practice HTML/CSS.
        </Card>
        <Card
          img="/food-order.png"
          keywords="React Firebase"
          title="Food Ordering App"
          githubLink="https://github.com/omergencoglu/food-order-app-react"
        >
          You can add items to your cart and cart will update automatically.
        </Card>
        <Card
          img="/user-management.png"
          keywords="Node.js Express MongoDB"
          title="User Management"
          githubLink="https://github.com/omergencoglu/user-management-system-crud"
        >
          CRUD application with Express and MongoDB.
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
