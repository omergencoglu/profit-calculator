import { Fragment } from "react";
import Head from "next/head";

import Card from "../components/Content/Card";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Profit Calcultor</title>
        <meta name="description" content="Calculate profit of your products." />
      </Head>
      <main className="grow flex items-center justify-center flex-col">
        <div>Amazon FBM Profit Calculator</div>
        <Card />
      </main>
    </Fragment>
  );
}
