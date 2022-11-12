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


export default function home() {
  return (
    <Layout>
      <div>kokonoooe</div>
      {resources.map((resource) => (
        <div>
          {resource.category.includes("airdashers") ? <h2>{resource.title}</h2> : ""}
        </div>
      ))}
    </Layout>
  );
}
