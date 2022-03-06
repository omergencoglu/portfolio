import Head from "next/head";
import { Fragment } from "react";

import Contact from "../components/Content/Contact";
import Projects from "../components/Content/Projects";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Omer Gencoglu Portfolio</title>
        <meta
          name="description"
          content="You can find more information about me, my projects and more..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
      <Contact />
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
