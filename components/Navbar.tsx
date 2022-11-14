import React from "react";
import Link from "next/link";
import { FaGithub  } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="border-b-2 py-4">
      <ul className=" grid grid-cols-2">
        <li className="text-center">
          <Link href="/">
            Logo
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="https://playvalorant.com/en-us/" target="_blank">
            <FaGithub />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
