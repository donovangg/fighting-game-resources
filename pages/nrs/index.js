import React from "react";
import Layout from "../../components/Layout";
import HeadInfo from "../../components/HeadInfo";

export default function home() {
  let title = "Ice clone doesnt work"
  return (
    <Layout>
      <HeadInfo title={title} />
      <div className="w-full flex flex-col justify-center align-center items-center">
        <p>Resources coming soon</p>
        <h2>Im Comin!!</h2>
        <img src="https://i.ytimg.com/vi/Cyo8cKGUayw/sddefault.jpg" />
      </div>
    </Layout>
  );
}
