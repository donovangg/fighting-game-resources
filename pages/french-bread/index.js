import React from "react";
import Layout from "../../components/Layout";
import { supabase } from "../../utils/supabase";
import ResourceCard from "../../components/ResourceCard";
import Header from "../../components/Header";
import HeadInfo from "../../components/HeadInfo";
import Head from "next/head";

export const getStaticProps = async () => {
  const { data: resources } = await supabase.from("resources").select("*");

  return {
    props: {
      resources,
    },
  };
};

let title = "French Bread";
let subheader = "Alone on Friday night?";
let imgSrc = "bg-bread";

export default function home({ resources }) {
  return (
    <Layout>
      <HeadInfo title={title} />
      <Header title={title} imgSrc={imgSrc} subheader={subheader} />
      <div className="py-20">
        <div className="flex flex-wrap gap-12 w-11/12 mx-auto justify-center">
          {resources.map((resource) => (
            <>
              {resource.category.includes("French Bread") ? (
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
