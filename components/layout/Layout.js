import Navbar from "./Navbar";
import NameArea from "../Content/NameArea";
import Footer from "./Footer";
import Toolkit from "../Content/Toolkit";
import Social from "../Content/Social";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <NameArea />
      <Toolkit />
      <main className={styles.main}>{children}</main>
      <Social />
      <Footer />
    </div>
  );
}

export default Layout;
