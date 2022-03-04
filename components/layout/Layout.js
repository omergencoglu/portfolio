import Navbar from "./Navbar";
import Footer from "./Footer";

import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <div className={classes.name_area}>Name area</div>
      <div className={classes.tools_side}>Toolkit</div>
      <main className={classes.main}>{children}</main>
      <div className={classes.social_side}>Social</div>
      <Footer />
    </div>
  );
}

export default Layout;
