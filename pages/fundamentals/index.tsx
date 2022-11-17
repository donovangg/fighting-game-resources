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
      <h1>FOOSIES</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {resources.map((resource) => (
          <div>
            {resource.category.includes("fundamentals") ? (
              <ResourceCard
                title={resource.title}
                type={resource.type}
                link={resource.link}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
