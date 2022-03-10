import { Fragment } from "react";

import NameArea from "../components/Content/NameArea";
import Toolkit from "../components/Content/Toolkit";
import Social from "../components/Content/Social";
import Contact from "../components/Content/Contact";
import Projects from "../components/Content/Projects";

function Home(props) {
  return (
    <Fragment>
      <NameArea />
      <Toolkit />
      <Projects />
      <Contact />
      <Social />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API

  const response = await fetch(
    "https://api.github.com/users/omergencoglu/repos"
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Failed to fetch posts, received status ${response.status}`
    );
  }

  return {
    props: {
      projects: data.map((data) => ({
        title: data.name,
        description: data.description,
        githubLink: data.html_url,
        homepage: data.homepage,
        id: data.id.toString(),
      })),
    },
    revalidate: 60,
  };
}

export default Home;
