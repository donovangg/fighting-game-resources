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
      <div className="flex flex-wrap gap-6 justify-center">
        {resources.map((resource) => (
          <>
            {resource.category.includes("airdashers") ? (
              <ResourceCard
                title={resource.title}
                type={resource.type}
                link={resource.link}
              />
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </Layout>
  );
}
