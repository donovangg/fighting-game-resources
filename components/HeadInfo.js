import React from "react";
import Head from "next/head";

export default function HeadInfo({ title }) {
  return (
    <Head>
      <title>FGC Resources | {title}</title>
      <meta  name="description" content={`Resource hub of Fighting game resources for ${title}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
          property="og:image"
          content="/assets/footsies.gif"
        />
    </Head>
  );
}
