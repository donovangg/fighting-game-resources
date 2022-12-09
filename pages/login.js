import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
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
