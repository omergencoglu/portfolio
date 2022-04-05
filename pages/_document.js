import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        <meta name="application-name" content="Omer Gencoglu" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Omer Gencoglu" />
        <meta
          name="description"
          content="You can find more information about me, my projects and more..."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fbfbfd"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Code+Pro&display=optional"
        />

        <meta
          name="twitter:card"
          content="You can find more information about me, my projects and more..."
        />
        <meta name="twitter:url" content="https://omergencoglu.dev/" />
        <meta name="twitter:title" content="Omer Gencoglu" />
        <meta
          name="twitter:description"
          content="You can find more information about me, my projects and more..."
        />
        <meta
          name="twitter:image"
          content="https://omergencoglu.dev/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@omergencogludev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omer Gencoglu" />
        <meta
          property="og:description"
          content="You can find more information about me, my projects and more..."
        />
        <meta property="og:site_name" content="Omer Gencoglu" />
        <meta property="og:url" content="https://omergencoglu.dev/" />
        <meta
          property="og:image"
          content="https://omergencoglu.dev/icons/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
