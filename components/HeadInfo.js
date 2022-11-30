import React from "react";
import Head from "next/head";

export default function HeadInfo({ title }) {
  return (
    <Head>
      <title>FGC Resources | {title}</title>
      <meta
        name="description"
        content={`Resource hub of Fighting game resources for ${title}`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* facebook tags */}
      <meta
        property="og:url"
        content="https://fighting-game-resources-s5l6.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FGC Resources" />
      <meta property="og:description" content="undefined" />
      <meta
        property="og:image"
        content="https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/assets/yun.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMveXVuLmpwZWciLCJpYXQiOjE2Njk4MDMxNTYsImV4cCI6MTk4NTE2MzE1Nn0.ctNVZ7ye4RgieMeFiLGekZGr9r4daElUPwyv_fI4ZJA"
      />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="fighting-game-resources-s5l6.vercel.app"
      />
      <meta
        property="twitter:url"
        content="https://fighting-game-resources-s5l6.vercel.app/"
      />
      <meta name="twitter:title" content="FGC Resources" />
      <meta name="twitter:description" content="undefined" />
      <meta
        name="twitter:image"
        content="https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/assets/yun.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMveXVuLmpwZWciLCJpYXQiOjE2Njk4MDMxNTYsImV4cCI6MTk4NTE2MzE1Nn0.ctNVZ7ye4RgieMeFiLGekZGr9r4daElUPwyv_fI4ZJA"
      />
    </Head>
  );
}
