import Head from "next/head";
import { Fragment } from "react";

import Contact from "../components/Content/Contact";
import Projects from "../components/Content/Projects";

function Home() {
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

export default Home;
