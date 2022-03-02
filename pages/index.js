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
      <div>Hello World</div>
    </Fragment>
  );
}

export default Home;
