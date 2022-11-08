import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-2 border-cyan-400">
      <ul className=" grid grid-cols-2">
        <li className="border-2 border-red-300 text-center">
          <Link href="/">
            Logo
          </Link>
        </li>
        <li className="text-center">
          <Link href="https://playvalorant.com/en-us/" target="_blank">
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}
