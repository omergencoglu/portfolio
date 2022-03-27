import { Fragment } from "react";
import Head from "next/head";

import NameArea from "../components/Content/NameArea";
import Toolkit from "../components/Content/Toolkit";
import Social from "../components/Content/Social";
import Contact from "../components/Content/Contact";
import Projects from "../components/Content/Projects";

import styles from "./index.module.css";

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Omer Gencoglu</title>
        <meta
          name="description"
          content="You can find more information about me, my projects and more..."
        />
      </Head>
      <main className={styles.main}>
        <NameArea />
        <Toolkit />
        <Projects />
        <Contact />
        <Social />
      </main>
    </Fragment>
  );
}

export default Home;
