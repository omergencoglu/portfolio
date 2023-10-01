import Card from "../UI/Card";

import portfolioImg from "../../public/images/portfolio.png";
import weatherAppImg from "../../public/images/weather-app.png";
import quotesImg from "../../public/images/quotes.png";
import googleDarkImg from "../../public/images/google-dark.png";
import foodOrderImg from "../../public/images/food-order.png";
import userManagementImg from "../../public/images/user-management.png";
import groceryListImg from "../../public/images/grocery-list.png";
import expenseTrackerImg from "../../public/images/expense-tracker.png";
import meetupsImg from "../../public/images/meetups.png";
import profitCalculatorImg from "../../public/images/profit-calculator.png";
import todosImg from "../../public/images/todos.png";
import tspautoImg from "../../public/images/tsp-auto.png";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 id="projects">PROJECTS</h2>
      <div className={styles.cardsWrapper}>
        <Card
          img={tspautoImg}
          keywords="React Next.js Tailwind CSS"
          title="TSP Auto"
          previewLink="https://tspauto.ca/"
        >
          This is a landing page built with React. Includes sections having
          different features. React, Next.js, Tailwind CSS were used.
        </Card>
        <Card
          img={todosImg}
          keywords="React Sass"
          title="Todos"
          previewLink="https://ozzydm.github.io/todos-react"
          githubLink="https://github.com/omergencoglu/todos-react"
        >
          This is a Todos app built with React. You can add, remove or edit
          items as you like. React and Sass were used.
        </Card>
        <Card
          img={profitCalculatorImg}
          keywords="React Next.js Tailwind CSS"
          title="Profit Calculator"
          previewLink="https://profit-calculator.vercel.app"
          githubLink="https://github.com/omergencoglu/profit-calculator"
        >
          This is a profit calculator app. You can easily calculate the profit
          of any product. React, Next.js and Tailwind CSS were used.
        </Card>
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
          previewLink="https://weatherlify.onrender.com/"
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
          ones. Quotes can be viewed individually. React and Firebase were used.
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
          will update itself automatically. React and Firebase were used.
        </Card>
        <Card
          img={userManagementImg}
          keywords="Node.js Express MongoDB"
          title="User Management"
          githubLink="https://github.com/omergencoglu/user-management-system-crud"
        >
          An app which has create, read, update and delete (CRUD) functionality.
          Express and MongoDB were used.
        </Card>
        <Card
          img={groceryListImg}
          keywords="React"
          title="Grocery List App"
          githubLink="https://github.com/omergencoglu/grocery-list-react"
        >
          A Grocery List app where you can add and delete grocery items to the
          grocery list. React was used for this project.
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
