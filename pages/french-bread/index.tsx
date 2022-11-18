import React from "react";
import Layout from "../../components/Layout";
import { supabase } from "../../utils/supabase";
import ResourceCard from "../../components/ResourceCard";
import Header from "../../components/Header";

export const getStaticProps = async () => {
  const { data: resources } = await supabase.from("resources").select("*");

  return {
    props: {
      resources,
    },
  };
};

let title = "French Bread";
let subheader = "Dank";

export default function home({ resources }) {
  return (
    <Layout>
      <Header title={title} subheader={subheader} />
      <div className="flex flex-wrap gap-6 justify-center">
        {resources.map((resource) => (
          <>
            {resource.category.includes("French Bread") ? (
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
