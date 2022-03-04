import Head from "next/head";
import { Fragment } from "react";

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
      <div>Projects</div>
      <div>Contact</div>
    </Fragment>
  );
}

export default Home;
