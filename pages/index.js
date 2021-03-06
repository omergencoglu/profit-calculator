import { Fragment } from "react";
import Head from "next/head";

import Card from "../components/Content/Card";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Profit Calculator</title>
        <meta name="description" content="Calculate profit of your products." />
      </Head>
      <main className="grow flex items-center justify-center flex-col select-none whitespace-nowrap animate-init">
        <span className="text-2xl m-4 text">Amazon Profit Calculator</span>
        <Card />
      </main>
    </Fragment>
  );
}
