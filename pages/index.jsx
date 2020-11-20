import Head from "next/head";
import Landing from "../src/components/pages/landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | PHARMAFIND</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Landing />
    </div>
  );
}
