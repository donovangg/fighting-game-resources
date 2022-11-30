import React from "react";
import Head from "next/head";

export default function HeadInfo({ title }) {
  return (
    <Head>
      <title>FGC Resources | {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
