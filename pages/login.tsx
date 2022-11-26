import React from "react";
import Layout from "../components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function login() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <Layout>
      <h1>Have something cool to show? Login First!</h1>
      <p>
        The internet is crazy, I need some sort of filter so people don't send 🗑
      </p>

      {session ? (
        <h2>sup {session.user.email} ughara</h2>
      ) : (
        <>
          <p>please sign in dawg</p>
          <button onClick={() => signIn()}>Sign in</button>{" "}
        </>
      )}
    </Layout>
  );
}
