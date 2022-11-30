import React from "react";
import Layout from "../../components/Layout";
import { supabase } from "../../utils/supabase";
import ResourceCard from "../../components/ResourceCard";
import Header from "../../components/Header";
import HeadInfo from "../../components/HeadInfo";

export const getStaticProps = async () => {
  const { data: resources } = await supabase.from("resources").select("*");

  return {
    props: {
      resources,
    },
  };
};

let title = "Capcom";
let subheader = "Yun has trouble getting in";
let imgSrc = "bg-capcom";

export default function Home({ resources }) {
  return (
    <Layout>
      <HeadInfo title={title} />
      <Header title={title} imgSrc={imgSrc} subheader={subheader} />
      <div className="py-20">
        <div className="flex flex-wrap gap-12 w-11/12 mx-auto justify-center">
          {resources.map((resource) => (
            <>
              {resource.category.includes("Capcom") ? (
                <ResourceCard
                  title={resource.title}
                  type={resource.type}
                  link={resource.link}
                  description={resource.description}
                />
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
}
