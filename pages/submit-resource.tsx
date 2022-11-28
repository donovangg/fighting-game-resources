import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Header from "../components/Header";
import LoginButton from "../components/loginButton";
import { useSession, signIn, signOut } from "next-auth/react";

export default function submitResource() {
  const { data: session } = useSession();
  console.log(session);

  let title = "Show me something cool";
  let subheader = "pls no sus links";
  let imgSrc = "bg-fundamentals";
  return (
    <Layout>
      <Header title={title} imgSrc={imgSrc} subheader={subheader} />
      <LoginButton />

      {session ? (
        <div>
          <h3>Thanks for logging in {session.user.email} ughara !</h3>
          <button onClick={() => signOut()}>Sign Out</button>
          <Form />
        </div>
      ) : (
        <section>
          <div className="flex flex-col mx-auto align-center w-2/3  border-2">
            <h3 className="text-5xl my-6">Please authenticate</h3>
            <p className="text-2xl my-6">
              Authenticate with a third party provider to submit a resource.
              Resources will be reviewed.
            </p>
            <button onClick={() => signIn()}>
              <a
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Sign In
                </span>
              </a>
            </button>
          </div>
        </section>
      )}
    </Layout>
  );
}
