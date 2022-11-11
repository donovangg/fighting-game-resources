import React from "react";
import Link from "next/link";

export default function Card({ title, imgSrc, subheader, description, path }) {
  return (
    <div className="w-80 flex flex-col bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex-1">
        <Link href={path}>
          <img
            className="rounded-t-lg border-2 border-red-400 h-40 w-full"
            src={imgSrc}
            alt=""
          />
        </Link>
      </div>
      <div className="p-5 flex-1">
        <Link href={path}>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
        </Link>
        <h3 className="mb-3 font-normal text-gray-700">{subheader}</h3>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link
          href={path}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
