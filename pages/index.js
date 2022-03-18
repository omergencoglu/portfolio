import { Fragment } from "react";

import NameArea from "../components/Content/NameArea";
import Toolkit from "../components/Content/Toolkit";
import Social from "../components/Content/Social";
import Contact from "../components/Content/Contact";
import Projects from "../components/Content/Projects";

function Home() {
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

export default Home;
