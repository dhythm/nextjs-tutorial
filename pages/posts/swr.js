import Head from "next/head";
import useSWR from "swr";
import Layout from "../../components/layout";
import fetcher from "../../lib/fetch";
import utilStyles from "../../styles/utils.module.css";

export default function Swr() {
  return (
    <Layout>
      <Head>
        <title>Stale While Revalidate</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Stale While Revalidate</h1>
        <Hello />
      </article>
    </Layout>
  );
}

function Hello() {
  const { data, error } = useSWR("/api/hello", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>{data.text}!</div>;
}
