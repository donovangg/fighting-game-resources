import React from "react";
import Layout from "../../components/Layout";

export default function home() {
  return (
    <Layout>
      <h2>I'm Comin!!</h2>
      <iframe
        className="mx-auto"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Cyo8cKGUayw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Layout>
  );
}
