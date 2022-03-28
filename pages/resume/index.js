import { Fragment } from "react";
import Head from "next/head";

import Resume from "../../components/Content/Resume";

function ResumePage() {
  return (
    <Fragment>
      <Head>
        <title>Resume</title>
        <meta
          name="description"
          content="View and download my personal resume."
        />
      </Head>
      <main>
        <Resume />
      </main>
    </Fragment>
  );
}

export default ResumePage;
