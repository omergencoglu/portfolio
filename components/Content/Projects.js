import Card from "../UI/Card";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 id="projects">PROJECTS</h2>
      <div className={styles.cardsWrapper}>
        <Card
          img="/quotes.png"
          keywords="React Firebase"
          title="Quotes"
          previewLink="https://quotes-113c7.web.app/quotes"
          githubLink="https://github.com/omergencoglu/quotes-react-router"
        >
          A Quotes app that you can add new quotes and comment to the existing
          ones. Quotes can be viewed invidually. I used React and Firebase for
          this project.
        </Card>
        <Card
          img="/yelpcamp.png"
          keywords="Node.js Express MongoDB"
          title="YelpCamp"
          previewLink="https://omersyelpcamp.herokuapp.com/"
          githubLink="https://github.com/omergencoglu/yelpcamp"
        >
          Fully functional NodeJs web app - Allows users to view, post, comment
          on campgrounds worldwide. I used Express and MongoDB for this project.
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
          A Food Ordering App where you can add items to your cart. The cart
          will update itself automatically. I used React and Firebase for this
          project.
        </Card>
        <Card
          img="/user-management.png"
          keywords="Node.js Express MongoDB"
          title="User Management"
          githubLink="https://github.com/omergencoglu/user-management-system-crud"
        >
          An app which has create, read, update and delete (CRUD) functionality.
          I used Express and MongoDB for this project.
        </Card>
        <Card
          img="/portfolio.png"
          keywords="React Next.js"
          title="Portfolio Project"
          previewLink="https://omergencoglu.dev"
          githubLink="https://github.com/omergencoglu/portfolio"
        >
          This is my portfolio website. You can find more information about me,
          my projects and more. React and Next.js were used.
        </Card>
        <Card
          img="/weather-app.png"
          keywords="Express Node.js"
          title="Weatherlify"
          previewLink="https://weatherlify.herokuapp.com/"
          githubLink="https://github.com/omergencoglu/weather-app"
        >
          An app in which you can get realtime weather information of searched
          locations with changing background gradients. Built with Express.
        </Card>
        <Card
          img="/grocery-list.png"
          keywords="React"
          title="Grocery List App"
          githubLink="https://github.com/omergencoglu/grocery-list-react"
        >
          A Grocery List app where you can add and delete grocery items to the
          grocery list. I used React for this project.
        </Card>
        <Card
          img="/expense-tracker.png"
          keywords="React"
          title="Expense Tracker"
          githubLink="https://github.com/omergencoglu/expense-tracker"
        >
          An Expense Tracker app in which you can log your expenses. You can see
          and filter your expenses by year. React was used for this project
        </Card>
        <Card
          img="/meetups.png"
          keywords="React Next.js MongoDB"
          title="Meetups App"
          previewLink="https://nextjs-meetups-app-seven.vercel.app/"
          githubLink="https://github.com/omergencoglu/nextjs-meetups-app"
        >
          A Meetups app where you can add meetups. You can see the details of
          meetups on their individual pages. Next.js and MongoDB were used.
        </Card>
      </div>
    </section>
  );
}
export default Projects;
