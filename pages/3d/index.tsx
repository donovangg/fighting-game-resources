import React from "react";
import Layout from "../../components/Layout";
import { supabase } from "../../utils/supabase";
import ResourceCard from "../../components/ResourceCard";

export const getStaticProps = async () => {
  const { data: resources } = await supabase.from("resources").select("*");

  return {
    props: {
      resources,
    },
  };
};

export default function threeD({ resources }) {
  return (
    <Layout>
      {resources.map((resource) => (
        <div>
          {resource.category.includes("airdashers") ? (
             <ResourceCard title={resource.title} />
          ) : (
            ""
          )}
        </div>
      ))}
    </Layout>
  );
}
