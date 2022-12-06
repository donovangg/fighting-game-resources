import React from "react";
import Layout from "../components/Layout";

export default function loggedOut() {
  return (
    <Layout>
        <h2 className="text-center py-12 text-4xl">Successfully signed out!</h2>
      <div>
        <video className="mx-auto" width="800" autoPlay loop muted playsinline>
          <source src="assets/thumbs.mp4" type="video/mp4" />
        </video>
      </div>
    </Layout>
  );
}
