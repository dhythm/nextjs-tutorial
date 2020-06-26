import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Ssr() {
  return (
    <Layout>
      <Head>
        <title>Server-side Rendering</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Server-side Rendering</h1>
      </article>
    </Layout>
  );
}

// Fetch data on each request
export async function getServerSideProps(context) {
  console.log({ context });
  return {
    props: {}, // will be passed to the page component as props
  };
}
