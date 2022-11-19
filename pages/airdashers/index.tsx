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

let title = "Airdashers";
let subheader = "Dank";
let imgSrc = "bg-bread";

export default function home({ resources }) {
  return (
    <Layout>
      <Header title={title} imgSrc={imgSrc} subheader={subheader} />
      <div className="flex flex-wrap gap-6 py-40 justify-center">
        {resources.map((resource) => (
          <>
            {resource.category.includes("Airdashers") ? (
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
