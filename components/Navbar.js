import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="border-b-2 font-sans border-gray-400 w-full py-4">
      <ul className="w-full mx-auto grid grid-cols-4 lg:w-3/5">
        <ul className="hidden  md:flex md:gap-6 md:justify-center md:items-center">
          <li className="justify-center md:flex">
            <Link href="/">
              <Image
                src="/assets/ryu.png"
                alt="Picture of the author"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </li>
        </ul>
        <ul className="flex w-screen justify-center md:flex md:col-span-3 md:justify-center md:w-full gap-6 ">
          <li>
            <Dropdown />
          </li>
          <li className="flex justify-center items-center">
            <Link href="/submit">Submit</Link>
          </li>
          {status === "authenticated" ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            ""
          )}
        </ul>
      </ul>
    </nav>
  );
}
