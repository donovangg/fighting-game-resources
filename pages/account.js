import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Form from '../components/Form'

export default function account() {
  const { data: session, status } = useSession({ required: true });

  if (status === 'authenticated') {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Form />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
