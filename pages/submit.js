import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Submit() {
  const { data: session, status } = useSession({ required: true });

  let title = "Got something cool?";
  let subheader = "Pls no degen, thats for the TL";
  let imgSrc = "bg-submit";

  if (status === "authenticated") {
    return (
      <Layout>
        <Header title={title} subheader={subheader} imgSrc={imgSrc} />
        <div className=" max-w-xl py-6 mx-auto">
          <h2 className="text-2xl">
            Hey thanks for logging in {session.user.email}!
          </h2>
          <p className="text-xl my-4">All submissions will be reviewed.</p>
        </div>
        <div className="pb-20">
          <Form />
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <section>
        <div className="w-5/6  mx-auto">
          <h2 className="text-5xl my-4">
            Hey it doesn&apos;t look like you&apos;re signed in!
          </h2>
          <h3 className="text-3xl my-4">
            I locked submitting behind Google auth to dissuade people from
            spamming the form
          </h3>

          <p className="text-3xl my-4">I hope you don&apos;t mind 💖</p>
        </div>
      </section>
      <div className="w-5/6  mx-auto">
        <p className="text-3xl mx-auto">Not signed in </p>
        <br />
        <button
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </Layout>
  );
}
