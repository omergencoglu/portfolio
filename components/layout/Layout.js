import { Fragment } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "./Layout.module.css";

function Layout({ children }) {
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
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
