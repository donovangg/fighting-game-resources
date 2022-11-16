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

export default function home({ resources }) {
  return (
    <Layout>
      Akiha
      <div className="flex flex-wrap gap-6 justify-center">
      {resources.map((resource) => (
        <>
          {resource.category.includes("french bread") ? (
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
