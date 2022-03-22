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
          You can add new quotes and comments to the quotes. View the quotes
          individually.
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
          img="/portfolio.png"
          keywords="React Next.js"
          title="Portfolio Project"
          previewLink="https://omergencoglu.dev"
          githubLink="https://github.com/omergencoglu/portfolio"
        >
          This is my portfolio website. You can find more information about me,
          my projects and more...
        </Card>
        <Card
          img="/weather-app.png"
          keywords="Express Node.js"
          title="Weatherlify"
          previewLink="https://weatherlify.herokuapp.com/"
          githubLink="https://github.com/omergencoglu/weather-app"
        >
          Get realtime weather information of searched locations with changing
          background gradients.
        </Card>
        <Card
          img="/grocery-list.png"
          keywords="React"
          title="Grocery List App"
          githubLink="https://github.com/omergencoglu/grocery-list-react"
        >
          Add, delete grocery items to the list.
        </Card>
        <Card
          img="/expense-tracker.png"
          keywords="React"
          title="Expense Tracker"
          githubLink="https://github.com/omergencoglu/expense-tracker"
        >
          Log your expenses with expense tracker. You can see your monthly
          expenses on graphs.
        </Card>
        <Card
          img="/meetups.png"
          keywords="React Next.js MongoDB"
          title="Meetups App"
          previewLink="https://nextjs-meetups-app-seven.vercel.app/"
          githubLink="https://github.com/omergencoglu/nextjs-meetups-app"
        >
          You can add meetups and show the details on a meetup&apos;s individual
          detail page.
        </Card>
      </div>
    </section>
  );
}
export default Projects;
