import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b-2 py-4">
      <ul className=" grid grid-cols-2">
        <li className="text-center">
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
