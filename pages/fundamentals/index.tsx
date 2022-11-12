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

export default function home({ resources }) {
  return (
    <Layout>
      <h1>FOOSIES</h1>
      {resources.map((resource) => (
        <div>
          {resource.category.includes("fundamentals") ? (
            <h2>{resource.title}</h2>
          ) : (
            ""
          )}
        </div>
      ))}
    </Layout>
  );
}
