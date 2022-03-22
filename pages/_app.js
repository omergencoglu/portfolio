import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import AOS from "aos";

import Layout from "../components/Layout/Layout";

import "../styles/globals.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
