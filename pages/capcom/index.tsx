import React from "react";
import Layout from "../../components/Layout";
import { supabase } from "../../utils/supabase";

export const getStaticProps = async () => {
  const { data: resources } = await supabase.from("resources").select("*");

  return {
    props: {
      resources,
    },
  };
};

export default function Home({ resources }) {
  return (
    <Layout>
      Capcom page
      <h2>Is Marvel anime</h2>
      {resources.map((resource) => (
        <div>
          {resource.category.includes("capcom") ? <h2>{resource.title}</h2> : ""}
        </div>
      ))}
    </Layout>
  );
}
