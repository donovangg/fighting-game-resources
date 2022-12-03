import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-gray-400 w-full py-4">
      <ul className="w-full mx-auto grid grid-cols-4 lg:w-3/5">
        <ul className="flex gap-6 justify-center items-center">
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
        </ul>
        <ul className="flex col-span-3 justify-center gap-6">
          <li>
            <Dropdown />
          </li>
          <li className="flex justify-center items-center">
            <Link href="/submit">Submit</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
