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
        <Header title={title} subheader={subheader} imgSrc={imgSrc}/>
        <div className="border-2 max-w-xl py-6 mx-auto">
          <h2 className="text-2xl">Hey thanks for logging in {session.user.email}!</h2>
          <p className="text-xl my-4">All submissions will be reviewed.</p>
        </div>
        <button onClick={() => signOut()}>Sign out</button>
        <Form />
      </Layout>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
