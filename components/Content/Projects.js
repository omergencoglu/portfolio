import Card from "../UI/Card";

import portfolioImg from "../../public/images/portfolio.png";
import weatherAppImg from "../../public/images/weather-app.png";
import quotesImg from "../../public/images/quotes.png";
import yelpCampImg from "../../public/images/yelpcamp.png";
import googleDarkImg from "../../public/images/google-dark.png";
import foodOrderImg from "../../public/images/food-order.png";
import userManagementImg from "../../public/images/user-management.png";
import groceryListImg from "../../public/images/grocery-list.png";
import expenseTrackerImg from "../../public/images/expense-tracker.png";
import meetupsImg from "../../public/images/meetups.png";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 id="projects">PROJECTS</h2>
      <div className={styles.cardsWrapper}>
        <Card
          img={portfolioImg}
          keywords="React Next.js"
          title="Portfolio Project"
          previewLink="https://omergencoglu.dev"
          githubLink="https://github.com/omergencoglu/portfolio"
        >
          This is my portfolio website. You can find more information about me,
          my projects and more. React and Next.js were used.
        </Card>
        <Card
          img={weatherAppImg}
          keywords="Express Node.js"
          title="Weatherlify"
          previewLink="https://weatherlify.herokuapp.com/"
          githubLink="https://github.com/omergencoglu/weather-app"
        >
          An app in which you can get real-time weather information of searched
          locations with changing background gradients. Built with Express.
        </Card>
        <Card
          img={quotesImg}
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
          img={yelpCampImg}
          keywords="Node.js Express MongoDB"
          title="YelpCamp"
          previewLink="https://omersyelpcamp.herokuapp.com/"
          githubLink="https://github.com/omergencoglu/yelpcamp"
        >
          Fully functional NodeJs web app - Allows users to view, post, comment
          on campgrounds worldwide. I used Express and MongoDB for this project.
        </Card>
        <Card
          img={googleDarkImg}
          keywords="HTML CSS"
          title="Google Homepage"
          previewLink="https://omergencoglu.github.io/Google-Homepage-Clone-Darkmode/"
          githubLink="https://github.com/omergencoglu/Google-Homepage-Clone-Darkmode"
        >
          Google homepage dark mode clone - to practice HTML/CSS.
        </Card>
        <Card
          img={foodOrderImg}
          keywords="React Firebase"
          title="Food Ordering App"
          githubLink="https://github.com/omergencoglu/food-order-app-react"
        >
          A Food Ordering App where you can add items to your cart. The cart
          will update itself automatically. I used React and Firebase for this
          project.
        </Card>
        <Card
          img={userManagementImg}
          keywords="Node.js Express MongoDB"
          title="User Management"
          githubLink="https://github.com/omergencoglu/user-management-system-crud"
        >
          An app which has create, read, update and delete (CRUD) functionality.
          I used Express and MongoDB for this project.
        </Card>
        <Card
          img={groceryListImg}
          keywords="React"
          title="Grocery List App"
          githubLink="https://github.com/omergencoglu/grocery-list-react"
        >
          A Grocery List app where you can add and delete grocery items to the
          grocery list. I used React for this project.
        </Card>
        <Card
          img={expenseTrackerImg}
          keywords="React"
          title="Expense Tracker"
          githubLink="https://github.com/omergencoglu/expense-tracker"
        >
          An Expense Tracker app in which you can log your expenses. You can see
          and filter your expenses by year. React was used for this project.
        </Card>
        <Card
          img={meetupsImg}
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
