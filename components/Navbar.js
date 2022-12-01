import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-gray-400 w-screen py-4">
      <ul className=" grid grid-cols-2">
        <li className="flex justify-center">
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
        <ul className="flex justify-center gap-6">
          <li className="flex justify-center items-center">
            <Link href="https://playvalorant.com/en-us/" target="_blank">
              <FaGithub className="text-3xl" />
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link href="/submit">
              Submit
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
