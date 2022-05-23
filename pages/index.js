import { Fragment } from "react";
import Head from "next/head";

import Card from "../components/UI/Card";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Profit Calcultor</title>
        <meta name="description" content="Calculate profit of your products." />
      </Head>
      <main className="grow flex items-center">
        <Card />
      </main>
    </Fragment>
  );
}
