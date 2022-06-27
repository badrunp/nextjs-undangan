import Head from "next/head";

export default function Layout({
  title = "Sites Invitation Wedding",
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Smooch&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {children}
    </>
  );
}
