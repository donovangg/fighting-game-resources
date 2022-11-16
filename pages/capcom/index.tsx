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

export default function Home({ resources }) {
  return (
    <Layout>
      Capcom page
      <h2>Is Marvel anime</h2>
      <div className="flex flex-wrap gap-6 justify-center">
      {resources.map((resource) => (
        <>
          {resource.category.includes("capcom") ? (
            <ResourceCard title={resource.title} />
          ) : (
            ""
          )}
        </>
      ))}
      </div>
    </Layout>
  );
}
