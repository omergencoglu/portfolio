import { Fragment } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.main}>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
